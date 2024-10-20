"use client";

import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Schedule, Lecture, Subject, Teacher } from "@/types/db.types";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const lectureSchema = z.object({
  subject_id: z.number(),
  teacher_id: z.number(),
  start_time: z.string(),
  end_time: z.string(),
  room: z.string().optional(),
});

const scheduleSchema = z.object({
  date: z.string(),
  lectures: z.array(lectureSchema),
});

type ScheduleFormProps = {
  schedule?: Schedule & { lectures: Lecture[] };
  subjects: Subject[];
  teachers: Teacher[];
  onSubmit: (data: z.infer<typeof scheduleSchema>) => Promise<void>;
  onCancel?: () => void;
};

export function ScheduleForm({
  schedule,
  subjects,
  teachers,
  onSubmit,
  onCancel,
}: ScheduleFormProps) {
  const form = useForm<z.infer<typeof scheduleSchema>>({
    resolver: zodResolver(scheduleSchema),
    defaultValues: {
      date: schedule?.date ?? "",
      lectures: schedule?.lectures ?? [
        {
          subject_id: 0,
          teacher_id: 0,
          start_time: "",
          end_time: "",
          room: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "lectures",
  });

  useEffect(() => {
    if (schedule) {
      form.reset({
        date: schedule.date,
        lectures: schedule.lectures,
      });
    } else {
      form.reset({
        date: "",
        lectures: [
          {
            subject_id: 0,
            teacher_id: 0,
            start_time: "",
            end_time: "",
            room: "",
          },
        ],
      });
    }
  }, [schedule, form]);

  const handleSubmit = async (data: z.infer<typeof scheduleSchema>) => {
    await onSubmit(data);
    if (!schedule) {
      form.reset();
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {fields.map((field, index) => (
          <div key={field.id} className="space-y-4 p-4 border rounded">
            <FormField
              control={form.control}
              name={`lectures.${index}.subject_id`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <Select
                    onValueChange={(value) => field.onChange(Number(value))}
                    value={field.value.toString()}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {subjects.map((subject) => (
                        <SelectItem
                          key={subject.id}
                          value={subject.id.toString()}
                        >
                          {subject.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name={`lectures.${index}.teacher_id`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Teacher</FormLabel>
                  <Select
                    onValueChange={(value) => field.onChange(Number(value))}
                    value={field.value.toString()}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a teacher" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {teachers.map((teacher) => (
                        <SelectItem
                          key={teacher.id}
                          value={teacher.id.toString()}
                        >
                          {teacher.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name={`lectures.${index}.start_time`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Start Time</FormLabel>
                  <FormControl>
                    <Input type="time" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name={`lectures.${index}.end_time`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>End Time</FormLabel>
                  <FormControl>
                    <Input type="time" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name={`lectures.${index}.room`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Room</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="button"
              variant="destructive"
              onClick={() => remove(index)}
            >
              Remove Lecture
            </Button>
          </div>
        ))}

        <Button
          type="button"
          onClick={() =>
            append({
              subject_id: 0,
              teacher_id: 0,
              start_time: "",
              end_time: "",
              room: "",
            })
          }
        >
          Add Lecture
        </Button>

        <div className="flex justify-end space-x-2">
          {onCancel && (
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
          )}
          <Button type="submit">
            {schedule ? "Update Schedule" : "Add Schedule"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
