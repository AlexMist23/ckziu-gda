import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "10", 10);
  const offset = (page - 1) * limit;

  try {
    const countResult = await sql`SELECT COUNT(*) FROM teachers`;
    const totalCount = parseInt(countResult.rows[0].count, 10);

    const { rows } = await sql`
      SELECT t.*, s.name as subject_name 
      FROM teachers t 
      LEFT JOIN subjects s ON t.subject_id = s.id 
      ORDER BY t.name ASC 
      LIMIT ${limit} OFFSET ${offset}
    `;

    return NextResponse.json({
      teachers: rows,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(totalCount / limit),
        totalItems: totalCount,
      },
    });
  } catch (error) {
    console.error("Failed to fetch teachers:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch teachers",
        teachers: [],
        pagination: { currentPage: 1, totalPages: 1, totalItems: 0 },
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { name, email, subject_id } = await request.json();

    const { rows } = await sql`
      INSERT INTO teachers (name, email, subject_id)
      VALUES (${name}, ${email}, ${subject_id})
      RETURNING *
    `;

    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error("Failed to add teacher:", error);
    return NextResponse.json(
      { error: "Failed to add teacher" },
      { status: 500 }
    );
  }
}
