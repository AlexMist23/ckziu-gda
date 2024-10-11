"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const AdminBreadcrumbs = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/admin">Admin</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {pathSegments.slice(1).map((segment, index) => {
          const href = `/admin/${pathSegments.slice(1, index + 2).join("/")}`;
          const isLast = index === pathSegments.length - 2;

          return (
            <BreadcrumbItem key={segment}>
              {isLast ? (
                <BreadcrumbPage>
                  {segment.charAt(0).toUpperCase() + segment.slice(1)}
                </BreadcrumbPage>
              ) : (
                <>
                  <BreadcrumbLink href={href}>
                    {segment.charAt(0).toUpperCase() + segment.slice(1)}
                  </BreadcrumbLink>
                  <BreadcrumbSeparator />
                </>
              )}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default AdminBreadcrumbs;
