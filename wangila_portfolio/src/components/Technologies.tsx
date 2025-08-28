"use client";

const tools = [
    { name: "Figma", icon: "/figma-outline.svg" },
    { name: "Git", icon: "/git-outline.svg" },
    { name: "Node.js", icon: "/node-outline.svg" },
    { name: "MySQL", icon: "/mysql-outline.svg" },
    { name: "Tailwind CSS", icon: "/tailwind-outline.svg" },
];

function Technologies() {
    return (
        <section
            id="tools"
            className="px-6 md:px-16 py-20 bg-gradient-to-br from-[var(--primary-color)] via-[#112244] to-black text-white relative overflow-hidden"
        >
            {/* Subtle SVG background graphics */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <svg width="500" height="500" viewBox="0 0 500 500" fill="none" className="absolute top-[-100px] left-[-100px] opacity-20 blur-2xl">
                    <circle cx="250" cy="250" r="180" fill="#1a2a4f" />
                </svg>
                <svg width="300" height="300" viewBox="0 0 300 300" fill="none" className="absolute bottom-[-60px] right-[-60px] opacity-20 blur-2xl">
                    <rect x="60" y="60" width="180" height="180" rx="90" fill="#2d3e5e" />
                </svg>
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-left text-blue-200 drop-shadow-lg animate-fade-in font-montserrat">Tools I Use</h2>
                <p className="text-gray-300 mb-10 text-lg font-montserrat">My daily toolkit for building, designing, and collaborating.</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {tools.map((tool, idx) => (
                        <div
                            key={tool.name}
                            className="flex flex-col items-center gap-3 p-7 bg-white/10 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 animate-fade-in font-montserrat"
                            style={{ animationDelay: `${0.1 * idx}s` }}
                        >
                            <img
                                src={tool.icon}
                                alt={tool.name}
                                className="w-16 h-16 object-contain drop-shadow-lg mb-2 opacity-80"
                                style={{ filter: 'invert(1) grayscale(1)' }}
                            />
                            <span className="text-base font-semibold text-blue-200 font-montserrat">{tool.name}</span>
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
export default Technologies;
