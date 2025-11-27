// app/page.tsx  atau pages/index.tsx (sesuaikan dengan struktur project kamu)
import BottomDockBar from "@/components/navbar";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import HeroLanding from "@/components/hero";
import AboutSection from "@/components/about";
import NumbersSection from "@/components/stats";
import EventHero from "@/components/countdown";
import CategorySection from "@/components/categori";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
      <section className="snap-start h-screen">
        <div className="relative h-full">
          <BottomDockBar />
          <SmoothCursor />
          <HeroLanding />
        </div>
      </section>

      <section className="snap-start h-screen">
        <AboutSection />
      </section>

      <section id="numbers" className="snap-start h-screen">
        <NumbersSection
          stats={[
            { value: 2280, title: "Jumlah Peserta (estimasi)", sub: "" },
            { value: 4821, title: "Jumlah Mitra", sub: "" },
            { value: 107, title: "Jumlah Event", sub: "" },
          ]}
        />
      </section>


      <section className="snap-start h-screen" id="timeline">
        <EventHero
          title="PENDAFTARAN BATCH 1 SEDANG BERLANGSUNG"
          subtitle="Pendaftaran BAZMAGO Competition Batch 1 sedang berlangsung! Segera daftar sebelum tanggal 5 November 2025"
          start="20 Oktober 2025"
          end="30 November 2025"
          target="2025-11-05 23:59:59"
        />
      </section>

      <section
        id="kategori"
        className="snap-start h-screen overflow-y-scroll scrollbar-hide"
      >
        <div className="h-full">
          <CategorySection />
        </div>
      </section>


      <section id="cta" className="snap-start h-screen">
        <Cta />
      </section>
    </div>
  );
}
