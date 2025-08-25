"use client";

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    link?: string;
    repo?: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "A personal portfolio built with Next.js, TypeScript, and Tailwind CSS.",
        image: "/projects/portfolio.png",
        link: "#",
        repo: "#",
    },
    {
        id: 2,
        title: "E-commerce Store",
        description: "Online shop with shopping cart, product pages, and Stripe integration.",
        image: "/projects/store.png",
        link: "#",
        repo: "#",
    },
    {
        id: 3,
        title: "Blog Platform",
        description: "Dynamic blog with CMS integration and Markdown support.",
        image: "/projects/blog.png",
        link: "#",
        repo: "#",
    },
];

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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {projects.map((project, idx) => (
                        <div
                            key={project.id}
                            className="bg-gradient-to-br from-purple-900/60 via-purple-700/40 to-black/60 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl hover:shadow-purple-700/40 transition-all duration-300 group animate-fade-in font-montserrat border-2 border-purple-700"
                            style={{ animationDelay: `${0.1 * idx}s` }}
                        >
                            <div className="relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300 rounded-t-2xl"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <div className="p-7 flex flex-col justify-between h-full">
                                <h3 className="text-2xl font-bold mb-3 text-purple-200 drop-shadow font-montserrat">{project.title}</h3>
                                <p className="text-gray-300 mb-6 text-lg font-montserrat leading-relaxed">{project.description}</p>
                                <div className="flex gap-4 mt-auto">
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
                    ))}
                </div>
            </div>

            {/* Custom keyframes for fade-in animation */}
            <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 1s cubic-bezier(0.4,0,0.2,1) both;
                }
            `}</style>
        </section>
    );
}
