"use client";

const technologies = [
    { name: "Next.js", icon: "/tech/nextjs.svg" },
    { name: "React", icon: "/tech/react.svg" },
    { name: "TypeScript", icon: "/tech/typescript.svg" },
    { name: "Tailwind CSS", icon: "/tech/tailwind.svg" },
    { name: "Node.js", icon: "/tech/nodejs.svg" },
    { name: "Git", icon: "/tech/git.svg" },
    { name: "Figma", icon: "/tech/figma.svg" },
];

export default function Technologies() {
    return (
        <section
            id="technologies"
            className="px-6 md:px-16 py-20 bg-[var(--primary-color)] text-white"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                    Technologies Used
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
                    {technologies.map((tech) => (
                        <div
                            key={tech.name}
                            className="flex flex-col items-center gap-2 p-4 hover:scale-105 transition-transform duration-300"
                        >
                            <img
                                src={tech.icon}
                                alt={tech.name}
                                className="w-16 h-16 object-contain"
                            />
                            <span className="text-sm font-medium">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
