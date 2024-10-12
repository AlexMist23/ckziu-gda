import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { Lecture } from "@/types/types";
import {
  LectureResponse,
  LecturesListResponse,
  CreateLectureRequest,
} from "@/types/api";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "10", 10);
  const offset = (page - 1) * limit;

  try {
    const countResult = await sql`SELECT COUNT(*) FROM lectures`;
    const totalCount = parseInt(countResult.rows[0].count, 10);

    const { rows } = await sql<
      Lecture & { subject_name: string; teacher_name: string }
    >`
      SELECT l.*, s.name as subject_name, t.name as teacher_name
      FROM lectures l
      JOIN subjects s ON l.subject_id = s.id
      JOIN teachers t ON l.teacher_id = t.id
      ORDER BY l.start_time ASC
      LIMIT ${limit} OFFSET ${offset}
    `;

    const lectures: LectureResponse[] = rows.map((row) => ({
      id: row.id,
      subject_id: row.subject_id,
      teacher_id: row.teacher_id,
      start_time: row.start_time,
      end_time: row.end_time,
      room: row.room,
      subject: { id: row.subject_id, name: row.subject_name },
      teacher: { id: row.teacher_id, name: row.teacher_name },
    }));

    const response: LecturesListResponse = {
      data: lectures,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(totalCount / limit),
        totalItems: totalCount,
      },
    };

    return NextResponse.json(response);
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
    const body: CreateLectureRequest = await request.json();
    const { subject_id, teacher_id, start_time, end_time, room } = body;

    const { rows } = await sql<Lecture>`
      INSERT INTO lectures (subject_id, teacher_id, start_time, end_time, room)
      VALUES (${subject_id}, ${teacher_id}, ${start_time}, ${end_time}, ${room})
      RETURNING id, subject_id, teacher_id, start_time, end_time, room
    `;

    const newLecture: LectureResponse = {
      ...rows[0],
      subject: { id: subject_id, name: "" }, // We don't have the subject name here
      teacher: { id: teacher_id, name: "" }, // We don't have the teacher name here
    };

    return NextResponse.json(newLecture);
  } catch (error) {
    console.error("Failed to add lecture:", error);
    return NextResponse.json(
      { error: "Failed to add lecture" },
      { status: 500 }
    );
  }
}
