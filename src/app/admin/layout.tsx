import { ReactNode } from "react";
import Link from "next/link";
import { adminNavLinks } from "@/data/sidebar-links";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Menu } from "lucide-react";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect("/api/auth/signin");
  }

  if (session.user.role !== "admin") {
    redirect("/");
  }

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar for larger screens */}
      <aside className="hidden w-64 flex-col border-r border-border md:flex">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-primary">Admin Dashboard</h1>
        </div>
        <ScrollArea className="flex-1">
          <nav className="space-y-6 p-4">
            {adminNavLinks.map((group, index) => (
              <div key={index}>
                <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight text-primary">
                  {group.group}
                </h2>
                <div className="space-y-1">
                  {group.items.map((link) => (
                    <Link key={link.href} href={link.href}>
                      <Button variant="ghost" className="w-full justify-start">
                        <link.icon className="mr-2 h-4 w-4" />
                        {link.label}
                      </Button>
                    </Link>
                  ))}
                </div>
                {index < adminNavLinks.length - 1 && (
                  <Separator className="my-4" />
                )}
              </div>
            ))}
          </nav>
        </ScrollArea>
      </aside>

      {/* Mobile sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden absolute left-4 top-4"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <ScrollArea className="h-full">
            <div className="p-6">
              <h1 className="text-2xl font-bold text-primary">
                Admin Dashboard
              </h1>
            </div>
            <nav className="space-y-6 p-4">
              {adminNavLinks.map((group, index) => (
                <div key={index}>
                  <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight text-primary">
                    {group.group}
                  </h2>
                  <div className="space-y-1">
                    {group.items.map((link) => (
                      <Link key={link.href} href={link.href}>
                        <Button
                          variant="ghost"
                          className="w-full justify-start"
                        >
                          <link.icon className="mr-2 h-4 w-4" />
                          {link.label}
                        </Button>
                      </Link>
                    ))}
                  </div>
                  {index < adminNavLinks.length - 1 && (
                    <Separator className="my-4" />
                  )}
                </div>
              ))}
            </nav>
          </ScrollArea>
        </SheetContent>
      </Sheet>

      {/* Main content area */}
      <main className="flex-1 overflow-y-auto bg-background p-8">
        {children}
      </main>
    </div>
  );
}
