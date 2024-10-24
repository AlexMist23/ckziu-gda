"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogClose, DialogTrigger } from "@radix-ui/react-dialog";
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
import { useRouter } from "next/navigation";
import { Subject, TeacherWithSubjects } from "@/lib/kysely";
import { Edit, Loader2 } from "lucide-react";
import { useState } from "react";
import MultiSelectSearch from "@/components/ui/multi-select-search";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subjects_ids: z.array(z.number()).min(1, {
    message: "Please select at least one subject.",
  }),
});
interface Params {
  teacher: TeacherWithSubjects;
  subjects: Subject[];
}

export default function EditTeacherButton({ teacher }: Params) {
  const router = useRouter();
  const [isFetching, setIsFetching] = useState(false);
  const [open, setOpen] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: teacher.name,
      email: teacher.email,
      subjects_ids: teacher.subjects.map((subject) => subject.id),
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsFetching(true);
      const response = await fetch(`/api/admin/teachers/${teacher.id}`, {
        method: "PUT",
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to edit teacher");
      }

      toast({
        title: "Success",
        description: `Edited teacher: ${teacher.name}`,
      });
      router.refresh();
      setOpen(false);
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to edit teacher",
        variant: "destructive",
      });
    } finally {
      setIsFetching(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={"secondary"} size={"icon"} disabled={isFetching}>
          {isFetching ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Edit className="w-4 h-4" />
          )}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Teacher</DialogTitle>
          <DialogDescription>
            Edit currently existing teacher in database.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Teacher Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter teacher name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter teacher email"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subjects_ids"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lectures</FormLabel>
                  <FormControl>
                    <MultiSelectSearch
                      placeholder="Select lectures"
                      onSelect={field.onChange}
                      apiEndpoint="/api/admin/subjects/search"
                      buttonClassName="w-full"
                      popoverWidth="w-full"
                      initialItems={teacher.subjects.map((subject) => {
                        return {
                          value: subject.id,
                          label: subject.name,
                        };
                      })}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button disabled={isFetching} type="submit">
                Edit
              </Button>
              <DialogClose asChild>
                <Button
                  disabled={isFetching}
                  variant="outline"
                  onClick={() => form.reset()}
                >
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
