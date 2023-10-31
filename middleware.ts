import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const nextUrl = request.nextUrl.pathname
  if(token && nextUrl === '/auth/login'){
    return NextResponse.redirect(new URL('/', request.url))
  }
  if(!token && nextUrl !== '/auth/login'){
    console.log('oeoeo', nextUrl)
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }
  return NextResponse.next()
}

// Middleware function will be executed when match some route from matcher array
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
