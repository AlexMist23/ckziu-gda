import { fetchHelperServer } from "@/lib/fetch-helper-server";
import { SubjectList } from "@/components/admin/subject-list";
import { Subject } from "@/types/db";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

export default async function SubjectsAdminPage() {
  const subjects = (await fetchHelperServer(
    "/api/admin/subjects"
  )) as Subject[];

  return (
    <div className="container mx-auto py-10">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/admin">Admin</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbPage>Subjects</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-2xl font-bold mb-5">Manage Subjects</h1>
      <SubjectList initialSubjects={subjects} />
    </div>
  );
}
