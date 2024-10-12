import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { auth } from "@/lib/auth";

export async function POST(request: Request) {
  const session = await auth();

  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const manualInput = await request.json();

  try {
    for (const [subjectName, hours] of Object.entries(manualInput)) {
      await sql`
        INSERT INTO manual_frequencies (user_id, subject_name, hours)
        VALUES (${session.user.id}, ${subjectName}, ${hours as string})
        ON CONFLICT (user_id, subject_name)
        DO UPDATE SET hours = EXCLUDED.hours
      `;
    }
    return NextResponse.json({
      message: "Manual frequency data saved successfully",
    });
  } catch (error) {
    console.error("Database query failed:", error);
    return NextResponse.json(
      { error: "Failed to save manual frequency data" },
      { status: 500 }
    );
  }
}
