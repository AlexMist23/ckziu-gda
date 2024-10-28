import { Suspense } from "react";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { UsersTable } from "./_components/table/table";
import { DataTableSkeleton } from "@/components/data-table/data-table-skeleton";
import { fetchUsers } from "@/lib/api/users";
import { getQueryClient } from "@/lib/query-client";
import { SearchParams } from "next/dist/server/request/search-params";

export const metadata = {
  title: "User Management",
  description: "Manage users in the admin panel",
};

export default async function UsersPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const queryClient = getQueryClient();

  const params = await searchParams;
  await queryClient.prefetchQuery({
    queryKey: ["users", params],
    queryFn: () => fetchUsers(params),
  });

  return (
    <div className="container mx-auto py-10">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense
          fallback={<DataTableSkeleton columnCount={5} rowCount={10} />}
        >
          <UsersTable />
        </Suspense>
      </HydrationBoundary>
    </div>
  );
}
