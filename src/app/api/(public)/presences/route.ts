// src/app/api/presences/route.ts
import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { auth } from "@/lib/auth";

export async function POST(request: Request) {
  const session = await auth();
  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { lectureId, isPresent } = await request.json();

  try {
    const { rows } = await sql`
      INSERT INTO presences (user_id, lecture_id, is_present)
      VALUES (${session.user.id}, ${lectureId}, ${isPresent})
      ON CONFLICT (user_id, lecture_id)
      DO UPDATE SET is_present = ${isPresent}
      RETURNING id, user_id, lecture_id, is_present
    `;
    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error("Failed to record presence:", error);
    return NextResponse.json(
      { error: "Failed to record presence" },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  const session = await auth();
  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const lectureId = searchParams.get("lectureId");

  if (!lectureId) {
    return NextResponse.json(
      { error: "Lecture ID is required" },
      { status: 400 }
    );
  }

  try {
    const { rows } = await sql`
      SELECT id, user_id, lecture_id, is_present
      FROM presences
      WHERE user_id = ${session.user.id} AND lecture_id = ${lectureId}
    `;
    return NextResponse.json(rows[0] || { is_present: false });
  } catch (error) {
    console.error("Failed to fetch presence:", error);
    return NextResponse.json(
      { error: "Failed to fetch presence" },
      { status: 500 }
    );
  }
}
