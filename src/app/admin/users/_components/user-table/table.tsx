"use client";

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { UserFormModal } from "../user-dialogs/user-form-modal";
import { Input } from "@/components/ui/input";
import { users } from "@prisma/client";

async function getUsers() {
  const res = await fetch("/api/admin/users");
  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }
  return res.json();
}

async function createUser(userData: { name: string; email: string }) {
  const res = await fetch("/api/admin/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  if (!res.ok) {
    throw new Error("Failed to create user");
  }
  return res.json();
}

export function UserTable() {
  const [emailFilter, setEmailFilter] = useState("");
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  const createUserMutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  const filteredData = data.filter((user: users) =>
    user.email.toLowerCase().includes(emailFilter.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Users</h2>
        <UserFormModal
          onSubmit={createUserMutation.mutateAsync}
          trigger={
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" /> Create User
            </Button>
          }
        />
      </div>
      <div className="mb-4">
        <Input
          placeholder="Filter by email..."
          value={emailFilter}
          onChange={(e) => setEmailFilter(e.target.value)}
        />
      </div>
      <DataTable columns={columns} data={filteredData} />
    </div>
  );
}
