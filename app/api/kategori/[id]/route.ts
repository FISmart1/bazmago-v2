import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET(req: Request, context: any) {
  const { id } = await context.params; // ⬅ FIX

  try {
    const rows: any = await query(
      "SELECT * FROM kategori WHERE id = ?",
      [id]
    );

    if (!Array.isArray(rows) || rows.length === 0) {
      return NextResponse.json(
        { error: "Kategori tidak ditemukan" }, 
        { status: 404 }
      );
    }

    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Database error", detail: error },
      { status: 500 }
    );
  }
}
