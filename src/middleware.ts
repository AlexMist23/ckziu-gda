// export { auth as middleware } from "@/lib/auth";

import { NextResponse } from "next/server";
import { auth } from "./lib/auth";

export default auth((req) => {
  const isLoggedIn = !!req.auth;

  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/api/auth/signin", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
