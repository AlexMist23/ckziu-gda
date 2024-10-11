import { notFound } from "next/navigation";
import { fetchHelperServer } from "@/lib/fetch-helper-server";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { User } from "@/types/db";
import Link from "next/link";

export default async function UserPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  if (!params.id) {
    notFound();
  }

  let user: User | null = null;
  try {
    user = await fetchHelperServer(`/api/admin/users/${params.id}`);
  } catch (error) {
    console.error("Failed to fetch user:", error);
    notFound();
  }

  if (!user) {
    notFound();
  }

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>User Details</CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-medium text-muted-foreground">
                Name
              </dt>
              <dd className="text-base">{user.name}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-muted-foreground">
                Email
              </dt>
              <dd className="text-base">{user.email}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-muted-foreground">
                Role
              </dt>
              <dd className="text-base">{user.role}</dd>
            </div>
          </dl>
        </CardContent>
        <CardFooter className="flex justify-end space-x-2">
          <Button variant="outline" asChild>
            <Link href={`/admin/users/${params.id}/edit`}>Edit</Link>
          </Button>
          <Button variant="destructive" asChild>
            <Link href={`/admin/users/${params.id}/delete`}>Delete</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
