import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Link href="/schedule">
        <Card>
          <CardHeader>
            <CardTitle>Schedule</CardTitle>
            <CardDescription>View your class schedule</CardDescription>
          </CardHeader>
        </Card>
      </Link>
      <Link href="/teacher-list">
        <Card>
          <CardHeader>
            <CardTitle>Teachers</CardTitle>
            <CardDescription>List of all teachers</CardDescription>
          </CardHeader>
        </Card>
      </Link>
      <Link href="/book-list">
        <Card>
          <CardHeader>
            <CardTitle>Books</CardTitle>
            <CardDescription>Access your textbooks</CardDescription>
          </CardHeader>
        </Card>
      </Link>
    </div>
  );
}
