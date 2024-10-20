import { NextResponse } from "next/server";
import { db, sql } from "@/lib/kysely";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = parseInt(searchParams.get("pageSize") || "10", 10);
  const sortBy = searchParams.get("sortBy") || "name";
  const sortOrder = searchParams.get("sortOrder") || "asc";
  const search = searchParams.get("search");

  let query = db
    .selectFrom("teachers")
    .leftJoin("teacher_subjects", "teachers.id", "teacher_subjects.teacher_id")
    .leftJoin("subjects", "teacher_subjects.subject_id", "subjects.id")
    .select([
      "teachers.id",
      "teachers.name",
      "teachers.email",
      sql<string[]>`array_agg(DISTINCT subjects.name)`.as("subjects"),
    ])
    .groupBy("teachers.id");

  if (search) {
    query = query.where((eb) =>
      eb.or([
        eb("teachers.name", "ilike", `%${search}%`),
        eb("teachers.email", "ilike", `%${search}%`),
        eb("subjects.name", "ilike", `%${search}%`),
      ])
    );
  }

  if (["name", "email"].includes(sortBy)) {
    query = query.orderBy(
      `teachers.${sortBy}` as any,
      sortOrder === "desc" ? "desc" : "asc"
    );
  }

  const totalCountQuery = db
    .selectFrom("teachers")
    .select(sql<number>`count(DISTINCT teachers.id)`.as("count"));

  if (search) {
    totalCountQuery
      .leftJoin(
        "teacher_subjects",
        "teachers.id",
        "teacher_subjects.teacher_id"
      )
      .leftJoin("subjects", "teacher_subjects.subject_id", "subjects.id")
      .where((eb) =>
        eb.or([
          eb("teachers.name", "ilike", `%${search}%`),
          eb("teachers.email", "ilike", `%${search}%`),
          eb("subjects.name", "ilike", `%${search}%`),
        ])
      );
  }

  const [teachers, totalCountResult] = await Promise.all([
    query
      .limit(pageSize)
      .offset((page - 1) * pageSize)
      .execute(),
    totalCountQuery.executeTakeFirst(),
  ]);

  const totalCount = totalCountResult?.count || 0;

  return NextResponse.json({
    teachers: teachers.map((teacher) => ({
      ...teacher,
      subjects: teacher.subjects.filter(Boolean), // Remove null values
    })),
    pagination: {
      currentPage: page,
      pageSize,
      totalCount,
      totalPages: Math.ceil(totalCount / pageSize),
    },
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, subjects } = body;

  try {
    // Insert the teacher
    const newTeacher = await db
      .insertInto("teachers")
      .values({ name, email })
      .returning(["id", "name", "email"])
      .executeTakeFirstOrThrow();

    // Insert teacher-subject relationships
    if (subjects && subjects.length > 0) {
      await db
        .insertInto("teacher_subjects")
        .values(
          subjects.map((subjectId: string) => ({
            teacher_id: newTeacher.id,
            subject_id: parseInt(subjectId, 10),
          }))
        )
        .execute();
    }

    // Fetch the inserted teacher with subjects
    const teacherWithSubjects = await db
      .selectFrom("teachers")
      .leftJoin(
        "teacher_subjects",
        "teachers.id",
        "teacher_subjects.teacher_id"
      )
      .leftJoin("subjects", "teacher_subjects.subject_id", "subjects.id")
      .select([
        "teachers.id",
        "teachers.name",
        "teachers.email",
        sql<string[]>`array_agg(DISTINCT subjects.name)`.as("subjects"),
      ])
      .where("teachers.id", "=", newTeacher.id)
      .groupBy("teachers.id")
      .executeTakeFirst();

    if (!teacherWithSubjects) {
      throw new Error("Failed to create teacher");
    }

    return NextResponse.json(
      {
        ...teacherWithSubjects,
        subjects: teacherWithSubjects.subjects.filter(Boolean), // Remove null values
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating teacher:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
