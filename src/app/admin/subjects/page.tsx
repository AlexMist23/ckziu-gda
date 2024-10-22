import { Subject } from "@/lib/kysely";
import SubjectsTable from "./_components/subjects-table";
import AddSubjectButton from "./_components/add-subject-button";
import PaginationControls from "@/components/pagination-controls";
import { SubjectsFilterSortForm } from "./_components/subjects-filter-sort-form";
import { Card } from "@/components/ui/card";

interface SubjectsResponse {
  subjects: Subject[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
}
interface getSubjectParams {
  limit?: number;
  name?: string;
  sortBy?: string;
  order?: string;
  page?: string;
}
async function getSubjects({
  limit = 10,
  name = "",
  page = "1",
  sortBy = "name",
  order = "asc",
}: getSubjectParams): Promise<SubjectsResponse> {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/admin/subjects?name=${name}&sortBy=${sortBy}&order=${order}&page=${page}&limit=${limit}`,
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

export default async function SubjectsPage(
  props: {
    searchParams: Promise<{
      name?: string;
      sortBy?: string;
      order?: string;
      page?: string;
    }>;
  }
) {
  const searchParams = await props.searchParams;
  // const { page, name, sortBy, order } = searchParams;
  const { subjects, pagination } = await getSubjects({ ...searchParams });
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Subjects Management</h1>
      <AddSubjectButton />
      <SubjectsFilterSortForm />
      <Card className="p-2">
        <SubjectsTable subjects={subjects} />
      </Card>

      <PaginationControls
        className="mt-2"
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
      />
    </div>
  );
}
