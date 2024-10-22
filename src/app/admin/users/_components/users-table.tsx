import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { User } from "@/lib/kysely";
import EditUserButton from "./edit-user-button";
import DeleteUserButton from "./delete-user-button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface Params {
  users: User[];
}

export default function UsersTable({ users }: Params) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Avatar</TableHead>

          <TableHead>Name</TableHead>
          <TableHead>E-mail</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users && users.length > 0 ? (
          users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <Avatar>
                  <AvatarImage src={user.image ?? ""} alt={user.name ?? ""} />
                </Avatar>
              </TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell className="flex gap-2">
                <EditUserButton user={user} />
                <DeleteUserButton user={user} />
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={5} className="text-center">
              No entries in the database
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
