import { Subject } from "@/lib/kysely";
import SubjectsTable from "./_components/subjects-table";
import AddSubjectButton from "./_components/add-subject-button";

async function getSubjects(): Promise<Subject[]> {
  const data = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/admin/subjects",
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

export default async function SubjectsPage() {
  const subjects = await getSubjects();
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Subjects Management</h1>
      <AddSubjectButton />
      <SubjectsTable subjects={subjects} />
    </div>
  );
}
