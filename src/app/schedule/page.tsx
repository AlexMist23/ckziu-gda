"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DaySchedule } from "@/types/schedule";

export default function SchedulePage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [schedule, setSchedule] = useState<DaySchedule | null>(null);

  const fetchSchedule = async (date: Date) => {
    const response = await fetch(`/api/schedule?date=${date.toISOString()}`);
    const data = await response.json();
    setSchedule(data);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Select Date</CardTitle>
        </CardHeader>
        <CardContent>
          <Calendar
            mode="single"
            selected={date}
            onSelect={(newDate) => {
              setDate(newDate);
              if (newDate) fetchSchedule(newDate);
            }}
          />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          {schedule ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Time</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Room</TableHead>
                  <TableHead>Teacher</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {schedule.lectures.map((lecture, index) => (
                  <TableRow key={index}>
                    <TableCell>{`${lecture.startHour} - ${lecture.endHour}`}</TableCell>
                    <TableCell>{lecture.subject}</TableCell>
                    <TableCell>{lecture.roomNr}</TableCell>
                    <TableCell>{lecture.teacherInitials}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <p>Select a date to view the schedule</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
