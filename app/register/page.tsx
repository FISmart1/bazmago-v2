'use client';
import { useState } from "react";
import { Meteors } from "@/components/ui/meteors";
import { AuroraText } from "@/components/ui/aurora-text";
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff, FiBookOpen, FiCalendar } from "react-icons/fi";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    tl: "",
    sekolah: "",
    email: "",
    password: "",
  });
  const [msg, setMsg] = useState("");
  const [showPw, setShowPw] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setMsg(data.message || data.error);
  };

  return (
    <div className="relative min-h-screen flex justify-center items-center bg-black overflow-hidden text-white">
      <Meteors />
      <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-cyan-500/40 to-transparent blur-2xl opacity-50" />

      <form
        onSubmit={handleSubmit}
        className="relative z-10 bg-gray-900/60 backdrop-blur-md border border-cyan-400/30 
                   p-8 rounded-2xl shadow-[0_0_30px_rgba(0,255,255,0.1)] w-96 text-center"
      >
        <h1 className="text-3xl font-extrabold mb-6">
          <AuroraText>Register</AuroraText>
        </h1>

        <div className="space-y-4 text-left">
          <div className="relative">
            <FiUser className="absolute top-3 left-3 text-cyan-400" />
            <input
              type="text"
              placeholder="Nama Lengkap"
              className="w-full p-3 pl-10 rounded-md bg-gray-800/70 text-white border border-cyan-400/30 focus:border-cyan-400 focus:outline-none transition"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>

          <div className="relative">
            <FiCalendar className="absolute top-3 left-3 text-cyan-400" />
            <input
              type="date"
              className="w-full p-3 pl-10 rounded-md bg-gray-800/70 text-white border border-cyan-400/30 focus:border-cyan-400 focus:outline-none transition"
              onChange={(e) => setForm({ ...form, tl: e.target.value })}
            />
          </div>

          <div className="relative">
            <FiBookOpen className="absolute top-3 left-3 text-cyan-400" />
            <input
              type="text"
              placeholder="Asal Sekolah"
              className="w-full p-3 pl-10 rounded-md bg-gray-800/70 text-white border border-cyan-400/30 focus:border-cyan-400 focus:outline-none transition"
              onChange={(e) => setForm({ ...form, sekolah: e.target.value })}
            />
          </div>

          <div className="relative">
            <FiMail className="absolute top-3 left-3 text-cyan-400" />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 pl-10 rounded-md bg-gray-800/70 text-white border border-cyan-400/30 focus:border-cyan-400 focus:outline-none transition"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div className="relative">
            <FiLock className="absolute top-3 left-3 text-cyan-400" />
            <input
              type={showPw ? "text" : "password"}
              placeholder="Password"
              className="w-full p-3 pl-10 pr-10 rounded-md bg-gray-800/70 text-white border border-cyan-400/30 focus:border-cyan-400 focus:outline-none transition"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <button
              type="button"
              onClick={() => setShowPw(!showPw)}
              className="absolute top-3 right-3 text-cyan-400 hover:text-cyan-200 transition"
            >
              {showPw ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-full py-3 rounded-md bg-teal-400 hover:bg-teal-300 text-black font-semibold 
                     transition-all duration-200 shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_25px_rgba(0,255,255,0.4)]"
        >
          Daftar
        </button>

        {msg && <p className="mt-4 text-sm text-cyan-300">{msg}</p>}

        <p className="text-sm mt-6 text-gray-400">
          Sudah punya akun?{" "}
          <a href="/login" className="text-cyan-400 hover:underline">
            Login di sini
          </a>
        </p>
      </form>
    </div>
  );
}
