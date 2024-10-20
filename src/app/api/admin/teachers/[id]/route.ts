import { NextResponse } from "next/server";
import { db } from "@/lib/kysely";

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id, 10);
  const { name, email } = await request.json();

  try {
    const updatedTeacher = await db
      .updateTable("teachers")
      .set({ name, email })
      .where("id", "=", id)
      .returning(["id", "name", "email"])
      .executeTakeFirstOrThrow();

    return NextResponse.json(updatedTeacher);
  } catch (error) {
    console.error("Error updating teacher:", error);
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
    await db.deleteFrom("teachers").where("id", "=", id).execute();

    return NextResponse.json({ message: "Teacher deleted successfully" });
  } catch (error) {
    console.error("Error deleting teacher:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
