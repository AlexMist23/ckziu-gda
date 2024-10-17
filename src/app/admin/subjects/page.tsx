"use client";

import { useState, useEffect } from "react";
import { Subject } from "@/types/db.types";
import { useToast } from "@/hooks/use-toast";
import {
  getHelperClient,
  postHelperClient,
  putHelperClient,
  deleteHelperClient,
} from "@/lib/fetch-helper-client";
import { SubjectForm } from "./_components/subject-form";
import { SubjectList } from "./_components/subject-list";

export default function AdminSubjectsPage() {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [editingSubject, setEditingSubject] = useState<Subject | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchSubjects();
  }, []);

  const fetchSubjects = async () => {
    try {
      const data = await getHelperClient<Subject[]>("/api/admin/subjects");
      setSubjects(data);
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to fetch subjects",
        variant: "destructive",
      });
    }
  };

  const handleAddSubject = async (data: { name: string }) => {
    try {
      const newSubject = await postHelperClient<Subject>(
        "/api/admin/subjects",
        data
      );
      setSubjects([...subjects, newSubject]);
      toast({ title: "Success", description: "Subject added successfully" });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to add subject",
        variant: "destructive",
      });
    }
  };

  const handleEditSubject = async (data: { name: string }) => {
    if (!editingSubject) return;
    try {
      const updatedSubject = await putHelperClient<Subject>(
        `/api/admin/subjects/${editingSubject.id}`,
        data
      );
      setSubjects(
        subjects.map((s) => (s.id === updatedSubject.id ? updatedSubject : s))
      );
      setEditingSubject(null);
      toast({ title: "Success", description: "Subject updated successfully" });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to update subject",
        variant: "destructive",
      });
    }
  };

  const handleDeleteSubject = async (id: number) => {
    try {
      await deleteHelperClient(`/api/admin/subjects/${id}`);
      setSubjects(subjects.filter((s) => s.id !== id));
      toast({ title: "Success", description: "Subject deleted successfully" });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to delete subject",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5 text-foreground">
        Manage Subjects
      </h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-foreground">
          {editingSubject ? "Edit Subject" : "Add New Subject"}
        </h2>
        <SubjectForm
          subject={editingSubject || undefined}
          onSubmit={editingSubject ? handleEditSubject : handleAddSubject}
          onCancel={editingSubject ? () => setEditingSubject(null) : undefined}
        />
      </div>

      <SubjectList
        subjects={subjects}
        onEdit={setEditingSubject}
        onDelete={handleDeleteSubject}
      />
    </div>
  );
}
