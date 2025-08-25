"use client";

export default function About() {
    return (
        <section
            id="about"
            className="px-6 md:px-16 py-20 bg-gradient-to-br from-[var(--primary-color)] via-purple-900 to-black text-white relative overflow-hidden"
        >
            {/* Animated background shape */}
            <div className="absolute top-0 left-1/2 w-96 h-96 bg-purple-700 opacity-20 rounded-full blur-3xl -translate-x-1/2 animate-pulse z-0" />

            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 relative z-10">
                {/* Image */}
                <div className="flex-shrink-0 shadow-xl backdrop-blur-lg bg-purple-900/30 rounded-2xl p-2 border-2 border-purple-600 animate-fade-in">
                    <img
                        src="/profile.jpg" // replace with your image
                        alt="Prish Wangila"
                        className="w-64 h-64 object-cover rounded-xl border-4 border-purple-600"
                    />
                </div>

                {/* Text */}
                <div className="flex-1 animate-fade-in delay-100">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-purple-300 drop-shadow-lg">About Me</h2>
                    <p className="text-gray-300 mb-4 text-lg">
                        I’m a <span className="text-purple-400 font-semibold">full-stack developer</span> passionate about crafting interactive and responsive web experiences.<br />
                        With a focus on modern design and clean code, I create projects that are not only functional but visually engaging.
                    </p>
                    <p className="text-gray-300 text-lg">
                        I enjoy learning new technologies, exploring design patterns, and continuously improving my skills.<br />
                        When I’m not coding, you can find me exploring nature, photography, or experimenting with UI/UX design.
                    </p>
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
                .delay-100 { animation-delay: 0.1s; }
            `}</style>
        </section>
    );
}
