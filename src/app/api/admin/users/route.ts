import { withAuth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { ApiResponse, ApiError } from "@/types/api";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Prisma } from "@prisma/client";

// Query parameters validation schema
const QuerySchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(10),
  sort: z.enum(["name", "email", "created_at"]).default("created_at"),
  order: z.enum(["asc", "desc"]).default("desc"),
  search: z.string().optional(),
  role: z.string().optional(),
});

// New user validation schema
const CreateUserSchema = z.object({
  name: z.string().min(2).max(255),
  email: z.string().email().max(255),
  roles: z.array(z.number()).optional(), // role IDs
});

export async function GET(request: NextRequest) {
  // Check authentication and permissions
  const authResult = await withAuth(["read:user"])();
  if (authResult) return authResult;

  try {
    const { searchParams } = new URL(request.url);

    // Validate and parse query parameters
    const queryResult = QuerySchema.safeParse({
      page: searchParams.get("page"),
      limit: searchParams.get("limit"),
      sort: searchParams.get("sort"),
      order: searchParams.get("order"),
      search: searchParams.get("search"),
      role: searchParams.get("role"),
    });

    if (!queryResult.success) {
      return NextResponse.json(
        {
          code: "INVALID_QUERY_PARAMETERS",
          message: "Invalid query parameters",
          details: queryResult.error.flatten(),
        },
        { status: 400 }
      );
    }

    const { page, limit, sort, order, search, role } = queryResult.data;
    const skip = (page - 1) * limit;

    // Build where clause based on search and role filter
    const where: Prisma.usersWhereInput = {};

    if (search) {
      where.OR = [
        {
          name: {
            contains: search,
            mode: "insensitive" as Prisma.QueryMode,
          },
        },
        {
          email: {
            contains: search,
            mode: "insensitive" as Prisma.QueryMode,
          },
        },
      ];
    }

    if (role) {
      where.user_roles = {
        some: {
          role: {
            name: role,
          },
        },
      };
    }

    // Execute queries in parallel
    const [users, total] = await Promise.all([
      prisma.users.findMany({
        where,
        select: {
          id: true,
          name: true,
          email: true,
          emailVerified: true,
          image: true,
          created_at: true,
          user_roles: {
            select: {
              role: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
        skip,
        take: limit,
        orderBy: { [sort]: order },
      }),
      prisma.users.count({ where }),
    ]);

    // Format users to include roles as an array of strings
    const formattedUsers = users.map((user) => ({
      ...user,
      roles: user.user_roles.map((ur) => ur.role.name),
      user_roles: undefined,
    }));

    // Calculate pagination metadata
    const hasMore = skip + users.length < total;
    // const totalPages = Math.ceil(total / limit);

    // Construct response with HATEOAS links
    const response: ApiResponse<typeof formattedUsers> = {
      data: formattedUsers,
      meta: {
        page,
        limit,
        total,
        hasMore,
      },
      links: {
        self: `/api/admin/users?page=${page}&limit=${limit}`,
        next: hasMore
          ? `/api/admin/users?page=${page + 1}&limit=${limit}`
          : undefined,
        prev:
          page > 1
            ? `/api/admin/users?page=${page - 1}&limit=${limit}`
            : undefined,
      },
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json<ApiError>(
      {
        code: "INTERNAL_SERVER_ERROR",
        message: "An error occurred while fetching users",
        path: "/api/admin/users",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  // Check authentication and permissions
  const authResult = await withAuth(["CREATE_USERS"])();
  if (authResult) return authResult;

  try {
    const json = await request.json();

    // Validate request body
    const bodyResult = CreateUserSchema.safeParse(json);

    if (!bodyResult.success) {
      return NextResponse.json<ApiError>(
        {
          code: "INVALID_REQUEST_BODY",
          message: "Invalid request body",
          details: bodyResult.error.flatten(),
        },
        { status: 400 }
      );
    }

    const { name, email, roles } = bodyResult.data;

    // Check if email already exists
    const existingUser = await prisma.users.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json<ApiError>(
        {
          code: "EMAIL_EXISTS",
          message: "A user with this email already exists",
        },
        { status: 409 }
      );
    }

    // Create user with roles in a transaction
    const user = await prisma.$transaction(async (tx) => {
      const newUser = await tx.users.create({
        data: {
          name,
          email,
          user_roles: roles
            ? {
                create: roles.map((roleId) => ({
                  role: { connect: { id: roleId } },
                })),
              }
            : undefined,
        },
        include: {
          user_roles: {
            include: {
              role: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
      });

      return {
        ...newUser,
        roles: newUser.user_roles.map((ur) => ur.role.name),
        user_roles: undefined,
      };
    });

    const response: ApiResponse<typeof user> = {
      data: user,
      links: {
        self: `/api/admin/users/${user.id}`,
      },
    };

    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json<ApiError>(
      {
        code: "INTERNAL_SERVER_ERROR",
        message: "An error occurred while creating the user",
        path: "/api/admin/users",
      },
      { status: 500 }
    );
  }
}
