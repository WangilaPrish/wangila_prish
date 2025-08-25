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
            className="px-6 md:px-16 py-20 bg-[var(--primary-color)] text-white"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Projects</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-300 mb-4">{project.description}</p>
                                <div className="flex gap-3">
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-700 transition"
                                        >
                                            Live
                                        </a>
                                    )}
                                    {project.repo && (
                                        <a
                                            href={project.repo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-800 transition"
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
        </section>
    );
}
