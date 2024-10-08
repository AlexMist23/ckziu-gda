import { Suspense } from "react";
import AdminDashboard from "./admin-dashboard";
import { Skeleton } from "@/components/ui/skeleton";

export const dynamic = "force-dynamic";

export default function AdminPage() {
  return (
    <Suspense fallback={<Skeleton />}>
      <AdminDashboard />
    </Suspense>
  );
}
