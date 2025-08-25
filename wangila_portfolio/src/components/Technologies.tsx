"use client";
import { useEffect, useRef } from 'react';

const technologies = [
    { name: "Next.js", icon: "/next.svg" },
    { name: "React", icon: "/react.svg" },
    { name: "TypeScript", icon: "/typescript.svg" },
    { name: "JavaScript", icon: "/javascript.svg" },
    { name: "Python", icon: "/python.svg" },
    { name: "MySQL", icon: "/mysql.svg" },
    { name: "Tailwind CSS", icon: "/tailwind.svg" },
    { name: "Node.js", icon: "/node.svg" },
    { name: "Git", icon: "/git.svg" },
    { name: "Figma", icon: "/figma.svg" },
];

function Technologies() {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;
        let speed = 0.5; // px per frame
        let frameId: number;
        function animateScroll() {
            if (!scrollContainer) return;
            scrollContainer.scrollLeft += speed;
            if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
                scrollContainer.scrollLeft = 0;
            }
            frameId = requestAnimationFrame(animateScroll);
        }
        frameId = requestAnimationFrame(animateScroll);
        return () => cancelAnimationFrame(frameId);
    }, []);

    return (
        <section
            id="technologies"
            className="px-6 md:px-16 py-20 bg-gradient-to-br from-[var(--primary-color)] via-purple-900 to-black text-white relative overflow-hidden"
        >
            {/* Animated background shape */}
            <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-700 opacity-20 rounded-full blur-3xl -translate-x-1/2 animate-pulse z-0" />

            <div className="max-w-6xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-purple-300 drop-shadow-lg animate-fade-in font-montserrat">Technologies I Know</h2>

                <div className="w-full overflow-x-auto pb-4" ref={scrollRef} style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    <div className="flex gap-8 items-center min-w-max px-2" style={{ scrollSnapType: 'x mandatory' }}>
                        {technologies.map((tech, idx) => (
                            <div
                                key={tech.name}
                                className="flex flex-col items-center gap-3 p-7 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg hover:scale-110 hover:bg-purple-900/30 transition-all duration-300 animate-fade-in font-montserrat"
                                style={{ animationDelay: `${0.1 * idx}s`, scrollSnapAlign: 'center' }}
                            >
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="w-20 h-20 object-contain drop-shadow-lg mb-2"
                                />
                                <span className="text-base font-semibold text-purple-200 font-montserrat">{tech.name}</span>
                            </div>
                        ))}
                    </div>
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
                /* Hide scrollbar for all browsers */
                [ref="scrollRef"]::-webkit-scrollbar { display: none; }
                [ref="scrollRef"] { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </section>
    );
}
export default Technologies;
