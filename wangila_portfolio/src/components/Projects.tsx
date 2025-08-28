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
                    src={`/${t}-outline.svg`}
                    alt={t}
                    width={28}
                    height={28}
                    className="opacity-80"
                    style={{ filter: 'invert(1) grayscale(1)' }}
                />
            ))}
        </div>
    );
}

export default function Projects() {
    return (
        <section
            id="projects"
            className="px-6 md:px-16 py-20 bg-gradient-to-br from-[var(--primary-color)] via-[#112244] to-black text-white relative overflow-hidden"
        >
            {/* Subtle SVG background graphics */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <svg width="700" height="700" viewBox="0 0 700 700" fill="none" className="absolute top-[-160px] left-[-160px] opacity-20 blur-2xl">
                    <circle cx="350" cy="350" r="250" fill="#1a2a4f" />
                    <circle cx="500" cy="200" r="100" fill="#2d3e5e" />
                </svg>
                <svg width="500" height="500" viewBox="0 0 500 500" fill="none" className="absolute bottom-[-100px] right-[-100px] opacity-20 blur-2xl">
                    <rect x="150" y="150" width="200" height="200" rx="100" fill="#112244" />
                </svg>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-left text-blue-200 drop-shadow-lg animate-fade-in font-montserrat">Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {projects.map((project, idx) => (
                        <div
                            key={project.id}
                            className="bg-white/5 rounded-2xl shadow-xl p-8 flex flex-col gap-6 relative hover:shadow-2xl transition-shadow duration-300"
                        >
                            {idx === 0 && (
                                <span className="absolute top-6 right-6 bg-blue-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow">Featured</span>
                            )}
                            <div className="w-full flex justify-center items-center mb-4">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={320}
                                    height={180}
                                    className="object-contain h-40"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2 font-montserrat">{project.title}</h3>
                            <div className="mb-2 text-base text-gray-100 font-montserrat">
                                {project.description}
                            </div>
                            <TechIcons tech={project.tech} />
                            <div className="flex gap-4 mt-4">
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-5 py-2 bg-blue-700 rounded-full hover:bg-blue-800 transition font-semibold shadow-lg text-white text-base font-montserrat"
                                    >
                                        Live
                                    </a>
                                )}
                                {project.repo && (
                                    <a
                                        href={project.repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-5 py-2 bg-gray-800 rounded-full hover:bg-gray-900 transition font-semibold shadow-lg text-white text-base font-montserrat"
                                    >
                                        Repo
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
