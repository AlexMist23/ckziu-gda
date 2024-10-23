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
import { CirclePlus } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
});

export default function AddTeacherButton() {
  const router = useRouter();
  const [isFetching, setIsFetching] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsFetching(true);
    try {
      const response = await fetch("/api/admin/subjects", {
        method: "POST",
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to add subject");
      }
      toast({
        title: "Success",
        description: `Added subject: ${values.name}`,
      });
      router.refresh();
      form.reset();
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to add subject",
        variant: "destructive",
      });
    } finally {
      setIsFetching(false);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button disabled={isFetching} className="mr-auto mb-4">
          <CirclePlus className="w-4 h-4 mr-2" /> Add Subject
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Subject</DialogTitle>
          <DialogDescription>
            Add new subject to the database.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
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
              <Button disabled={isFetching} type="submit">
                Add
              </Button>
              <DialogClose>
                <Button disabled={isFetching} variant={"outline"}>
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
