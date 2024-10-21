import { db, Subject } from "@/lib/kysely";
import { NextResponse, NextRequest } from "next/server";

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

export async function POST(request: NextRequest) {
  try {
    const { name } = await request.json();
    console.log(name);
    if (!name) {
      return NextResponse.json(
        { error: "Invalid request values" },
        { status: 500 }
      );
    }

    await db.insertInto("subjects").values({ name }).execute();
    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to add subject" },
      { status: 500 }
    );
  }
}
