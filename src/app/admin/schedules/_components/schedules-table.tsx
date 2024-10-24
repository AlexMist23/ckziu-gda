import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Schedule } from "@/lib/kysely";
import EditScheduleButton from "./edit-schedule-button";
import DeleteScheduleButton from "./delete-schedule-button";
import { format, parseISO } from "date-fns";

interface Params {
  schedules: Schedule[];
  className?: string;
}

export default function SchedulesTable({ schedules, className }: Params) {
  return (
    <Table className={className}>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {schedules && schedules.length > 0 ? (
          schedules.map((schedule) => (
            <TableRow key={schedule.id}>
              <TableCell>{schedule.id}</TableCell>
              <TableCell>
                {format(parseISO(schedule.date), "yyyy-MM-dd")}
              </TableCell>
              <TableCell className="w-24">
                <div className="flex gap-2">
                  <EditScheduleButton schedule={schedule} />
                  <DeleteScheduleButton schedule={schedule} />
                </div>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={4} className="text-center">
              No entries in the database
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
