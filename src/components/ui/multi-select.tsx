"use client";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Check } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Checked = DropdownMenuCheckboxItemProps["checked"];

interface Subject {
  id: string;
  name: string;
}

interface SubjectMultiSelectProps {
  subjects: Subject[];
  selectedSubjects: string[];
  onChange: (selectedSubjects: string[]) => void;
}

export function SubjectMultiSelect({
  subjects,
  selectedSubjects,
  onChange,
}: SubjectMultiSelectProps) {
  const handleSubjectChange = (subjectId: string) => {
    const updatedSubjects = selectedSubjects.includes(subjectId)
      ? selectedSubjects.filter((id) => id !== subjectId)
      : [...selectedSubjects, subjectId];
    onChange(updatedSubjects);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          {selectedSubjects.length > 0
            ? `${selectedSubjects.length} selected`
            : "Select subjects"}
          <Check
            className={`ml-2 h-4 w-4 ${
              selectedSubjects.length > 0 ? "opacity-100" : "opacity-0"
            }`}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Subjects</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {subjects.map((subject) => (
          <DropdownMenuCheckboxItem
            key={subject.id}
            checked={selectedSubjects.includes(subject.id)}
            onCheckedChange={() => handleSubjectChange(subject.id)}
          >
            {subject.name}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
