import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET() {
  try {
    const result = await sql`
      WITH table_info AS (
          SELECT 
              c.relname AS table_name,
              a.attname AS column_name,
              pg_catalog.format_type(a.atttypid, a.atttypmod) AS data_type,
              CASE 
                  WHEN a.attnotnull THEN 'NOT NULL' 
                  ELSE 'NULL' 
              END AS nullable,
              CASE
                  WHEN p.contype = 'p' THEN 'PRIMARY KEY'
                  WHEN p.contype = 'u' THEN 'UNIQUE'
                  ELSE ''
              END AS constraint_type,
              CASE
                  WHEN f.foreign_table_name IS NOT NULL 
                  THEN 'REFERENCES ' || f.foreign_table_name || '(' || f.foreign_column_name || ')'
                  ELSE ''
              END AS foreign_key_info
          FROM 
              pg_attribute a
              JOIN pg_class c ON a.attrelid = c.oid
              JOIN pg_namespace n ON c.relnamespace = n.oid
              LEFT JOIN pg_constraint p ON p.conrelid = c.oid AND a.attnum = ANY(p.conkey)
              LEFT JOIN (
                  SELECT
                      connamespace,
                      conrelid,
                      conkey,
                      confrelid,
                      confkey,
                      contype,
                      c.relname AS foreign_table_name,
                      a.attname AS foreign_column_name
                  FROM
                      pg_constraint
                      JOIN pg_class c ON c.oid = confrelid
                      JOIN pg_attribute a ON a.attrelid = c.oid AND a.attnum = confkey[1]
              ) f ON f.conrelid = c.oid AND f.conkey[1] = a.attnum
          WHERE 
              c.relkind = 'r' AND
              n.nspname = 'public' AND
              a.attnum > 0 AND
              NOT a.attisdropped
          ORDER BY 
              c.relname, 
              a.attnum
      ),
      index_info AS (
          SELECT
              tablename,
              indexname,
              indexdef
          FROM
              pg_indexes
          WHERE
              schemaname = 'public'
      )
      SELECT 
          table_name,
          json_agg(
              json_build_object(
                  'column_name', column_name,
                  'data_type', data_type,
                  'nullable', nullable,
                  'constraint_type', constraint_type,
                  'foreign_key_info', foreign_key_info
              ) ORDER BY column_name
          ) AS columns,
          COALESCE(
              (SELECT json_agg(indexdef) FROM index_info WHERE tablename = table_info.table_name),
              '[]'::json
          ) AS indexes
      FROM 
          table_info
      GROUP BY 
          table_name
      ORDER BY 
          table_name;
    `;

    return NextResponse.json(result.rows);
  } catch (error) {
    console.error("Failed to fetch database schema:", error);
    return NextResponse.json(
      { error: "Failed to fetch database schema" },
      { status: 500 }
    );
  }
}
