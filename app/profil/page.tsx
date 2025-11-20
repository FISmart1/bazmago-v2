'use client';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AuroraText } from "@/components/ui/aurora-text";
import { Meteors } from "@/components/ui/meteors";
import CategorySection from "@/components/categori";// pastikan path ini benar
import Profil from '../../components/profilPage';


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
      {/* Navbar */}
      <section className="relative w-full relative flex flex-col items-center justify-center text-center flex flex-col justify-center items-center text-center px-6 gap-6 overflow-hidden ">
        <div className="flex w-6xl justify-between items-center mt-10">
          <div className="text-justify">
            <h1 className="text-4xl font-bold">
              <AuroraText>Dashboard Peserta</AuroraText>
            </h1>
            <p className="text-gray-400">Selamat Datang, <span className="text-white">{user.name}</span></p>
          </div>
          <div className="flex gap-2">
            <div className="text-end">
              <h1 className="">{user.name}</h1>
              <span className="text-gray-400">{user.sekolah}</span>
            </div>
            <div className="p-4 bg-white rounded-full w-10 h-10 text-black flex items-center justify-center mt-2">
              <h4>{user.name?.charAt(0)}</h4>
            </div>
          </div>
        </div>
      </section>
      {/*Gabung wa */}
      <section className="relative w-full relative flex flex-col items-center justify-center text-center flex flex-col justify-center items-center text-center px-6 gap-6 overflow-hidden ">
        <div className="flex w-6xl justify-between items-center mt-10 bg-gray-900/60 backdrop-blur-md border border-cyan-400/30 p-4 rounded-2xl">
          <div className="text-justify">
            <h1 className="text-xl font-bold text-white">
              Ayo Gabung Komunitas Lomba!
            </h1>
            <p className="text-gray-400">Selamat Datang, <span className="text-white">{user.name}</span></p>
          </div>
          <div className="">
            <div className="px-4 py-2 bg-gradient-to-r from-teal-400 to-cyan-500 text-black font-semibold rounded-full hover:opacity-90 cursor-pointer">
              <a href="">
                Gabung Sekarang!
              </a>
            </div>
          </div>
        </div>
      </section>
      <Profil/>
    </section>
  );
}
