"use client";
import { Meteors } from "./ui/meteors";
import { AuroraText } from "./ui/aurora-text";

export default function HeroLanding() {
  return (
    <section id="beranda" className="min-h-screen relative flex flex-col items-center justify-center text-center py-24 bg-black overflow-hidden">
      <Meteors />

      {/* top gradient */}
      <div className="absolute top-10 left-0 w-full h-[35%] bg-gradient-to-b from-cyan-500/40 to-transparent blur-2xl opacity-50" />

      <div className="relative z-10 px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold sm:text-6xl md:text-7xl text-white tracking-tight leading-tight">
          <AuroraText>BAZMA</AuroraText>{" "}
          Go
        </h1>

        <p className="mt-6 text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto">
          Ubah setiap event menjadi pengalaman yang lebih teratur, mudah diakses, dan terukur. Semua pendaftaran terkumpul dalam satu platform modern.
        </p>

        <div className="flex items-center justify-center gap-4 mt-10">
          <button className="px-6 py-3 rounded-full text-black font-semibold bg-teal-400 hover:bg-teal-300 transition">
            Daftar Sekarang
          </button>
          <button className="px-6 py-3 rounded-full border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black transition">
            Lihat Lomba
          </button>
        </div>
      </div>
    </section>
  );
}
