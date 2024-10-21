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
import DeleteSubjectButton from "./delete-subject-button";

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
        {subjects &&
          subjects.map((subject) => (
            <TableRow key={subject.id}>
              <TableCell>{subject.name}</TableCell>
              <TableCell>
                <EditSubjectButton subject={subject} />
                <DeleteSubjectButton subject={subject} />
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}
