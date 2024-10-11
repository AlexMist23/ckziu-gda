import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, Calendar, GraduationCap } from "lucide-react";

const adminSections = [
  {
    title: "Users",
    description: "Manage user accounts",
    icon: Users,
    href: "/admin/users",
  },
  {
    title: "Teachers",
    description: "Manage teacher profiles",
    icon: GraduationCap,
    href: "/admin/teachers",
  },
  {
    title: "Subjects",
    description: "Manage subject listings",
    icon: BookOpen,
    href: "/admin/subjects",
  },
  {
    title: "Schedules",
    description: "Manage class schedules",
    icon: Calendar,
    href: "/admin/schedules",
  },
];

export default function AdminDashboard() {
  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {adminSections.map((section) => (
          <Card
            key={section.title}
            className="hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center justify-between">
                {section.title}
                <section.icon className="h-6 w-6 text-muted-foreground" />
              </CardTitle>
              <CardDescription>{section.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href={section.href}>Manage {section.title}</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
