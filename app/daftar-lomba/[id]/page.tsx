"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function FormDaftarLomba() {
  const { id } = useParams(); 
  const router = useRouter();

  const [kategori, setKategori] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // 🔐 Ambil user login dari localStorage
  const user =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user") || "{}")
      : {};

  const [alasan, setAlasan] = useState("");
  const [link, setLink] = useState("");

  // Fetch kategori
  useEffect(() => {
    const fetchKategori = async () => {
      try {
        const res = await fetch(`/api/kategori/${id}`);

        if (!res.ok) {
          console.error("API error:", res.status);
          return;
        }

        const data = await res.json();
        setKategori(data);
      } catch (error) {
        console.error("Gagal fetch kategori:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchKategori();
  }, [id]);

  // Submit form
  async function handleSubmit(e: any) {
    e.preventDefault();

    const payload = {
      user_id: user.id,
      kategori_id: id,
      alasan,
      link_portofolio: link,
    };

    const res = await fetch("/api/pendaftaran", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      alert("Pendaftaran Berhasil!");
      router.push("/profil");
    } else {
      alert("Gagal mengirim pendaftaran");
    }
  }

  if (loading) return <p>Loading...</p>;
  if (!kategori) return <p>Kategori tidak ditemukan.</p>;

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold mb-6">
        Form Pendaftaran — {kategori.name_lomba}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
        
        <input
          className="w-full p-3 rounded bg-gray-800"
          value={user.name || ""}
          disabled
        />

        <input
          className="w-full p-3 rounded bg-gray-800"
          value={user.email || ""}
          disabled
        />

        <textarea
          className="w-full p-3 rounded bg-gray-800"
          placeholder="Alasan mengikuti lomba"
          value={alasan}
          onChange={(e) => setAlasan(e.target.value)}
          required
        />

        <input
          className="w-full p-3 rounded bg-gray-800"
          placeholder="Link Portofolio (opsional)"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />

        <button className="w-full bg-teal-400 text-black p-3 rounded font-bold">
          Kirim Pendaftaran
        </button>
      </form>
    </div>
  );
}
