import { Subject } from "@/lib/kysely";
import SubjectsTable from "./_components/table";
import AddSubjectButton from "./_components/add-button";
import PaginationControls from "./_components/pagination-controls";

interface SubjectsResponse {
  subjects: Subject[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
}

async function getSubjects(
  page: number = 1,
  limit: number = 10
): Promise<SubjectsResponse> {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/admin/subjects?page=${page}&limit=${limit}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
      cache: "no-store",
    }
  );
  if (!data.ok) {
    throw new Error("Failed to fetch subjects");
  }
  return await data.json();
}

export default async function SubjectsPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = parseInt(searchParams.page || "1", 10);
  const { subjects, pagination } = await getSubjects(page);
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Subjects Management</h1>
      <AddSubjectButton />
      <SubjectsTable subjects={subjects} />
      <PaginationControls
        className="mt-2"
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
      />
    </div>
  );
}
