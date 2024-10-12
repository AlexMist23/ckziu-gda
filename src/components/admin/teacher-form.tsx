"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "@/hooks/use-toast";
import { postHelperClient, getHelperClient } from "@/lib/fetch-helper-client";
import { Teacher, Subject } from "@/types/types";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  subject_ids: z.array(z.number()).min(1, {
    message: "Please select at least one subject.",
  }),
});

interface TeacherFormProps {
  onTeacherAdded: (teacher: Teacher) => void;
}

export function TeacherForm({ onTeacherAdded }: TeacherFormProps) {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingSubjects, setIsLoadingSubjects] = useState(true);
  const [isSubjectsOpen, setIsSubjectsOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject_ids: [],
    },
  });

  useEffect(() => {
    const fetchSubjects = async () => {
      setIsLoadingSubjects(true);
      try {
        const fetchedSubjects = await getHelperClient<Subject[]>(
          "/api/admin/subjects"
        );
        if (
          Array.isArray(fetchedSubjects) &&
          fetchedSubjects.every(isValidSubject)
        ) {
          setSubjects(fetchedSubjects);
        } else {
          throw new Error("Invalid subjects data");
        }
      } catch (error) {
        console.error("Failed to fetch subjects:", error);
        toast({
          title: "Error",
          description: "Failed to load subjects",
          variant: "destructive",
        });
        setSubjects([]);
      } finally {
        setIsLoadingSubjects(false);
      }
    };

    fetchSubjects();
  }, []);

  function isValidSubject(subject: Subject): subject is Subject {
    return (
      typeof subject === "object" &&
      subject !== null &&
      typeof subject.id === "number" &&
      typeof subject.name === "string"
    );
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const newTeacher = await postHelperClient<Teacher>(
        "/api/admin/teachers",
        values
      );
      onTeacherAdded(newTeacher);
      form.reset();
      toast({
        title: "Success",
        description: "Teacher added successfully",
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to add teacher",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="johndoe@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject_ids"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subjects</FormLabel>
              <FormControl>
                <div className="space-y-2">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full justify-between"
                    onClick={() => setIsSubjectsOpen(!isSubjectsOpen)}
                    disabled={isLoadingSubjects}
                  >
                    {isLoadingSubjects
                      ? "Loading subjects..."
                      : field.value.length > 0
                      ? `${field.value.length} subject${
                          field.value.length > 1 ? "s" : ""
                        } selected`
                      : "Select subjects"}
                    {isSubjectsOpen ? (
                      <ChevronUp className="h-4 w-4 opacity-50" />
                    ) : (
                      <ChevronDown className="h-4 w-4 opacity-50" />
                    )}
                  </Button>
                  {isSubjectsOpen && !isLoadingSubjects && (
                    <ScrollArea className="h-72 rounded-md border">
                      <div className="p-4 space-y-2">
                        {subjects.map((subject) => (
                          <div
                            key={subject.id}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox
                              id={`subject-${subject.id}`}
                              checked={field.value.includes(subject.id)}
                              onCheckedChange={(checked) => {
                                const updatedValue = checked
                                  ? [...field.value, subject.id]
                                  : field.value.filter(
                                      (id) => id !== subject.id
                                    );
                                field.onChange(updatedValue);
                              }}
                            />
                            <label
                              htmlFor={`subject-${subject.id}`}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {subject.name}
                            </label>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isLoading || isLoadingSubjects}>
          {isLoading ? "Adding..." : "Add Teacher"}
        </Button>
      </form>
    </Form>
  );
}
