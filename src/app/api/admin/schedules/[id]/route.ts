import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { Schedule, Lecture } from "@/types/db.types";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);
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
      WHERE s.id = ${id}
      GROUP BY s.id
    `;

    if (rows.length === 0) {
      return NextResponse.json(
        { error: "Schedule not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error("Failed to fetch schedule:", error);
    return NextResponse.json(
      { error: "Failed to fetch schedule" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);
    const { date, lectures } = await request.json();

    // Start transaction
    await sql`BEGIN`;

    try {
      // Update schedule
      const {
        rows: [updatedSchedule],
      } = await sql<Schedule>`
        UPDATE schedules
        SET date = ${date}
        WHERE id = ${id}
        RETURNING *
      `;

      if (!updatedSchedule) {
        throw new Error("Schedule not found");
      }

      // Delete existing schedule_lectures associations
      await sql`DELETE FROM schedule_lectures WHERE schedule_id = ${id}`;

      // Update or insert lectures and create new schedule_lectures associations
      for (const lecture of lectures) {
        let lectureId: number;

        if (lecture.id) {
          // Update existing lecture
          const {
            rows: [updatedLecture],
          } = await sql<Lecture>`
            UPDATE lectures
            SET subject_id = ${lecture.subject_id},
                teacher_id = ${lecture.teacher_id},
                start_time = ${lecture.start_time},
                end_time = ${lecture.end_time},
                room = ${lecture.room}
            WHERE id = ${lecture.id}
            RETURNING id
          `;
          lectureId = updatedLecture.id;
        } else {
          // Insert new lecture
          const {
            rows: [newLecture],
          } = await sql<Lecture>`
            INSERT INTO lectures (subject_id, teacher_id, start_time, end_time, room)
            VALUES (${lecture.subject_id}, ${lecture.teacher_id}, ${lecture.start_time}, ${lecture.end_time}, ${lecture.room})
            RETURNING id
          `;
          lectureId = newLecture.id;
        }

        // Create new schedule_lectures association
        await sql`
          INSERT INTO schedule_lectures (schedule_id, lecture_id)
          VALUES (${id}, ${lectureId})
        `;
      }

      // Commit transaction
      await sql`COMMIT`;

      return NextResponse.json(updatedSchedule);
    } catch (error) {
      // Rollback transaction on error
      await sql`ROLLBACK`;
      throw error;
    }
  } catch (error) {
    console.error("Failed to update schedule:", error);
    return NextResponse.json(
      { error: "Failed to update schedule" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);

    // Start transaction
    await sql`BEGIN`;

    try {
      // Delete schedule_lectures associations
      await sql`DELETE FROM schedule_lectures WHERE schedule_id = ${id}`;

      // Delete schedule
      const { rowCount } = await sql`DELETE FROM schedules WHERE id = ${id}`;

      if (rowCount === 0) {
        throw new Error("Schedule not found");
      }

      // Commit transaction
      await sql`COMMIT`;

      return NextResponse.json({ message: "Schedule deleted successfully" });
    } catch (error) {
      // Rollback transaction on error
      await sql`ROLLBACK`;
      throw error;
    }
  } catch (error) {
    console.error("Failed to delete schedule:", error);
    return NextResponse.json(
      { error: "Failed to delete schedule" },
      { status: 500 }
    );
  }
}
