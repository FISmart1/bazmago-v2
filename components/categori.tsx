'use client';

import { useEffect, useState } from "react";
import CategoryCard from "@/components/card";

export default function CategorySection() {
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/kategori");
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Gagal mengambil kategori:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  if (loading) {
    return (
      <section className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-lg">Memuat kategori...</p>
      </section>
    );
  }

  return (
    <section className="min-h-screen snap-start bg-black text-white py-24 px-6 flex flex-col items-center">
      <h1 className="text-4xl md:text-6xl font-extrabold text-center">
        Category Competition / Bidang Lomba
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 max-w-6xl w-full">
        {categories.length > 0 ? (
          categories.map((item, index) => (
            <CategoryCard
              key={item.id}
              index={index + 1}
              title={item.name_lomba}
              tagline={item.tagline}
              desc={item.desk}
              batch1={`Rp ${item.biaya.toLocaleString("id-ID")}`}
              syarat={[
                "Kompetisi bersifat individual",
                "Peserta berasal dari jenjang SMA/SMK sederajat",
                "Peserta merupakan Warga Negara Indonesia (WNI)"
              ]}
            />
          ))
        ) : (
          <p className="text-center col-span-2 text-gray-400">
            Belum ada kategori lomba.
          </p>
        )}
      </div>
    </section>
  );
}
