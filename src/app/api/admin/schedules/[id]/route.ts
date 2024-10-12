import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { Lecture } from "@/types/db";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const scheduleId = parseInt(params.id, 10);
    if (isNaN(scheduleId)) {
      return NextResponse.json(
        { error: "Invalid schedule ID" },
        { status: 400 }
      );
    }

    const {
      rows: [schedule],
    } = await sql`
      SELECT id, date
      FROM schedules
      WHERE id = ${scheduleId}
    `;

    if (!schedule) {
      return NextResponse.json(
        { error: "Schedule not found" },
        { status: 404 }
      );
    }

    const { rows: lectures } = await sql`
      SELECT l.*, s.name as subject_name, t.name as teacher_name
      FROM lectures l
      JOIN schedule_lectures sl ON l.id = sl.lecture_id
      JOIN subjects s ON l.subject_id = s.id
      JOIN teachers t ON l.teacher_id = t.id
      WHERE sl.schedule_id = ${scheduleId}
      ORDER BY l.start_time ASC
    `;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result: any = {
      ...schedule,
      lectures: lectures as Lecture[],
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error("Failed to fetch schedule:", error);
    return NextResponse.json(
      { error: "Failed to fetch schedule" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const scheduleId = parseInt(params.id, 10);
    if (isNaN(scheduleId)) {
      return NextResponse.json(
        { error: "Invalid schedule ID" },
        { status: 400 }
      );
    }

    const { date, lectures } = await request.json();

    // Update schedule date
    await sql`
      UPDATE schedules
      SET date = ${date}
      WHERE id = ${scheduleId}
    `;

    // Delete existing lecture associations
    await sql`
      DELETE FROM schedule_lectures
      WHERE schedule_id = ${scheduleId}
    `;

    // Insert new lectures and create associations
    for (const lecture of lectures) {
      const {
        rows: [newLecture],
      } = await sql`
        INSERT INTO lectures (subject_id, teacher_id, start_time, end_time, room)
        VALUES (${lecture.subject_id}, ${lecture.teacher_id}, ${lecture.start_time}, ${lecture.end_time}, ${lecture.room})
        RETURNING id
      `;

      await sql`
        INSERT INTO schedule_lectures (schedule_id, lecture_id)
        VALUES (${scheduleId}, ${newLecture.id})
      `;
    }

    // Fetch updated schedule
    const {
      rows: [updatedSchedule],
    } = await sql`
      SELECT id, date
      FROM schedules
      WHERE id = ${scheduleId}
    `;

    const { rows: updatedLectures } = await sql`
      SELECT l.*, s.name as subject_name, t.name as teacher_name
      FROM lectures l
      JOIN schedule_lectures sl ON l.id = sl.lecture_id
      JOIN subjects s ON l.subject_id = s.id
      JOIN teachers t ON l.teacher_id = t.id
      WHERE sl.schedule_id = ${scheduleId}
      ORDER BY l.start_time ASC
    `;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result: any = {
      ...updatedSchedule,
      lectures: updatedLectures as Lecture[],
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error("Failed to update schedule:", error);
    return NextResponse.json(
      { error: "Failed to update schedule" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const scheduleId = parseInt(params.id, 10);
    if (isNaN(scheduleId)) {
      return NextResponse.json(
        { error: "Invalid schedule ID" },
        { status: 400 }
      );
    }

    // Delete lecture associations
    await sql`
      DELETE FROM schedule_lectures
      WHERE schedule_id = ${scheduleId}
    `;

    // Delete the schedule
    const { rowCount } = await sql`
      DELETE FROM schedules
      WHERE id = ${scheduleId}
    `;

    if (rowCount === 0) {
      return NextResponse.json(
        { error: "Schedule not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Schedule deleted successfully" });
  } catch (error) {
    console.error("Failed to delete schedule:", error);
    return NextResponse.json(
      { error: "Failed to delete schedule" },
      { status: 500 }
    );
  }
}
