import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET() {
  try {
    const start = performance.now();
    const { rows } = await sql`
      SELECT 
        id
      FROM 
        users 
      LIMIT 100
    `;
    const end = performance.now();

    const queryTime = end - start;
    const rowCount = rows.length;

    // Store the metrics
    await sql`
      INSERT INTO database_metrics (query_time, row_count)
      VALUES (${queryTime}, ${rowCount})
    `;

    // Retrieve the last 20 metrics
    const { rows: metricRows } = await sql`
      SELECT timestamp, query_time, row_count
      FROM database_metrics
      ORDER BY timestamp DESC
      LIMIT 20
    `;

    // Format the data for the frontend
    const formattedData = metricRows.map((row) => ({
      timestamp: row.timestamp.toISOString(),
      queryTime: parseFloat(row.query_time),
      rowCount: parseInt(row.row_count),
    }));

    console.log("API response data:", formattedData);

    return NextResponse.json(formattedData.reverse());
  } catch (error) {
    console.error("Error fetching database status:", error);
    return NextResponse.json(
      { error: "Failed to fetch database status" },
      { status: 500 }
    );
  }
}
