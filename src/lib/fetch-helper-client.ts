export async function fetchHelperClient<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(path, {
    ...options,
    headers: {
      ...options.headers,
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
  }

  return res.json() as Promise<T>;
}

export const getHelperClient = <T>(
  path: string,
  options?: Omit<RequestInit, "method">
) => fetchHelperClient<T>(path, { ...options, method: "GET" });

export const postHelperClient = <T>(
  path: string,
  body: Record<string, unknown>,
  options?: Omit<RequestInit, "method" | "body">
) =>
  fetchHelperClient<T>(path, {
    ...options,
    method: "POST",
    body: JSON.stringify(body),
  });

export const putHelperClient = <T>(
  path: string,
  body: Record<string, unknown>,
  options?: Omit<RequestInit, "method" | "body">
) =>
  fetchHelperClient<T>(path, {
    ...options,
    method: "PUT",
    body: JSON.stringify(body),
  });

export const deleteHelperClient = <T>(
  path: string,
  options?: Omit<RequestInit, "method">
) => fetchHelperClient<T>(path, { ...options, method: "DELETE" });

export const patchHelperClient = <T>(
  path: string,
  body: Record<string, unknown>,
  options?: Omit<RequestInit, "method" | "body">
) =>
  fetchHelperClient<T>(path, {
    ...options,
    method: "PATCH",
    body: JSON.stringify(body),
  });
