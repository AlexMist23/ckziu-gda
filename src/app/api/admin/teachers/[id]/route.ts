// app/api/admin/teachers/[id]/route.ts
import { db } from "@/lib/kysely";
import { NextResponse, NextRequest } from "next/server";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const teacherId = parseInt(params.id, 10);

    // Validate params
    if (isNaN(teacherId)) {
      return NextResponse.json(
        { error: "Invalid teacher ID" },
        { status: 400 }
      );
    }

    const { name, email, subjects_ids } = await request.json();
    console.log(name, email, subjects_ids);

    // Validate req body
    if (
      !name ||
      !email ||
      !Array.isArray(subjects_ids) ||
      subjects_ids.length === 0
    ) {
      return NextResponse.json(
        { error: "Name, email and at least one subject are required" },
        { status: 400 }
      );
    }

    // Update teacher
    const updatedTeacher = await db
      .updateTable("teachers")
      .set({ name, email })
      .where("id", "=", teacherId)
      .returning(["id"])
      .executeTakeFirst();

    if (!updatedTeacher) {
      return NextResponse.json({ error: "Teacher not found" }, { status: 404 });
    }

    // Delete existing teacher-subject relationships
    await db
      .deleteFrom("teacher_subjects")
      .where("teacher_id", "=", teacherId)
      .execute();

    // Insert new teacher-subject relationships
    await db
      .insertInto("teacher_subjects")
      .values(
        subjects_ids.map((subject_id) => ({
          teacher_id: teacherId,
          subject_id: subject_id,
        }))
      )
      .execute();

    // Return 204 No Content for successful update
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("Error updating teacher:", error);

    // Unique constraint violation
    if (error instanceof Error && error.message.includes("unique constraint")) {
      return NextResponse.json(
        { error: "A teacher with this email already exists" },
        { status: 409 }
      );
    }

    // Other errors
    return NextResponse.json(
      { error: "Failed to update teacher" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const teacherId = parseInt(params.id, 10);

    // Validate params
    if (isNaN(teacherId)) {
      return NextResponse.json(
        { error: "Invalid teacher ID" },
        { status: 400 }
      );
    }

    // Delete existing teacher-subject relationships
    await db
      .deleteFrom("teacher_subjects")
      .where("teacher_id", "=", teacherId)
      .execute();

    // Delete teacher
    const deletedTeacher = await db
      .deleteFrom("teachers")
      .where("id", "=", teacherId)
      .returning(["id"])
      .executeTakeFirst();

    if (!deletedTeacher) {
      return NextResponse.json({ error: "Teacher not found" }, { status: 404 });
    }

    // Return 204 No Content for successful deletion
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("Error deleting teacher:", error);

    // Other errors
    return NextResponse.json(
      { error: "Failed to delete teacher" },
      { status: 500 }
    );
  }
}
