import { NextResponse } from "next/server";
import { TeacherList } from "@/types/teacher-list";

const mockTeachers: TeacherList = [
  {
    initials: "JD",
    name: "John",
    surname: "Doe",
    email: "john.doe@example.com",
  },
  {
    initials: "AS",
    name: "Alice",
    surname: "Smith",
    email: "alice.smith@example.com",
  },
  // ... more teachers
];

export async function GET() {
  return NextResponse.json(mockTeachers);
}
