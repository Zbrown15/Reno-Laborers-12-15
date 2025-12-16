import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  
  // Get the client IP address
  const ip = 
    request.headers.get('x-forwarded-for')?.split(',')[0] || 
    request.headers.get('x-real-ip') || 
    request.headers.get('cf-connecting-ip') ||
    'unknown'

  // Check if IP matches excluded IPs
  const excludedIPv4 = process.env.EXCLUDED_IPV4
  const excludedIPv6 = process.env.EXCLUDED_IPV6
  
  const shouldExclude = ip === excludedIPv4 || ip === excludedIPv6

  // Set a header to indicate if GA should be excluded
  response.headers.set('x-ga-exclude', shouldExclude ? 'true' : 'false')
  
  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}

