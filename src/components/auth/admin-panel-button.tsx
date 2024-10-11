import Link from "next/link";
import { Button } from "../ui/button";
import { auth } from "@/lib/auth";

export default async function AdminPanelButton() {
  const session = await auth();

  if (!session || session.user.role !== "admin") {
    return null;
  }
  return (
    <Link href={"/admin"}>
      <Button>Admin Panel</Button>
    </Link>
  );
}
