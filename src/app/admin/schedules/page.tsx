import { ScheduleWithLectures, Subject } from "@/lib/kysely";
import AddScheduleButton from "./_components/add-schedule-button";
import PaginationControls from "@/components/pagination-controls";
import { SubjectsFilterSortForm } from "./_components/schedules-filter-sort-form";
import SchedulesTable from "./_components/schedules-table";
import { Card } from "@/components/ui/card";

interface getTableResponse {
  schedules: ScheduleWithLectures[];
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
    `${process.env.NEXT_PUBLIC_API_URL}/api/admin/schedules?name=${name}&sortBy=${sortBy}&order=${order}&page=${page}&limit=${limit}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
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

export default async function Page(props: {
  searchParams: Promise<{
    name?: string;
    sortBy?: string;
    order?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const { schedules, pagination } = await getTableData({ ...searchParams });
  const { subjects } = await getSubjects();
  return (
    <div className="mx-auto py-10 w-full max-w-[1000px]">
      <h1 className="text-2xl font-bold mb-5">Schedules Table</h1>
      <AddScheduleButton subjects={subjects} />
      <SubjectsFilterSortForm />
      <Card className="p-2">
        <SchedulesTable schedules={schedules} />
      </Card>

      <PaginationControls
        className="mt-2"
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
      />
    </div>
  );
}
