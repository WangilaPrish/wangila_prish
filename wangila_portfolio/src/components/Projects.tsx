"use client";

import Image from "next/image";

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    link?: string;
    repo?: string;
    tech?: string[];
}

const projects: Project[] = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "A personal portfolio built with Next.js, TypeScript, and Tailwind CSS.",
        image: "/next.svg",
        link: "#",
        repo: "#",
        tech: ["nextjs", "typescript", "tailwind"],
    },
    {
        id: 2,
        title: "E-commerce Store",
        description: "Online shop with shopping cart, product pages, and Stripe integration.",
        image: "/file.svg",
        link: "#",
        repo: "#",
        tech: ["react", "stripe", "tailwind"],
    },
    {
        id: 3,
        title: "Blog Platform",
        description: "Dynamic blog with CMS integration and Markdown support.",
        image: "/window.svg",
        link: "#",
        repo: "#",
        tech: ["react", "cms", "tailwind"],
    },
];
function TechIcons({ tech }: { tech?: string[] }) {
    if (!tech) return null;
    return (
        <div className="flex gap-2 mt-2">
            {tech.map((t) => (
                <Image
                    key={t}
                    src={`/${t}.svg`}
                    alt={t}
                    width={28}
                    height={28}
                    className="drop-shadow-lg rounded-full bg-gradient-to-br from-purple-400 to-indigo-600 p-1 border border-white/20"
                />
            ))}
        </div>
    );
}

export default function Projects() {
    return (
        <section
            id="projects"
            className="px-6 md:px-16 py-20 bg-gradient-to-br from-[var(--primary-color)] via-purple-900 to-black text-white relative overflow-hidden"
        >
            {/* Animated background shape */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-700 opacity-20 rounded-full blur-3xl animate-pulse z-0" />

            <div className="max-w-6xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-purple-300 drop-shadow-lg animate-fade-in font-montserrat">Projects</h2>

                <div className="flex flex-col gap-32 relative">
                    {projects.map((project, idx) => {
                        const isEven = idx % 2 === 0;
                        return (
                            <div
                                key={project.id}
                                className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 bg-gradient-to-br from-purple-900/60 via-purple-700/40 to-black/60 backdrop-blur-lg rounded-3xl shadow-2xl px-6 py-10 md:px-12 md:py-14 animate-fade-in font-montserrat relative`}
                                style={{ animationDelay: `${0.1 * idx}s`, flexDirection: isEven ? 'row' : 'row-reverse' }}
                            >
                                {/* Project Image */}
                                <div className="w-full md:w-1/2 flex justify-center items-center">
                                    <div className="relative w-full max-w-lg h-64 flex items-center justify-center">
                                        <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{
                                            background: 'radial-gradient(circle at 60% 40%, rgba(168,139,250,0.18) 0%, transparent 70%)',
                                            zIndex: 0
                                        }} />
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            width={384}
                                            height={256}
                                            className="w-full h-64 object-contain rounded-2xl shadow-2xl animate-float-img border border-white/10"
                                            style={{ zIndex: 1, position: 'relative', filter: 'drop-shadow(0 0 16px #a259ff)' }}
                                        />
                                    </div>
                                </div>
                                {/* Project Details */}
                                <div className="w-full md:w-1/2 flex flex-col justify-center items-start relative">
                                    <span className="text-purple-400 font-semibold mb-2 text-lg">Featured Project</span>
                                    <h3 className="text-3xl font-bold mb-4 text-white drop-shadow font-montserrat relative z-10">{project.title}</h3>
                                    {/* Floating glassmorphism description with animation */}
                                    <div className="absolute left-0 top-0 z-20 animate-float-desc" style={{ transform: 'translateY(-3.5rem) translateX(-2.5rem)', pointerEvents: 'none', minWidth: '320px', maxWidth: '420px', filter: 'drop-shadow(0 0 12px #a259ff)' }}>
                                        <div className="bg-gradient-to-br from-purple-700/80 via-purple-400/60 to-black/60 backdrop-blur-lg rounded-xl shadow-2xl px-7 py-5 text-gray-100 text-base font-montserrat border border-white/20" style={{ boxShadow: '0 12px 48px 0 rgba(168,139,250,0.22)' }}>
                                            {project.description}
                                        </div>
                                    </div>
                                    <TechIcons tech={project.tech} />
                                    <div className="flex gap-4 mt-auto relative z-10">
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-5 py-2 bg-purple-600 rounded-xl hover:bg-purple-700 transition font-semibold shadow-lg text-white text-base font-montserrat"
                                            >
                                                Live
                                            </a>
                                        )}
                                        {project.repo && (
                                            <a
                                                href={project.repo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-5 py-2 bg-gray-800 rounded-xl hover:bg-gray-900 transition font-semibold shadow-lg text-white text-base font-montserrat"
                                            >
                                                Repo
                                            </a>
                                        )}
                                    </div>
                                </div>
                                {/* Decorative icons only for first project in each row */}
                                <div className="absolute left-8 bottom-8 flex gap-2">
                                    <span className="text-3xl text-purple-300 animate-pulse">✽</span>
                                    <span className="text-3xl text-purple-300 animate-pulse">✽</span>
                                </div>
                                {/* Curved SVG connector to next project with glow */}
                                {idx < projects.length - 1 && (
                                    <svg
                                        className="absolute animate-fade-in"
                                        style={{
                                            left: isEven ? '60%' : '40%',
                                            bottom: '-32px',
                                            zIndex: 5,
                                            width: '120px',
                                            height: '40px',
                                            pointerEvents: 'none',
                                        }}
                                        viewBox="0 0 120 40"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d={isEven ? 'M0,20 Q60,0 120,20' : 'M120,20 Q60,40 0,20'}
                                            stroke="#a78bfa"
                                            strokeWidth="4"
                                            strokeLinecap="round"
                                            opacity="0.9"
                                            style={{ filter: 'drop-shadow(0 0 8px #a259ff)' }}
                                        />
                                    </svg>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Custom keyframes for fade-in and float animation */}
            <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 1s cubic-bezier(0.4,0,0.2,1) both;
                }
                @keyframes float-img {
                    0% { transform: translateY(0px) scale(1); }
                    50% { transform: translateY(-12px) scale(1.03); }
                    100% { transform: translateY(0px) scale(1); }
                }
                .animate-float-img {
                    animation: float-img 7s cubic-bezier(0.45,0.05,0.55,0.95) infinite;
                }
                @keyframes float-desc {
                    0% { transform: translateY(-3.5rem) translateX(-2.5rem) scale(1); }
                    50% { transform: translateY(-4.5rem) translateX(-2.5rem) scale(1.03); }
                    100% { transform: translateY(-3.5rem) translateX(-2.5rem) scale(1); }
                }
                .animate-float-desc {
                    animation: float-desc 8s cubic-bezier(0.45,0.05,0.55,0.95) infinite;
                }
            `}</style>
        </section>
    );
}
