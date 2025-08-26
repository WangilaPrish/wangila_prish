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

                <div className="flex flex-col gap-20 relative">
                    {projects.map((project, idx) => {
                        const isEven = idx % 2 === 0;
                        return (
                            <>
                                <div
                                    key={project.id}
                                    className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 bg-transparent px-6 py-10 md:px-12 md:py-14 font-montserrat relative`}
                                    style={{ flexDirection: isEven ? 'row' : 'row-reverse' }}
                                >
                                    {/* Project Image */}
                                    <div className="w-full md:w-1/2 flex justify-center items-center">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            width={500}
                                            height={300}
                                            className="w-full h-72 object-contain"
                                            style={{ position: 'relative' }}
                                        />
                                    </div>
                                    {/* Project Details */}
                                    <div className="w-full md:w-1/2 flex flex-col justify-center items-start relative">
                                        <span className="text-purple-400 font-semibold mb-2 text-lg">Featured Project</span>
                                        <h3 className="text-3xl font-bold mb-4 text-white font-montserrat relative z-10">{project.title}</h3>
                                        <div className="mb-4 text-base text-gray-100 font-montserrat">
                                            {project.description}
                                        </div>
                                        <TechIcons tech={project.tech} />
                                        <div className="flex gap-4 mt-4 relative z-10">
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
                                </div>
                                {idx < projects.length - 1 && (
                                    <hr className="border-t border-purple-700 mx-auto w-3/4 my-0" />
                                )}
                            </>
                        );
                    })}
                </div>
            </div>

            {/* Removed custom keyframes and animation styles for normal layout */}
        </section>
    );
}
