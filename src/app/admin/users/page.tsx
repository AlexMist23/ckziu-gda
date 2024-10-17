"use client";

import { useState, useEffect } from "react";
import { User } from "@/types/db.types";
import { useToast } from "@/hooks/use-toast";
import {
  getHelperClient,
  postHelperClient,
  putHelperClient,
  deleteHelperClient,
} from "@/lib/fetch-helper-client";
import { UserForm } from "./_components/user-form";
import { UserList } from "./_components/user-list";

export default function AdminUsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const data = await getHelperClient<User[]>("/api/admin/users");
      setUsers(data);
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to fetch users",
        variant: "destructive",
      });
    }
  };

  const handleAddUser = async (data: Omit<User, "id">) => {
    try {
      const newUser = await postHelperClient<User>("/api/admin/users", data);
      setUsers([...users, newUser]);
      toast({ title: "Success", description: "User added successfully" });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to add user",
        variant: "destructive",
      });
    }
  };

  const handleEditUser = async (data: User) => {
    if (!editingUser) return;
    try {
      const updatedUser = await putHelperClient<User>(
        `/api/admin/users/${editingUser.id}`,
        data
      );
      setUsers(users.map((u) => (u.id === updatedUser.id ? updatedUser : u)));
      setEditingUser(null);
      toast({ title: "Success", description: "User updated successfully" });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to update user",
        variant: "destructive",
      });
    }
  };

  const handleDeleteUser = async (id: number) => {
    try {
      await deleteHelperClient(`/api/admin/users/${id}`);
      setUsers(users.filter((u) => u.id !== id));
      toast({ title: "Success", description: "User deleted successfully" });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to delete user",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5 text-foreground">Manage Users</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-foreground">
          {editingUser ? "Edit User" : "Add New User"}
        </h2>
        <UserForm
          user={editingUser || undefined}
          onSubmit={editingUser ? handleEditUser : handleAddUser}
          onCancel={editingUser ? () => setEditingUser(null) : undefined}
        />
      </div>

      <UserList
        users={users}
        onEdit={setEditingUser}
        onDelete={handleDeleteUser}
      />
    </div>
  );
}
