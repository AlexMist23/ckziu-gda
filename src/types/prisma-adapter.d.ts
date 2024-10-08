import { Role } from "@prisma/client";

declare module "@auth/prisma-adapter" {
  interface AdapterUser {
    role: Role;
  }
}
