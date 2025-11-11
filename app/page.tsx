import Image from "next/image";
import HeroLanding from "../components/hero";
import EventHero from "@/components/countdown";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import BottomDockBar from "@/components/navbar";
import NumbersSection from "@/components/stats";

export default function Home() {
  return (
    <div className="bg-black snap-y snap-mandatory h-screen overflow-y-scroll">
  <section className="snap-start h-screen">
    <BottomDockBar />
    <SmoothCursor />
    <HeroLanding />
  </section>

  <section id="numbers" className="snap-start h-screen">
    <NumbersSection
      stats={[
        { value: "2570", title: "Jumlah Peserta", sub: "" },
        { value: "4821", title: "Jumlah Mitra", sub: "" },
        { value: "220", title: "Jumlah Event", sub: "" },
      ]}
    />
  </section>

  <section className="snap-start h-screen">
    <EventHero
      title="PENDAFTARAN BATCH 1 SEDANG BERLANGSUNG"
      subtitle="Pendaftaran BAZMAGO Competition Batch 1 sedang berlangsung! Segera daftar sebelum tanggal 5 November 2025"
      start="20 Oktober 2025"
      end="5 November 2025"
      target="2025-11-05 23:59:59"
    />
  </section>
</div>

  );
}
