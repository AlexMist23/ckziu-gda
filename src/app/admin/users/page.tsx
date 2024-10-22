import { User } from "@/lib/kysely";
import PaginationControls from "@/components/pagination-controls";
import { UsersFilterSortForm } from "./_components/users-filter-sort-form";
import UsersTable from "./_components/users-table";
import { Card } from "@/components/ui/card";

interface getTableResponse {
  users: User[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
}
async function getTableData({
  limit = 10,
  name = "",
  page = "1",
  sortBy = "name",
  order = "asc",
}): Promise<getTableResponse> {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/admin/users?name=${name}&sortBy=${sortBy}&order=${order}&page=${page}&limit=${limit}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
      cache: "no-store",
    }
  );
  if (!data.ok) {
    throw new Error("Failed to fetch users");
  }
  return await data.json();
}

export default async function Page({
  searchParams,
}: {
  searchParams: {
    name?: string;
    sortBy?: string;
    order?: string;
    page?: string;
  };
}) {
  const { users, pagination } = await getTableData({ ...searchParams });
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Users Table</h1>
      {
        // <UsersFilterSortForm />
      }
      <Card className="p-2">
        <UsersTable users={users} />
      </Card>
      <PaginationControls
        className="mt-2"
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
      />
    </div>
  );
}
