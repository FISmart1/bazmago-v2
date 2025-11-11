
"use client";
import { AuroraText } from "./ui/aurora-text";
const Cta = () => {
    return (
        <section className="relative w-full min-h-screen relative flex flex-col items-center justify-center text-center flex flex-col justify-center items-center text-center px-6 gap-6 bg-black overflow-hidden">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center text-white">
                    <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Siap Menjadi Bagian Dari BazmaGo?</h2>
                    <p className="mt-4 text-2xl font-medium">Daftarkan dirimu sekarang dan tunjukkan kemampuan terbaikmu di ajang kompetisi akademik bergengsi tingkat nasional!</p>

                    <div className="flex flex-col items-center justify-center px-16 mt-8 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex-row lg:mt-12 sm:px-0">
                        <a href="#" title="" className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-semibold text-black transition-all duration-200 bg-teal-400 border border-transparent rounded-md sm:w-auto hover:bg-teal-800" role="button"> {`Daftar Sekarang ->`} </a>

                        <a href="#" title="" className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-transparent border border-teal-400 rounded-md sm:w-auto hover:bg-teal-400 hover:text-black " role="button">
                            Sudah punya Akun? Login
                        </a>
                    </div>

                    
                </div>
            </div>
        </section>
    );
}

export default Cta;