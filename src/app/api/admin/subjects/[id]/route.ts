import { NextResponse } from "next/server";
import { db } from "@/lib/kysely";

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id, 10);
  const { name } = await request.json();

  try {
    const updatedSubject = await db
      .updateTable("subjects")
      .set({ name })
      .where("id", "=", id)
      .returning(["id", "name"])
      .executeTakeFirstOrThrow();

    return NextResponse.json(updatedSubject);
  } catch (error) {
    console.error("Error updating subject:", error);
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
    await db.deleteFrom("subjects").where("id", "=", id).execute();

    return NextResponse.json({ message: "Subject deleted successfully" });
  } catch (error) {
    console.error("Error deleting subject:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
