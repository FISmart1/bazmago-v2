"use client";

import { useEffect, useState } from "react";
import { Particles } from "./ui/particles";
import { AuroraText } from "./ui/aurora-text";
interface Props {
    title: string;
    subtitle: string;
    start: string;  // format: 2025-10-20
    end: string;    // format: 2025-11-05
    target: string; // format: "2025-11-05 23:59:59"
}

export default function EventHero({ title, subtitle, start, end, target }: Props) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const eventTime = new Date(target).getTime();
            const now = Date.now();
            const diff = eventTime - now;

            const d = Math.floor(diff / (1000 * 60 * 60 * 24));
            const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const m = Math.floor((diff / 1000 / 60) % 60);
            const s = Math.floor((diff / 1000) % 60);

            if (diff <= 0) {
                clearInterval(interval);
            }

            setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
        }, 1000);

        return () => clearInterval(interval);
    }, [target]);

    const Card = ({ label, value, icon }: { label: string; value: number; icon: string }) => (
        <div className="px-20 py-16 rounded-2xl border border-[#05E3EA]/40 bg-[#05E3EA]/10 backdrop-blur-sm flex flex-col justify-center items-center">
            <div className="text-[42px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 leading-none">{String(value).padStart(2, "0")}</div>
            <div className="uppercase text-xs tracking-wider text-white/70 mt-1">{label}</div>
        </div>
    );

    return (
        <section id="tentang" className="relative w-full min-h-[80vh] flex flex-col justify-center items-center text-center px-6 gap-6 bg-black overflow-hidden">

            {/* PARTICLES FULL */}
            <div className="absolute inset-0  ">
                <Particles
                    className="absolute inset-0"
                    quantity={80}
                    size={2.2}
                    color="#05E3EA"
                />

            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 drop-shadow-lg">
                <AuroraText>PENDAFTARAN BATCH 1</AuroraText>
            </h1>
            <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 drop-shadow-lg">
                <AuroraText>SEDANG BERLANGSUNG</AuroraText>
            </h1>

            <p className="max-w-2xl text-white/80 text-md md:text-lg">{subtitle}</p>

            <div className="bg-[#05E3EA]/50 text-black font-medium text-sm px-4 py-2 rounded-full">
                {start} - {end}
            </div>

            <div className="flex gap-4 md:gap-6 mt-4 flex-wrap justify-center">
                <Card label="Hari" value={timeLeft.days} icon="calendar" />
                <Card label="Jam" value={timeLeft.hours} icon="clock" />
                <Card label="Menit" value={timeLeft.minutes} icon="lightning" />
                <Card label="Detik" value={timeLeft.seconds} icon="zap" />
            </div>

            <button className="mt-6 px-6 py-3 rounded-xl bg-teal-400 hover:bg-teal-300 text-black font-semibold  active:scale-95 transition-all duration-200">
                Daftar Sekarang (Batch 1)
            </button>

            <p className="text-xs text-white/60 mt-2">Jangan lewatkan kesempatan emas ini!</p>
        </section>
    )

}
