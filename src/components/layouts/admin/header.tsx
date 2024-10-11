import AdminBreadcrumbs from "./breadcrumbs";

const AdminHeader = () => {
  return (
    <header className="bg-card shadow-md py-4 px-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-foreground">
          Admin Dashboard
        </h2>
      </div>
      <AdminBreadcrumbs />
    </header>
  );
};

export default AdminHeader;
