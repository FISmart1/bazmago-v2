// src/lib/db.ts
import mysql from 'mysql2/promise';

// buat koneksi pool ke MySQL lokal
const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'ucup',           // ganti sesuai user MySQL kamu
  password: '12345',           // isi kalau ada password
  database: 'bazmago', // ganti nama DB kamu
});

export async function query<T = any>(sql: string, params?: any[]): Promise<T[]> {
  try {
    const [rows] = await pool.query(sql, params);
return rows as T[];

  } catch (err) {
    console.error('Database query error:', err);
    throw err;
  }
}
