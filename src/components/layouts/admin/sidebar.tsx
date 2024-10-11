import Link from "next/link";
import { Home, Users, BookOpen, Calendar } from "lucide-react";

const AdminSidebar = () => {
  return (
    <div className="bg-card w-64 h-full shadow-lg border-r border-border">
      <div className="p-6">
        <h1 className="text-2xl font-semibold text-foreground">Admin Panel</h1>
      </div>
      <nav className="mt-6">
        <Link
          href="/admin"
          className="flex items-center px-6 py-2 mt-4 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
        >
          <Home className="h-5 w-5 mr-3" />
          Dashboard
        </Link>
        <Link
          href="/admin/users"
          className="flex items-center px-6 py-2 mt-4 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
        >
          <Users className="h-5 w-5 mr-3" />
          Users
        </Link>
        <Link
          href="/admin/teachers"
          className="flex items-center px-6 py-2 mt-4 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
        >
          <Users className="h-5 w-5 mr-3" />
          Teachers
        </Link>
        <Link
          href="/admin/subjects"
          className="flex items-center px-6 py-2 mt-4 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
        >
          <BookOpen className="h-5 w-5 mr-3" />
          Subjects
        </Link>
        <Link
          href="/admin/schedules"
          className="flex items-center px-6 py-2 mt-4 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
        >
          <Calendar className="h-5 w-5 mr-3" />
          Schedules
        </Link>
      </nav>
    </div>
  );
};

export default AdminSidebar;
