import NextAuth from "next-auth";
import PostgresAdapter from "@auth/pg-adapter";
import { Pool } from "@neondatabase/serverless";
import GitHub from "next-auth/providers/github";

export const { handlers, auth, signIn, signOut } = NextAuth(() => {
  const pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
  }) as unknown as import("pg").Pool;

  return {
    adapter: PostgresAdapter(pool),
    providers: [GitHub],
  };
});
