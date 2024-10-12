"use client";

import { useState, useEffect } from "react";
import { format, subDays, addDays } from "date-fns";
import {
  Calendar as CalendarIcon,
  Clock,
  BookOpen,
  User,
  MapPin,
  Check,
  X,
} from "lucide-react";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getHelperClient, postHelperClient } from "@/lib/fetch-helper-client";
import { ScheduleResponse } from "@/types/api";
import { useToast } from "@/hooks/use-toast";

export default function ScheduleView() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: subDays(new Date(), 1),
    to: addDays(new Date(), 14),
  });
  const [schedules, setSchedules] = useState<ScheduleResponse[]>([]);
  const [presences, setPresences] = useState<Record<number, boolean>>({});
  const { toast } = useToast();

  useEffect(() => {
    if (date?.from && date?.to) {
      fetchSchedules(
        format(date.from, "yyyy-MM-dd"),
        format(date.to, "yyyy-MM-dd")
      );
    }
  }, [date]);

  const fetchSchedules = async (fromDate: string, toDate: string) => {
    try {
      const fetchedSchedules = await getHelperClient<ScheduleResponse[]>(
        `/api/schedules?from=${fromDate}&to=${toDate}`
      );
      setSchedules(fetchedSchedules);
      fetchPresences(fetchedSchedules);
    } catch (error) {
      console.error("Failed to fetch schedules:", error);
      toast({
        title: "Error",
        description: "Failed to fetch schedules.",
        variant: "destructive",
      });
    }
  };

  const fetchPresences = async (schedules: ScheduleResponse[]) => {
    const lectureIds = schedules.flatMap((schedule) =>
      schedule.lectures.map((lecture) => lecture.id)
    );
    const presencePromises = lectureIds.map((id) =>
      getHelperClient<{ is_present: boolean }>(`/api/presences?lectureId=${id}`)
    );
    const presenceResults = await Promise.all(presencePromises);
    const newPresences: Record<number, boolean> = {};
    presenceResults.forEach((result, index) => {
      newPresences[lectureIds[index]] = result.is_present;
    });
    setPresences(newPresences);
  };

  const handlePresenceToggle = async (lectureId: number) => {
    try {
      const newPresence = !presences[lectureId];
      await postHelperClient("/api/presences", {
        lectureId,
        isPresent: newPresence,
      });
      setPresences((prev) => ({ ...prev, [lectureId]: newPresence }));
      toast({
        title: "Presence Updated",
        description: newPresence
          ? "You've been marked as present."
          : "You've been marked as absent.",
      });
    } catch (error) {
      console.error("Failed to update presence:", error);
      toast({
        title: "Error",
        description: "Failed to update presence.",
        variant: "destructive",
      });
    }
  };

  const formatTime = (time: string) => {
    return time.substring(0, 5); // This will return the first 5 characters, effectively giving us HH:MM
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Your Schedule</h1>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date range</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>

      <div className="mt-8 space-y-8">
        {schedules.map((schedule) => (
          <Card key={schedule.id}>
            <CardHeader>
              <CardTitle>
                {format(new Date(schedule.date), "EEEE, MMMM d, yyyy")}
              </CardTitle>
              <CardDescription>Schedule for the day</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableCaption>
                  Schedule for {format(new Date(schedule.date), "MMMM d, yyyy")}
                </TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[150px]">
                      <Clock className="mr-2 inline-block h-4 w-4" />
                      Time
                    </TableHead>
                    <TableHead className="w-[200px]">
                      <BookOpen className="mr-2 inline-block h-4 w-4" />
                      Subject
                    </TableHead>
                    <TableHead className="w-[200px]">
                      <User className="mr-2 inline-block h-4 w-4" />
                      Teacher
                    </TableHead>
                    <TableHead className="w-[100px]">
                      <MapPin className="mr-2 inline-block h-4 w-4" />
                      Room
                    </TableHead>
                    <TableHead className="w-[100px] text-right">
                      Presence
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {schedule.lectures.map((lecture) => (
                    <TableRow key={lecture.id}>
                      <TableCell className="font-medium">
                        {formatTime(lecture.start_time)} -{" "}
                        {formatTime(lecture.end_time)}
                      </TableCell>
                      <TableCell>{lecture.subject.name}</TableCell>
                      <TableCell>{lecture.teacher.name}</TableCell>
                      <TableCell>{lecture.room || "N/A"}</TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant={
                            presences[lecture.id] ? "default" : "outline"
                          }
                          size="sm"
                          onClick={() => handlePresenceToggle(lecture.id)}
                        >
                          {presences[lecture.id] ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            <X className="h-4 w-4" />
                          )}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
