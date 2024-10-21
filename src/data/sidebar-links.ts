import {
  Home,
  Users,
  Database,
  Settings,
  Book,
  Calendar,
  Ruler,
  GraduationCap,
} from "lucide-react";

export const adminNavLinks = [
  {
    group: "Overview",
    items: [
      {
        icon: Home,
        label: "Dashboard",
        href: "/admin",
      },
    ],
  },
  {
    group: "Management",
    items: [
      {
        icon: Users,
        label: "Users",
        href: "/admin/users",
      },
      {
        icon: GraduationCap,
        label: "Teachers",
        href: "/admin/teachers",
      },
      {
        icon: Calendar,
        label: "Schedules",
        href: "/admin/schedules",
      },
      {
        icon: Book,
        label: "Books",
        href: "/admin/books",
      },
      {
        icon: Ruler,
        label: "Subjects",
        href: "/admin/subjects",
      },
    ],
  },
  {
    group: "System",
    items: [
      {
        icon: Database,
        label: "Database Schema",
        href: "/admin/database",
      },
      {
        icon: Database,
        label: "Database Status",
        href: "/admin/database-status",
      },
      {
        icon: Settings,
        label: "Settings",
        href: "/admin/settings",
      },
    ],
  },
];
