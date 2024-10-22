export { auth as middleware } from "@/lib/auth";

// TODO: update next-auth

//import { NextResponse } from "next/server";
//import { auth } from "./lib/auth";
//
//export default auth((req) => {
//  const isLoggedIn = !!req.auth;
//  const isAdminRoute =
//    req.nextUrl.pathname.startsWith("/admin") ||
//    req.nextUrl.pathname.startsWith("/api/admin");
//  const isAdmin = req.auth?.user?.role === "admin";
//
//  if (isAdminRoute) {
//    if (!isLoggedIn) {
//      return NextResponse.redirect(new URL("/api/auth/signin", req.url));
//    }
//    if (!isAdmin) {
//      return NextResponse.redirect(new URL("/", req.url));
//    }
//  }
//
//  return NextResponse.next();
//});
//
//export const config = {
//  matcher: ["/admin/:path*", "/api/admin/:path*"],
//};
