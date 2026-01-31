import { NextResponse } from 'next/server';
import { Pool } from 'pg';

// Setting up Database connection
const pool = new Pool({
  user: 'pguser',
  host: 'tmd_postgres', 
  database: 'mypgdb',
  password: 'pgpassword',
  port: 5432,
});

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    const query = `
      SELECT id, username 
      FROM radcheck 
      WHERE username = $1 
      AND attribute = 'Cleartext-Password' 
      AND value = $2
    `;

    const result = await pool.query(query, [username, password]);

    if (result.rows.length > 0) {
      const user = result.rows[0];
      
      const response = NextResponse.json({ 
        success: true, 
        user: user,
        message: 'Login Successful' 
      });

      // Set HttpOnly Cookie
      response.cookies.set({
        name: 'auth_session',
        value: user.username,
        httpOnly: true,
        path: '/',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, // 1 week
        sameSite: 'strict',
      });

      return response;

    } else {
      return NextResponse.json({ 
        success: false, 
        message: 'Invalid username or password' 
      }, { status: 401 });
    }

  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Internal Server Error' 
    }, { status: 500 });
  }
}
