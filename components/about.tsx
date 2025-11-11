// components/about.tsx
import React from "react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="snap-start min-h-screen flex items-center justify-center py-12 px-6 bg-gradient-to-b from-black via-cyan-900/90 to-black text-white"
    >
      <div className="w-full max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            <p className="inline-block px-3 py-1 rounded-full bg-teal-600/20 text-teal-300 text-sm font-medium">
              BAZMAGO — Bazma Go Competition
            </p>


            <p className="text-white text-lg leading-relaxed">
              BAZMAGO adalah kompetisi teknologi nasional yang diselenggarakan oleh SMK Ti BAZMA,
              ditujukan khusus untuk siswa SMK se-Indonesia. Kompetisi ini membuka
              kesempatan bagi peserta untuk berkompetisi di berbagai cabang teknologi — mulai dari
              pengembangan perangkat lunak (web & aplikasi), IoT & robotika, hingga proyek AI/ML
              dan keamanan siber.
            </p>

            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-teal-400 font-semibold">•</span>
                <div>
                  <div className="font-semibold">Target Peserta</div>
                  <div className="text-gray-400 text-sm">Siswa SMK seluruh Indonesia</div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 text-teal-400 font-semibold">•</span>
                <div>
                  <div className="font-semibold">Skop Nasional</div>
                  <div className="text-gray-400 text-sm">Terbuka untuk sekolah dari semua provinsi</div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 text-teal-400 font-semibold">•</span>
                <div>
                  <div className="font-semibold">Kategori</div>
                  <div className="text-gray-400 text-sm">Web, Mobile, IoT/Robotics, AI/ML, Cybersecurity</div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 text-teal-400 font-semibold">•</span>
                <div>
                  <div className="font-semibold">Manfaat</div>
                  <div className="text-gray-400 text-sm">Sertifikat, mentoring, dan peluang beasiswa/kerja sama industri</div>
                </div>
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#register"
                className="inline-block bg-teal-500 hover:bg-teal-400 text-black font-semibold px-5 py-3 rounded-lg transition"
                aria-label="Daftar Sekarang"
              >
                Daftar Sekarang
              </a>

              <a
                href="#numbers"
                className="inline-block border border-gray-700 hover:border-gray-500 px-5 py-3 rounded-lg text-gray-200 transition"
                aria-label="Lihat Statistik"
              >
                Lihat Statistik
              </a>
            </div>
          </div>

          {/* Right: Visual card / highlights */}
          <div className="relative p-6 rounded-2xl backdrop-blur-lg border border-green-200 shadow-lg">
            <div className="space-y-4">
              <div className="text-sm text-gray-400">Highlight</div>    

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">🏆 Hadiah Kompetitif</div>
                  <div className="text-sm text-gray-400">Trofi, uang pembinaan, sertifikat</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">💡 Mentoring</div>
                  <div className="text-sm text-gray-400">Workshop & sesi dengan praktisi</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">🤝 Peluang Industri</div>
                  <div className="text-sm text-gray-400">Jaringan mitra & sponsor</div>
                </div>
              </div>

              <div className="mt-4 text-xs text-gray-500">
                Diselenggarakan oleh <span className="font-medium text-white">SMK Ti BAZMA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
