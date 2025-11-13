'use client';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AuroraText } from "@/components/ui/aurora-text";
import { Meteors } from "@/components/ui/meteors";
import CategorySection from "@/components/categori";// pastikan path ini benar

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      router.push("/login");
      return;
    }
    setUser(JSON.parse(storedUser));
  }, [router]);

  if (!user) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-black text-white">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-black relative overflow-hidden text-white">
      <Meteors />

      {/* top aurora */}
      <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-cyan-500/30 to-transparent blur-2xl opacity-50" />

      <div className="relative z-10 flex flex-col items-center py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-6">
          <AuroraText>Profil Peserta</AuroraText>
        </h1>

        {/* 🧍 Biodata */}
        <div className="bg-gray-900/60 backdrop-blur-md border border-cyan-400/30 p-6 rounded-2xl w-full max-w-xl text-left shadow-[0_0_25px_rgba(0,255,255,0.2)]">
          <p><span className="font-semibold text-cyan-300">Nama:</span> {user.name}</p>
          <p><span className="font-semibold text-cyan-300">Tanggal Lahir:</span> {user.tl}</p>
          <p><span className="font-semibold text-cyan-300">Sekolah:</span> {user.sekolah}</p>
          <p><span className="font-semibold text-cyan-300">Email:</span> {user.email}</p>

          <button
            onClick={() => {
              localStorage.removeItem("user");
              router.push("/login");
            }}
            className="mt-6 w-full py-2 rounded-md bg-teal-400 hover:bg-teal-300 text-black font-semibold transition"
          >
            Logout
          </button>
        </div>

        {/* 🏆 Kategori Lomba */}
        <section
          id="kategori"
          className="mt-16 snap-start h-screen overflow-y-scroll scrollbar-hide w-full"
        >
          <div className="h-full">
            <CategorySection />
          </div>
        </section>
      </div>
    </section>
  );
}
