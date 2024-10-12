"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { postHelperClient } from "@/lib/fetch-helper-client";
import { Subject } from "@/types/types";

interface SubjectFormProps {
  onSubjectAdded: (subject: Subject) => void;
}

export function SubjectForm({ onSubjectAdded }: SubjectFormProps) {
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const newSubject = await postHelperClient<Subject>(
        "/api/admin/subjects",
        { name }
      );
      toast({
        title: "Success",
        description: "Subject added successfully",
      });
      onSubjectAdded(newSubject);
      setName("");
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to add subject",
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
        placeholder="Subject Name"
        required
      />
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Adding..." : "Add Subject"}
      </Button>
    </form>
  );
}
