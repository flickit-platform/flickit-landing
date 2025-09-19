import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || /\.[a-z0-9]+$/i.test(pathname)) {
    return NextResponse.next();
  }

  const cookie = (req.cookies.get("NEXT_LOCALE")?.value || "").toLowerCase();
  const accept = (req.headers.get("accept-language") || "").toLowerCase();
  const locale =
    cookie.startsWith("fa") ? "fa" :
    cookie.startsWith("en") ? "en" :
    accept.startsWith("fa") ? "fa" : "en";

  const reqHeaders = new Headers(req.headers);
  reqHeaders.set("x-locale", locale);

  const res = NextResponse.next({ request: { headers: reqHeaders } });

  res.headers.set("x-debug-locale", locale);

  res.headers.set("Vary", "Accept-Language, Cookie");

  res.cookies.set("NEXT_LOCALE", locale, {
    path: "/",
    maxAge: 31536000,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  return res;
}

export const config = { matcher: "/:path*" };
