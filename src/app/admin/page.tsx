import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { adminNavLinks } from "@/data/nav-links";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-primary">Admin Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {adminNavLinks
          .flatMap((group) => group.items)
          .map((link) => (
            <Link key={link.href} href={link.href}>
              <Card className="hover:bg-accent transition-colors">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {link.label}
                  </CardTitle>
                  <link.icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">
                    Manage {link.label.toLowerCase()}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
      </div>
    </div>
  );
}
