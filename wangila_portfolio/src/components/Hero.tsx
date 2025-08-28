"use client";



import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";


const codeLines = [
    "function greet(name) {",
    "  return `Hello, ${name}!`;",
    "}",
    "const user = 'Prish';",
    "console.log(greet(user));",
    "// Full-stack developer & designer",
    "const skills = ['React', 'Next.js', 'TypeScript', 'Node.js'];",
    "skills.forEach(skill => console.log(skill));",
];

function AnimatedCode() {
    const [offset, setOffset] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setOffset((prev) => (prev + 1) % codeLines.length);
        }, 1200);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="relative w-[340px] h-[240px] flex flex-col justify-center items-start overflow-hidden bg-gradient-to-br from-[#112244]/60 via-[#1a2a4f]/40 to-black/60 backdrop-blur-xl rounded-2xl shadow-2xl border border-blue-400/40" style={{ boxShadow: '0 8px 32px 0 rgba(30,40,80,0.25)', border: '2px solid rgba(45,62,94,0.3)' }}>
            <div className="absolute -inset-2 rounded-2xl pointer-events-none" style={{
                background: 'radial-gradient(circle at 80% 20%, rgba(168,139,250,0.15) 0%, transparent 70%)',
                zIndex: 0
            }} />
            <pre className="relative z-10 text-blue-200 text-lg font-mono px-8 py-6 leading-relaxed overflow-hidden w-full h-full">
                {codeLines.map((line, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        style={{
                            display: i === offset ? 'block' : 'none',
                            textShadow: '0 2px 8px rgba(168,139,250,0.5)',
                            whiteSpace: 'pre-wrap',
                            wordBreak: 'break-word',
                            maxWidth: '100%',
                        }}
                    >
                        {line}
                    </motion.div>
                ))}
            </pre>
        </div>
    );
}


export default function Hero() {
    return (
        <section
            className="relative flex flex-col justify-center items-center min-h-screen px-6 md:px-16 bg-gradient-to-br from-[var(--primary-color)] via-[#112244] to-black overflow-hidden"
        >
            {/* Animated background shapes */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-10 left-1/2 w-96 h-96 bg-[#1a2a4f] opacity-30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-400 opacity-20 rounded-full blur-2xl animate-pulse" />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-3xl mx-auto text-center pt-24 pb-16">
                <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight text-white drop-shadow-lg animate-fade-in">
                    Prish Wangila
                </h1>
                <div className="text-lg md:text-2xl text-blue-300 font-semibold mb-2 animate-fade-in delay-100">
                    Full-Stack Developer & Designer
                </div>
                <p className="text-base md:text-xl mb-8 max-w-2xl text-gray-300 animate-fade-in delay-200">
                    I build modern, interactive, and responsive web experiences with a focus on clean code, elegant UI, and seamless user journeys.
                </p>
                <Link
                    href="/#projects"
                    scroll={true}
                    className="inline-flex items-center gap-2 px-8 py-3 bg-blue-700 hover:bg-blue-800 rounded-full text-white font-semibold shadow-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 animate-fade-in delay-300"
                >
                    See My Work <FaArrowRight className="ml-2" />
                </Link>
                {/* Scroll indicator */}
                <div className="mt-16 flex flex-col items-center animate-fade-in delay-500">
                    <span className="text-blue-400 text-sm mb-2">Scroll</span>
                    <span className="w-1.5 h-8 bg-blue-400 rounded-full opacity-60 animate-bounce" />
                </div>
            </div>

            {/* Animated code snippet below hero, visually secondary */}
            <div className="relative z-10 flex justify-center items-center w-full mt-2 md:mt-0">
                <AnimatedCode />
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
                .delay-300 { animation-delay: 0.3s; }
                .delay-500 { animation-delay: 0.5s; }
                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(12px); }
                }
                .animate-bounce {
                    animation: bounce 1.2s infinite;
                }
            `}</style>
        </section>
    );
}
