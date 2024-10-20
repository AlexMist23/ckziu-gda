"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
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
import { TeacherForm } from "./teacher-form";
import { EditTeacherForm } from "./edit-teacher-form";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Badge } from "@/components/ui/badge";
import debounce from "lodash/debounce";

interface Teacher {
  id: number;
  name: string;
  email: string;
  subjects: string[];
}

interface PaginationInfo {
  currentPage: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
}

interface TeachersTableProps {
  initialTeachers: Teacher[];
}

export function TeachersTable({ initialTeachers }: TeachersTableProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [teachers, setTeachers] = useState<Teacher[]>(initialTeachers);
  const [editingTeacher, setEditingTeacher] = useState<Teacher | null>(null);
  const [pagination, setPagination] = useState<PaginationInfo>({
    currentPage: parseInt(searchParams.get("page") || "1", 10),
    pageSize: parseInt(searchParams.get("pageSize") || "10", 10),
    totalCount: 0,
    totalPages: 1,
  });
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [sortBy, setSortBy] = useState<"name" | "email">(
    (searchParams.get("sortBy") as "name" | "email") || "name"
  );
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">(
    (searchParams.get("sortOrder") as "asc" | "desc") || "asc"
  );
  const { toast } = useToast();

  const updateURL = useCallback(
    (newParams: Record<string, string>) => {
      const params = new URLSearchParams(searchParams.toString());
      Object.entries(newParams).forEach(([key, value]) => {
        if (value) {
          params.set(key, value);
        } else {
          params.delete(key);
        }
      });
      router.push(`?${params.toString()}`, { scroll: false });
    },
    [searchParams, router]
  );

  const fetchTeachers = useCallback(async () => {
    const params = new URLSearchParams({
      page: pagination.currentPage.toString(),
      pageSize: pagination.pageSize.toString(),
      sortBy,
      sortOrder,
      ...(search && { search }),
    });
    const response = await fetch(`/api/admin/teachers?${params}`);
    if (!response.ok) throw new Error("Failed to fetch teachers");
    const data = await response.json();
    setTeachers(data.teachers);
    setPagination(data.pagination);
  }, [pagination.currentPage, pagination.pageSize, sortBy, sortOrder, search]);

  useEffect(() => {
    fetchTeachers();
  }, [fetchTeachers]);

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setSearch(value);
      setPagination((prev) => ({ ...prev, currentPage: 1 }));
      updateURL({ search: value, page: "1" });
      fetchTeachers();
    }, 300),
    [updateURL, fetchTeachers]
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    debouncedSearch(value);
  };

  const handleAddTeacher = async (newTeacher: Omit<Teacher, "id">) => {
    try {
      const response = await fetch("/api/admin/teachers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTeacher),
      });
      if (!response.ok) throw new Error("Failed to add teacher");
      await fetchTeachers();
      toast({ title: "Success", description: "Teacher added successfully." });
    } catch (error) {
      console.error("Error adding teacher:", error);
      toast({
        title: "Error",
        description: "Failed to add teacher. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleEditSubmit = async (updatedTeacher: Teacher) => {
    try {
      const response = await fetch(`/api/admin/teachers/${updatedTeacher.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTeacher),
      });
      if (!response.ok) throw new Error("Failed to update teacher");
      await fetchTeachers();
      setEditingTeacher(null);
      toast({ title: "Success", description: "Teacher updated successfully." });
    } catch (error) {
      console.error("Error updating teacher:", error);
      toast({
        title: "Error",
        description: "Failed to update teacher. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (teacherId: number) => {
    if (!confirm("Are you sure you want to delete this teacher?")) return;
    try {
      const response = await fetch(`/api/admin/teachers/${teacherId}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete teacher");
      await fetchTeachers();
      toast({ title: "Success", description: "Teacher deleted successfully." });
    } catch (error) {
      console.error("Error deleting teacher:", error);
      toast({
        title: "Error",
        description: "Failed to delete teacher. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleSort = (column: "name" | "email") => {
    const newSortOrder =
      sortBy === column && sortOrder === "asc" ? "desc" : "asc";
    setSortBy(column);
    setSortOrder(newSortOrder);
    setPagination((prev) => ({ ...prev, currentPage: 1 }));
    updateURL({ sortBy: column, sortOrder: newSortOrder, page: "1" });
    fetchTeachers();
  };

  const handlePageChange = (page: number) => {
    setPagination((prev) => ({ ...prev, currentPage: page }));
    updateURL({ page: page.toString() });
    fetchTeachers();
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <Input
          placeholder="Search teachers..."
          value={search}
          onChange={handleSearchChange}
          className="max-w-sm"
        />
        <TeacherForm onSubmit={handleAddTeacher} />
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
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("email")}
            >
              Email{" "}
              {sortBy === "email" &&
                (sortOrder === "asc" ? (
                  <ChevronUp className="inline" />
                ) : (
                  <ChevronDown className="inline" />
                ))}
            </TableHead>
            <TableHead>Subjects</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teachers.map((teacher) => (
            <TableRow key={teacher.id}>
              <TableCell>{teacher.name}</TableCell>
              <TableCell>{teacher.email}</TableCell>
              <TableCell>
                {teacher.subjects.map((subject, index) => (
                  <Badge key={index} variant="secondary" className="mr-1 mb-1">
                    {subject}
                  </Badge>
                ))}
              </TableCell>
              <TableCell>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setEditingTeacher(teacher)}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDelete(teacher.id)}
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
              className={
                pagination.currentPage <= 1
                  ? "pointer-events-none opacity-50"
                  : ""
              }
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
              className={
                pagination.currentPage >= pagination.totalPages
                  ? "pointer-events-none opacity-50"
                  : ""
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      {editingTeacher && (
        <EditTeacherForm
          teacher={editingTeacher}
          onSubmit={handleEditSubmit}
          onCancel={() => setEditingTeacher(null)}
        />
      )}
    </div>
  );
}
