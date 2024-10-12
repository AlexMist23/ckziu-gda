import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { z } from "zod";

const teacherSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject_ids: z.array(z.number().int().positive()).min(1),
});

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "10", 10);
  const offset = (page - 1) * limit;

  try {
    const countResult = await sql`SELECT COUNT(*) FROM teachers`;
    const totalCount = parseInt(countResult.rows[0].count, 10);

    const { rows } = await sql`
      SELECT t.id, t.name, t.email, array_agg(s.id) as subject_ids
      FROM teachers t
      LEFT JOIN teacher_subjects ts ON t.id = ts.teacher_id
      LEFT JOIN subjects s ON ts.subject_id = s.id
      GROUP BY t.id, t.name, t.email
      ORDER BY t.name ASC
      LIMIT ${limit} OFFSET ${offset}
    `;

    const teachers = rows.map((teacher) => ({
      ...teacher,
      subject_ids: teacher.subject_ids.filter((id: number) => id !== null),
    }));

    return NextResponse.json({
      teachers,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(totalCount / limit),
        totalItems: totalCount,
      },
    });
  } catch (error) {
    console.error("Failed to fetch teachers:", error);
    return NextResponse.json(
      { error: "Failed to fetch teachers" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validationResult = teacherSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { error: validationResult.error.errors },
        { status: 400 }
      );
    }

    const { name, email, subject_ids } = validationResult.data;

    await sql`BEGIN`;

    try {
      const { rows } = await sql`
        INSERT INTO teachers (name, email)
        VALUES (${name}, ${email})
        RETURNING id
      `;

      const teacherId = rows[0].id;

      if (subject_ids.length > 0) {
        const subjectValues = subject_ids
          .map((id) => `(${teacherId}, ${id})`)
          .join(", ");
        await sql.query(`
          INSERT INTO teacher_subjects (teacher_id, subject_id)
          VALUES ${subjectValues}
        `);
      }

      await sql`COMMIT`;

      const newTeacher = await sql`
        SELECT t.id, t.name, t.email, array_agg(s.id) as subject_ids
        FROM teachers t
        LEFT JOIN teacher_subjects ts ON t.id = ts.teacher_id
        LEFT JOIN subjects s ON ts.subject_id = s.id
        WHERE t.id = ${teacherId}
        GROUP BY t.id, t.name, t.email
      `;

      return NextResponse.json(newTeacher.rows[0]);
    } catch (error) {
      await sql`ROLLBACK`;
      throw error;
    }
  } catch (error) {
    console.error("Failed to add teacher:", error);
    return NextResponse.json(
      { error: "Failed to add teacher" },
      { status: 500 }
    );
  }
}
