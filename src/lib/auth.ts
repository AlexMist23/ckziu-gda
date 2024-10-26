// auth.ts
import NextAuth, { DefaultSession } from "next-auth";
import PostgresAdapter from "@auth/pg-adapter";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { Pool } from "@neondatabase/serverless";
import { sql } from "@vercel/postgres";

export const { handlers, auth, signIn, signOut } = NextAuth(async () => {
  const pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
  }) as unknown as import("pg").Pool;

  await pool.query(`SET search_path TO ${process.env.SCHEMA}`);

  return {
    adapter: PostgresAdapter(pool),
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
            const rolesResult = await sql`
              SELECT r.name as role_name, p.name as permission_name
              FROM users u
              JOIN user_roles ur ON u.id = ur.user_id
              JOIN role r ON ur.role_id = r.id
              LEFT JOIN role_permissions rp ON r.id = rp.role_id
              LEFT JOIN permission p ON rp.permission_id = p.id
              WHERE u.id = ${user.id}
            `;

            token.roles = [
              ...new Set(rolesResult.rows.map((row) => row.role_name)),
            ];
            token.permissions = [
              ...new Set(
                rolesResult.rows
                  .filter((row) => row.permission_name)
                  .map((row) => row.permission_name)
              ),
            ];
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
export function hasRole(session: DefaultSession, role: string): boolean {
  return session?.user?.roles?.includes(role) ?? false;
}

export function hasPermission(
  session: DefaultSession,
  permission: string
): boolean {
  return session?.user?.permissions?.includes(permission) ?? false;
}

// Middleware helper
export function withAuth(roles?: string[], permissions?: string[]) {
  return async () => {
    const session = await auth();

    if (!session) {
      return new Response("Unauthorized", { status: 401 });
    }

    if (roles && !roles.some((role) => hasRole(session, role))) {
      return new Response("Forbidden - Insufficient role", { status: 403 });
    }

    if (
      permissions &&
      !permissions.some((permission) => hasPermission(session, permission))
    ) {
      return new Response("Forbidden - Insufficient permissions", {
        status: 403,
      });
    }

    return null;
  };
}
