import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
  const token = request.cookies.get("adminToken")?.value;

  const url = request.nextUrl.clone();

  if (url.pathname.startsWith("/admin/blog")) {
    if (!token) {
      url.pathname = "/unauthorized";
      return NextResponse.redirect(url);
    }

    try {
      const { payload } = await jwtVerify(
        token,
        new TextEncoder().encode(process.env.JWT_SECRET)
      );

      if (payload.role !== "admin") {
        url.pathname = "/unauthorized";
        return NextResponse.redirect(url);
      }
    } catch (err) {
      url.pathname = "/unauthorized";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/blog/:path*"], // protect this route
};
