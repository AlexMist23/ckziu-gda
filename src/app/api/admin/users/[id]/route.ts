import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { User } from "@/types/db.types";

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { name, email, role } = await request.json();
    const { rows } = await sql<User>`
      UPDATE users
      SET name = ${name}, email = ${email}, role = ${role}
      WHERE id = ${params.id}
      RETURNING *
    `;
    if (rows.length === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error("Failed to update user:", error);
    return NextResponse.json(
      { error: "Failed to update user" },
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
      DELETE FROM users
      WHERE id = ${params.id}
    `;
    if (rowCount === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Failed to delete user:", error);
    return NextResponse.json(
      { error: "Failed to delete user" },
      { status: 500 }
    );
  }
}
