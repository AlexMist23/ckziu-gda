import { Suspense } from "react";
import SubjectsTable from "./_components/subjects-table";
import { db } from "@/lib/kysely";

async function getInitialSubjects() {
  const subjects = await db
    .selectFrom("subjects")
    .selectAll()
    .limit(10)
    .execute();
  return subjects;
}

export default async function SubjectsPage() {
  const initialSubjects = await getInitialSubjects();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-primary">Admin Subjects</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <SubjectsTable initialSubjects={initialSubjects} />
      </Suspense>
    </div>
  );
}
