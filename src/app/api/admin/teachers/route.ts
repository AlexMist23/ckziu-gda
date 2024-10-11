import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET() {
  try {
    const { rows } = await sql`
      SELECT t.*, s.name as subject_name 
      FROM teachers t 
      LEFT JOIN subjects s ON t.subject_id = s.id 
      ORDER BY t.name ASC
    `;
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Failed to fetch teachers:", error);
    return NextResponse.json(
      { error: "Failed to fetch teachers" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { name, email, subject_id } = await request.json();

    const { rows } = await sql`
      INSERT INTO teachers (name, email, subject_id)
      VALUES (${name}, ${email}, ${subject_id})
      RETURNING *
    `;

    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error("Failed to add teacher:", error);
    return NextResponse.json(
      { error: "Failed to add teacher" },
      { status: 500 }
    );
  }
}
