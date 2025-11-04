import Image from "next/image";
import HeroLanding from "../components/hero";
import EventHero from "@/components/countdown";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
export default function Home() {
  return (
    <div className="dark:bg-black">
      <SmoothCursor />
      <HeroLanding />
      <EventHero
        title="PENDAFTARAN BATCH 1 SEDANG BERLANGSUNG"
        subtitle="Pendaftaran BAZMAGO Competition Batch 1 sedang berlangsung! Segera daftar sebelum tanggal 5 November 2025"
        start="20 Oktober 2025"
        end="5 November 2025"
        target="2025-11-05 23:59:59"
      />

    </div>
  );
}
