import { NextResponse, NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'


export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const token = await getToken({ req, secret: process.env.AUTH_SECRET })
  console.log("TOKEN PROD:", token)
  // Protege rotas /admin/*
  if (pathname.startsWith('/admin')) {
    if (!token) {
      const loginUrl = new URL('/auth/login', req.url)
      loginUrl.searchParams.set('callbackUrl', pathname)
      return NextResponse.redirect(loginUrl)
    }
  }

  // Impede usuários logados de acessarem /auth/*
  if (pathname.startsWith('/auth')) {
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