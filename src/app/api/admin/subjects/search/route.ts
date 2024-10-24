import { NextResponse } from "next/server";
import { db, Subject } from "@/lib/kysely";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q") ?? "";

    const baseQuery = db
      .selectFrom("subjects")
      .select(["id", "name"])
      .limit(10);

    const result = await (query
      ? baseQuery.where("name", "ilike", `%${query}%`)
      : baseQuery
    ).execute();

    const mappedResult = result.map((item: Subject) => ({
      value: item.id,
      label: item.name,
    }));

    return NextResponse.json(mappedResult);
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      return new NextResponse(null, { status: 499 });
    }

    console.error("Search error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
