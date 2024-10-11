import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

export default function AdminPage() {
  return (
    <div className="container mx-auto py-10">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage>Admin</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-2xl font-bold mb-5">Admin Dashboard</h1>
      <div className="space-y-4">
        <Link href="/admin/users" passHref>
          <Button variant="outline" className="w-full">
            Manage Users
          </Button>
        </Link>
        <Link href="/admin/teachers" passHref>
          <Button variant="outline" className="w-full">
            Manage Teachers
          </Button>
        </Link>
        {/* Add more admin links here */}
      </div>
    </div>
  );
}
