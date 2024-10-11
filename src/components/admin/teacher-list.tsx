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
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { toast } from "@/hooks/use-toast";
import { getHelperClient, deleteHelperClient } from "@/lib/fetch-helper-client";
import { Teacher } from "@/types/db";
import { TeacherForm } from "./teacher-form";

interface TeacherListProps {
  initialTeachers: Teacher[];
  initialPagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
  };
}

export function TeacherList({
  initialTeachers,
  initialPagination,
}: TeacherListProps) {
  const [teachers, setTeachers] = useState<Teacher[]>(initialTeachers || []);
  const [pagination, setPagination] = useState(initialPagination);
  const [deleting, setDeleting] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchTeachers = async (page: number) => {
    setLoading(true);
    try {
      const response = await getHelperClient<{
        teachers: Teacher[];
        pagination: typeof initialPagination;
      }>(`/api/admin/teachers?page=${page}`);
      if (Array.isArray(response.teachers)) {
        setTeachers(response.teachers);
        setPagination(response.pagination);
      } else {
        console.error("Received non-array teachers data:", response.teachers);
        toast({
          title: "Error",
          description: "Received invalid data format for teachers",
          variant: "destructive",
        });
        setTeachers([]);
      }
    } catch (error) {
      console.error("Failed to fetch teachers:", error);
      toast({
        title: "Error",
        description: "Failed to fetch teachers",
        variant: "destructive",
      });
      setTeachers([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    setDeleting(id);
    try {
      await deleteHelperClient(`/api/admin/teachers/${id}`);
      setTeachers(teachers.filter((teacher) => teacher.id !== id));
      toast({
        title: "Success",
        description: "Teacher deleted successfully",
      });
      if (teachers.length === 1 && pagination.currentPage > 1) {
        fetchTeachers(pagination.currentPage - 1);
      } else {
        fetchTeachers(pagination.currentPage);
      }
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

  const handleTeacherAdded = (newTeacher: Teacher) => {
    setTeachers([...teachers, newTeacher]);
    fetchTeachers(1); // Refresh the first page
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= pagination.totalPages) {
      fetchTeachers(page);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <TeacherForm onTeacherAdded={handleTeacherAdded} />
      {teachers.length > 0 ? (
        <>
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
                      <Link
                        href={`/admin/teachers/${teacher.id}/edit`}
                        passHref
                      >
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
          <Pagination className="mt-4">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={() => handlePageChange(pagination.currentPage - 1)}
                  className={
                    pagination.currentPage === 1
                      ? "pointer-events-none opacity-50"
                      : ""
                  }
                />
              </PaginationItem>
              {[...Array(pagination.totalPages)].map((_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    href="#"
                    onClick={() => handlePageChange(i + 1)}
                    isActive={pagination.currentPage === i + 1}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={() => handlePageChange(pagination.currentPage + 1)}
                  className={
                    pagination.currentPage === pagination.totalPages
                      ? "pointer-events-none opacity-50"
                      : ""
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </>
      ) : (
        <div className="text-center py-4">
          No teachers found. Add a new teacher using the form above.
        </div>
      )}
    </div>
  );
}
