import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  // This route is just used to check the exclusion header
  // The actual exclusion logic is in middleware.ts
  return NextResponse.json({ status: 'ok' });
}

export async function HEAD(request: NextRequest) {
  // Return the exclusion status in headers
  const excludeHeader = request.headers.get('x-ga-exclude');
  const response = NextResponse.json({});
  response.headers.set('x-ga-exclude', excludeHeader || 'false');
  return response;
}




