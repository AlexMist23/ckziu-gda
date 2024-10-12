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
        CASE 
          WHEN s.name LIKE 'Język angielski gr.%' THEN 'Język angielski'
          ELSE s.name 
        END AS subject_name,
        SUM(CASE WHEN p.is_present THEN 1 ELSE 0 END) AS attended_hours,
        COUNT(DISTINCT l.id) AS scheduled_hours
      FROM 
        subjects s
      LEFT JOIN 
        lectures l ON s.id = l.subject_id
      LEFT JOIN 
        presences p ON l.id = p.lecture_id AND p.user_id = ${session.user.id}
      GROUP BY 
        CASE 
          WHEN s.name LIKE 'Język angielski gr.%' THEN 'Język angielski'
          ELSE s.name 
        END
      ORDER BY 
        CASE 
          WHEN s.name LIKE 'Język angielski gr.%' THEN 'Język angielski'
          ELSE s.name 
        END
    `;
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Database query failed:", error);
    return NextResponse.json(
      { error: "Failed to fetch frequency data" },
      { status: 500 }
    );
  }
}
