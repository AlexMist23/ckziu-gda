"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { UserForm } from "../forms/user-form";
import { User } from "@prisma/client";

interface UserFormModalProps {
  user?: User;
  onSubmit: (data: { name: string; email: string }) => Promise<void>;
  trigger: React.ReactNode;
}

export function UserFormModal({ user, onSubmit, trigger }: UserFormModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (data: { name: string; email: string }) => {
    await onSubmit(data);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{user ? "Edit User" : "Create User"}</DialogTitle>
        </DialogHeader>
        <UserForm user={user} onSubmit={handleSubmit} />
      </DialogContent>
    </Dialog>
  );
}
