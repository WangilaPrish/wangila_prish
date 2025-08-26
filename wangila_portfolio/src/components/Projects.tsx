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
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full max-w-lg h-64 object-cover rounded-2xl shadow-lg border border-purple-700"
                                    />
                                </div>
                                {/* Project Details */}
                                <div className="w-full md:w-1/2 flex flex-col justify-center items-start relative">
                                    <span className="text-purple-400 font-semibold mb-2 text-lg">Featured Project</span>
                                    <h3 className="text-3xl font-bold mb-4 text-white drop-shadow font-montserrat relative z-10">{project.title}</h3>
                                    {/* Floating glassmorphism description */}
                                    <div className="absolute left-0 top-0 z-20" style={{ transform: 'translateY(-3.5rem) translateX(-2.5rem)', pointerEvents: 'none', minWidth: '320px', maxWidth: '420px' }}>
                                        <div className="bg-gradient-to-br from-purple-700/80 via-purple-400/60 to-black/60 backdrop-blur-lg rounded-xl shadow-2xl border border-purple-400/30 px-7 py-5 text-gray-100 text-base font-montserrat" style={{ boxShadow: '0 8px 32px 0 rgba(168,139,250,0.18)' }}>
                                            {project.description}
                                        </div>
                                    </div>
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
                                    <span className="text-3xl text-purple-300">✽</span>
                                    <span className="text-3xl text-purple-300">✽</span>
                                </div>
                                {/* Curved SVG connector to next project */}
                                {idx < projects.length - 1 && (
                                    <svg
                                        className="absolute"
                                        style={{
                                            left: isEven ? '60%' : '40%',
                                            bottom: '-48px',
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
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            opacity="0.7"
                                        />
                                    </svg>
                                )}
                            </div>
                        );
                    })}
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
