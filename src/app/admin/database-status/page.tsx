"use client";

import { useState, useEffect, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchHelperClient } from "@/lib/fetch-helper-client";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { format } from "date-fns";

interface PerformanceMetric {
  timestamp: string;
  queryTime: number;
  rowCount: number;
}

export default function PerformanceOverviewChart() {
  const [metrics, setMetrics] = useState<PerformanceMetric[]>([]);

  const fetchMetrics = useCallback(async () => {
    try {
      const data = await fetchHelperClient<PerformanceMetric[]>(
        "/api/admin/database-status"
      );
      setMetrics(data);
    } catch (error) {
      console.error("Failed to fetch database metrics:", error);
    }
  }, []);

  useEffect(() => {
    fetchMetrics();
    const interval = setInterval(fetchMetrics, 60000); // Refresh every minute
    return () => clearInterval(interval);
  }, [fetchMetrics]);

  const formatXAxis = (tickItem: string) => {
    return format(new Date(tickItem), "HH:mm:ss");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Overview</CardTitle>
      </CardHeader>
      <CardContent className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={metrics}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="timestamp"
              tickFormatter={formatXAxis}
              angle={-45}
              textAnchor="end"
              height={70}
            />
            <YAxis
              yAxisId="left"
              label={{
                value: "Query Time (ms)",
                angle: -90,
                position: "insideLeft",
              }}
              domain={["auto", "auto"]}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              label={{
                value: "Row Count",
                angle: 90,
                position: "insideRight",
              }}
              domain={[0, "dataMax + 1"]}
            />
            <Tooltip
              formatter={(value: number, name: string) => [
                `${value.toFixed(2)} ${name === "queryTime" ? "ms" : ""}`,
                name === "queryTime" ? "Query Time" : "Row Count",
              ]}
              labelFormatter={(label: string) =>
                format(new Date(label), "yyyy-MM-dd HH:mm:ss")
              }
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="queryTime"
              stroke="hsl(var(--chart-1))"
              dot={{ r: 4 }}
              activeDot={{ r: 8 }}
              name="Query Time"
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="rowCount"
              stroke="hsl(var(--chart-2))"
              dot={{ r: 4 }}
              activeDot={{ r: 8 }}
              name="Row Count"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
