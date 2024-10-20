import { Suspense } from "react";
import UsersTable from "./_components/users-table";
import { createKysely } from "@vercel/postgres-kysely";

type SortableColumn = "name" | "email" | "role";

interface Database {
  users: {
    id: number;
    name: string;
    email: string;
    role: string;
    image: string | null;
  };
}

const db = createKysely<Database>();

async function getInitialUsers(searchParams: {
  [key: string]: string | string[] | undefined;
}) {
  const page = parseInt((searchParams.page as string) || "1", 10);
  const pageSize = parseInt((searchParams.pageSize as string) || "10", 10);
  const sortBy = (searchParams.sortBy as SortableColumn) || "name";
  const sortOrder = (searchParams.sortOrder as string) || "asc";
  const role = searchParams.role as string;
  const search = searchParams.search as string;

  let query = db
    .selectFrom("users")
    .selectAll()
    .limit(pageSize)
    .offset((page - 1) * pageSize);

  if (role && role !== "all") {
    query = query.where("role", "=", role);
  }

  if (search) {
    query = query.where((eb) =>
      eb.or([
        eb("name", "ilike", `%${search}%`),
        eb("email", "ilike", `%${search}%`),
      ])
    );
  }

  if (["name", "email", "role"].includes(sortBy)) {
    query = query.orderBy(sortBy, sortOrder === "desc" ? "desc" : "asc");
  }

  const users = await query.execute();

  const totalCountQuery = db
    .selectFrom("users")
    .select(db.fn.count<number>("id").as("count"));
  if (role && role !== "all") {
    totalCountQuery.where("role", "=", role);
  }
  if (search) {
    totalCountQuery.where((eb) =>
      eb.or([
        eb("name", "ilike", `%${search}%`),
        eb("email", "ilike", `%${search}%`),
      ])
    );
  }
  const totalCountResult = await totalCountQuery.executeTakeFirst();
  const totalCount = totalCountResult?.count || 0;

  return {
    users,
    pagination: {
      currentPage: page,
      pageSize,
      totalCount,
      totalPages: Math.ceil(totalCount / pageSize),
    },
  };
}

export default async function UsersPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { users, pagination } = await getInitialUsers(searchParams);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-primary">Admin Users</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <UsersTable initialUsers={users} initialPagination={pagination} />
      </Suspense>
    </div>
  );
}
