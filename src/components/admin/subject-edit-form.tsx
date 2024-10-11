"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { putHelperClient } from "@/lib/fetch-helper-client";
import { Subject } from "@/types/db";

interface SubjectEditFormProps {
  subject: Subject;
}

export function SubjectEditForm({ subject }: SubjectEditFormProps) {
  const router = useRouter();
  const [name, setName] = useState(subject.name);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await putHelperClient<Subject>(`/api/admin/subjects/${subject.id}`, {
        name,
      });
      toast({
        title: "Success",
        description: "Subject updated successfully",
      });
      router.refresh();
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to update subject",
        variant: "destructive",
      });
    }
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Subject Name"
        required
      />
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Updating..." : "Update Subject"}
      </Button>
    </form>
  );
}
