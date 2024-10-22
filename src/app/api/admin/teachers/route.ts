import { db, sql } from "@/lib/kysely";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  // pagination params
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "10", 10);
  const offset = (page - 1) * limit;

  // filtering params
  const name = searchParams.get("name") || "";

  // sorting params
  const sortBy = searchParams.get("sortBy") || "name";
  const order = (searchParams.get("order") || "asc").toLowerCase();

  try {
    // Base query for teachers with subjects
    const baseQuery = db
      .selectFrom("teachers as t")
      .leftJoin("teacher_subjects as ts", (join) =>
        join.onRef("t.id", "=", "ts.teacher_id")
      )
      .leftJoin("subjects as s", (join) =>
        join.onRef("ts.subject_id", "=", "s.id")
      )
      .where(sql`LOWER(t.name)`, "like", `%${name.toLowerCase()}%`); // filtering by name

    const teachers = await baseQuery
      .select([
        "t.id",
        "t.name",
        "t.email",
        sql<string[]>`
          ARRAY_AGG(
            CASE 
              WHEN s.id IS NOT NULL 
              THEN json_build_object('id', s.id, 'name', s.name)
              ELSE NULL 
            END
          ) FILTER (WHERE s.id IS NOT NULL)
        `.as("subjects"),
      ])
      .groupBy(["t.id", "t.name", "t.email"])
      .orderBy(sortBy === "name" ? "t.name" : "t.id", order as "asc" | "desc")
      .limit(limit)
      .offset(offset)
      .execute();

    // Get total count
    const totalCountResult = await baseQuery
      .select((eb) => [
        eb.fn.count("t.id").as("count"),
        // OR use sql template:
        // sql<string>`count(t.id)`.as('count')
      ])
      .executeTakeFirst();

    const totalCount = totalCountResult?.count
      ? Number(totalCountResult.count)
      : 0;

    const totalPages = Math.ceil(totalCount / limit);

    // Transform the results to clean up null subjects
    const transformedTeachers = teachers.map((teacher) => ({
      ...teacher,
      subjects: teacher.subjects || [],
    }));

    return NextResponse.json({
      teachers: transformedTeachers,
      pagination: {
        currentPage: page,
        totalPages,
        totalItems: totalCount,
        itemsPerPage: limit,
      },
    });
  } catch (error) {
    console.error("Error fetching teachers:", error);
    return NextResponse.json(
      { error: "Failed to fetch subjects" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, subjects_ids } = await request.json();

    // Validate input
    if (
      !name ||
      !email ||
      !Array.isArray(subjects_ids) ||
      subjects_ids.length === 0
    ) {
      return NextResponse.json(
        { error: "Name, email and at least one subject are required" },
        { status: 400 }
      );
    }

    // Insert teacher and get the ID
    const [insertedTeacher] = await db
      .insertInto("teachers")
      .values({ name, email })
      .returning(["id"])
      .execute();

    if (!insertedTeacher?.id) {
      throw new Error("Failed to insert teacher");
    }

    // Insert teacher-subject relationships
    await db
      .insertInto("teacher_subjects")
      .values(
        subjects_ids.map((subject_id) => ({
          teacher_id: insertedTeacher.id,
          subject_id: subject_id,
        }))
      )
      .execute();

    return NextResponse.json(
      {
        message: "Teacher added successfully",
        teacherId: insertedTeacher.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding teacher:", error);

    // Unique constraint violation
    if (error instanceof Error && error.message.includes("unique constraint")) {
      return NextResponse.json(
        { error: "A teacher with this email already exists" },
        { status: 409 }
      );
    }

    // Other errors
    return NextResponse.json(
      { error: "Failed to add teacher" },
      { status: 500 }
    );
  }
}
