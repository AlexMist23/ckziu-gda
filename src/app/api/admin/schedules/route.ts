import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { Schedule, Lecture } from "@/types/types";
import {
  ScheduleResponse,
  LectureResponse,
  SchedulesListResponse,
  CreateScheduleRequest,
} from "@/types/api";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "10", 10);
  const offset = (page - 1) * limit;

  try {
    const countResult = await sql`SELECT COUNT(*) FROM schedules`;
    const totalCount = parseInt(countResult.rows[0].count, 10);

    const { rows: schedules } = await sql<Schedule>`
      SELECT id, date
      FROM schedules
      ORDER BY date DESC
      LIMIT ${limit} OFFSET ${offset}
    `;

    const schedulesWithLectures: ScheduleResponse[] = [];

    for (const schedule of schedules) {
      const { rows: lectures } = await sql<
        Lecture & { subject_name: string; teacher_name: string }
      >`
        SELECT l.*, s.name as subject_name, t.name as teacher_name
        FROM lectures l
        JOIN schedule_lectures sl ON l.id = sl.lecture_id
        JOIN subjects s ON l.subject_id = s.id
        JOIN teachers t ON l.teacher_id = t.id
        WHERE sl.schedule_id = ${schedule.id}
        ORDER BY l.start_time ASC
      `;

      const lectureResponses: LectureResponse[] = lectures.map((lecture) => ({
        id: lecture.id,
        subject_id: lecture.subject_id,
        teacher_id: lecture.teacher_id,
        start_time: lecture.start_time,
        end_time: lecture.end_time,
        room: lecture.room,
        subject: { id: lecture.subject_id, name: lecture.subject_name },
        teacher: {
          id: lecture.teacher_id,
          name: lecture.teacher_name,
        },
      }));

      schedulesWithLectures.push({
        ...schedule,
        lectures: lectureResponses,
      });
    }

    const response: SchedulesListResponse = {
      data: schedulesWithLectures,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(totalCount / limit),
        totalItems: totalCount,
      },
    };

    return NextResponse.json(response);
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
    const { date, lectures } = (await request.json()) as CreateScheduleRequest;

    if (!date || !Array.isArray(lectures) || lectures.length === 0) {
      return NextResponse.json(
        { error: "Invalid input. Date and at least one lecture are required." },
        { status: 400 }
      );
    }

    const {
      rows: [schedule],
    } = await sql<Schedule>`
      INSERT INTO schedules (date)
      VALUES (${date})
      RETURNING id, date
    `;

    const insertedLectures: LectureResponse[] = [];
    for (const lecture of lectures) {
      const {
        rows: [newLecture],
      } = await sql<Lecture>`
        INSERT INTO lectures (subject_id, teacher_id, start_time, end_time, room)
        VALUES (${lecture.subject_id}, ${lecture.teacher_id}, ${lecture.start_time}, ${lecture.end_time}, ${lecture.room})
        RETURNING id, subject_id, teacher_id, start_time, end_time, room
      `;

      await sql`
        INSERT INTO schedule_lectures (schedule_id, lecture_id)
        VALUES (${schedule.id}, ${newLecture.id})
      `;

      const {
        rows: [subjectAndTeacher],
      } = await sql<{ subject_name: string; teacher_name: string }>`
        SELECT s.name as subject_name, t.name as teacher_name
        FROM subjects s, teachers t
        WHERE s.id = ${newLecture.subject_id} AND t.id = ${newLecture.teacher_id}
      `;

      insertedLectures.push({
        ...newLecture,
        subject: {
          id: newLecture.subject_id,
          name: subjectAndTeacher.subject_name,
        },
        teacher: {
          id: newLecture.teacher_id,
          name: subjectAndTeacher.teacher_name,
        },
      });
    }

    const result: ScheduleResponse = {
      ...schedule,
      lectures: insertedLectures,
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
