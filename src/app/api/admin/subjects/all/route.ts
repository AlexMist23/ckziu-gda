import { db } from "@/lib/kysely";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const subjects = await db
      .selectFrom("subjects")
      .select(["id", "name"])
      .execute();

    return NextResponse.json({
      subjects,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch subjects" },
      { status: 500 }
    );
  }
}
