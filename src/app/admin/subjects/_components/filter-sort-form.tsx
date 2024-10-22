"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { z } from "zod";
import { Search } from "lucide-react";

const subjectFilterSortSchema = z.object({
  name: z.string().optional(),
  sortBy: z.enum(["name", "id"]).default("name"),
  order: z.enum(["asc", "desc"]).default("asc"),
});

type SubjectFilterSortValues = z.infer<typeof subjectFilterSortSchema>;

export function SubjectFilterSortForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const form = useForm<SubjectFilterSortValues>({
    resolver: zodResolver(subjectFilterSortSchema),
    defaultValues: {
      name: searchParams.get("name") || "",
      sortBy:
        (searchParams.get("sortBy") as SubjectFilterSortValues["sortBy"]) ||
        "name",
      order:
        (searchParams.get("order") as SubjectFilterSortValues["order"]) ||
        "asc",
    },
  });

  function onSubmit(data: SubjectFilterSortValues) {
    const params = new URLSearchParams();
    if (data.name) params.set("name", data.name);
    params.set("sortBy", data.sortBy);
    params.set("order", data.order);
    params.set("page", "1"); // Reset to first page on filter/sort change
    router.push(`?${params.toString()}`);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mb-6">
        <div className="flex space-x-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="text-muted-foreground">Search</FormLabel>
                <FormControl>
                  <Input placeholder="Search by name" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sortBy"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-muted-foreground">Sort by</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="name">Name</SelectItem>
                    <SelectItem value="id">ID</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="order"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-muted-foreground">Order</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="Order" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="asc">Ascending</SelectItem>
                    <SelectItem value="desc">Descending</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <Button className="self-end" type="submit">
            <Search className="" />
          </Button>
        </div>
      </form>
    </Form>
  );
}
