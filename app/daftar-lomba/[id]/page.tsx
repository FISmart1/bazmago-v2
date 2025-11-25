"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function FormDaftarLomba() {
  const { id } = useParams();
  const router = useRouter();

  const [kategori, setKategori] = useState<any>(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <p className="text-center text-white">Loading...</p>;
  if (!kategori)
    return (
      <p className="text-center text-red-400">Kategori tidak ditemukan.</p>
    );

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 
                 bg-black relative overflow-hidden"
    >

      {/* Neon Galaxy Aura */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-cyan-500 blur-[200px] top-[-100px] left-[-100px]"></div>
        <div className="absolute w-[400px] h-[400px] bg-purple-600 blur-[180px] bottom-[-100px] right-[-50px]"></div>
        <div className="absolute w-[300px] h-[300px] bg-blue-500 blur-[160px] top-[200px] right-[300px]"></div>
      </div>

      <div
        className="w-full max-w-2xl 
                   bg-gray-900/70 backdrop-blur-xl 
                   border border-cyan-400/30 
                   p-10 rounded-2xl 
                   shadow-[0_0_25px_rgba(0,255,255,0.25)]
                   relative z-10"
      >
        {/* Title */}
        <h1 className="text-3xl font-bold text-cyan-300 mb-2">
          Form Pendaftaran
        </h1>
        <p className="text-gray-300 mb-8">
          Lomba:{" "}
          <span className="text-teal-300 font-semibold">
            {kategori.name_lomba}
          </span>
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Nama */}
          <div>
            <label className="text-sm text-cyan-300 font-semibold">
              Nama Peserta
            </label>
            <input
              className="w-full mt-1 p-3 rounded-xl 
                         bg-gray-800 border border-gray-700 
                         text-white
                         placeholder-white
                         focus:border-cyan-400 focus:ring-2 
                         focus:ring-cyan-300/30 outline-none transition"
              value={user.name || ""}
              disabled
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-cyan-300 font-semibold">Email</label>
            <input
              className="w-full mt-1 p-3 rounded-xl 
                         bg-gray-800 border border-gray-700 
                         text-white
                         placeholder-white
                         focus:border-cyan-400 focus:ring-2 
                         focus:ring-cyan-300/30 outline-none transition"
              value={user.email || ""}
              disabled
            />
          </div>

          {/* Alasan */}
          <div>
            <label className="text-sm text-cyan-300 font-semibold">
              Alasan Mengikuti Lomba
            </label>
            <textarea
              className="w-full mt-1 p-3 rounded-xl 
                         bg-gray-800 border border-gray-700 
                         text-white
                         placeholder-white
                         focus:border-cyan-400 focus:ring-2 
                         focus:ring-cyan-300/30 outline-none 
                         transition h-28"
              placeholder="Tulis alasan kamu mengikuti lomba ini..."
              value={alasan}
              onChange={(e) => setAlasan(e.target.value)}
              required
            />
          </div>

          {/* Portofolio */}
          <div>
            <label className="text-sm text-cyan-300 font-semibold">
              Link Portofolio (Opsional)
            </label>
            <input
              className="w-full mt-1 p-3 rounded-xl 
                         bg-gray-800 border border-gray-700 
                         text-white
                         placeholder-white
                         focus:border-cyan-400 focus:ring-2 
                         focus:ring-cyan-300/30 outline-none transition"
              placeholder="https://contoh.com/portofolio"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>

          {/* Submit */}
          <button
            className="w-full py-3 rounded-xl 
                       bg-teal-400 hover:bg-teal-300 
                       text-black font-bold tracking-wide text-lg 
                       transition shadow-[0_0_15px_rgba(0,255,255,0.3)]"
          >
            Kirim Pendaftaran
          </button>
        </form>

      </div>
    </div>
  );
}
