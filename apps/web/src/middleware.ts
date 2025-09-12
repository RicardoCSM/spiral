import { getSessionCookie } from "better-auth/cookies";
import { type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const cookies = getSessionCookie(request);

  if (cookies && request.nextUrl.pathname === "/") {
    return Response.redirect(new URL("/dashboard", request.url));
  }

  if (
    !cookies &&
    request.nextUrl.pathname !== "/" &&
    !request.nextUrl.pathname.startsWith("/sign-in") &&
    !request.nextUrl.pathname.startsWith("/sign-up")
  ) {
    return Response.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
