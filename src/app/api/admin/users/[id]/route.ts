import { db } from "@/lib/kysely";
import { NextResponse, NextRequest } from "next/server";

export async function PUT(
  request: NextRequest,
  props: { params: Promise<{ id: string }> }
) {
  const params = await props.params;
  try {
    const userId = parseInt(params.id, 10);

    // Validate params
    if (isNaN(userId)) {
      return NextResponse.json({ error: "Invalid user Id" }, { status: 400 });
    }
    const { name, role } = await request.json();

    // Validate req body
    if (!name || !role) {
      return NextResponse.json(
        { error: "Name and role are required" },
        { status: 400 }
      );
    }

    // Update Table
    const updatedUser = await db
      .updateTable("users")
      .set({ name, role })
      .where("id", "=", userId)
      .returning(["id"])
      .executeTakeFirst();

    if (!updatedUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Return 204 No Content for successful update
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("Error updating user:", error);

    // Other errors
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  props: { params: Promise<{ id: string }> }
) {
  const params = await props.params;
  try {
    const userId = parseInt(params.id, 10);

    // Validate params
    if (isNaN(userId)) {
      return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
    }

    // Delete user
    const deletedUser = await db
      .deleteFrom("users")
      .where("id", "=", userId)
      .returning(["id"])
      .executeTakeFirst();

    if (!deletedUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Return 204 No Content for successful deletion
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("Error deleting user:", error);

    // Other errors
    return NextResponse.json(
      { error: "Failed to delete user" },
      { status: 500 }
    );
  }
}
