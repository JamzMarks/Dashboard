import { NextResponse, NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'


export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const token = await getToken({ req, secret: process.env.AUTH_SECRET })
  if (pathname.startsWith('/admin')) {
    if (!token) {
      const loginUrl = new URL('/login', req.url)
      loginUrl.searchParams.set('callbackUrl', pathname)
      return NextResponse.redirect(loginUrl)
    }
  }

  if (pathname.startsWith('/login')) {
    if (token) {
      const adminUrl = new URL('/admin', req.url)
      return NextResponse.redirect(adminUrl)
    }
  }

  return NextResponse.next()
}
 
export const config = {
  matcher: ['/admin/:path*', '/auth/:path*'],
}