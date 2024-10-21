"use client";

import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { RadialBar, RadialBarChart } from "recharts";

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
} from "@/components/ui/chart";

interface SubjectData {
  subject_name: string;
  attended_hours: number;
  scheduled_hours: number;
}

interface SubjectsOverviewChartProps {
  subjectsData: SubjectData[];
}

const chartConfig = {
  fizyka: {
    label: "fizyka",
    color: "hsl(var(--chart-missed))",
  },
  remaining: {
    label: "Remaining",
    color: "hsl(var(--chart-remaining))",
  },
} satisfies ChartConfig;

export function SubjectsOverviewChart({
  subjectsData,
}: SubjectsOverviewChartProps) {
  const chartData = subjectsData
    .map((subject, index) => ({
      subject: subject.subject_name,
      attendancePercentage:
        (Number(subject.attended_hours) / Number(subject.scheduled_hours)) *
        100,
      fill: `hsl(var(--chart-${(index % 5) + 1}))`, // Cycle through our 3 chart colors
    }))
    .sort((a, b) => b.attendancePercentage - a.attendancePercentage);

  const overallAttendance =
    chartData.reduce((sum, subject) => sum + subject.attendancePercentage, 0) /
    chartData.length;
  const isOverallImproving = overallAttendance > 75; // Assuming 75% as a benchmark

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-background p-2 rounded shadow-md border border-border">
          <p className="font-semibold">{data.subject}</p>
          <p>{data.attendancePercentage.toFixed(1)}% attendance</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="flex flex-col max-h-[400px]">
      <CardHeader className="items-center pb-0">
        <CardTitle>Subjects Overview</CardTitle>
        <CardDescription>Current Academic Year</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto max-h-[250px] w-full"
        >
          <RadialBarChart
            data={chartData}
            innerRadius="30%"
            outerRadius="100%"
            startAngle={180}
            endAngle={-180}
          >
            <ChartTooltip content={<CustomTooltip />} />
            <RadialBar dataKey="attendancePercentage" background />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex flex-col items-center">
        <div className="flex items-center gap-2 font-medium leading-none">
          {isOverallImproving ? (
            <>
              Overall attendance is good{" "}
              <TrendingUp className="h-4 w-4 text-green-500" />
            </>
          ) : (
            <>
              Overall attendance needs improvement{" "}
              <TrendingDown className="h-4 w-4 text-red-500" />
            </>
          )}
        </div>
        <div className="leading-none text-muted-foreground">
          Average attendance: {overallAttendance.toFixed(1)}%
        </div>
      </CardFooter>
    </Card>
  );
}
