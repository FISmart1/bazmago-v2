import { NextResponse } from "next/server";
import { query } from "@/lib/db";

// GET semua kategori
export async function GET() {
  try {
    const result = await query("SELECT * FROM kategori ORDER BY id ASC");
    return NextResponse.json(result); // MySQL langsung return array
  } catch (error) {
    console.error("Error GET kategori:", error);
    return NextResponse.json(
      { error: "Gagal mengambil data" },
      { status: 500 }
    );
  }
}

// POST tambah kategori
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name_lomba, tagline, desk, tanggal, biaya } = body;

    if (!name_lomba || !tagline || !desk || !tanggal || !biaya) {
      return NextResponse.json(
        { error: "Semua field harus diisi" },
        { status: 400 }
      );
    }

    // Gunakan tanda ? untuk MySQL
    const result = await query(
      "INSERT INTO kategori (name_lomba, tagline, desk, tanggal, biaya) VALUES (?, ?, ?, ?, ?)",
      [name_lomba, tagline, desk, tanggal, biaya]
    );

    // Ambil data terakhir yang dimasukkan
    const inserted = await query("SELECT * FROM kategori WHERE id = LAST_INSERT_ID()");

    return NextResponse.json(inserted[0]);
  } catch (error) {
    console.error("Error POST kategori:", error);
    return NextResponse.json(
      { error: "Gagal menambahkan data" },
      { status: 500 }
    );
  }
}
