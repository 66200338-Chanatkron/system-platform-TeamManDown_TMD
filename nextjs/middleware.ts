import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const session = request.cookies.get('auth_session');
  const { pathname } = request.nextUrl;

  // Protected routes: / and /watch/*
  const isProtectedRoute = pathname === '/' || pathname.startsWith('/watch');
  
  // Auth routes: /login
  const isAuthRoute = pathname === '/login';

  // Strict check
  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (isAuthRoute && session) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/watch/:path*', '/login'],
};
