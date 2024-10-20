"use client";

import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Edit, Trash2, ChevronUp, ChevronDown } from "lucide-react";
import SubjectForm from "./subject-form";
import EditSubjectForm from "./edit-subject-form";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import debounce from "lodash/debounce";

interface Subject {
  id: number;
  name: string;
}

interface PaginationInfo {
  currentPage: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
}

export default function SubjectsTable({
  initialSubjects,
}: {
  initialSubjects: Subject[];
}) {
  const [subjects, setSubjects] = useState<Subject[]>(initialSubjects);
  const [editingSubject, setEditingSubject] = useState<Subject | null>(null);
  const [pagination, setPagination] = useState<PaginationInfo>({
    currentPage: 1,
    pageSize: 10,
    totalCount: 0,
    totalPages: 1,
  });
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<"name" | "id">("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const { toast } = useToast();

  const fetchSubjects = async () => {
    const params = new URLSearchParams({
      page: pagination.currentPage.toString(),
      pageSize: pagination.pageSize.toString(),
      sortBy,
      sortOrder,
      ...(search && { search }),
    });
    const response = await fetch(`/api/admin/subjects?${params}`);
    if (!response.ok) throw new Error("Failed to fetch subjects");
    const data = await response.json();
    setSubjects(data.subjects);
    setPagination(data.pagination);
  };

  useEffect(() => {
    fetchSubjects();
  }, [pagination.currentPage, pagination.pageSize, sortBy, sortOrder]);

  const debouncedSearch = debounce(() => {
    setPagination((prev) => ({ ...prev, currentPage: 1 }));
    fetchSubjects();
  }, 300);

  useEffect(() => {
    debouncedSearch();
    return debouncedSearch.cancel;
  }, [search]);

  const handleAddSubject = async (newSubject: Omit<Subject, "id">) => {
    try {
      const response = await fetch("/api/admin/subjects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newSubject),
      });
      if (!response.ok) throw new Error("Failed to add subject");
      await fetchSubjects();
      toast({ title: "Success", description: "Subject added successfully." });
    } catch (error) {
      console.error("Error adding subject:", error);
      toast({
        title: "Error",
        description: "Failed to add subject. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleEditSubmit = async (updatedSubject: Subject) => {
    try {
      const response = await fetch(`/api/admin/subjects/${updatedSubject.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedSubject),
      });
      if (!response.ok) throw new Error("Failed to update subject");
      await fetchSubjects();
      setEditingSubject(null);
      toast({ title: "Success", description: "Subject updated successfully." });
    } catch (error) {
      console.error("Error updating subject:", error);
      toast({
        title: "Error",
        description: "Failed to update subject. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (subjectId: number) => {
    if (!confirm("Are you sure you want to delete this subject?")) return;
    try {
      const response = await fetch(`/api/admin/subjects/${subjectId}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete subject");
      await fetchSubjects();
      toast({ title: "Success", description: "Subject deleted successfully." });
    } catch (error) {
      console.error("Error deleting subject:", error);
      toast({
        title: "Error",
        description: "Failed to delete subject. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleSort = (column: "name" | "id") => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
  };

  const handlePageChange = (page: number) => {
    setPagination((prev) => ({ ...prev, currentPage: page }));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <Input
          placeholder="Search subjects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm"
        />
        <SubjectForm onSubmit={handleAddSubject} />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("name")}
            >
              Name{" "}
              {sortBy === "name" &&
                (sortOrder === "asc" ? (
                  <ChevronUp className="inline" />
                ) : (
                  <ChevronDown className="inline" />
                ))}
            </TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {subjects.map((subject) => (
            <TableRow key={subject.id}>
              <TableCell>{subject.name}</TableCell>
              <TableCell>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setEditingSubject(subject)}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDelete(subject.id)}
                >
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (pagination.currentPage > 1)
                  handlePageChange(pagination.currentPage - 1);
              }}
            />
          </PaginationItem>
          {[...Array(pagination.totalPages)].map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                href="#"
                isActive={pagination.currentPage === index + 1}
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(index + 1);
                }}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (pagination.currentPage < pagination.totalPages)
                  handlePageChange(pagination.currentPage + 1);
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      {editingSubject && (
        <EditSubjectForm
          subject={editingSubject}
          onSubmit={handleEditSubmit}
          onCancel={() => setEditingSubject(null)}
        />
      )}
    </div>
  );
}
