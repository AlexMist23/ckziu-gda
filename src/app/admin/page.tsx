import { auth } from "../../auth";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const session = await auth();

  if (!session || session?.user.role !== "admin") {
    redirect("/");
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, {session.user.name}!</p>
    </div>
  );
}
