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
import { Subject } from "@/lib/kysely";
import { Edit, Loader2 } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  id: z.number(),
});

interface EditSubjectButtonParams {
  subject: Subject;
}

export default function EditTeacherButton({
  subject,
}: EditSubjectButtonParams) {
  const router = useRouter();
  const [isfetching, setIsFetching] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: subject.id,
      name: subject.name,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsFetching(true);
      const response = await fetch(`/api/admin/subjects/${values.id}`, {
        method: "PUT",
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to edit subject");
      }

      toast({
        title: "Success",
        description: `Edited subject: ${values.name}`,
      });
      router.refresh();
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to edit subject",
        variant: "destructive",
      });
    } finally {
      setIsFetching(false);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"secondary"} size={"icon"} disabled={isfetching}>
          {isfetching ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Edit className="w-4 h-4" />
          )}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Subject</DialogTitle>
          <DialogDescription>
            Edit currently existing subject in database.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject Id</FormLabel>
                  <FormControl>
                    <Input disabled placeholder="Enter subject id" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter subject name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <DialogFooter className="mt-4">
              <DialogClose>
                <Button type="submit">Submit</Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
