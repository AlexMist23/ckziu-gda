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
import { useRouter } from "next/navigation";
import { CirclePlus } from "lucide-react";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

const formSchema = z.object({
  date: z.date().min(new Date(), {
    message: "Date must be today or in the future.",
  }),
  lectures: z.array(z.string()).min(1, {
    message: "Please select at least one lecture.",
  }),
});

type FormData = z.infer<typeof formSchema>;

export default function AddScheduleButton() {
  const router = useRouter();
  const [isFetching, setIsFetching] = useState(false);
  const [open, setOpen] = useState(false);
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: new Date(),
      lectures: [],
    },
  });

  async function onSubmit(values: FormData) {
    setIsFetching(true);
    try {
      const response = await fetch("/api/admin/schedules", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: values.date,
          lectures: values.lectures,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add schedule");
      }
      toast({
        title: "Success",
        description: `Added schedule: ${values.date}`,
      });
      router.refresh();
      form.reset();
      setOpen(false);
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to add schedule",
        variant: "destructive",
      });
    } finally {
      setIsFetching(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button disabled={isFetching} className="mb-4">
          <CirclePlus className="w-4 h-4 mr-2" /> Add Schedule
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Schedule</DialogTitle>
          <DialogDescription>
            Add new schedule to the database.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <FormControl>
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date()}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lectures"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lectures</FormLabel>
                  <FormControl>
                    <SelectMultiSearch
                      placeholder="Select lectures"
                      onSelect={field.onChange}
                      apiEndpoint="/api/admin/lectures/search"
                      initialValues={field.value}
                      buttonClassName="w-full"
                      popoverWidth="w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button disabled={isFetching} type="submit">
                Add
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
