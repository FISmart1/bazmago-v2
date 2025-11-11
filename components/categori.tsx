import CategoryCard from "@/components/card";

export default function CategorySection(){
  return(
    <section className="min-h-screen snap-start bg-black text-white py-24 px-6 flex flex-col items-center">
      <h1 className="text-4xl md:text-6xl font-extrabold">Category Competition / Bidang Lomba</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 max-w-6xl w-full">

        <CategoryCard
          index={1}
          title="Competitive Programming"
          tagline="Code • Compete • Conquer"
          desc="Kompetisi ini dirancang untuk programmer sejati! Tantangan coding yang disajikan mengharuskan kamu berpikir cepat, logis, dan mampu memecahkan masalah dalam waktu terbatas."
          batch1="Rp 40.000"
          batch2="Rp 50.000"
          syarat={[
            "Kompetisi bersifat individual",
            "Peserta berasal dari jenjang SMA/SMK sederajat",
            "Peserta merupakan Warga Negara Indonesia (WNI)"
          ]}
        />
        <CategoryCard
          index={2}
          title="UI UX Design"
          tagline="Code • Compete • Conquer"
          desc="Kompetisi ini dirancang untuk programmer sejati! Tantangan coding yang disajikan mengharuskan kamu berpikir cepat, logis, dan mampu memecahkan masalah dalam waktu terbatas."
          batch1="Rp 40.000"
          batch2="Rp 50.000"
          syarat={[
            "Kompetisi bersifat individual",
            "Peserta berasal dari jenjang SMA/SMK sederajat",
            "Peserta merupakan Warga Negara Indonesia (WNI)"
          ]}
        />
        <CategoryCard
          index={3}
          title="IoT Solution"
          tagline="Code • Compete • Conquer"
          desc="Kompetisi ini dirancang untuk programmer sejati! Tantangan coding yang disajikan mengharuskan kamu berpikir cepat, logis, dan mampu memecahkan masalah dalam waktu terbatas."
          batch1="Rp 40.000"
          batch2="Rp 50.000"
          syarat={[
            "Kompetisi bersifat individual",
            "Peserta berasal dari jenjang SMA/SMK sederajat",
            "Peserta merupakan Warga Negara Indonesia (WNI)"
          ]}
        />
        <CategoryCard
          index={4}
          title="Business Plan"
          tagline="Code • Compete • Conquer"
          desc="Kompetisi ini dirancang untuk programmer sejati! Tantangan coding yang disajikan mengharuskan kamu berpikir cepat, logis, dan mampu memecahkan masalah dalam waktu terbatas."
          batch1="Rp 40.000"
          batch2="Rp 50.000"
          syarat={[
            "Kompetisi bersifat individual",
            "Peserta berasal dari jenjang SMA/SMK sederajat",
            "Peserta merupakan Warga Negara Indonesia (WNI)"
          ]}
        />

      </div>

    </section>
  )
}
