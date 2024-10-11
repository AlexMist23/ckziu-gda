"use client";

import { useState, useEffect, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchHelperClient } from "@/lib/fetch-helper-client";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface PerformanceMetric {
  timestamp: string;
  queryTime: number;
  rowCount: number;
}

export default function DatabaseStatusPage() {
  const [metrics, setMetrics] = useState<PerformanceMetric[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const fetchMetrics = useCallback(async () => {
    try {
      const data = await fetchHelperClient<PerformanceMetric[]>(
        "/api/admin/database-status"
      );
      console.log("Fetched metrics:", data);
      setMetrics(data);
    } catch (error) {
      console.error("Failed to fetch database metrics:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMetrics();
    const interval = setInterval(fetchMetrics, 60000); // Refresh every minute

    return () => clearInterval(interval);
  }, [fetchMetrics]);

  const refreshData = () => {
    router.refresh();
    fetchMetrics();
  };

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  console.log("Rendering with metrics:", metrics);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">
        Database Performance Dashboard
      </h1>
      <Button onClick={refreshData} className="mb-4">
        Refresh Data
      </Button>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="queryTime">Query Time</TabsTrigger>
          <TabsTrigger value="rowCount">Row Count</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <MetricCard
              title="Avg Query Time"
              value={`${averageQueryTime(metrics).toFixed(2)}ms`}
            />
            <MetricCard
              title="Max Query Time"
              value={`${maxQueryTime(metrics).toFixed(2)}ms`}
            />
            <MetricCard
              title="Total Rows Fetched"
              value={totalRowsFetched(metrics).toString()}
            />
          </div>
          <Card className="relative">
            <CardHeader>
              <CardTitle>Performance Overview</CardTitle>
            </CardHeader>
            <CardContent className="h-fit w-full">
              <ChartContainer
                className="h-64 w-full"
                config={{
                  queryTime: {
                    label: "Query Time",
                    color: "hsl(var(--chart-1))",
                  },
                  rowCount: {
                    label: "Row Count",
                    color: "hsl(var(--chart-2))",
                  },
                }}
              >
                <LineChart data={metrics}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="timestamp"
                    tickFormatter={(value) =>
                      format(new Date(value), "HH:mm:ss")
                    }
                    angle={-45}
                    textAnchor="end"
                    height={70}
                  />
                  <YAxis
                    yAxisId="left"
                    domain={["auto", "auto"]}
                    label={{
                      value: "Query Time (ms)",
                      angle: -90,
                      position: "insideLeft",
                    }}
                  />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    domain={["auto", "auto"]}
                    label={{
                      value: "Row Count",
                      angle: 90,
                      position: "insideRight",
                    }}
                  />
                  <ChartTooltip
                    content={
                      <ChartTooltipContent
                        formatter={(value, name) => [
                          `${
                            name === "Query Time"
                              ? `${(+value).toFixed(3)} ms`
                              : value
                          }`,
                          name,
                        ]}
                      />
                    }
                  />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="queryTime"
                    stroke="var(--color-queryTime)"
                    name="Query Time"
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="rowCount"
                    stroke="var(--color-rowCount)"
                    name="Row Count"
                  />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Recent Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Timestamp</TableHead>
                      <TableHead>Query Time (ms)</TableHead>
                      <TableHead>Row Count</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {metrics.slice(-5).map((metric, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          {format(
                            new Date(metric.timestamp),
                            "yyyy-MM-dd HH:mm:ss"
                          )}
                        </TableCell>
                        <TableCell>{metric.queryTime.toFixed(2)}</TableCell>
                        <TableCell>{metric.rowCount}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="queryTime">
          <Card>
            <CardHeader>
              <CardTitle>Query Time Distribution</CardTitle>
            </CardHeader>
            <CardContent className="h-fit w-full">
              <ChartContainer
                className="h-64 w-full"
                config={{
                  queryTime: {
                    label: "Query Time",
                    color: "hsl(var(--chart-1))",
                  },
                }}
              >
                <BarChart data={metrics}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis
                    dataKey="timestamp"
                    tickFormatter={(value) =>
                      format(new Date(value), "HH:mm:ss")
                    }
                    angle={-45}
                    textAnchor="end"
                    height={70}
                  />
                  <YAxis
                    domain={["auto", "auto"]}
                    label={{
                      value: "Query Time (ms)",
                      angle: -90,
                      position: "insideLeft",
                    }}
                  />
                  <ChartTooltip
                    content={
                      <ChartTooltipContent
                        formatter={(value) => [`${value} ms`, "Query Time"]}
                      />
                    }
                  />
                  <Bar
                    dataKey="queryTime"
                    fill="var(--color-queryTime)"
                    name="Query Time"
                  />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="rowCount">
          <Card>
            <CardHeader>
              <CardTitle>Row Count Distribution</CardTitle>
            </CardHeader>
            <CardContent className="h-fit w-full">
              <ChartContainer
                className="h-64 w-full"
                config={{
                  rowCount: {
                    label: "Row Count",
                    color: "hsl(var(--chart-2))",
                  },
                }}
              >
                <BarChart data={metrics}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis
                    dataKey="timestamp"
                    tickFormatter={(value) =>
                      format(new Date(value), "HH:mm:ss")
                    }
                    angle={-45}
                    textAnchor="end"
                    height={70}
                  />
                  <YAxis
                    domain={["auto", "auto"]}
                    label={{
                      value: "Row Count",
                      angle: -90,
                      position: "insideLeft",
                    }}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar
                    dataKey="rowCount"
                    fill="var(--color-rowCount)"
                    name="Row Count"
                  />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function MetricCard({ title, value }: { title: string; value: string }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
}

function LoadingSkeleton() {
  return (
    <div className="container mx-auto py-10 space-y-4">
      <Skeleton className="h-8 w-64" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-32 w-full" />
      </div>
      <Skeleton className="h-[300px] w-full" />
    </div>
  );
}

function averageQueryTime(metrics: PerformanceMetric[]): number {
  return (
    metrics.reduce((sum, metric) => sum + metric.queryTime, 0) / metrics.length
  );
}

function maxQueryTime(metrics: PerformanceMetric[]): number {
  return Math.max(...metrics.map((metric) => metric.queryTime));
}

function totalRowsFetched(metrics: PerformanceMetric[]): number {
  return metrics.reduce((sum, metric) => sum + metric.rowCount, 0);
}
