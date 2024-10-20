import { Suspense } from "react";
import { TeachersTable } from "./_components/teachers-table";

async function getInitialTeachers(searchParams: {
  [key: string]: string | string[] | undefined;
}) {
  const { page, pageSize, sortBy, sortOrder, search } = searchParams;
  const params = new URLSearchParams({
    page: typeof page === "string" ? page : "1",
    pageSize: typeof pageSize === "string" ? pageSize : "10",
    sortBy: typeof sortBy === "string" ? sortBy : "name",
    sortOrder: typeof sortOrder === "string" ? sortOrder : "asc",
    ...(search && typeof search === "string" && { search }),
  });

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/admin/teachers?${params}`,
    { cache: "no-store" }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch initial teachers");
  }
  const data = await response.json();
  return data.teachers;
}

export default async function TeachersPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const initialTeachers = await getInitialTeachers(searchParams);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-primary">Admin Teachers</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <TeachersTable initialTeachers={initialTeachers} />
      </Suspense>
    </div>
  );
}
