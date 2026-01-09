import { NextResponse, NextRequest } from "next/server";

const PROTECTED_ROUTES = ["/chats", "/settings", "/profile"];

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isProtected = PROTECTED_ROUTES.some((route) =>
    pathname.startsWith(route)
  );

  if (!isProtected) {
    return NextResponse.next();
  }

  const sessionToken = req.cookies.get("session_token")?.value;
  if (!sessionToken) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const authCheck = await fetch(`${req.nextUrl.origin}/api/auth/session`, {
    headers: {
      cookie: `session_token=${sessionToken}`,
    },
  });

  if (!authCheck.ok) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/chats", "/chats/:path*", "/settings/:path*", "/profile/:path*"],
};
