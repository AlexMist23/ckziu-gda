import { fetchHelperServer } from "@/lib/fetch-helper-server";
import { SubjectEditForm } from "@/components/admin/subject-edit-form";
import { Subject } from "@/types/db";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

export default async function EditSubjectPage({
  params,
}: {
  params: { id: string };
}) {
  const subject = (await fetchHelperServer(
    `/api/admin/subjects/${params.id}`
  )) as Subject;

  return (
    <div className="container mx-auto py-10">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/admin">Admin</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/admin/subjects">Subjects</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbPage>Edit Subject</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-2xl font-bold mb-5">Edit Subject</h1>
      <SubjectEditForm subject={subject} />
    </div>
  );
}
