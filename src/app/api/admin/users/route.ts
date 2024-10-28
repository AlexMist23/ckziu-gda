// route.ts
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { withAuthApi } from "@/lib/auth";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const authResult = await withAuthApi(req, ["read:User"]);
  if (!authResult.authorized) {
    return authResult.response;
  }

  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "10");
  const search = searchParams.get("search") || "";

  // Handle multiple sort parameters
  const sortBy = searchParams.getAll("sortBy[]");
  const sortOrder = searchParams.getAll("sortOrder[]");

  // Create orderBy object for multiple sorts
  const orderBy =
    sortBy.length > 0
      ? sortBy.map((field, index) => ({
          [field]: sortOrder[index] || "desc",
        }))
      : [{ createdAt: "desc" }]; // Default sort

  const skip = (page - 1) * limit;

  try {
    const [users, total] = await Promise.all([
      prisma.user.findMany({
        where: {
          OR: [
            { name: { contains: search, mode: "insensitive" } },
            { email: { contains: search, mode: "insensitive" } },
          ],
        },
        orderBy,
        skip,
        take: limit,
        select: {
          id: true,
          name: true,
          email: true,
          createdAt: true,
        },
      }),
      prisma.user.count({
        where: {
          OR: [
            { name: { contains: search, mode: "insensitive" } },
            { email: { contains: search, mode: "insensitive" } },
          ],
        },
      }),
    ]);

    return NextResponse.json({
      users,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
