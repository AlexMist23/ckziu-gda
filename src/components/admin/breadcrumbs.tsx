"use client";

import { useState, useMemo } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Breadcrumb = {
  href: string;
  label: string;
};

const MAX_VISIBLE_ITEMS = 4; // Admin + 1 more item before collapsing

export function CustomBreadcrumbs() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const breadcrumbs = useMemo(() => {
    const pathSegments = pathname
      .split("/")
      .filter((segment) => segment !== "");

    const initialBreadcrumbs: Breadcrumb[] = [
      { href: "/admin", label: "Admin" },
    ];

    const additionalBreadcrumbs = pathSegments
      .slice(1)
      .map((segment, index) => {
        const href = `/admin/${pathSegments.slice(1, index + 2).join("/")}`;
        const label = segment.charAt(0).toUpperCase() + segment.slice(1);
        return { href, label };
      });

    return [...initialBreadcrumbs, ...additionalBreadcrumbs];
  }, [pathname]);

  const visibleBreadcrumbs = breadcrumbs.slice(0, MAX_VISIBLE_ITEMS);
  const collapsedBreadcrumbs = breadcrumbs.slice(MAX_VISIBLE_ITEMS, -1);
  const lastBreadcrumb = breadcrumbs[breadcrumbs.length - 1];

  if (breadcrumbs.length === 1) {
    return null; // Don't render breadcrumbs for the /admin route
  }

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
        {visibleBreadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.href} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
            )}
            <Link
              href={breadcrumb.href}
              className="hover:text-foreground transition-colors"
            >
              {breadcrumb.label}
            </Link>
          </li>
        ))}
        {collapsedBreadcrumbs.length > 0 && (
          <li className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
            <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-auto p-0">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">Toggle breadcrumb menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {collapsedBreadcrumbs.map((breadcrumb) => (
                  <DropdownMenuItem key={breadcrumb.href} asChild>
                    <Link
                      href={breadcrumb.href}
                      className="flex w-full"
                      onClick={() => setIsOpen(false)}
                    >
                      {breadcrumb.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
        )}
        {lastBreadcrumb &&
          lastBreadcrumb !==
            visibleBreadcrumbs[visibleBreadcrumbs.length - 1] && (
            <li className="flex items-center">
              <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
              <span className="font-medium text-foreground">
                {lastBreadcrumb.label}
              </span>
            </li>
          )}
      </ol>
    </nav>
  );
}
