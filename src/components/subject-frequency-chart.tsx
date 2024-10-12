import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ChartContainer } from "@/components/ui/chart";

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
  // Ensure all values are numbers
  const attended = Number(attendedHours);
  const scheduled = Number(scheduledHours);
  const max = Number(maxHours);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{subjectName}</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            attended: {
              label: "Attended",
              color: "hsl(var(--chart-1))",
            },
            scheduled: {
              label: "Scheduled",
              color: "hsl(var(--chart-2))",
            },
            remaining: {
              label: "Remaining",
              color: "hsl(var(--chart-3))",
            },
          }}
        >
          <div className="flex flex-wrap gap-1">
            {Array.from({ length: max }).map((_, index) => {
              let status: "attended" | "scheduled" | "remaining" = "remaining";
              if (index < attended) {
                status = "attended";
              } else if (index < scheduled) {
                status = "scheduled";
              }

              return (
                <TooltipProvider key={index}>
                  <Tooltip>
                    <TooltipTrigger>
                      <div
                        className={`w-4 h-4 rounded`}
                        style={{
                          backgroundColor: `var(--color-${status})`,
                        }}
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        Hour {index + 1}: {status}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              );
            })}
          </div>
        </ChartContainer>
        <div className="mt-2 text-sm text-muted-foreground">
          Attended: {attended} | Scheduled: {scheduled - attended} | Remaining:{" "}
          {max - scheduled}
        </div>
      </CardContent>
    </Card>
  );
}
