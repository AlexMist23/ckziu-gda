"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getHelperClient } from "@/lib/fetch-helper-client";
import { Teacher, Subject } from "@/types/types";
import { useToast } from "@/hooks/use-toast";
import { Mail, Book, User } from "lucide-react";

export default function TeachersPage() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [filteredTeachers, setFilteredTeachers] = useState<Teacher[]>([]);
  const [filterValue, setFilterValue] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const fetchedTeachers = await getHelperClient<Teacher[]>(
          "/api/teachers"
        );
        setTeachers(fetchedTeachers);
        setFilteredTeachers(fetchedTeachers);
      } catch (error) {
        console.error("Failed to fetch teachers:", error);
        toast({
          title: "Error",
          description: "Failed to fetch teachers.",
          variant: "destructive",
        });
      }
    };

    fetchTeachers();
  }, [toast]);

  useEffect(() => {
    const lowercasedFilter = filterValue.toLowerCase();
    const filtered = teachers.filter((teacher) => {
      const nameMatch = teacher.name.toLowerCase().includes(lowercasedFilter);
      const emailMatch = teacher.email.toLowerCase().includes(lowercasedFilter);
      const subjectMatch = teacher.subjects.some((subjectId) => {
        const subject = getSubjectById(subjectId);
        return subject && subject.name.toLowerCase().includes(lowercasedFilter);
      });
      return nameMatch || emailMatch || subjectMatch;
    });
    setFilteredTeachers(filtered);
  }, [filterValue, teachers]);

  const getSubjectById = (subjectId: number): Subject | undefined => {
    // This is a placeholder. You should implement a proper way to get subjects,
    // either by fetching them separately or including them in the teacher data.
    return {
      id: subjectId,
      name: `Subject ${subjectId}`,
      // Add other properties as needed
    };
  };

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Teachers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Input
              placeholder="Filter teachers..."
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
              className="max-w-sm"
            />
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/4">
                  <div className="flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    Name
                  </div>
                </TableHead>
                <TableHead className="w-1/4">
                  <div className="flex items-center">
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                  </div>
                </TableHead>
                <TableHead className="w-1/2">
                  <div className="flex items-center">
                    <Book className="mr-2 h-4 w-4" />
                    Subjects
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTeachers.map((teacher) => (
                <TableRow key={teacher.id}>
                  <TableCell>{teacher.name}</TableCell>
                  <TableCell>
                    <a
                      href={`mailto:${teacher.email}`}
                      className="hover:underline"
                    >
                      {teacher.email}
                    </a>
                  </TableCell>
                  <TableCell>
                    {teacher.subjects && teacher.subjects.length > 0 ? (
                      <div className="flex flex-col space-y-1">
                        {teacher.subjects.map((subjectId) => {
                          const subject = getSubjectById(subjectId);
                          return (
                            <span key={subjectId} className="text-sm">
                              {subject ? subject.name : `Subject ${subjectId}`}
                            </span>
                          );
                        })}
                      </div>
                    ) : (
                      <span className="text-sm text-muted-foreground">
                        No subjects assigned
                      </span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
