"use client";

import { useState, useEffect } from "react";
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
import { User } from "@/types/db";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserListProps {
  initialUsers: User[];
  initialPagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
  };
}

export function UserList({ initialUsers, initialPagination }: UserListProps) {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [pagination, setPagination] = useState(initialPagination);
  const [deleting, setDeleting] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("Initial users in UserList:", initialUsers);
    if (initialUsers.length === 0) {
      console.log("No initial users, fetching...");
      fetchUsers(1);
    } else {
      setUsers(initialUsers);
    }
  }, [initialUsers]);

  const fetchUsers = async (page: number) => {
    setLoading(true);
    try {
      console.log(`Fetching users for page ${page}`);
      const response = await getHelperClient<{
        users: User[];
        pagination: typeof initialPagination;
      }>(`/api/admin/users?page=${page}`);
      console.log("API response in UserList:", response);
      if (Array.isArray(response.users)) {
        setUsers(response.users);
        setPagination(response.pagination);
      } else {
        console.error("Received non-array users data:", response.users);
        toast({
          title: "Error",
          description: "Received invalid data format for users",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Failed to fetch users:", error);
      toast({
        title: "Error",
        description: "Failed to fetch users",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    setDeleting(id);
    try {
      await deleteHelperClient(`/api/admin/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
      toast({
        title: "Success",
        description: "User deleted successfully",
      });
      if (users.length === 1 && pagination.currentPage > 1) {
        fetchUsers(pagination.currentPage - 1);
      } else {
        fetchUsers(pagination.currentPage);
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to delete user",
        variant: "destructive",
      });
    }
    setDeleting(null);
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= pagination.totalPages) {
      fetchUsers(page);
    }
  };

  console.log("Rendering UserList with users:", users);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {users.length > 0 ? (
        <>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Avatar</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <Avatar>
                      <AvatarImage
                        src={user.image || undefined}
                        alt={user.name || ""}
                      />
                      <AvatarFallback>
                        {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                      </AvatarFallback>
                    </Avatar>
                  </TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <div className="space-x-2">
                      <Button variant="outline" asChild>
                        <a href={`/admin/users/${user.id}/edit`}>Edit</a>
                      </Button>
                      <Button
                        variant="destructive"
                        onClick={() => handleDelete(user.id)}
                        disabled={deleting === user.id || user.role === "admin"}
                      >
                        {deleting === user.id ? "Deleting..." : "Delete"}
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
          No users found. This might be an error, as there should be at least
          one admin user.
        </div>
      )}
    </div>
  );
}
