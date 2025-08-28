"use client";


function About() {
    return (
        <section
            id="about"
            className="relative flex flex-col justify-center items-center min-h-screen px-6 md:px-16 bg-gradient-to-br from-[var(--primary-color)] via-[#112244] to-black overflow-hidden"
        >
            {/* Animated background shape */}
            <div className="absolute top-0 left-1/2 w-96 h-96 bg-[#1a2a4f] opacity-20 rounded-full blur-3xl -translate-x-1/2 animate-pulse z-0" />

            <div className="max-w-4xl mx-auto w-full flex flex-col gap-8 relative z-10 py-20 animate-fade-in">
                <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-blue-200 drop-shadow-lg font-montserrat">About Me</h2>
                <div className="flex flex-col md:flex-row gap-12">
                    <div className="flex-1">
                        <p className="text-gray-200 mb-6 text-xl font-montserrat leading-relaxed">
                            I’m a <span className="text-blue-400 font-semibold">full-stack developer</span> passionate about crafting interactive and responsive web experiences.<br />
                            With a focus on modern design and clean code, I create projects that are not only functional but visually engaging.
                        </p>
                        <p className="text-gray-400 text-base mt-4 font-montserrat">
                            Always learning. Always building.<br />
                            When I’m not coding, I’m exploring design, tech, or the outdoors.
                        </p>
                    </div>
                    <div className="flex-1 bg-white/5 rounded-xl px-8 py-6 text-gray-100 text-lg font-montserrat shadow-lg self-start">
                        <div className="mb-2 font-semibold text-blue-300">What I do</div>
                        <ul className="list-disc list-inside">
                            <li>Build modern web apps with React, Next.js, and TypeScript</li>
                            <li>Design clean, user-friendly interfaces</li>
                            <li>Integrate APIs and backend services</li>
                            <li>Focus on performance, accessibility, and best practices</li>
                        </ul>
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
            `}</style>
        </section>
    );
}
export default About;
