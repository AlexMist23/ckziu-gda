import NextAuth from "next-auth";
import PostgresAdapter from "@auth/pg-adapter";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { Pool } from "@neondatabase/serverless";

export const { handlers, auth, signIn, signOut } = NextAuth(() => {
  const pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
  }) as unknown as import("pg").Pool;

  return {
    adapter: PostgresAdapter(pool),
    providers: [GitHub, Google],
    callbacks: {
      session({ session, user }) {
        if (session.user) {
          session.user.id = user.id;
          session.user.role = user.role;
        }
        return session;
      },
    },
    pages: {
      signIn: "/auth/signin",
      error: "/auth/error",
      signOut: "/auth/signout",
    },
    trustHost: true,
  };
});
