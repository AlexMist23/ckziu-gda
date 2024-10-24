import { db } from "@/lib/kysely";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  // pagination params
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "10", 10);
  const offset = (page - 1) * limit;

  // filtering params
  const filter = searchParams.get("filter") || "date";

  // sorting params
  const sortBy = searchParams.get("sortBy") || "date";
  const order = (searchParams.get("order") || "desc").toLowerCase();

  try {
    // Base query before Pagination and Counting
    const baseQuery = db.selectFrom("schedules");

    // Get schedules - paginated, filtered and in order
    const schedules = await baseQuery
      .selectAll()
      .orderBy(
        sortBy === "date" ? "schedules.date" : "schedules.id",
        order as "asc" | "desc"
      )
      .limit(limit)
      .offset(offset)
      .execute();

    // Get total count
    const totalCountResult = await baseQuery
      .select((eb) => [eb.fn.count("schedules.id").as("count")])
      .executeTakeFirst();

    const totalCount = totalCountResult?.count
      ? Number(totalCountResult.count)
      : 0;

    const totalPages = Math.ceil(totalCount / limit);

    return NextResponse.json({
      schedules,
      pagination: {
        currentPage: page,
        totalPages,
        totalItems: totalCount,
        itemsPerPage: limit,
      },
    });
  } catch (error) {
    console.error("Error fetching schedules:", error);
    return NextResponse.json(
      { error: "Failed to fetch schedules" },
      { status: 500 }
    );
  }
}
