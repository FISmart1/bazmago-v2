import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: '127.0.0.1',
  port: 3306,       // default MySQL
  user: 'ucup',     // default XAMPP
  password: '12345',     // kosong kalau pakai XAMPP
  database: 'bazmago', 
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
