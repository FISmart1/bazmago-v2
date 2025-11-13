import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email dan password wajib diisi" },
        { status: 400 }
      );
    }

    // ✅ Ambil user berdasarkan email
    const users = await query("SELECT * FROM users WHERE email = ?", [email]);

    if (!Array.isArray(users) || users.length === 0) {
      return NextResponse.json(
        { error: "Email tidak ditemukan" },
        { status: 404 }
      );
    }

    const user = users[0] as any;

    // ✅ Cek password langsung (tanpa hash)
    if (user.password !== password) {
      return NextResponse.json(
        { error: "Password salah" },
        { status: 401 }
      );
    }

    return NextResponse.json({
      message: "Login berhasil",
      user,
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}
