import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { Schedule, Lecture } from "@/types/db.types";

export async function GET() {
  try {
    const { rows } = await sql<Schedule & { lectures: Lecture[] }>`
      SELECT s.*, json_agg(
        json_build_object(
          'id', l.id,
          'subject_id', l.subject_id,
          'teacher_id', l.teacher_id,
          'start_time', l.start_time,
          'end_time', l.end_time,
          'room', l.room
        )
      ) as lectures
      FROM schedules s
      LEFT JOIN schedule_lectures sl ON s.id = sl.schedule_id
      LEFT JOIN lectures l ON sl.lecture_id = l.id
      GROUP BY s.id
      ORDER BY s.date
    `;
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Failed to fetch schedules:", error);
    return NextResponse.json(
      { error: "Failed to fetch schedules" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { date, lectures } = await request.json();

    // Start transaction
    await sql`BEGIN`;

    try {
      // Insert new schedule
      const {
        rows: [newSchedule],
      } = await sql<Schedule>`
        INSERT INTO schedules (date)
        VALUES (${date})
        RETURNING *
      `;

      // Insert new lectures and create schedule_lectures associations
      for (const lecture of lectures) {
        const {
          rows: [newLecture],
        } = await sql<Lecture>`
          INSERT INTO lectures (subject_id, teacher_id, start_time, end_time, room)
          VALUES (${lecture.subject_id}, ${lecture.teacher_id}, ${lecture.start_time}, ${lecture.end_time}, ${lecture.room})
          RETURNING *
        `;

        await sql`
          INSERT INTO schedule_lectures (schedule_id, lecture_id)
          VALUES (${newSchedule.id}, ${newLecture.id})
        `;
      }

      // Commit transaction
      await sql`COMMIT`;

      return NextResponse.json(newSchedule);
    } catch (error) {
      // Rollback transaction on error
      await sql`ROLLBACK`;
      throw error;
    }
  } catch (error) {
    console.error("Failed to add schedule:", error);
    return NextResponse.json(
      { error: "Failed to add schedule" },
      { status: 500 }
    );
  }
}
