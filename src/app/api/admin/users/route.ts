import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "10", 10);
  const offset = (page - 1) * limit;
  try {
    const countResult = await sql`SELECT COUNT(*) FROM users`;
    const totalCount = parseInt(countResult.rows[0].count, 10);

    const { rows } = await sql`
      SELECT id, name, email, role, image
      FROM users
      ORDER BY name ASC 
      LIMIT ${limit} OFFSET ${offset}
    `;
    return NextResponse.json({
      users: rows,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(totalCount / limit),
        totalItems: totalCount,
      },
    });
  } catch (error) {
    console.error("Failed to fetch users:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch users",
        users: [],
        pagination: { currentPage: 1, totalPages: 1, totalItems: 0 },
      },
      { status: 500 }
    );
  }
}
