import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET(request: Request, props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  try {
    const { rows } = await sql`
      SELECT t.*, s.name as subject_name 
      FROM teachers t 
      LEFT JOIN subjects s ON t.subject_id = s.id 
      WHERE t.id = ${params.id}
    `;
    if (rows.length === 0) {
      return NextResponse.json({ error: "Teacher not found" }, { status: 404 });
    }
    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error("Failed to fetch teacher:", error);
    return NextResponse.json(
      { error: "Failed to fetch teacher" },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request, props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  try {
    const { name, email, subject_id } = await request.json();

    const { rows } = await sql`
      UPDATE teachers
      SET name = ${name}, email = ${email}, subject_id = ${subject_id}, updated_at = NOW()
      WHERE id = ${params.id}
      RETURNING *
    `;

    if (rows.length === 0) {
      return NextResponse.json({ error: "Teacher not found" }, { status: 404 });
    }
    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error("Failed to update teacher:", error);
    return NextResponse.json(
      { error: "Failed to update teacher" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request, props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  try {
    const { rows } = await sql`
      DELETE FROM teachers
      WHERE id = ${params.id}
      RETURNING *
    `;

    if (rows.length === 0) {
      return NextResponse.json({ error: "Teacher not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Teacher deleted successfully" });
  } catch (error) {
    console.error("Failed to delete teacher:", error);
    return NextResponse.json(
      { error: "Failed to delete teacher" },
      { status: 500 }
    );
  }
}
