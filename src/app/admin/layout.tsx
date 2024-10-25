import { ReactNode } from "react";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();
  const isUserAdmin = session?.user?.roles.includes("ADMIN");

  if (!isUserAdmin) {
    redirect("/auth/signin");
  }

  return <>{children}</>;
}
