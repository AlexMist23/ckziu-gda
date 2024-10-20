"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SubjectMultiSelect } from "@/components/ui/multi-select";
import { useToast } from "@/hooks/use-toast";

interface Subject {
  id: string;
  name: string;
}

interface Teacher {
  id: number;
  name: string;
  email: string;
  subjects: string[];
}

interface EditTeacherFormProps {
  teacher: Teacher;
  onSubmit: (data: Teacher) => void;
  onCancel: () => void;
}

export function EditTeacherForm({
  teacher,
  onSubmit,
  onCancel,
}: EditTeacherFormProps) {
  const [name, setName] = useState(teacher.name);
  const [email, setEmail] = useState(teacher.email);
  const [subjects, setSubjects] = useState<string[]>(teacher.subjects);
  const [subjectOptions, setSubjectOptions] = useState<Subject[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await fetch("/api/admin/subjects");
        if (response.ok) {
          const data = await response.json();
          setSubjectOptions(
            data.subjects.map((subject: { id: number; name: string }) => ({
              id: subject.id.toString(),
              name: subject.name,
            }))
          );
        } else {
          console.error("Failed to fetch subjects");
          toast({
            title: "Error",
            description: "Failed to fetch subjects. Please try again.",
            variant: "destructive",
          });
        }
      } catch (error) {
        console.error("Error fetching subjects:", error);
        toast({
          title: "Error",
          description:
            "An error occurred while fetching subjects. Please try again.",
          variant: "destructive",
        });
      }
    };
    fetchSubjects();
  }, [toast]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ id: teacher.id, name, email, subjects });
  };

  return (
    <Dialog open={true} onOpenChange={() => onCancel()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Teacher</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter teacher name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter teacher email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subjects"
              className="block text-sm font-medium text-gray-700"
            >
              Subjects
            </label>
            <SubjectMultiSelect
              subjects={subjectOptions}
              selectedSubjects={subjects}
              onChange={setSubjects}
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit">Update Teacher</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
