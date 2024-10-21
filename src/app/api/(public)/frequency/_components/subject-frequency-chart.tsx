import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ChartContainer } from "@/components/ui/chart";
import { cn } from "@/lib/utils";

interface SubjectFrequencyProps {
  subjectName: string;
  maxHours: number;
  attendedHours: number;
  scheduledHours: number;
}

export function SubjectFrequencyChart({
  subjectName,
  maxHours,
  attendedHours,
  scheduledHours,
}: SubjectFrequencyProps) {
  const attended = Number(attendedHours);
  const missed = Number(scheduledHours);
  const max = Number(maxHours);

  return (
    <Card className="flex flex-col w-full ">
      <CardHeader>
        <CardTitle>{subjectName}</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          className="h-24 w-full"
          config={{
            attended: {
              label: "Attended",
              color: "hsl(var(--chart-attendance))",
            },
            scheduled: {
              label: "Scheduled",
              color: "hsl(var(--chart-missed))",
            },
            remaining: {
              label: "Remaining",
              color: "hsl(var(--chart-remaining))",
            },
          }}
        >
          <div className="flex flex-wrap gap-1">
            {Array.from({ length: max }).map((_, index) => {
              let status: "attended" | "missed" | "remaining" = "remaining";
              if (index < attended) {
                status = "attended";
              } else if (index < missed) {
                status = "missed";
              }

              return (
                <TooltipProvider key={index}>
                  <Tooltip>
                    <TooltipTrigger>
                      <div
                        className={cn(
                          `w-6 h-6 rounded`,
                          status === "attended" ? "bg-chart-attendance" : "",
                          status === "missed" ? "bg-chart-missed" : "",
                          status === "remaining" ? "bg-chart-remaining" : ""
                        )}
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{status}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              );
            })}
          </div>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex flex-col items-center">
        Attended: {attended} | Missed: {missed - attended} | Remaining:{" "}
        {max - missed}
      </CardFooter>
    </Card>
  );
}
