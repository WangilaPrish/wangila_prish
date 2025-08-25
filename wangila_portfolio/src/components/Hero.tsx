"use client";

import Link from "next/link";

export default function Hero() {
    return (
        <section
            className="flex flex-col justify-center items-start min-h-screen px-6 md:px-16 bg-[var(--primary-color)]"
        >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                Hi, I'm <span className="text-purple-400">Prish Wangila</span>
            </h1>
            <p className="text-lg md:text-2xl mb-8 max-w-xl text-gray-300">
                I'm a full-stack developer and designer creating modern, interactive, and responsive web experiences.
            </p>
            <Link
                href="/projects"
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold transition-colors"
            >
                See My Work
            </Link>
        </section>
    );
}
