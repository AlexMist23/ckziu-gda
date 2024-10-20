import { NextResponse } from "next/server";
import { db } from "@/lib/kysely";
import { sql } from "kysely";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = parseInt(searchParams.get("pageSize") || "10", 10);
  const sortBy = searchParams.get("sortBy") || "name";
  const sortOrder = searchParams.get("sortOrder") || "asc";
  const search = searchParams.get("search");

  let query = db.selectFrom("subjects").selectAll();

  if (search) {
    query = query.where("name", "ilike", `%${search}%`);
  }

  if (["name", "id"].includes(sortBy)) {
    query = query.orderBy(
      sortBy as "name" | "id",
      sortOrder === "desc" ? "desc" : "asc"
    );
  }

  const totalCountQuery = db
    .selectFrom("subjects")
    .select(sql<number>`count(*)`.as("count"));

  if (search) {
    totalCountQuery.where("name", "ilike", `%${search}%`);
  }

  const [subjects, totalCountResult] = await Promise.all([
    query
      .limit(pageSize)
      .offset((page - 1) * pageSize)
      .execute(),
    totalCountQuery.executeTakeFirst(),
  ]);

  const totalCount = totalCountResult?.count || 0;

  return NextResponse.json({
    subjects,
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
  const { name } = body;

  try {
    const newSubject = await db
      .insertInto("subjects")
      .values({ name })
      .returning(["id", "name"])
      .executeTakeFirstOrThrow();

    return NextResponse.json(newSubject, { status: 201 });
  } catch (error) {
    console.error("Error creating subject:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
