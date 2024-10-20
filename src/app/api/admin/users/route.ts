import { NextResponse } from "next/server";
import { db } from "@/lib/kysely";
import { sql } from "kysely";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = parseInt(searchParams.get("pageSize") || "10", 10);
  const sortBy = searchParams.get("sortBy") || "name";
  const sortOrder = searchParams.get("sortOrder") || "asc";
  const role = searchParams.get("role");
  const search = searchParams.get("search");

  let query = db.selectFrom("users").selectAll();

  if (role && role !== "all") {
    query = query.where("role", "=", role as "user" | "admin");
  }

  if (search) {
    query = query.where((eb) =>
      eb.or([
        eb("name", "ilike", `%${search}%`),
        eb("email", "ilike", `%${search}%`),
      ])
    );
  }

  if (["name", "email", "role"].includes(sortBy)) {
    query = query.orderBy(
      sortBy as "name" | "email" | "role",
      sortOrder === "desc" ? "desc" : "asc"
    );
  }

  const totalCountQuery = db
    .selectFrom("users")
    .select(sql<number>`count(*)`.as("count"));

  if (role && role !== "all") {
    totalCountQuery.where("role", "=", role as "user" | "admin");
  }

  if (search) {
    totalCountQuery.where((eb) =>
      eb.or([
        eb("name", "ilike", `%${search}%`),
        eb("email", "ilike", `%${search}%`),
      ])
    );
  }

  const [users, totalCountResult] = await Promise.all([
    query
      .limit(pageSize)
      .offset((page - 1) * pageSize)
      .execute(),
    totalCountQuery.executeTakeFirst(),
  ]);

  const totalCount = totalCountResult?.count || 0;

  return NextResponse.json({
    users,
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
  const { name, email, role } = body;

  try {
    const newUser = await db
      .insertInto("users")
      .values({ name, email, role })
      .returning(["id", "name", "email", "role", "image"])
      .executeTakeFirstOrThrow();

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
