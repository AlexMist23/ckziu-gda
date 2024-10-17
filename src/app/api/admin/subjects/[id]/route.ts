import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { Subject } from "@/types/db.types";

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { name } = await request.json();
    const { rows } = await sql<Subject>`
      UPDATE subjects
      SET name = ${name}
      WHERE id = ${params.id}
      RETURNING *
    `;
    if (rows.length === 0) {
      return NextResponse.json({ error: "Subject not found" }, { status: 404 });
    }
    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error("Failed to update subject:", error);
    return NextResponse.json(
      { error: "Failed to update subject" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { rowCount } = await sql`
      DELETE FROM subjects
      WHERE id = ${params.id}
    `;
    if (rowCount === 0) {
      return NextResponse.json({ error: "Subject not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Subject deleted successfully" });
  } catch (error) {
    console.error("Failed to delete subject:", error);
    return NextResponse.json(
      { error: "Failed to delete subject" },
      { status: 500 }
    );
  }
}
