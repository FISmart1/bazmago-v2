// app/api/pendaftaran/route.ts
import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { user_id, kategori_id, alasan, link_portofolio } = body;

    if (!user_id || !kategori_id || !alasan) {
      return NextResponse.json(
        { error: "Data tidak lengkap" },
        { status: 400 }
      );
    }

    const sql = `
      INSERT INTO pendaftaran_lomba
      (user_id, kategori_id, alasan, link_portofolio)
      VALUES (?, ?, ?, ?)
    `;

    await query(sql, [
      user_id,
      kategori_id,
      alasan,
      link_portofolio || null,
    ]);

    return NextResponse.json(
      { message: "Pendaftaran berhasil" },
      { status: 201 }
    );

  } catch (err) {
    console.error("POST /pendaftaran ERROR:", err);
    return NextResponse.json(
      { error: "Gagal memproses pendaftaran" },
      { status: 500 }
    );
  }
}
