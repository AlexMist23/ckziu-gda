import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Subject, TeacherWithSubjects } from "@/lib/kysely";
import EditTeacherButton from "./edit-teacher-button";
import DeleteTeacherButton from "./delete-teacher-button";
import { Badge } from "@/components/ui/badge";

interface Params {
  teachers: TeacherWithSubjects[];
  subjects: Subject[];
  className?: string;
}

export default function TeachersTable({
  teachers,
  subjects,
  className,
}: Params) {
  return (
    <Table className={className}>
      <TableHeader>
        <TableRow>
          <TableHead>Id</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>E-mail</TableHead>
          <TableHead>Subjects</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {teachers && teachers.length > 0 ? (
          teachers.map((teacher) => (
            <TableRow key={teacher.id}>
              <TableCell className="text-muted-foreground">
                {teacher.id}
              </TableCell>
              <TableCell>{teacher.name}</TableCell>
              <TableCell>{teacher.email}</TableCell>
              <TableCell className="">
                <div className="flex flex-wrap gap-1">
                  {teacher.subjects &&
                    teacher.subjects.length > 0 &&
                    teacher.subjects.map((subject) => (
                      <Badge
                        variant={"secondary"}
                        key={`${teacher.id}/${subject.id}`}
                      >
                        {subject.name}
                      </Badge>
                    ))}
                </div>
              </TableCell>
              <TableCell className="w-24">
                <div className="flex gap-2">
                  <EditTeacherButton teacher={teacher} subjects={subjects} />
                  <DeleteTeacherButton teacher={teacher} />
                </div>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={4} className="text-center">
              No entries in the database
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
