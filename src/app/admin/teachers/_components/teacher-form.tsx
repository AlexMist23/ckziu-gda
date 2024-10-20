"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SubjectMultiSelect } from "@/components/ui/multi-select";
import { PlusCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Subject {
  id: string;
  name: string;
}

interface TeacherFormProps {
  onSubmit: (data: {
    name: string;
    email: string;
    subjects: string[];
  }) => Promise<void>;
}

export function TeacherForm({ onSubmit }: TeacherFormProps) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subjects, setSubjects] = useState<string[]>([]);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await onSubmit({ name, email, subjects });
      setOpen(false);
      setName("");
      setEmail("");
      setSubjects([]);
      toast({
        title: "Success",
        description: "Teacher added successfully.",
      });
    } catch (error) {
      console.error("Error adding teacher:", error);
      toast({
        title: "Error",
        description: "Failed to add teacher. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Teacher
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Teacher</DialogTitle>
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
          <Button type="submit">Add Teacher</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
