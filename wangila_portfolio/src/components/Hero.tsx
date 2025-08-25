"use client";



import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";

function CodingMatrix() {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        const w = canvas.width = 320;
        const h = canvas.height = 400;
        const cols = Math.floor(w / 16);
        const ypos = Array(cols).fill(0);
        const matrixChars = "abcdefghijklmnopqrstuvwxyz0123456789<>[]{}()$#@!%&*+-=;:,./?";
        let animationFrameId;

        function matrix() {
            ctx.fillStyle = "rgba(20, 10, 40, 0.15)";
            ctx.fillRect(0, 0, w, h);
            ctx.font = "16px monospace";
            ctx.fillStyle = "#a78bfa";
            for (let i = 0; i < cols; i++) {
                const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
                ctx.fillText(text, i * 16, ypos[i] * 16);
                if (ypos[i] * 16 > h && Math.random() > 0.975) {
                    ypos[i] = 0;
                } else {
                    ypos[i]++;
                }
            }
            animationFrameId = requestAnimationFrame(matrix);
        }
        matrix();
        return () => cancelAnimationFrame(animationFrameId);
    }, []);
    return (
        <canvas
            ref={canvasRef}
            width={320}
            height={400}
            className="rounded-xl shadow-2xl border-2 border-purple-700 bg-black/60"
            aria-label="Coding Matrix Animation"
        />
    );
}


export default function Hero() {
    return (
        <section
            className="relative flex flex-col md:flex-row justify-center items-center min-h-screen px-6 md:px-16 bg-gradient-to-br from-[var(--primary-color)] via-purple-900 to-black overflow-hidden"
        >
            {/* Animated background shapes */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-10 left-1/2 w-96 h-96 bg-purple-700 opacity-30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-400 opacity-20 rounded-full blur-2xl animate-pulse" />
            </div>

            <div className="relative z-10 flex-1 flex flex-col justify-center items-start md:ml-16 lg:ml-24">
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg animate-fade-in">
                    Hi, I'm <span className="text-purple-400">Prish Wangila</span>
                </h1>
                <p className="text-lg md:text-2xl mb-8 max-w-xl text-gray-300 animate-fade-in delay-100">
                    I'm a <span className="text-purple-300 font-semibold">full-stack developer</span> & <span className="text-purple-300 font-semibold">designer</span> crafting modern, interactive, and responsive web experiences.
                </p>
                <Link
                    href="/#projects"
                    scroll={true}
                    className="inline-flex items-center gap-2 px-7 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl text-white font-semibold shadow-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 animate-fade-in delay-200"
                >
                    See My Work <FaArrowRight className="ml-2" />
                </Link>
            </div>

            {/* Coding Matrix Animation on the right */}
            <div className="relative z-10 flex-1 flex justify-center items-center mt-12 md:mt-0 md:ml-12">
                <CodingMatrix />
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
