import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const session = await auth();
  const isLoggedIn = !!session;
  const isAdminRoute =
    request.nextUrl.pathname.startsWith("/admin") ||
    request.nextUrl.pathname.startsWith("/api/admin");
  const isAdmin = session?.user?.role === "admin";

  // Redirect to sign in if accessing protected route while not logged in
  if (isAdminRoute && !isLoggedIn) {
    return Response.redirect(new URL("/api/auth/signin", request.url));
  }

  // Redirect non-admin users attempting to access admin routes
  if (isAdminRoute && !isAdmin) {
    return Response.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
