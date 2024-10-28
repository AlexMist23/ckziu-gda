import { User } from "@prisma/client";

interface FetchUsersParams {
  page?: string | string[];
  pageSize?: string | string[];
  sortBy?: string | string[];
  sortOrder?: string | string[];
  name?: string | string[];
  email?: string | string[];
  role?: string | string[];
}

interface FetchUsersResponse {
  users: (User & { role: string })[];
  totalPages: number;
  totalUsers: number;
}

export async function fetchUsers(
  params: FetchUsersParams
): Promise<FetchUsersResponse> {
  const searchParams = new URLSearchParams();

  // Helper function to add param if it exists and is a string
  const addParam = (key: string, value: string | string[] | undefined) => {
    if (value !== undefined && typeof value === "string") {
      searchParams.append(key, value);
    }
  };

  addParam("page", params.page);
  addParam("pageSize", params.pageSize);
  addParam("sortBy", params.sortBy);
  addParam("sortOrder", params.sortOrder);
  addParam("name", params.name);
  addParam("email", params.email);
  addParam("role", params.role);

  const res = await fetch(`/api/admin/users?${searchParams.toString()}`, {
    cache: "force-cache",
    next: { tags: ["model:users"] },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }
  return res.json();
}
