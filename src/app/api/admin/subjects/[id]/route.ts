import { NextResponse, NextRequest } from "next/server";
import { db } from "@/lib/kysely";

export async function PUT(request: NextRequest) {
  try {
    const { name, id } = await request.json();
    if (!name || !id) {
      return NextResponse.json(
        { error: "Invalid request values" },
        { status: 500 }
      );
    }

    await db
      .updateTable("subjects")
      .set({ name, id })
      .where("id", "=", id)
      .execute();
    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to edit subject" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();
    if (!id) {
      return NextResponse.json(
        { error: "Invalid request values" },
        { status: 500 }
      );
    }

    await db.deleteFrom("subjects").where("id", "=", id).execute();
    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to delete subject" },
      { status: 500 }
    );
  }
}
