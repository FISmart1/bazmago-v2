import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const userId = url.searchParams.get('userId');
    const kategoriId = url.searchParams.get('kategoriId');

    console.log("🔍 Checking registration - User:", userId, "Kategori:", kategoriId);

    if (!userId || !kategoriId) {
      return NextResponse.json({ 
        error: "User ID dan Kategori ID diperlukan" 
      }, { status: 400 });
    }

    // Cek apakah user sudah mendaftar di kategori ini
    const result = await query(
      `SELECT COUNT(*) as count 
       FROM pendaftaran_lomba 
       WHERE user_id = ? AND kategori_id = ?`,
      [userId, kategoriId]
    );

    const isRegistered = result[0]?.count > 0;

    console.log("✅ Registration check result:", isRegistered);

    return NextResponse.json({ 
      isRegistered,
      userId,
      kategoriId 
    });
  } catch (err) {
    console.error("❌ Error checking registration:", err);
    return NextResponse.json({ 
      error: "Gagal memeriksa pendaftaran" 
    }, { status: 500 });
  }
}