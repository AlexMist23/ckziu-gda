"use client";

import { useState, useEffect } from "react";
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
import { postHelperClient, getHelperClient } from "@/lib/fetch-helper-client";
import { Teacher, Subject } from "@/types/db";

interface TeacherFormProps {
  onTeacherAdded: (teacher: Teacher) => void;
}

export function TeacherForm({ onTeacherAdded }: TeacherFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subjectId, setSubjectId] = useState<string | null>(null);
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
      const newTeacher = await postHelperClient<Teacher>(
        "/api/admin/teachers",
        {
          name,
          email,
          subject_id: subjectId ? parseInt(subjectId) : null,
        }
      );
      toast({
        title: "Success",
        description: "Teacher added successfully",
      });
      onTeacherAdded(newTeacher);
      setName("");
      setEmail("");
      setSubjectId(null);
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to add teacher",
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
      <Select value={subjectId || undefined} onValueChange={setSubjectId}>
        <SelectTrigger>
          <SelectValue placeholder="Select a subject" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="null">No Subject</SelectItem>
          {subjects.map((subject) => (
            <SelectItem key={subject.id} value={subject.id.toString()}>
              {subject.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Adding..." : "Add Teacher"}
      </Button>
    </form>
  );
}
