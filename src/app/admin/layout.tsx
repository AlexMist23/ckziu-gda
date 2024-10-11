import { Sidebar } from "@/components/admin/sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 items-start grid grid-cols-[220px_minmax(0,1fr)] gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="top-14 -ml-2  h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r sticky md:block">
          <Sidebar />
        </aside>
        <main className="flex w-full flex-col overflow-hidden">
          <div className="container mx-auto py-6 md:py-10">{children}</div>
        </main>
      </div>
    </div>
  );
}
