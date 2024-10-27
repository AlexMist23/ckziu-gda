import { Suspense } from "react";
import { UserTable } from "./_components/user-table/table";
import { TableSkeleton } from "@/components/ui/table-skeleton";
import { withAuthPage } from "@/lib/auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "User Management",
  description: "Manage users in the education management system",
};

export default async function UsersPage() {
  const hasAccess = await withAuthPage(["read:user"]);

  if (!hasAccess) {
    redirect("/unauthorized");
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">User Management</h1>
      <Suspense fallback={<TableSkeleton />}>
        <UserTable />
      </Suspense>
    </div>
  );
}
