import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { auth } from "@/lib/auth";

export async function GET() {
  const session = await auth();

  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { rows } = await sql`
      SELECT 
        t.id, 
        t.name, 
        t.email, 
        json_agg(json_build_object('id', s.id, 'name', s.name)) AS subjects
      FROM 
        teachers t
      LEFT JOIN 
        teacher_subjects ts ON t.id = ts.teacher_id
      LEFT JOIN 
        subjects s ON ts.subject_id = s.id
      GROUP BY 
        t.id, t.name, t.email
      ORDER BY 
        t.name
    `;

    console.log("Teachers data:", rows);

    return NextResponse.json(rows);
  } catch (error) {
    console.error("Database query failed:", error);
    return NextResponse.json(
      { error: "Failed to fetch teachers" },
      { status: 500 }
    );
  }
}
