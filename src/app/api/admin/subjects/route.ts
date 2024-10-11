import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "10", 10);
  const offset = (page - 1) * limit;

  try {
    const countResult = await sql`SELECT COUNT(*) FROM subjects`;
    const totalCount = parseInt(countResult.rows[0].count, 10);

    const { rows } = await sql`
      SELECT * FROM subjects 
      ORDER BY name ASC 
      LIMIT ${limit} OFFSET ${offset}
    `;

    return NextResponse.json({
      subjects: rows,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(totalCount / limit),
        totalItems: totalCount,
      },
    });
  } catch (error) {
    console.error("Failed to fetch subjects:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch subjects",
        subjects: [],
        pagination: { currentPage: 1, totalPages: 1, totalItems: 0 },
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { name } = await request.json();

    const { rows } = await sql`
      INSERT INTO subjects (name)
      VALUES (${name})
      RETURNING *
    `;

    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error("Failed to add subject:", error);
    return NextResponse.json(
      { error: "Failed to add subject" },
      { status: 500 }
    );
  }
}
