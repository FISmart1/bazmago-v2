import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { name, tl, sekolah, email, password } = await req.json();

    if (!name || !tl || !sekolah || !email || !password) {
      return NextResponse.json(
        { error: "Semua field wajib diisi" },
        { status: 400 }
      );
    }

    // ✅ Cek apakah email sudah ada
    const existing = await query("SELECT * FROM users WHERE email = ?", [email]);

    if (Array.isArray(existing) && existing.length > 0) {
      return NextResponse.json(
        { error: "Email sudah digunakan" },
        { status: 400 }
      );
    }

    // ✅ Simpan langsung ke database tanpa hash
    await query(
      "INSERT INTO users (name, tl, sekolah, email, password) VALUES (?, ?, ?, ?, ?)",
      [name, tl, sekolah, email, password]
    );

    return NextResponse.json({ message: "Registrasi berhasil" }, { status: 201 });
  } catch (error) {
    console.error("Register error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}
