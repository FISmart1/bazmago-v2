"use client"

import Link from "next/link"

export default function BottomDockBar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center mt-4 sm:mt-12 px-3">
      
      <div className="pointer-events-auto flex items-center gap-3 sm:gap-5 px-3 sm:px-6 py-2 sm:py-3 bg-black/40 dark:bg-white/10 backdrop-blur-xl rounded-2xl border border-cyan-500/50 shadow-xl">

        {/* Logo Brand */}
        <Link href="/" className="font-bold tracking-wide text-white hover:text-cyan-400 transition text-sm sm:text-base">
          BAZMAGo
        </Link>

        <div className="hidden sm:block w-[1px] h-6 bg-white/20" />

        <Link href="#beranda" className="text-white hover:text-cyan-400 transition font-medium text-sm sm:text-base hidden sm:block">
          Beranda
        </Link>

        <Link href="#tentang" className="text-white hover:text-cyan-400 transition font-medium text-sm sm:text-base hidden sm:block">
          Tentang
        </Link>

        <Link href="/timeline" className="text-white hover:text-cyan-400 transition font-medium text-sm sm:text-base hidden sm:block">
          Timeline
        </Link>

        <Link href="/lomba" className="text-white hover:text-cyan-400 transition font-medium text-sm sm:text-base hidden sm:block">
          Lomba
        </Link>

        <div className="hidden sm:block w-[1px] h-6 bg-white/20" />

        <Link href="/auth" className="transition font-medium bg-teal-400 text-black hover:bg-teal-300 px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base">
          Daftar
        </Link>
      </div>

    </div>
  )
}
