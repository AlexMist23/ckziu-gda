import { headers } from "next/headers";

export async function fetchHelperServer(
  path: string,
  options: RequestInit = {}
) {
  const headersList = await headers();
  const domain = headersList.get("host") || "";
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";

  const url = `${protocol}://${domain}${path}`;

  const res = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      ...Object.fromEntries(headersList),
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
  }

  return res.json();
}
