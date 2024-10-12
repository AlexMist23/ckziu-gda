import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { Schedule, Lecture } from "@/types/db";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "10", 10);
  const offset = (page - 1) * limit;

  try {
    const countResult = await sql`SELECT COUNT(*) FROM schedules`;
    const totalCount = parseInt(countResult.rows[0].count, 10);

    const { rows: schedules } = await sql`
      SELECT id, date
      FROM schedules
      ORDER BY date DESC
      LIMIT ${limit} OFFSET ${offset}
    `;

    for (const schedule of schedules) {
      const { rows: lectures } = await sql<Lecture>`
        SELECT l.*, s.name as subject_name, t.name as teacher_name
        FROM lectures l
        JOIN schedule_lectures sl ON l.id = sl.lecture_id
        JOIN subjects s ON l.subject_id = s.id
        JOIN teachers t ON l.teacher_id = t.id
        WHERE sl.schedule_id = ${schedule.id}
        ORDER BY l.start_time ASC
      `;
      (schedule as Schedule).lectures = lectures;
    }

    return NextResponse.json({
      schedules,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(totalCount / limit),
        totalItems: totalCount,
      },
    });
  } catch (error) {
    console.error("Failed to fetch schedules:", error);
    return NextResponse.json(
      { error: "Failed to fetch schedules" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { date, lectures } = await request.json();

    if (!date || !Array.isArray(lectures) || lectures.length === 0) {
      return NextResponse.json(
        { error: "Invalid input. Date and at least one lecture are required." },
        { status: 400 }
      );
    }

    // Insert the new schedule
    const {
      rows: [schedule],
    } = await sql`
      INSERT INTO schedules (date)
      VALUES (${date})
      RETURNING id, date
    `;

    // Fetch the associated lectures for the new schedule with subject and teacher names
    const { rows: lecturesWithNames } = await sql<Lecture>`
      SELECT l.*, s.name as subject_name, t.name as teacher_name
      FROM lectures l
      JOIN schedule_lectures sl ON l.id = sl.lecture_id
      JOIN subjects s ON l.subject_id = s.id
      JOIN teachers t ON l.teacher_id = t.id
      WHERE sl.schedule_id = ${schedule.id}
      ORDER BY l.start_time ASC
    `;

    // Combine the schedule with its lectures
    const result: Schedule = {
      id: schedule.id,
      date: schedule.date,
      lectures: lecturesWithNames,
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error("Failed to add schedule:", error);
    return NextResponse.json(
      { error: "Failed to add schedule" },
      { status: 500 }
    );
  }
}
