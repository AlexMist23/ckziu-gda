"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "@/hooks/use-toast";
import { deleteHelperClient } from "@/lib/fetch-helper-client";
import { Subject } from "@/types/db";
import { SubjectForm } from "./subject-form";

interface SubjectListProps {
  initialSubjects: Subject[];
}

export function SubjectList({ initialSubjects }: SubjectListProps) {
  const [subjects, setSubjects] = useState(initialSubjects);
  const [deleting, setDeleting] = useState<number | null>(null);

  const handleDelete = async (id: number) => {
    setDeleting(id);
    try {
      await deleteHelperClient(`/api/admin/subjects/${id}`);
      setSubjects(subjects.filter((subject) => subject.id !== id));
      toast({
        title: "Success",
        description: "Subject deleted successfully",
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to delete subject",
        variant: "destructive",
      });
    }
    setDeleting(null);
  };

  const handleSubjectAdded = (newSubject: Subject) => {
    setSubjects([...subjects, newSubject]);
  };

  return (
    <div>
      <SubjectForm onSubjectAdded={handleSubjectAdded} />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Updated At</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {subjects.map((subject) => (
            <TableRow key={subject.id}>
              <TableCell>{subject.name}</TableCell>
              <TableCell>
                {new Date(subject.created_at).toLocaleString()}
              </TableCell>
              <TableCell>
                {new Date(subject.updated_at).toLocaleString()}
              </TableCell>
              <TableCell>
                <div className="space-x-2">
                  <Link href={`/admin/subjects/${subject.id}/edit`} passHref>
                    <Button variant="outline">Edit</Button>
                  </Link>
                  <Button
                    variant="destructive"
                    onClick={() => handleDelete(subject.id)}
                    disabled={deleting === subject.id}
                  >
                    {deleting === subject.id ? "Deleting..." : "Delete"}
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
