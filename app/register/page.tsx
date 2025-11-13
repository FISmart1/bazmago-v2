'use client';
import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    tl: "",
    sekolah: "",
    email: "",
    password: "",
  });
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
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
    <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>

        <input type="text" placeholder="Nama" className="w-full p-2 mb-3 rounded text-black"
          onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input type="date" className="w-full p-2 mb-3 rounded text-black"
          onChange={(e) => setForm({ ...form, tl: e.target.value })} />
        <input type="text" placeholder="Sekolah" className="w-full p-2 mb-3 rounded text-black"
          onChange={(e) => setForm({ ...form, sekolah: e.target.value })} />
        <input type="email" placeholder="Email" className="w-full p-2 mb-3 rounded text-black"
          onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input type="password" placeholder="Password" className="w-full p-2 mb-3 rounded text-black"
          onChange={(e) => setForm({ ...form, password: e.target.value })} />

        <button className="bg-blue-600 hover:bg-blue-700 w-full p-2 rounded font-semibold">Daftar</button>

        {msg && <p className="text-center mt-4 text-sm">{msg}</p>}
      </form>
    </div>
  );
}
