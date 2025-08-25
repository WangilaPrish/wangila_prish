"use client";


import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
    return (
        <section
            className="relative flex flex-col justify-center items-start min-h-screen px-6 md:px-16 bg-gradient-to-br from-[var(--primary-color)] via-purple-900 to-black overflow-hidden"
        >
            {/* Animated background shapes */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-10 left-1/2 w-96 h-96 bg-purple-700 opacity-30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-400 opacity-20 rounded-full blur-2xl animate-pulse" />
            </div>

            <div className="relative z-10">
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg animate-fade-in">
                    Hi, I'm <span className="text-purple-400">Prish Wangila</span>
                </h1>
                <p className="text-lg md:text-2xl mb-8 max-w-xl text-gray-300 animate-fade-in delay-100">
                    I'm a <span className="text-purple-300 font-semibold">full-stack developer</span> & <span className="text-purple-300 font-semibold">designer</span> crafting modern, interactive, and responsive web experiences.
                </p>
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 px-7 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl text-white font-semibold shadow-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 animate-fade-in delay-200"
                >
                    See My Work <FaArrowRight className="ml-2" />
                </Link>
            </div>

            {/* Add some custom keyframes for fade-in animation */}
            <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 1s cubic-bezier(0.4,0,0.2,1) both;
                }
                .delay-100 { animation-delay: 0.1s; }
                .delay-200 { animation-delay: 0.2s; }
            `}</style>
        </section>
    );
}
