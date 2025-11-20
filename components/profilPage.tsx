"use client";

import CategorySection from "@/components/categori";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfilPage() {
  const [activeTab, setActiveTab] = useState("biodata");
  const [user, setUser] = useState<any>(null);
  const [lombaDiikuti, setLombaDiikuti] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Ambil data user dari localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      router.push("/login");
      return;
    }

    const userData = JSON.parse(storedUser);
    setUser(userData);
    setLoading(false);
  }, [router]);

  // Ambil daftar lomba yang diikuti user
  useEffect(() => {
    const fetchLomba = async () => {
      if (!user?.id) return;

      setLoading(true);
      try {
        console.log("🔍 Fetching lomba untuk user ID:", user.id);

        // Kirim user ID sebagai query parameter
        const res = await fetch(`/api/pendaftaran/user?userId=${user.id}`);

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        console.log("📊 Data lomba diterima:", data);

        setLombaDiikuti(data || []);
      } catch (error) {
        console.error("❌ Error fetching lomba:", error);
        setLombaDiikuti([]);
      } finally {
        setLoading(false);
      }
    };

    fetchLomba();
  }, [user]);

  if (!user) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-black text-white">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="relative z-10 flex flex-col items-center py-16 px-6 text-center w-full">

      {/* TAB */}
      <div className="w-6xl flex mb-10">
        <div className="w-full py-2 border-b border-gray-400">
          <button
            onClick={() => setActiveTab("biodata")}
            className={`w-full px-4 py-2 font-semibold transition ${activeTab === "biodata"
                ? "border-b-4 border-cyan-400 text-white"
                : "text-white"
              }`}
          >
            Biodata
          </button>
        </div>

        <div className="w-full py-2 border-b border-gray-400">
          <button
            onClick={() => setActiveTab("kategori")}
            className={`w-full px-4 py-2 font-semibold transition ${activeTab === "kategori"
                ? "border-b-4 border-cyan-400 text-white"
                : "text-white"
              }`}
          >
            Daftar Lomba
          </button>
        </div>
      </div>

      {/* ======================= BIODATA ======================= */}
      {activeTab === "biodata" && (
        <div className="bg-gray-900/60 backdrop-blur-xl border border-cyan-400/40 p-8 rounded-3xl w-full max-w-5xl text-left shadow-[0_0_35px_rgba(0,255,255,0.25)] mx-auto">

          {/* Title */}
          <h1 className="text-3xl font-extrabold text-cyan-300 tracking-wide">
            Profil Peserta
          </h1>
          <div className="w-32 h-1 bg-cyan-400/50 rounded-full mt-2 mb-6"></div>

          {/* Biodata Card */}
          <div className="bg-gray-800/60 rounded-2xl p-6 border border-cyan-400/20 shadow-[0_0_20px_rgba(0,255,255,0.15)]">
            <h2 className="text-xl font-bold text-cyan-300 mb-4">Biodata</h2>

            <div className="space-y-3 text-gray-200">
              <p>
                <span className="font-semibold text-cyan-300">Nama:</span> {user.name}
              </p>
              <p>
                <span className="font-semibold text-cyan-300">Tanggal Lahir:</span> {user.tl}
              </p>
              <p>
                <span className="font-semibold text-cyan-300">Sekolah:</span> {user.sekolah}
              </p>
              <p>
                <span className="font-semibold text-cyan-300">Email:</span> {user.email}
              </p>
            </div>

            {/* Logout button */}
            <button
              onClick={() => {
                localStorage.removeItem("user");
                router.push("/login");
              }}
              className="mt-6 w-full py-2 rounded-lg bg-teal-400 hover:bg-teal-300 text-black font-semibold transition shadow-lg"
            >
              Logout
            </button>
          </div>

          {/* List Lomba */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-cyan-300 tracking-wide">
              Lomba yang Diikuti
            </h2>
            <div className="w-40 h-1 bg-cyan-400/50 rounded-full mt-2"></div>

            {lombaDiikuti.length === 0 ? (
              <p className="text-gray-400 mt-4">Belum mengikuti lomba apa pun.</p>
            ) : (
              <div className="mt-6 space-y-5">
                {lombaDiikuti.map((item: any) => (
                  <div
                    key={item.id}
                    className="p-5 bg-gray-800/70 rounded-xl border border-cyan-400/20 hover:border-cyan-300/40 transition shadow-[0_0_10px_rgba(0,255,255,0.15)] hover:shadow-[0_0_18px_rgba(0,255,255,0.25)]"
                  >
                    <p className="font-bold text-white text-lg">{item.nama_lomba}</p>
                    <p className="text-gray-400 text-sm mt-1">{item.alasan}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

      )}

      {/* ======================= KATEGORI LOMBA ======================= */}
      {activeTab === "kategori" && (
        <section
          id="kategori"
          className="mt-10 h-screen overflow-y-scroll scrollbar-hide w-full"
        >
          <CategorySection />
        </section>
      )}

    </div>
  );
}
