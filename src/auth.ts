import NextAuth, { NextAuthConfig } from "next-auth";
import PostgresAdapter from "@auth/pg-adapter";
import GitHub from "next-auth/providers/github";
import { Pool } from "@neondatabase/serverless";

export const authConfig: NextAuthConfig = {
  adapter: PostgresAdapter(
    new Pool({
      connectionString: process.env.POSTGRES_URL,
    }) as unknown as import("pg").Pool
  ),
  providers: [GitHub],
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
        session.user.role = user.role;
      }
      return session;
    },
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);
