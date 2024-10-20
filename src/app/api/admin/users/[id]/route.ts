import { NextResponse } from "next/server";
import { db } from "@/lib/kysely";

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id, 10);
  const { name, role } = await request.json();

  try {
    const updatedUser = await db
      .updateTable("users")
      .set({ name, role })
      .where("id", "=", id)
      .returning(["id", "name", "email", "role", "image"])
      .executeTakeFirstOrThrow();

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id, 10);

  try {
    await db.deleteFrom("users").where("id", "=", id).execute();

    return NextResponse.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
