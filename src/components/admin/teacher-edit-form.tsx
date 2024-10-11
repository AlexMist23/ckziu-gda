"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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
import { putHelperClient, getHelperClient } from "@/lib/fetch-helper-client";
import { Teacher, Subject } from "@/types/db";

interface TeacherEditFormProps {
  teacher: Teacher & { subject_name: string | null };
}

export function TeacherEditForm({ teacher }: TeacherEditFormProps) {
  const router = useRouter();
  const [name, setName] = useState(teacher.name);
  const [email, setEmail] = useState(teacher.email);
  const [subjectId, setSubjectId] = useState(
    teacher.subject_id ? teacher.subject_id.toString() : ""
  );
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const fetchedSubjects = await getHelperClient<Subject[]>(
          "/api/admin/subjects"
        );
        setSubjects(fetchedSubjects);
      } catch (error) {
        console.error("Failed to fetch subjects:", error);
      }
    };
    fetchSubjects();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await putHelperClient<Teacher>(`/api/admin/teachers/${teacher.id}`, {
        name,
        email,
        subject_id: subjectId ? parseInt(subjectId) : null,
      });
      toast({
        title: "Success",
        description: "Teacher updated successfully",
      });
      router.refresh();
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to update teacher",
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
        placeholder="Teacher Name"
        required
      />
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <Select value={subjectId} onValueChange={setSubjectId}>
        <SelectTrigger>
          <SelectValue placeholder="Select a subject" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="">No Subject</SelectItem>
          {subjects.map((subject) => (
            <SelectItem key={subject.id} value={subject.id.toString()}>
              {subject.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Updating..." : "Update Teacher"}
      </Button>
    </form>
  );
}
