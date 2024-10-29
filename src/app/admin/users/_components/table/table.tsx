"use client";

import { useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { DataTable } from "@/components/data-table";
import { columns } from "./columns";
import { fetchUsers } from "@/lib/api/users";

export function UsersTable() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const getSearchParam = useCallback(
    (param: string) => searchParams.get(param),
    [searchParams]
  );

  const page = Number(getSearchParam("page"));
  const pageSize = Number(getSearchParam("pageSize")) || 10;
  const sortBy = getSearchParam("sortBy") as string | undefined;
  const sortOrder = getSearchParam("sortOrder") as "asc" | "desc" | undefined;
  const filters = {
    name: getSearchParam("name") || undefined,
    email: getSearchParam("email") || undefined,
    role: getSearchParam("role") || undefined,
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["users", { ...searchParams }],
    queryFn: () =>
      fetchUsers({ page, pageSize, sortBy, sortOrder, ...filters }),
  });

  const handlePageChange = useCallback(
    (newPage: number) => {
      const params = new URLSearchParams(searchParams);
      params.set("page", newPage.toString());
      router.push(`?${params.toString()}`);
    },
    [router, searchParams]
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading users</div>;

  return (
    <DataTable
      columns={columns}
      data={data?.users ?? []}
      onPaginationChange={handlePageChange}
      totalPages={data?.totalPages ?? 1}
    />
  );
}
