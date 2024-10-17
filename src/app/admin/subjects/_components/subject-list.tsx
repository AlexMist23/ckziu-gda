import { Subject } from "@/types/db.types";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type SubjectListProps = {
  subjects: Subject[];
  onEdit: (subject: Subject) => void;
  onDelete: (id: number) => void;
};

export function SubjectList({ subjects, onEdit, onDelete }: SubjectListProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-foreground">ID</TableHead>
          <TableHead className="text-foreground">Name</TableHead>
          <TableHead className="text-foreground">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {subjects.map((subject) => (
          <TableRow key={subject.id}>
            <TableCell className="text-foreground">{subject.id}</TableCell>
            <TableCell className="text-foreground">{subject.name}</TableCell>
            <TableCell>
              <Button
                variant="outline"
                className="mr-2 border-border text-foreground"
                onClick={() => onEdit(subject)}
              >
                Edit
              </Button>
              <Button
                variant="destructive"
                className="bg-destructive text-destructive-foreground"
                onClick={() => onDelete(subject.id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
