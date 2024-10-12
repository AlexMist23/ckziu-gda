import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";

interface OverallFrequencyChartProps {
  totalAttended: number;
  totalScheduled: number;
}

export function OverallFrequencyChart({
  totalAttended,
  totalScheduled,
}: OverallFrequencyChartProps) {
  const data = [
    { name: "Attended", value: totalAttended },
    { name: "Missed", value: totalScheduled - totalAttended },
  ];

  return (
    <Card className="w-full h-fit">
      <CardHeader>
        <CardTitle>Overall Attendance</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            attended: {
              label: "Attended",
              color: "hsl(var(--chart-7))",
            },
            missed: {
              label: "Missed",
              color: "hsl(var(--chart-8))",
            },
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart className="">
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={130}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={`var(--color-${entry.name.toLowerCase()})`}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
