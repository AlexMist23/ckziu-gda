import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { withAuth } from "@/lib/auth";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const authResult = await withAuth(req, ["read:user"]);

  if (!authResult.authorized) {
    return authResult.response;
  }

  try {
    const users = await prisma.users.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        created_at: true,
      },
    });
    return NextResponse.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  const authResult = await withAuth(req, ["create:user"]);

  if (!authResult.authorized) {
    return authResult.response;
  }

  try {
    const { name, email } = await req.json();
    const newUser = await prisma.users.create({
      data: {
        name,
        email,
      },
    });
    return NextResponse.json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
