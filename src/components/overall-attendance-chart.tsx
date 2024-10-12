"use client";

import * as React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface OverallAttendanceChartProps {
  attendedHours: number;
  missedHours: number;
  remainingHours: number;
}

const chartConfig = {
  hours: {
    label: "Hours",
  },
  attended: {
    label: "Attended",
    color: "hsl(var(--chart-attendance))",
  },
  missed: {
    label: "Missed",
    color: "hsl(var(--chart-missed))",
  },
  remaining: {
    label: "Remaining",
    color: "hsl(var(--chart-remaining))",
  },
} satisfies ChartConfig;

export function OverallAttendanceChart({
  attendedHours,
  missedHours,
  remainingHours,
}: OverallAttendanceChartProps) {
  const chartData = React.useMemo(
    () => [
      {
        category: "attended",
        hours: attendedHours,
        fill: "hsl(var(--chart-attendance))",
      },
      {
        category: "missed",
        hours: missedHours,
        fill: "hsl(var(--chart-missed))",
      },
      {
        category: "remaining",
        hours: remainingHours,
        fill: "hsl(var(--chart-remaining))",
      },
    ],
    [attendedHours, missedHours, remainingHours]
  );

  const totalHours = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.hours, 0);
  }, [chartData]);

  const attendancePercentage = React.useMemo(() => {
    return totalHours > 0
      ? ((attendedHours / (attendedHours + missedHours)) * 100).toFixed(1)
      : "0.0";
  }, [attendedHours, missedHours, totalHours]);

  const isAttendanceImproving = attendedHours > missedHours;

  return (
    <Card className="flex flex-col max-h-[400px]">
      <CardHeader className="items-center pb-0">
        <CardTitle>Overall Attendance</CardTitle>
        <CardDescription>Current Academic Year</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="hours"
              nameKey="category"
              innerRadius={66}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {attendancePercentage}%
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Attendance
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          {isAttendanceImproving ? (
            <>
              Attendance is improving{" "}
              <TrendingUp className="h-4 w-4 text-green-500" />
            </>
          ) : (
            <>
              Attendance needs improvement{" "}
              <TrendingDown className="h-4 w-4 text-red-500" />
            </>
          )}
        </div>
        <div className="leading-none text-muted-foreground">
          Total hours: {totalHours} | Attended: {attendedHours} | Missed:{" "}
          {missedHours} | Remaining: {remainingHours}
        </div>
      </CardFooter>
    </Card>
  );
}
