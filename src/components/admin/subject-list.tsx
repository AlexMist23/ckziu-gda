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
import { Subject } from "@/types/types";
import { SubjectForm } from "./subject-form";

interface SubjectListProps {
  initialSubjects: Subject[];
  initialPagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
  };
}

export function SubjectList({
  initialSubjects,
  initialPagination,
}: SubjectListProps) {
  const [subjects, setSubjects] = useState<Subject[]>(initialSubjects || []);
  const [pagination, setPagination] = useState(initialPagination);
  const [deleting, setDeleting] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchSubjects = async (page: number) => {
    setLoading(true);
    try {
      const response = await getHelperClient<{
        subjects: Subject[];
        pagination: typeof initialPagination;
      }>(`/api/admin/subjects?page=${page}`);
      if (Array.isArray(response.subjects)) {
        setSubjects(response.subjects);
        setPagination(response.pagination);
      } else {
        console.error("Received non-array subjects data:", response.subjects);
        toast({
          title: "Error",
          description: "Received invalid data format for subjects",
          variant: "destructive",
        });
        setSubjects([]);
      }
    } catch (error) {
      console.error("Failed to fetch subjects:", error);
      toast({
        title: "Error",
        description: "Failed to fetch subjects",
        variant: "destructive",
      });
      setSubjects([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    setDeleting(id);
    try {
      await deleteHelperClient(`/api/admin/subjects/${id}`);
      setSubjects(subjects.filter((subject) => subject.id !== id));
      toast({
        title: "Success",
        description: "Subject deleted successfully",
      });
      if (subjects.length === 1 && pagination.currentPage > 1) {
        fetchSubjects(pagination.currentPage - 1);
      } else {
        fetchSubjects(pagination.currentPage);
      }
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
    fetchSubjects(1); // Refresh the first page
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= pagination.totalPages) {
      fetchSubjects(page);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <SubjectForm onSubjectAdded={handleSubjectAdded} />
      {subjects.length > 0 ? (
        <>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subjects.map((subject) => (
                <TableRow key={subject.id}>
                  <TableCell>{subject.name}</TableCell>
                  <TableCell>
                    <div className="space-x-2">
                      <Link
                        href={`/admin/subjects/${subject.id}/edit`}
                        passHref
                      >
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
          No subjects found. Add a new subject using the form above.
        </div>
      )}
    </div>
  );
}
