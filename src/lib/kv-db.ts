import vercelKVDriver from "unstorage/drivers/vercel-kv";
import { createStorage } from "unstorage";

export const storage = createStorage({
  driver: vercelKVDriver({
    url: process.env.KV_REST_API_URL,
    token: process.env.KV_REST_API_TOKEN,
    ttl: 60, // in seconds
  }),
});
