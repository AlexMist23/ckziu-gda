import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { z } from "zod";

const teacherSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject_ids: z.array(z.number().int().positive()).min(1),
});

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const teacherId = parseInt(params.id, 10);
    if (isNaN(teacherId)) {
      return NextResponse.json(
        { error: "Invalid teacher ID" },
        { status: 400 }
      );
    }

    const teacherResult = await sql`
      SELECT t.id, t.name, t.email, array_agg(s.id) as subject_ids
      FROM teachers t
      LEFT JOIN teacher_subjects ts ON t.id = ts.teacher_id
      LEFT JOIN subjects s ON ts.subject_id = s.id
      WHERE t.id = ${teacherId}
      GROUP BY t.id, t.name, t.email
    `;

    if (teacherResult.rows.length === 0) {
      return NextResponse.json({ error: "Teacher not found" }, { status: 404 });
    }

    const teacher = teacherResult.rows[0];
    teacher.subject_ids = teacher.subject_ids.filter(
      (id: number | null) => id !== null
    );

    return NextResponse.json(teacher);
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const teacherId = parseInt(params.id, 10);
    if (isNaN(teacherId)) {
      return NextResponse.json(
        { error: "Invalid teacher ID" },
        { status: 400 }
      );
    }

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
      await sql`
        UPDATE teachers
        SET name = ${name}, email = ${email}
        WHERE id = ${teacherId}
      `;

      await sql`
        DELETE FROM teacher_subjects
        WHERE teacher_id = ${teacherId}
      `;

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
    } catch (error) {
      await sql`ROLLBACK`;
      throw error;
    }

    const updatedTeacher = await sql`
      SELECT t.id, t.name, t.email, array_agg(s.id) as subject_ids
      FROM teachers t
      LEFT JOIN teacher_subjects ts ON t.id = ts.teacher_id
      LEFT JOIN subjects s ON ts.subject_id = s.id
      WHERE t.id = ${teacherId}
      GROUP BY t.id, t.name, t.email
    `;

    if (updatedTeacher.rows.length === 0) {
      return NextResponse.json({ error: "Teacher not found" }, { status: 404 });
    }

    const teacher = updatedTeacher.rows[0];
    teacher.subject_ids = teacher.subject_ids.filter(
      (id: number | null) => id !== null
    );

    return NextResponse.json(teacher);
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const teacherId = parseInt(params.id, 10);
    if (isNaN(teacherId)) {
      return NextResponse.json(
        { error: "Invalid teacher ID" },
        { status: 400 }
      );
    }

    await sql`BEGIN`;

    try {
      await sql`
        DELETE FROM teacher_subjects
        WHERE teacher_id = ${teacherId}
      `;

      const result = await sql`
        DELETE FROM teachers
        WHERE id = ${teacherId}
        RETURNING id
      `;

      await sql`COMMIT`;

      if (result.rowCount === 0) {
        return NextResponse.json(
          { error: "Teacher not found" },
          { status: 404 }
        );
      }

      return NextResponse.json({ message: "Teacher deleted successfully" });
    } catch (error) {
      await sql`ROLLBACK`;
      throw error;
    }
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
