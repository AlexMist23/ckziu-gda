"use client";

import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminPanel() {
  const { data: session } = useSession();

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Admin Panel</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Welcome, {session?.user?.name || "Admin"}!</p>
          <div className="mt-4 space-y-2">
            <Button asChild>
              <a href="/admin/schedule">Manage Schedule</a>
            </Button>
            <Button asChild>
              <a href="/admin/teachers">Manage Teachers</a>
            </Button>
            <Button asChild>
              <a href="/admin/books">Manage Books</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
