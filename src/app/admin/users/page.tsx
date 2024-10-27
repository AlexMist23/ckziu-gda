import { Suspense } from "react";
import { UserTable } from "./_components/UserTable";
import { TableSkeleton } from "@/components/ui/table-skeleton";

export const metadata = {
  title: "User Management",
  description: "Manage users in the education management system",
};

export default function UsersPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">User Management</h1>
      <Suspense fallback={<TableSkeleton />}>
        <UserTable />
      </Suspense>
    </div>
  );
}
