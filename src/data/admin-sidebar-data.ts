export interface NavItem {
  icon?: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
}

export interface NavGroup {
  group: string;
  items: NavItem[];
}

export const adminNavLinks: NavGroup[] = [
  {
    group: "Overview",
    items: [
      {
        label: "Dashboard",
        href: "/admin",
      },
    ],
  },
  {
    group: "Auth",
    items: [
      {
        label: "Users",
        href: "/admin/users",
      },
    ],
  },
  {
    group: "Models",
    items: [
      {
        label: "Teachers",
        href: "/admin/teachers",
      },
      {
        label: "Schedules",
        href: "/admin/schedules",
      },
      {
        label: "Subjects",
        href: "/admin/subjects",
      },
    ],
  },
  {
    group: "Tools ",
    items: [
      {
        label: "Database Schema",
        href: "/admin/database",
      },
      {
        label: "Database Status",
        href: "/admin/database-status",
      },
      {
        label: "Settings",
        href: "/admin/settings",
      },
    ],
  },
];
