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
            className="px-6 md:px-16 py-20 bg-gradient-to-br from-[var(--primary-color)] via-purple-900 to-black text-white relative overflow-hidden"
        >
            {/* Animated background shape */}
            <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-700 opacity-20 rounded-full blur-3xl -translate-x-1/2 animate-pulse z-0" />

            <div className="max-w-6xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-purple-300 drop-shadow-lg animate-fade-in">Technologies Used</h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-10 items-center justify-items-center">
                    {technologies.map((tech, idx) => (
                        <div
                            key={tech.name}
                            className="flex flex-col items-center gap-2 p-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg hover:scale-110 hover:bg-purple-900/30 transition-all duration-300 animate-fade-in"
                            style={{ animationDelay: `${0.1 * idx}s` }}
                        >
                            <img
                                src={tech.icon}
                                alt={tech.name}
                                className="w-16 h-16 object-contain drop-shadow-lg"
                            />
                            <span className="text-sm font-semibold text-purple-200">{tech.name}</span>
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
