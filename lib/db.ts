import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'nozomi.proxy.rlwy.net',
  port: 10360,
  user: 'root',
  password: 'TpQaGRDedFRJQOvUCRMfKikAHWynQVUX',
  database: 'railway',
  ssl: {
    rejectUnauthorized: false,
  },
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
