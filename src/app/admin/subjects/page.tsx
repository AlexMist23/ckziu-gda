import { fetchHelperServer } from "@/lib/fetch-helper-server";
import { SubjectList } from "@/components/admin/subject-list";
import { Subject } from "@/types/types";

interface SubjectsResponse {
  subjects: Subject[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
  };
}

export default async function SubjectsAdminPage() {
  let subjects: Subject[] = [];
  let pagination = {
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
  };

  try {
    const response = (await fetchHelperServer(
      "/api/admin/subjects?page=1"
    )) as SubjectsResponse;
    if (response && Array.isArray(response.subjects)) {
      subjects = response.subjects;
      pagination = response.pagination;
    } else {
      console.error("Invalid response format:", response);
    }
  } catch (error) {
    console.error("Error fetching subjects:", error);
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Manage Subjects</h1>
      <SubjectList initialSubjects={subjects} initialPagination={pagination} />
    </div>
  );
}
