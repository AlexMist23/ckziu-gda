import { db } from "@/lib/kysely";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "10", 10);
  const offset = (page - 1) * limit;

  try {
    const subjectsQuery = db.selectFrom("subjects");

    const [subjects, totalCountResult] = await Promise.all([
      subjectsQuery.selectAll().limit(limit).offset(offset).execute(),
      subjectsQuery.select(db.fn.count("id").as("count")).executeTakeFirst(),
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
    console.error(error);
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
    if (!name) {
      return NextResponse.json(
        { error: "Invalid request values" },
        { status: 500 }
      );
    }

    await db.insertInto("subjects").values({ name }).execute();
    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to add subject" },
      { status: 500 }
    );
  }
}
