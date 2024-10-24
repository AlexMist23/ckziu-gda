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
    // get filtered query
    const baseQuery = db
      .selectFrom("subjects")
      .where(sql`LOWER(name)`, "like", `%${name.toLowerCase()}%`);

    // limit result and get totalCount
    const [subjects, totalCountResult] = await Promise.all([
      baseQuery
        .select(["id", "name"])
        .orderBy(sortBy as "name" | "id", order as "asc" | "desc") // filter && order
        .limit(limit)
        .offset(offset)
        .execute(),
      baseQuery.select(db.fn.count("id").as("count")).executeTakeFirst(),
    ]);

    const totalCount = totalCountResult?.count
      ? Number(totalCountResult.count)
      : 0;

    const totalPages = Math.ceil(totalCount / limit);

    return NextResponse.json({
      subjects,
      pagination: {
        currentPage: page,
        totalPages,
        totalItems: totalCount,
        itemsPerPage: limit,
      },
    });
  } catch (error) {
    console.error("Error fetching subjects:", error);
    return NextResponse.json(
      { error: "Failed to fetch subjects" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name } = await request.json();
    console.log(name);

    // Validate input
    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    // Insert subject and get the ID
    const [insertedSubject] = await db
      .insertInto("subjects")
      .values({ name })
      .returning(["id"])
      .execute();

    if (!insertedSubject?.id) {
      throw new Error("Failed to insert subject");
    }
    return NextResponse.json(
      {
        message: "Subject added successfully",
        teacherId: insertedSubject.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);

    // Other errors
    return NextResponse.json(
      { error: "Failed to add subject" },
      { status: 500 }
    );
  }
}
