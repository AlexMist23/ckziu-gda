// app/admin/users/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ChevronDown,
  ChevronUp,
  ChevronsUpDown,
  Search,
  Loader2,
} from "lucide-react";
import { useDebounce } from "@/hooks/use-debounce";

interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

interface SortConfig {
  field: string;
  direction: "asc" | "desc";
}

export default function UsersPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [users, setUsers] = useState<User[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") || ""
  );
  const [currentPage, setCurrentPage] = useState(
    parseInt(searchParams.get("page") || "1")
  );
  const [itemsPerPage, setItemsPerPage] = useState(
    parseInt(searchParams.get("limit") || "10")
  );
  const [sortConfig, setSortConfig] = useState<SortConfig[]>([
    { field: "createdAt", direction: "desc" },
  ]);

  const debouncedSearch = useDebounce(searchQuery, 300);

  const createQueryString = (params: Record<string, string | string[]>) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    Object.entries(params).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        newSearchParams.delete(`${key}[]`);
        value.forEach((v) => newSearchParams.append(`${key}[]`, v));
      } else {
        newSearchParams.set(key, value);
      }
    });

    return newSearchParams.toString();
  };

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const sortParams = sortConfig.reduce(
        (acc, sort) => ({
          ...acc,
          "sortBy[]": [...(acc["sortBy[]"] || []), sort.field],
          "sortOrder[]": [...(acc["sortOrder[]"] || []), sort.direction],
        }),
        {} as Record<string, string[]>
      );

      const queryString = createQueryString({
        page: currentPage.toString(),
        limit: itemsPerPage.toString(),
        search: debouncedSearch,
        ...sortParams,
      });

      const response = await fetch(`/api/admin/users?${queryString}`);
      const data = await response.json();

      if (!response.ok) throw new Error(data.error);

      setUsers(data.users);
      setTotal(data.meta.total);

      // Update URL with current filters
      router.push(`${pathname}?${queryString}`, { scroll: false });
    } catch (error) {
      console.error("Error fetching users:", error);
      // Here you might want to show an error toast
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [debouncedSearch, currentPage, itemsPerPage, sortConfig]);

  const handleSort = (field: string) => {
    setSortConfig((current) => {
      const existingSort = current.find((sort) => sort.field === field);

      if (!existingSort) {
        return [...current, { field, direction: "desc" }];
      }

      if (existingSort.direction === "desc") {
        return current.map((sort) =>
          sort.field === field ? { ...sort, direction: "asc" } : sort
        );
      }

      return current.filter((sort) => sort.field !== field);
    });
  };

  const getSortIcon = (field: string) => {
    const sort = sortConfig.find((s) => s.field === field);
    if (!sort) return <ChevronsUpDown className="w-4 h-4" />;
    return sort.direction === "asc" ? (
      <ChevronUp className="w-4 h-4" />
    ) : (
      <ChevronDown className="w-4 h-4" />
    );
  };

  const totalPages = Math.ceil(total / itemsPerPage);

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Users</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 w-64"
            />
          </div>
          <Select
            value={itemsPerPage.toString()}
            onValueChange={(value) => {
              setItemsPerPage(parseInt(value));
              setCurrentPage(1);
            }}
          >
            <SelectTrigger className="w-24">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {[10, 20, 30, 50].map((value) => (
                <SelectItem key={value} value={value.toString()}>
                  {value} rows
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">
                <Button
                  variant="ghost"
                  onClick={() => handleSort("name")}
                  className="flex items-center space-x-1"
                >
                  Name {getSortIcon("name")}
                </Button>
              </TableHead>
              <TableHead className="w-[250px]">
                <Button
                  variant="ghost"
                  onClick={() => handleSort("email")}
                  className="flex items-center space-x-1"
                >
                  Email {getSortIcon("email")}
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => handleSort("createdAt")}
                  className="flex items-center space-x-1"
                >
                  Created At {getSortIcon("createdAt")}
                </Button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={3} className="text-center py-8">
                  <Loader2 className="w-6 h-6 animate-spin mx-auto" />
                </TableCell>
              </TableRow>
            ) : users.length === 0 ? (
              <TableRow>
                <TableCell colSpan={3} className="text-center py-8">
                  No users found
                </TableCell>
              </TableRow>
            ) : (
              users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    {new Date(user.createdAt).toLocaleDateString()}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
          {Math.min(currentPage * itemsPerPage, total)} of {total} users
        </p>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
