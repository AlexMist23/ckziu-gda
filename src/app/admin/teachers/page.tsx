import { fetchHelperServer } from "@/lib/fetch-helper-server";
import { TeacherList } from "@/components/admin/teacher-list";
import { Teacher } from "@/types/types";

interface TeachersResponse {
  teachers: Teacher[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
  };
}

export default async function TeachersAdminPage() {
  let teachers: Teacher[] = [];
  let pagination = {
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
  };

  try {
    const response = (await fetchHelperServer(
      "/api/admin/teachers?page=1"
    )) as TeachersResponse;
    if (response && Array.isArray(response.teachers)) {
      teachers = response.teachers;
      pagination = response.pagination;
    } else {
      console.error("Invalid response format:", response);
    }
  } catch (error) {
    console.error("Error fetching teachers:", error);
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Manage Teachers</h1>
      <TeacherList initialTeachers={teachers} initialPagination={pagination} />
    </div>
  );
}
