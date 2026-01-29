import { NextResponse } from 'next/server';
import { Pool } from 'pg';

// ตั้งค่าการเชื่อมต่อ Database
const pool = new Pool({
  user: 'pguser',
  host: 'tmd_postgres', // สำคัญ: ต้องใช้ชื่อ Container Name ของ Postgres
  database: 'mypgdb',
  password: 'pgpassword',
  port: 5432,
});

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    // Query SQL: เช็คว่ามี User นี้และรหัสผ่านนี้ในตาราง radcheck หรือไม่
    // หมายเหตุ: FreeRADIUS เก็บ attribute เป็น 'Cleartext-Password' สำหรับรหัสทั่วไป
    const query = `
      SELECT id, username 
      FROM radcheck 
      WHERE username = $1 
      AND attribute = 'Cleartext-Password' 
      AND value = $2
    `;

    const result = await pool.query(query, [username, password]);

    if (result.rows.length > 0) {
      // เจอ User นี้ -> Login สำเร็จ
      return NextResponse.json({ 
        success: true, 
        user: result.rows[0],
        message: 'Login Successful' 
      });
    } else {
      // ไม่เจอ -> Login พลาด
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