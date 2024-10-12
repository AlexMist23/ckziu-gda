"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ScheduleForm } from "@/components/admin/schedule-form";
import { ScheduleEditForm } from "@/components/admin/schedule-edit-form";
import { ScheduleList } from "@/components/admin/schedule-list";
import { Schedule, Subject, Teacher } from "@/types/types";
import { useToast } from "@/hooks/use-toast";
import { getHelperClient } from "@/lib/fetch-helper-client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";

export default function SchedulesPage() {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [editingSchedule, setEditingSchedule] = useState<Schedule | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [subjectsData, teachersData, schedulesData] = await Promise.all([
          getHelperClient<Subject[]>("/api/admin/subjects"),
          getHelperClient<Teacher[]>("/api/admin/teachers"),
          getHelperClient<{ schedules: Schedule[] }>("/api/admin/schedules"),
        ]);
        setSubjects(subjectsData);
        setTeachers(teachersData);
        setSchedules(schedulesData.schedules);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        toast({
          title: "Error",
          description: "Failed to fetch data.",
          variant: "destructive",
        });
        setIsLoading(false);
      }
    };
    fetchData();
  }, [toast]);

  const handleUpdate = async (updatedSchedule: Schedule) => {
    try {
      setSchedules(
        schedules.map((schedule) =>
          schedule.id === updatedSchedule.id ? updatedSchedule : schedule
        )
      );
      setEditingSchedule(null);
      router.refresh();
    } catch (error) {
      console.error("Failed to update schedule:", error);
      toast({
        title: "Error",
        description: "Failed to update the schedule.",
        variant: "destructive",
      });
    }
  };

  const handleDelete = (id: number) => {
    setSchedules(schedules.filter((schedule) => schedule.id !== id));
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>
            {editingSchedule ? "Edit Schedule" : "Create New Schedule"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {editingSchedule ? (
            <ScheduleEditForm
              schedule={editingSchedule}
              onScheduleUpdated={handleUpdate}
            />
          ) : (
            <ScheduleForm
              onScheduleAdded={(newSchedule) =>
                setSchedules([...schedules, newSchedule])
              }
              subjects={subjects}
              teachers={teachers}
            />
          )}
        </CardContent>
      </Card>

      <ScheduleList
        schedules={schedules}
        onEdit={(schedule) =>
          setEditingSchedule({
            ...schedule,
            date: format(new Date(schedule.date), "yyyy-MM-dd"),
          })
        }
        onDelete={handleDelete}
      />
    </div>
  );
}
