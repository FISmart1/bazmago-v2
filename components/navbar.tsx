"use client"

import Link from "next/link"

export default function BottomDockBar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center mt-12">
      
      <div className="pointer-events-auto flex items-center gap-5 px-6 py-3 bg-black/40 dark:bg-white/10 backdrop-blur-xl rounded-2xl border border-cyan-500/50 shadow-xl">

        {/* Logo Brand */}
        <Link href="/" className="font-bold tracking-wide text-white hover:text-cyan-400 transition">
          BAZMAGo
        </Link>

        <div className="w-[1px] h-6 bg-white/20" />

        <Link href="#beranda" className="text-white hover:text-cyan-400 transition font-medium">
          Beranda
        </Link>

        <Link href="#tentang" className="text-white hover:text-cyan-400 transition font-medium">
          Tentang
        </Link>

        <Link href="/timeline" className="text-white hover:text-cyan-400 transition font-medium">
          Timeline
        </Link>

        <Link href="/lomba" className="text-white hover:text-cyan-400 transition font-medium">
          Lomba
        </Link>

        <div className="w-[1px] h-6 bg-white/20" />

        <Link href="/auth" className=" transition font-medium bg-teal-400 text-black hover:bg-teal-300 px-4 py-2 rounded-lg pointer-events-auto">
          Daftar Sekarang
        </Link>
      </div>

    </div>
  )
}
