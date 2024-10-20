"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Edit, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import EditUserForm from "./edit-user-form";
import { debounce } from "lodash";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  image?: string | null;
}

interface PaginationState {
  currentPage: number;
  pageSize: number;
  totalPages: number;
  totalCount: number;
}

export default function UsersTable({
  initialUsers,
  initialPagination,
}: {
  initialUsers: User[];
  initialPagination: PaginationState;
}) {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [pagination, setPagination] =
    useState<PaginationState>(initialPagination);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || ""
  );

  const debouncedSearch = debounce((value: string) => {
    updateSearchParams("search", value);
  }, 300);

  useEffect(() => {
    debouncedSearch(searchTerm);
    return () => {
      debouncedSearch.cancel();
    };
  }, [searchTerm]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        `/api/admin/users?${searchParams.toString()}`
      );
      if (!response.ok) throw new Error("Failed to fetch users");
      const data = await response.json();
      setUsers(data.users);
      setPagination(data.pagination);
    } catch (error) {
      console.error("Error fetching users:", error);
      toast({
        title: "Error",
        description: "Failed to fetch users. Please try again.",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [searchParams]);

  const handleEditSubmit = (updatedUser: User) => {
    fetch(`/api/admin/users/${updatedUser.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUser),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Failed to update user");
        return response.json();
      })
      .then((updatedUserData) => {
        setUsers(
          users.map((user) =>
            user.id === updatedUserData.id ? updatedUserData : user
          )
        );
        setEditingUser(null);
        toast({
          title: "Success",
          description: "User updated successfully.",
        });
      })
      .catch((error) => {
        console.error("Error updating user:", error);
        toast({
          title: "Error",
          description: "Failed to update user. Please try again.",
          variant: "destructive",
        });
      });
  };

  const handleDelete = async (userId: number) => {
    if (!confirm("Are you sure you want to delete this user?")) return;
    try {
      const response = await fetch(`/api/admin/users/${userId}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete user");
      setUsers(users.filter((user) => user.id !== userId));
      toast({
        title: "Success",
        description: "User deleted successfully.",
      });
    } catch (error) {
      console.error("Error deleting user:", error);
      toast({
        title: "Error",
        description: "Failed to delete user. Please try again.",
        variant: "destructive",
      });
    }
  };

  const updateSearchParams = (key: string, value: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    if (value) {
      current.set(key, value);
    } else {
      current.delete(key);
    }
    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.push(`/admin/users${query}`);
  };

  return (
    <div>
      <div className="mb-4 flex space-x-2">
        <Input
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-background text-foreground"
        />
        <Select
          defaultValue={searchParams.get("role") || "all"}
          onValueChange={(value) => updateSearchParams("role", value)}
        >
          <SelectTrigger className="w-[180px] bg-background text-foreground">
            <SelectValue placeholder="Select role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Roles</SelectItem>
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="user">User</SelectItem>
          </SelectContent>
        </Select>
        <Select
          defaultValue={searchParams.get("sortBy") || "name"}
          onValueChange={(value) => updateSearchParams("sortBy", value)}
        >
          <SelectTrigger className="w-[180px] bg-background text-foreground">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name">Name</SelectItem>
            <SelectItem value="email">Email</SelectItem>
            <SelectItem value="role">Role</SelectItem>
          </SelectContent>
        </Select>
        <Button
          variant="outline"
          className="bg-background text-foreground"
          onClick={() =>
            updateSearchParams(
              "sortOrder",
              searchParams.get("sortOrder") === "desc" ? "asc" : "desc"
            )
          }
        >
          {searchParams.get("sortOrder") === "desc" ? "↓" : "↑"}
        </Button>
      </div>

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
                  <AvatarImage src={user.image || undefined} alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setEditingUser(user)}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDelete(user.id)}
                >
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Pagination className="mt-4">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() =>
                updateSearchParams(
                  "page",
                  (pagination.currentPage - 1).toString()
                )
              }
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
                onClick={() => updateSearchParams("page", (i + 1).toString())}
                isActive={pagination.currentPage === i + 1}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              onClick={() =>
                updateSearchParams(
                  "page",
                  (pagination.currentPage + 1).toString()
                )
              }
              className={
                pagination.currentPage === pagination.totalPages
                  ? "pointer-events-none opacity-50"
                  : ""
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      {editingUser && (
        <EditUserForm
          user={editingUser}
          onSubmit={handleEditSubmit}
          onCancel={() => setEditingUser(null)}
        />
      )}
    </div>
  );
}
