import NextAuth from "next-auth";
import { UnstorageAdapter } from "@auth/unstorage-adapter";
import GitHub from "next-auth/providers/github";
import { createStorage } from "unstorage";
import vercelKVDriver from "unstorage/drivers/vercel-kv";

const storage = createStorage({
  driver: vercelKVDriver({
    url: process.env.KV_REST_API_URL,
    token: process.env.KV_REST_API_TOKEN,
    ttl: 60, // in seconds
  }),
});

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: UnstorageAdapter(storage),
  providers: [GitHub],
});
