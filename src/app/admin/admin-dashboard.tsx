"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session || session.user.role !== "ADMIN") {
    return <div>Access Denied</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Admin Panel</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Welcome, {session.user.name}!</p>
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
