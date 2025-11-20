export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET(req: Request) {
  try {
    // Ambil user ID dari header atau token
    // Karena kita tidak bisa akses localStorage di server component
    const authHeader = req.headers.get('authorization');
    
    let userId;

    if (authHeader && authHeader.startsWith('Bearer ')) {
      // Jika menggunakan token JWT
      const token = authHeader.substring(7);
      // Decode token untuk dapat user ID
      // userId = decodeToken(token).id;
    } else {
      // Alternatif: ambil dari query parameter
      const url = new URL(req.url);
      userId = url.searchParams.get('userId');
    }

    console.log("✅ USER ID dari request:", userId);

    if (!userId) {
      return NextResponse.json({ error: "User ID tidak ditemukan" }, { status: 400 });
    }

    const data = await query(
      `SELECT p.*, k.name_lomba AS nama_lomba
       FROM pendaftaran_lomba p
       JOIN kategori k ON p.kategori_id = k.id
       WHERE p.user_id = ?`,
      [userId]
    );

    console.log("✅ Data dari database:", data);
    return NextResponse.json(data);
  } catch (err) {
    console.error("❌ Error di API:", err);
    return NextResponse.json({ error: "Query gagal" }, { status: 500 });
  }
}