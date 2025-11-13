'use client';
import { useState } from "react";
import { Meteors } from "@/components/ui/meteors";
import { AuroraText } from "@/components/ui/aurora-text";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();
  const res = await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });
  const data = await res.json();
  if (res.ok) {
    localStorage.setItem("user", JSON.stringify(data.user)); // Simpan data user
    router.push("/profil"); // Arahkan ke profil
  } else {
    setMsg(data.error);
  }
};


  return (
    <div className="relative min-h-screen flex justify-center items-center bg-black overflow-hidden text-white">
      <Meteors />

      {/* Aurora top glow */}
      <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-cyan-500/40 to-transparent blur-2xl opacity-50" />

      <form
        onSubmit={handleSubmit}
        className="relative z-10 bg-gray-900/60 backdrop-blur-md border border-cyan-400/30 
                   p-8 rounded-2xl shadow-[0_0_30px_rgba(0,255,255,0.1)] w-96 text-center"
      >
        <h1 className="text-3xl font-extrabold mb-2">
          <AuroraText>Login</AuroraText>
        </h1>
        <p className="text-gray-400 text-sm mb-6">Selamat datang kembali di <span className="text-cyan-400 font-medium">Bazma Go Competition</span></p>

        {/* Input Email */}
        <div className="relative mb-4">
          <FiMail className="absolute left-3 top-3.5 text-gray-400" size={20} />
          <input
            type="email"
            placeholder="Email"
            className="w-full pl-10 p-3 rounded-md bg-gray-800/70 text-white border border-cyan-400/30 
                       focus:border-cyan-400 focus:outline-none transition"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        {/* Input Password */}
        <div className="relative mb-4">
          <FiLock className="absolute left-3 top-3.5 text-gray-400" size={20} />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full pl-10 pr-10 p-3 rounded-md bg-gray-800/70 text-white border border-cyan-400/30 
                       focus:border-cyan-400 focus:outline-none transition"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <button
            type="button"
            className="absolute right-3 top-3.5 text-gray-400 hover:text-cyan-400 transition"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
          </button>
        </div>

        {/* Tombol */}
        <button
          type="submit"
          className="mt-2 w-full py-3 rounded-md bg-teal-400 hover:bg-teal-300 text-black font-semibold 
                     transition-all duration-200 shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_25px_rgba(0,255,255,0.4)]"
        >
          Masuk
        </button>

        {msg && <p className="mt-4 text-sm text-cyan-300">{msg}</p>}

        {/* Extra link */}
        <div className="mt-6 text-sm text-gray-400 flex flex-col gap-2">
          <a href="/register" className="hover:text-cyan-300 transition">
            Belum punya akun? <span className="text-cyan-400">Daftar di sini</span>
          </a>
          <a href="#" className="hover:text-cyan-300 transition">
            Lupa password?
          </a>
        </div>
      </form>
    </div>
  );
}
