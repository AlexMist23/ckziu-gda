import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { Subject } from "@/types/db.types";

export async function GET() {
  try {
    const { rows } = await sql<Subject>`SELECT * FROM subjects ORDER BY id`;
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Failed to fetch subjects:", error);
    return NextResponse.json(
      { error: "Failed to fetch subjects" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { name } = await request.json();
    const { rows } = await sql<Subject>`
      INSERT INTO subjects (name)
      VALUES (${name})
      RETURNING *
    `;
    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error("Failed to add subject:", error);
    return NextResponse.json(
      { error: "Failed to add subject" },
      { status: 500 }
    );
  }
}
