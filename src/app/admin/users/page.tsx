import { UserList } from "@/components/admin/user-list";
import { fetchHelperServer } from "@/lib/fetch-helper-server";

export default async function UsersPage() {
  const { users, pagination } = await fetchHelperServer("/api/admin/users");

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Manage Users</h1>
      <UserList initialUsers={users} initialPagination={pagination} />
    </div>
  );
}
