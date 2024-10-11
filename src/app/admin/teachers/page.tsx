import { fetchHelperServer } from "@/lib/fetch-helper-server";
import { TeacherList } from "@/components/admin/teacher-list";
import { Teacher } from "@/types/db";

interface TeacherWithSubjectName extends Teacher {
  subject_name: string | null;
}

export default async function TeachersAdminPage() {
  const teachers = (await fetchHelperServer(
    "/api/admin/teachers"
  )) as TeacherWithSubjectName[];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Manage Teachers</h1>
      <TeacherList initialTeachers={teachers} />
    </div>
  );
}
