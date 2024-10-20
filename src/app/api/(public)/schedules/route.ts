import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { auth } from "@/lib/auth";
import { ScheduleWithLectures } from "@/types/app.types";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const from = searchParams.get("from");
  const to = searchParams.get("to");

  if (!from || !to) {
    return NextResponse.json(
      { error: "From and To dates are required" },
      { status: 400 }
    );
  }

  const session = await auth();

  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { rows } = await sql`
      SELECT 
        s.id AS schedule_id, 
        s.date, 
        l.id AS lecture_id,
        l.start_time,
        l.end_time,
        l.room,
        sub.id AS subject_id,
        sub.name AS subject_name,
        t.id AS teacher_id,
        t.name AS teacher_name
      FROM schedules s
      JOIN schedule_lectures sl ON s.id = sl.schedule_id
      JOIN lectures l ON sl.lecture_id = l.id
      JOIN subjects sub ON l.subject_id = sub.id
      JOIN teachers t ON l.teacher_id = t.id
      WHERE s.date BETWEEN ${from} AND ${to}
      ORDER BY s.date, l.start_time
    `;

    // Group the rows by schedule
    const schedules: ScheduleWithLectures[] = rows.reduce(
      (acc: ScheduleWithLectures[], row) => {
        const existingSchedule = acc.find((s) => s.id === row.schedule_id);
        if (existingSchedule) {
          existingSchedule.lectures.push({
            id: row.lecture_id,
            subject_id: row.subject_id,
            teacher_id: row.teacher_id,
            room: row.room,
            start_time: row.start_time,
            end_time: row.end_time,
            subject_name: row.subject_name,
            teacher_name: row.teacher_name,
          });
        } else {
          acc.push({
            id: row.schedule_id,
            date: row.date,
            lectures: [
              {
                id: row.lecture_id,
                subject_id: row.subject_id,
                teacher_id: row.teacher_id,
                room: row.room,
                start_time: row.start_time,
                end_time: row.end_time,
                subject_name: row.subject_name,
                teacher_name: row.teacher_name,
              },
            ],
          });
        }
        return acc;
      },
      []
    );

    return NextResponse.json(schedules);
  } catch (error) {
    console.error("Database query failed:", error);
    return NextResponse.json(
      { error: "Failed to fetch schedules" },
      { status: 500 }
    );
  }
}
