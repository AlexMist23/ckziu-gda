import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Subject } from "@/lib/kysely";

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
            <TableRow key={+subject.id}>
              <TableCell>{subject.name}</TableCell>
              <TableCell>
                <Button size={"sm"} variant={"outline"}>
                  Edit
                </Button>
                <Button size={"sm"} variant={"destructive"}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}
