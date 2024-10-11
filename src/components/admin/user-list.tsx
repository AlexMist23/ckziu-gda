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
import { fetchHelperClient } from "@/lib/fetch-helper-client";
import { User } from "@/types/db";
import { UserForm } from "./user-form";

interface UserListProps {
  initialUsers: User[];
}

export function UserList({ initialUsers }: UserListProps) {
  const [users, setUsers] = useState(initialUsers);
  const [deleting, setDeleting] = useState<number | null>(null);

  const handleDelete = async (id: number) => {
    setDeleting(id);
    try {
      await fetchHelperClient(`/api/admin/users/${id}`, { method: "DELETE" });
      setUsers(users.filter((user) => user.id !== id));
      toast({
        title: "Success",
        description: "User deleted successfully",
      });
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

  const handleUserAdded = (newUser: User) => {
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <UserForm onUserAdded={handleUserAdded} />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Email Verified</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.emailVerified ? "Yes" : "No"}</TableCell>
              <TableCell>
                <div className="space-x-2">
                  <Link href={`/admin/users/${user.id}/edit`} passHref>
                    <Button variant="outline">Edit</Button>
                  </Link>
                  <Button
                    variant="destructive"
                    onClick={() => handleDelete(user.id)}
                    disabled={deleting === user.id}
                  >
                    {deleting === user.id ? "Deleting..." : "Delete"}
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
