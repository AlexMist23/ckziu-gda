import { db, Subject } from "@/lib/kysely";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const subjects: Subject[] = await db
      .selectFrom("subjects")
      .selectAll()
      .execute();
    return NextResponse.json(subjects);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Invalid subjects" }, { status: 500 });
  }
}
