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
import { Teacher } from "@/types/db";
import { TeacherForm } from "./teacher-form";

interface TeacherListProps {
  initialTeachers: (Teacher & { subject_name: string | null })[];
}

export function TeacherList({ initialTeachers }: TeacherListProps) {
  const [teachers, setTeachers] = useState(initialTeachers);
  const [deleting, setDeleting] = useState<number | null>(null);

  const handleDelete = async (id: number) => {
    setDeleting(id);
    try {
      await deleteHelperClient(`/api/admin/teachers/${id}`);
      setTeachers(teachers.filter((teacher) => teacher.id !== id));
      toast({
        title: "Success",
        description: "Teacher deleted successfully",
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to delete teacher",
        variant: "destructive",
      });
    }
    setDeleting(null);
  };

  const handleTeacherAdded = (
    newTeacher: Teacher & { subject_name: string | null }
  ) => {
    setTeachers([...teachers, newTeacher]);
  };

  return (
    <div>
      <TeacherForm onTeacherAdded={handleTeacherAdded} />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teachers.map((teacher) => (
            <TableRow key={teacher.id}>
              <TableCell>{teacher.name}</TableCell>
              <TableCell>{teacher.email}</TableCell>
              <TableCell>{teacher.subject_name || "No Subject"}</TableCell>
              <TableCell>
                <div className="space-x-2">
                  <Link href={`/admin/teachers/${teacher.id}/edit`} passHref>
                    <Button variant="outline">Edit</Button>
                  </Link>
                  <Button
                    variant="destructive"
                    onClick={() => handleDelete(teacher.id)}
                    disabled={deleting === teacher.id}
                  >
                    {deleting === teacher.id ? "Deleting..." : "Delete"}
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
