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
      .selectFrom("users")
      .where(sql`LOWER(name)`, "like", `%${name.toLowerCase()}%`); // filtering by name

    // limit result and get totalCount
    const [users, totalCountResult] = await Promise.all([
      baseQuery
        .select(["id", "name", "email", "image", "role"])
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
      users,
      pagination: {
        currentPage: page,
        totalPages,
        totalItems: totalCount,
        itemsPerPage: limit,
      },
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Failed to fetch subjects" },
      { status: 500 }
    );
  }
}
