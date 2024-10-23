import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Subject } from "@/lib/kysely";
import EditSubjectButton from "./edit-subject-button";
import DeleteSubjectButton from "./delete-subject--button";

interface Params {
  subjects: Subject[];
}

export default function SubjectsTable({ subjects }: Params) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {subjects && subjects.length > 0 ? (
          subjects.map((subject) => (
            <TableRow key={subject.id}>
              <TableCell>{subject.name}</TableCell>
              <TableCell className="w-24">
                <div className="flex gap-2">
                  <EditSubjectButton subject={subject} />
                  <DeleteSubjectButton subject={subject} />
                </div>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={2} className="text-center">
              No entries in the database
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
