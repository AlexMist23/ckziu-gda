import { NextResponse, NextRequest } from "next/server";
import { db } from "@/lib/kysely";

export async function PUT(request: NextRequest, props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  try {
    // Validate params
    const subjectId = parseInt(params.id, 10);
    if (isNaN(subjectId)) {
      return NextResponse.json(
        { error: "Invalid subject ID" },
        { status: 400 }
      );
    }

    // Validate req body
    const { name } = await request.json();
    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    await db
      .updateTable("subjects")
      .set({ name })
      .where("id", "=", subjectId)
      .execute();
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to edit subject" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest, props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  try {
    const subjectId = parseInt(params.id, 10);

    // Validate params
    if (isNaN(subjectId)) {
      return NextResponse.json(
        { error: "Invalid subject ID" },
        { status: 400 }
      );
    }

    // Delete subject
    const deletedSubject = await db
      .deleteFrom("subjects")
      .where("id", "=", subjectId)
      .returning(["id"])
      .execute();

    if (!deletedSubject) {
      return NextResponse.json({ error: "Subject not found" }, { status: 404 });
    }
    // Return 204 No Content for successful deletion
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("Error deleting subject:", error);
    return NextResponse.json(
      { error: "Failed to delete subject" },
      { status: 500 }
    );
  }
}
