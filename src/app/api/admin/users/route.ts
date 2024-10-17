import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { User } from "@/types/db.types";

export async function GET() {
  try {
    const { rows } = await sql<User>`SELECT * FROM users ORDER BY id`;
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Failed to fetch users:", error);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { name, email, role } = await request.json();
    const { rows } = await sql<User>`
      INSERT INTO users (name, email, role)
      VALUES (${name}, ${email}, ${role})
      RETURNING *
    `;
    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error("Failed to add user:", error);
    return NextResponse.json({ error: "Failed to add user" }, { status: 500 });
  }
}
