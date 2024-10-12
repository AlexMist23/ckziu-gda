import { fetchHelperServer } from "@/lib/fetch-helper-server";
import { TeacherEditForm } from "@/components/admin/teacher-edit-form";
import { Teacher } from "@/types/db";

export default async function EditTeacherPage({
  params,
}: {
  params: { id: string };
}) {
  const teacher = (await fetchHelperServer(
    `/api/admin/teachers/${params.id}`
  )) as Teacher;

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Edit Teacher</h1>
      <TeacherEditForm teacher={teacher} />
    </div>
  );
}
