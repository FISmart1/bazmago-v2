import { AuroraText } from "./ui/aurora-text"
import { NumberTicker } from "./ui/number-ticker"

export default function NumbersSection({ stats }) {
    return (
        <section className="min-h-screen relative flex flex-col items-center justify-center text-center py-10 bg-black sm:py-16 lg:py-24 mb-24">
            <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 drop-shadow-lg">
                        <AuroraText>BAZMAGo Terus Tumbuh</AuroraText>
                    </h1>
                    <p className="mt-3 text-xl leading-relaxed text-white md:mt-8">
                        Setiap angka ini bukan hanya statistik, tapi cerita tentang proses, komunitas, kolaborasi, dan ribuan peserta yang pernah terlibat di BAZMAGo. Ini bukti bahwa perkembangan kami nyata dan terus bergerak maju.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">

                    {stats.map((s, i) => (
                        <div key={i}>
                            <NumberTicker
                                value={s.value}
                                startValue={0}
                                className="text-7xl font-medium tracking-tighter whitespace-pre-wrap text-white dark:text-white"
                            />
                            <p className="mt-4 text-xl font-medium text-white">{s.title}</p>
                            <p className="text-base mt-0.5 text-gray-500">{s.sub}</p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}
