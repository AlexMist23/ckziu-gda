import { NextResponse } from "next/server";
import { Schedule } from "@/types/schedule";

// This is a mock data. In a real application, you would fetch this from a database.
const mockSchedule: Schedule = [
  {
    date: "2023-05-01",
    lectures: [
      {
        subject: "Math",
        startHour: "08:00",
        endHour: "09:30",
        roomNr: "101",
        teacherInitials: "JD",
      },
      {
        subject: "Physics",
        startHour: "09:40",
        endHour: "11:10",
        roomNr: "102",
        teacherInitials: "AS",
      },
      // ... more lectures
    ],
  },
  // ... more days
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get("date");

  if (!date) {
    return NextResponse.json(
      { error: "Date parameter is required" },
      { status: 400 }
    );
  }

  const daySchedule = mockSchedule.find(
    (day) => day.date === date.split("T")[0]
  );

  if (!daySchedule) {
    return NextResponse.json(
      { error: "No schedule found for the given date" },
      { status: 404 }
    );
  }

  return NextResponse.json(daySchedule);
}
