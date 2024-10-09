import NextAuth from "next-auth";
import { UnstorageAdapter } from "@auth/unstorage-adapter";
import GitHub from "next-auth/providers/github";
import { storage } from "./kv-db";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: UnstorageAdapter(storage),
  providers: [GitHub],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "github") {
        const existingUser = await storage.getItem(`user:${user.id}`);
        if (!existingUser) {
          // Set default role for new users
          user.role = "USER";
          await storage.setItem(`user:${user.id}`, JSON.stringify(user));
        }
      }
      return true;
    },
    async session({ session, user }) {
      if (session?.user) {
        session.user.role = user.role;
      }
      return session;
    },
  },
  theme: {
    brandColor: "#ea580b",
  },
  pages: {},
});

// Type declaration for extended session
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: string;
    };
  }
}
