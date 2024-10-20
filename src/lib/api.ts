interface FetchUsersParams {
  page: number;
  limit: number;
  sort: string;
  order: "asc" | "desc";
  search: string;
}

export async function fetchUsers(params: FetchUsersParams) {
  const queryParams = new URLSearchParams({
    page: params.page.toString(),
    limit: params.limit.toString(),
    sort: params.sort,
    order: params.order,
    search: params.search,
  });

  const response = await fetch(`/api/admin/users?${queryParams}`);
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
}
