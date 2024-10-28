"use client";

import { useState, useEffect } from "react";
import { useClipboard } from "use-clipboard-copy";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Code } from "@/components/ui/code";
import { Copy, Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Column {
  column_name: string;
  data_type: string;
  nullable: string;
  constraint_type: string;
  foreign_key_info: string;
}

interface TableSchema {
  table_name: string;
  columns: Column[];
  indexes: string[];
}

function generateSQLQuery(schema: TableSchema[]): string {
  let query = "";

  schema.forEach((table) => {
    query += `CREATE TABLE ${table.table_name} (\n`;

    table.columns.forEach((column, index) => {
      query += `  ${column.column_name} ${column.data_type} ${column.nullable}`;

      if (column.constraint_type) {
        query += ` ${column.constraint_type}`;
      }

      if (column.foreign_key_info) {
        query += ` ${column.foreign_key_info}`;
      }

      if (index < table.columns.length - 1) {
        query += ",";
      }

      query += "\n";
    });

    query += ");\n\n";

    if (table.indexes.length > 0) {
      table.indexes.forEach((index) => {
        query += `${index};\n`;
      });
      query += "\n";
    }
  });

  return query;
}

export default function DatabaseSchemaPage() {
  const [schema, setSchema] = useState<TableSchema[]>([]);
  const [sqlQuery, setSqlQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [isCopied, setIsCopied] = useState(false);
  const clipboard = useClipboard();

  useEffect(() => {
    const fetchSchema = async () => {
      try {
        const req = await fetch("/api/admin/database-schema");
        const data = await req.json();
        setSchema(data);
        setSqlQuery(generateSQLQuery(data));
      } catch (error) {
        console.error("Failed to fetch database schema:", error);
        toast({
          title: "Error",
          description: "Failed to fetch database schema",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchSchema();
  }, []);

  const handleCopy = () => {
    clipboard.copy(sqlQuery);
    setIsCopied(true);
    toast({
      title: "Copied",
      description: "SQL query copied to clipboard",
    });
    setTimeout(() => setIsCopied(false), 2000);
  };

  if (isLoading) {
    return <div>Loading database schema...</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Database Schema</h1>
      <Tabs defaultValue="schema" className="w-full">
        <TabsList>
          <TabsTrigger value="schema">Schema</TabsTrigger>
          <TabsTrigger value="query">SQL Query</TabsTrigger>
        </TabsList>
        <TabsContent value="schema">
          <Accordion type="single" collapsible className="w-full">
            {schema.map((table) => (
              <AccordionItem key={table.table_name} value={table.table_name}>
                <AccordionTrigger>{table.table_name}</AccordionTrigger>
                <AccordionContent>
                  <Card>
                    <CardHeader>
                      <CardTitle>Columns</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Nullable</TableHead>
                            <TableHead>Constraint</TableHead>
                            <TableHead>Foreign Key</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {table.columns.map((column) => (
                            <TableRow key={column.column_name}>
                              <TableCell>{column.column_name}</TableCell>
                              <TableCell>{column.data_type}</TableCell>
                              <TableCell>{column.nullable}</TableCell>
                              <TableCell>{column.constraint_type}</TableCell>
                              <TableCell>{column.foreign_key_info}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                  {table.indexes.length > 0 && (
                    <Card className="mt-4">
                      <CardHeader>
                        <CardTitle>Indexes</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-5">
                          {table.indexes.map((index, i) => (
                            <li key={i}>{index}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>
        <TabsContent value="query">
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                SQL Query
                <Button
                  onClick={handleCopy}
                  variant="outline"
                  size="sm"
                  className="ml-2"
                >
                  {isCopied ? (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2 h-4 w-4" />
                      Copy
                    </>
                  )}
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Code language="sql">{sqlQuery}</Code>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
