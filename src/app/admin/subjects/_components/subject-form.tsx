"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Subject } from "@/types/db.types";
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

const subjectSchema = z.object({
  name: z.string().min(1, "Subject name is required"),
});

type SubjectFormProps = {
  subject?: Subject;
  onSubmit: (data: z.infer<typeof subjectSchema>) => Promise<void>;
  onCancel?: () => void;
};

export function SubjectForm({ subject, onSubmit, onCancel }: SubjectFormProps) {
  const form = useForm<z.infer<typeof subjectSchema>>({
    resolver: zodResolver(subjectSchema),
    defaultValues: {
      name: subject?.name || "",
    },
  });

  useEffect(() => {
    if (subject) {
      form.reset({ name: subject.name });
    } else {
      form.reset({ name: "" });
    }
  }, [subject, form]);

  const handleSubmit = async (data: z.infer<typeof subjectSchema>) => {
    await onSubmit(data);
    if (!subject) {
      form.reset();
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter subject name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end space-x-2">
          {onCancel && (
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
          )}
          <Button type="submit">
            {subject ? "Update Subject" : "Add Subject"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
