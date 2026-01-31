import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ success: true, message: 'Logged out successfully' });
  
  // Clear the auth_session cookie
  response.cookies.delete('auth_session');
  
  return response;
}
