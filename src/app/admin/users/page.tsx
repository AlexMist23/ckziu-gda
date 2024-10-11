import { fetchHelperServer } from "@/lib/fetch-helper-server";
import { UserList } from "@/components/admin/user-list";
import { User } from "@/types/db";

export default async function UsersAdminPage() {
  const users = (await fetchHelperServer("/api/admin/users")) as User[];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Manage Users</h1>
      <UserList initialUsers={users} />
    </div>
  );
}
