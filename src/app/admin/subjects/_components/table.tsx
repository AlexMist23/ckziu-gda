import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Subject } from "@/lib/kysely";
import EditSubjectButton from "./edit-button";
import DeleteSubjectButton from "./delete-button";

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
                <EditSubjectButton subject={subject} />
                <DeleteSubjectButton subject={subject} />
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
