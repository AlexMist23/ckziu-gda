import { useState } from "react";
import { Schedule } from "@/types/db";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { deleteHelperClient } from "@/lib/fetch-helper-client";

interface ScheduleListProps {
  schedules: Schedule[];
  onEdit: (schedule: Schedule) => void;
  onDelete: (id: number) => void;
}

export function ScheduleList({
  schedules,
  onEdit,
  onDelete,
}: ScheduleListProps) {
  const [isDeleting, setIsDeleting] = useState<number | null>(null);
  const { toast } = useToast();

  const handleDelete = async (id: number) => {
    setIsDeleting(id);
    try {
      await deleteHelperClient(`/api/admin/schedules/${id}`);
      onDelete(id);
      toast({
        title: "Schedule Deleted",
        description: "The schedule has been successfully deleted.",
      });
    } catch (error) {
      console.error("Failed to delete schedule:", error);
      toast({
        title: "Error",
        description: "Failed to delete the schedule.",
        variant: "destructive",
      });
    } finally {
      setIsDeleting(null);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Existing Schedules</CardTitle>
      </CardHeader>
      <CardContent>
        {schedules.length > 0 ? (
          schedules.map((schedule) => (
            <div
              key={schedule.id}
              className="flex justify-between items-center mb-2 p-2 bg-secondary rounded"
            >
              <span>{format(new Date(schedule.date), "MMMM d, yyyy")}</span>
              <div>
                <Button
                  onClick={() => onEdit(schedule)}
                  variant="outline"
                  className="mr-2"
                >
                  Edit
                </Button>
                <Button
                  onClick={() => handleDelete(schedule.id)}
                  variant="destructive"
                  disabled={isDeleting === schedule.id}
                >
                  {isDeleting === schedule.id ? "Deleting..." : "Delete"}
                </Button>
              </div>
            </div>
          ))
        ) : (
          <p>No schedules found.</p>
        )}
      </CardContent>
    </Card>
  );
}
