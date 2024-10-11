import { Home, Users, Database, Settings, Book, Calendar } from "lucide-react";

export const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    label: "Profile",
    href: "/profile",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const adminNavLinks = [
  {
    icon: Home,
    label: "Dashboard",
    href: "/admin",
  },
  {
    icon: Users,
    label: "Users",
    href: "/admin/users",
  },
  {
    icon: Users,
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
    icon: Database,
    label: "Database Status",
    href: "/admin/database-status",
  },

  {
    icon: Settings,
    label: "Settings",
    href: "/admin/",
  },
];
