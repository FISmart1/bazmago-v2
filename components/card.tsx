import { useRouter } from "next/navigation";

type Props = {
  id: number;
  index: number;
  title: string;
  tagline: string;
  desc: string;
  batch1: string;
  syarat: string[];
};

export default function CategoryCard({ id, index, title, tagline, desc, batch1, syarat, }: Props) {
  const router = useRouter();

  return (
    <div className="relative w-full rounded-3xl border border-white/10 bg-[#05E3EA]/10 backdrop-blur-sm p-8 text-white shadow-xl">

      {/* index number */}
      <div className="absolute right-6 top-6 text-teal-400 font-bold text-2xl">
        {String(index).padStart(2, "0")}
      </div>

      <h2 className="text-3xl font-bold">{title}</h2>

      <p className="text-teal-400 font-semibold mt-1">{tagline}</p>

      <p className="mt-4 text-gray-300 leading-relaxed">{desc}</p>

      <div className="grid md:grid-cols-2 gap-4 mt-8">
        <div className="rounded-full border border-white/20 p-4 text-center">
          <p className="text-gray-300 text-sm">Biaya Batch 1</p>
          <p className="text-lg font-bold">{batch1}</p>
        </div>
      </div>

      <h3 className="mt-8 font-bold text-gray-200">SYARAT PESERTA</h3>
      <ul className="mt-3 space-y-2">
        {syarat.map((s, i) => (
          <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
            - {s}
          </li>
        ))}
      </ul>

      <button
        onClick={() => router.push(`/daftar-lomba/${id}`)}

        className="mt-8 w-full rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 text-black py-3 font-semibold"
      >
        Daftar Sekarang
      </button>
    </div>
  );
}
