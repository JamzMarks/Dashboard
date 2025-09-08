import { NextResponse } from "next/server"
import { auth } from "@/auth"

export default auth((req) => {
  const { pathname } = req.nextUrl

  if (pathname.startsWith("/admin") && !req.auth) {
    return NextResponse.redirect(new URL("/login", req.url))
  }

  if (pathname.startsWith("/login") && req.auth) {
    return NextResponse.redirect(new URL("/admin", req.url))
  }

  return NextResponse.next()
})

export const config = {
  matcher: ["/admin/:path*", "/login"],
}
