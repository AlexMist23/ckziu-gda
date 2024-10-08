"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TeacherList } from "@/types/teacher-list";

export default function TeacherListPage() {
  const [teachers, setTeachers] = useState<TeacherList>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchTeachers = async () => {
      const response = await fetch("/api/teacher-list");
      const data = await response.json();
      setTeachers(data);
    };
    fetchTeachers();
  }, []);

  const filteredTeachers = teachers.filter(
    (teacher) =>
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.surname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.initials.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <Input
        type="text"
        placeholder="Search teachers..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Surname</TableHead>
            <TableHead>Initials</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredTeachers.map((teacher) => (
            <TableRow key={teacher.email}>
              <TableCell>{teacher.name}</TableCell>
              <TableCell>{teacher.surname}</TableCell>
              <TableCell>{teacher.initials}</TableCell>
              <TableCell>{teacher.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
