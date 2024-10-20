"use client";

import { useState, useEffect } from "react";
import { Schedule, Lecture, Subject, Teacher } from "@/types/db.types";
import { useToast } from "@/hooks/use-toast";
import {
  getHelperClient,
  postHelperClient,
  putHelperClient,
  deleteHelperClient,
} from "@/lib/fetch-helper-client";
import { ScheduleForm } from "./_components/schedule-form";
import { ScheduleList } from "./_components/schedule-list";

export default function AdminSchedulesPage() {
  const [schedules, setSchedules] = useState<
    (Schedule & { lectures: Lecture[] })[]
  >([]);
  const [editingSchedule, setEditingSchedule] = useState<
    (Schedule & { lectures: Lecture[] }) | null
  >(null);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    fetchSchedules();
    fetchSubjects();
    fetchTeachers();
  }, []);

  const fetchSchedules = async () => {
    try {
      const data = await getHelperClient<
        (Schedule & { lectures: Lecture[] })[]
      >("/api/admin/schedules");
      setSchedules(data);
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to fetch schedules",
        variant: "destructive",
      });
    }
  };

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

  const fetchTeachers = async () => {
    try {
      const data = await getHelperClient<Teacher[]>("/api/admin/teachers");
      setTeachers(data);
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to fetch teachers",
        variant: "destructive",
      });
    }
  };

  const handleAddSchedule = async (
    data: Omit<Schedule, "id"> & { lectures: Omit<Lecture, "id">[] }
  ) => {
    try {
      const newSchedule = await postHelperClient<
        Schedule & { lectures: Lecture[] }
      >("/api/admin/schedules", data);
      setSchedules([...schedules, newSchedule]);
      toast({ title: "Success", description: "Schedule added successfully" });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to add schedule",
        variant: "destructive",
      });
    }
  };

  const handleEditSchedule = async (
    data: Schedule & { lectures: Lecture[] }
  ) => {
    try {
      const updatedSchedule = await putHelperClient<
        Schedule & { lectures: Lecture[] }
      >(`/api/admin/schedules/${data.id}`, data);
      setSchedules(
        schedules.map((s) =>
          s.id === updatedSchedule.id ? updatedSchedule : s
        )
      );
      setEditingSchedule(null);
      toast({ title: "Success", description: "Schedule updated successfully" });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to update schedule",
        variant: "destructive",
      });
    }
  };

  const handleDeleteSchedule = async (id: number) => {
    try {
      await deleteHelperClient(`/api/admin/schedules/${id}`);
      setSchedules(schedules.filter((s) => s.id !== id));
      toast({ title: "Success", description: "Schedule deleted successfully" });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to delete schedule",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5 text-foreground">
        Manage Schedules
      </h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-foreground">
          {editingSchedule ? "Edit Schedule" : "Add New Schedule"}
        </h2>
        <ScheduleForm
          schedule={editingSchedule}
          subjects={subjects}
          teachers={teachers}
          onSubmit={editingSchedule ? handleEditSchedule : handleAddSchedule}
          onCancel={
            editingSchedule ? () => setEditingSchedule(null) : undefined
          }
        />
      </div>

      <ScheduleList
        schedules={schedules}
        onEdit={setEditingSchedule}
        onDelete={handleDeleteSchedule}
      />
    </div>
  );
}
