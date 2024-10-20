import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { auth } from "@/lib/auth";
import { TeacherWithSubjects } from "@/types/app.types";
import { TeacherResponse } from "@/types/api";

export async function GET() {
  const session = await auth();

  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { rows } = await sql<TeacherWithSubjects>`
      SELECT 
        t.id, 
        t.name, 
        t.email, 
        t.created_at,
        t.updated_at,
        json_agg(
          CASE 
            WHEN s.id IS NOT NULL THEN 
              json_build_object('id', s.id, 'name', s.name)
            ELSE NULL
          END
        ) FILTER (WHERE s.id IS NOT NULL) AS subjects
      FROM 
        teachers t
      LEFT JOIN 
        teacher_subjects ts ON t.id = ts.teacher_id
      LEFT JOIN 
        subjects s ON ts.subject_id = s.id
      GROUP BY 
        t.id, t.name, t.email, t.created_at, t.updated_at
      ORDER BY 
        t.name
    `;

    const teacherResponses: TeacherResponse[] = rows.map((row) => ({
      id: row.id,
      name: row.name,
      email: row.email,
      created_at: row.created_at,
      updated_at: row.updated_at,
      subjects: row.subjects || [],
    }));
    return NextResponse.json(teacherResponses);
  } catch (error) {
    console.error("Database query failed:", error);
    return NextResponse.json(
      { error: "Failed to fetch teachers" },
      { status: 500 }
    );
  }
}
