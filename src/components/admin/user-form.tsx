"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { fetchHelperClient } from "@/lib/fetch-helper-client";
import { User } from "@/types/db";

interface UserFormProps {
  onUserAdded: (user: User) => void;
}

export function UserForm({ onUserAdded }: UserFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"user" | "admin">("user");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const newUser = await fetchHelperClient<User>("/api/admin/users", {
        method: "POST",
        body: JSON.stringify({ name, email, role }),
      });
      toast({
        title: "Success",
        description: "User added successfully",
      });
      onUserAdded(newUser);
      // Reset form fields
      setName("");
      setEmail("");
      setRole("user");
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to add user",
        variant: "destructive",
      });
    }
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-8">
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="User Name"
        required
      />
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <Select
        value={role}
        onValueChange={(value: "user" | "admin") => setRole(value)}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select a role" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="user">User</SelectItem>
          <SelectItem value="admin">Admin</SelectItem>
        </SelectContent>
      </Select>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Adding..." : "Add User"}
      </Button>
    </form>
  );
}
