import NextAuth, { DefaultSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const { handlers, auth, signIn, signOut } = NextAuth(async () => {
  return {
    adapter: PrismaAdapter(prisma),
    providers: [
      GitHub({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
      Google({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
      }),
    ],
    callbacks: {
      async jwt({ token, user, trigger, session }) {
        if (trigger === "update" && session?.name) {
          token.name = session.name;
        }

        if (user?.id) {
          token.id = user.id;
          try {
            const userWithRoles = await prisma.user.findUnique({
              where: { id: user.id },
              include: {
                userRoles: {
                  include: {
                    role: {
                      include: {
                        rolePermissions: {
                          include: {
                            permission: true,
                          },
                        },
                      },
                    },
                  },
                },
              },
            });

            if (userWithRoles) {
              token.roles = [
                ...new Set(userWithRoles.userRoles.map((ur) => ur.role.name)),
              ];
              token.permissions = [
                ...new Set(
                  userWithRoles.userRoles.flatMap((ur) =>
                    ur.role.rolePermissions.map((rp) => rp.permission.name)
                  )
                ),
              ];
            } else {
              token.roles = [];
              token.permissions = [];
            }
          } catch (error) {
            console.error("Error fetching user roles:", error);
            token.roles = [];
            token.permissions = [];
          }
        }
        return token;
      },
      async session({ session, token }) {
        if (session.user && token) {
          session.user.id = token.id as string;
          session.user.roles = (token.roles as string[]) ?? [];
          session.user.permissions = (token.permissions as string[]) ?? [];
        }
        return session;
      },
    },
    pages: {
      signIn: "/auth/signin",
      error: "/auth/error",
      signOut: "/auth/signout",
    },
    events: {
      async signIn({ user }) {
        console.log(`User signed in: ${user.email}`);
      },
    },
    trustHost: true,
    session: {
      strategy: "jwt",
    },
  };
});

// Utility functions for checking permissions
export function hasRole(session: DefaultSession | null, role: string): boolean {
  if (!session) return false;
  return session?.user?.roles?.includes(role) ?? false;
}

export function hasPermission(
  session: DefaultSession | null,
  permission: string
): boolean {
  if (!session) return false;
  return session?.user?.permissions?.includes(permission) ?? false;
}

// Middleware helper
export async function withAuth(req: NextRequest, permissions?: string[]) {
  const session = await auth();

  if (!session) {
    return {
      authorized: false,
      response: NextResponse.json({ error: "Unauthorized" }, { status: 401 }),
    };
  }
  if (permissions && permissions.length > 0) {
    const hasRequiredPermission = permissions.some((permission) =>
      session.user?.permissions?.includes(permission)
    );

    if (!hasRequiredPermission) {
      return {
        authorized: false,
        response: NextResponse.json(
          { error: "Insufficient permissions" },
          { status: 403 }
        ),
      };
    }
  }

  return { authorized: true, session, req };
}

export async function withAuthPage(permissions?: string[]): Promise<boolean> {
  const session = await auth();
  if (!session) {
    return false;
  }

  if (permissions && permissions.length > 0) {
    return permissions.some((permission) => hasPermission(session, permission));
  }

  return true;
}
