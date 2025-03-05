import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const session = request.cookies.get("session");
  const currentPath = request.nextUrl.pathname;

  // Define protected routes
  const protectedRoutes = [
    "/dashboard",
    "/dashboard/quotes",
    "/dashboard/profile",
  ];
  const authRoutes = ["/signin", "/signup"];

  // Check if the current path is a protected route
  const isProtectedRoute = protectedRoutes.some((route) =>
    currentPath.startsWith(route)
  );

  // Check if the current path is an auth route
  const isAuthRoute = authRoutes.some((route) => currentPath.startsWith(route));

  // Redirect to signin if accessing protected route without session
  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  // Redirect to dashboard if accessing auth routes with session
  if (isAuthRoute && session) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/signin", "/signup"],
};
