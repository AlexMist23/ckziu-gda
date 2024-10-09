import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./lib/auth";

export async function middleware(request: NextRequest) {
  const session = await auth();

  // Check if the user is authenticated
  if (!session) {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }

  // Check user role for protected routes
  if (request.nextUrl.pathname.startsWith("/admin")) {
    if (session.user.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
