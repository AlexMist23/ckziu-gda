import { Subject, TeacherWithSubjects } from "@/lib/kysely";
import AddSubjectButton from "./_components/add-teacher-button";
import PaginationControls from "@/components/pagination-controls";
import { SubjectFilterSortForm } from "./_components/teachers-filter-sort-form";
import TeachersTable from "./_components/teachers-table";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface getTableResponse {
  teachers: TeacherWithSubjects[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
}
interface getTableDataParams {
  limit?: number;
  name?: string;
  sortBy?: string;
  order?: string;
  page?: string;
}
interface getSubjectsParams {
  subjects: Subject[];
}
async function getTableData({
  limit = 10,
  name = "",
  page = "1",
  sortBy = "name",
  order = "asc",
}: getTableDataParams): Promise<getTableResponse> {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/admin/teachers?name=${name}&sortBy=${sortBy}&order=${order}&page=${page}&limit=${limit}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
      cache: "no-store",
    }
  );
  if (!data.ok) {
    throw new Error("Failed to fetch teachers");
  }
  return await data.json();
}

async function getSubjects(): Promise<getSubjectsParams> {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/admin/subjects/all`,
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
  const { teachers, pagination } = await getTableData({ ...searchParams });
  const { subjects } = await getSubjects();
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Teachers Table</h1>
      {subjects && subjects.length > 0 ? (
        <AddSubjectButton subjects={subjects} />
      ) : (
        <>
          <Button>Add Teacher</Button> <p>Add subjects first!</p>
        </>
      )}
      <SubjectFilterSortForm />
      <Card className="p-2">
        <TeachersTable teachers={teachers} subjects={subjects} />
      </Card>

      <PaginationControls
        className="mt-2"
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
      />
    </div>
  );
}
