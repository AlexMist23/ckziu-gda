import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "10", 10);
  const offset = (page - 1) * limit;

  try {
    const countResult = await sql`SELECT COUNT(*) FROM lectures`;
    const totalCount = parseInt(countResult.rows[0].count, 10);

    const { rows } = await sql`
      SELECT l.*, s.name as subject_name, t.name as teacher_name
      FROM lectures l
      JOIN subjects s ON l.subject_id = s.id
      JOIN teachers t ON l.teacher_id = t.id
      ORDER BY l.start_time ASC
      LIMIT ${limit} OFFSET ${offset}
    `;

    return NextResponse.json({
      lectures: rows,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(totalCount / limit),
        totalItems: totalCount,
      },
    });
  } catch (error) {
    console.error("Failed to fetch lectures:", error);
    return NextResponse.json(
      { error: "Failed to fetch lectures" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { subject_id, teacher_id, start_time, end_time, room } =
      await request.json();

    const { rows } = await sql`
      INSERT INTO lectures (subject_id, teacher_id, start_time, end_time, room)
      VALUES (${subject_id}, ${teacher_id}, ${start_time}, ${end_time}, ${room})
      RETURNING id, subject_id, teacher_id, start_time, end_time, room
    `;

    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error("Failed to add lecture:", error);
    return NextResponse.json(
      { error: "Failed to add lecture" },
      { status: 500 }
    );
  }
}
