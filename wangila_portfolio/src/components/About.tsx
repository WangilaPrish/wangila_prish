"use client";


function About() {
    return (
        <section
            id="about"
            className="relative flex flex-col md:flex-row justify-center items-center min-h-screen px-6 md:px-16 bg-gradient-to-br from-[var(--primary-color)] via-purple-900 to-black overflow-hidden"
        >
            {/* Animated background shape */}
            <div className="absolute top-0 left-1/2 w-96 h-96 bg-purple-700 opacity-20 rounded-full blur-3xl -translate-x-1/2 animate-pulse z-0" />

            <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 relative z-10 py-10 md:py-0">
                {/* Image on the left */}
                <div className="flex-shrink-0 shadow-2xl backdrop-blur-lg bg-purple-900/40 rounded-2xl p-4 border-4 border-purple-600 animate-fade-in md:mr-10 float-image" style={{ height: '30rem', width: '22rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img
                        src="/prishwangila.jpg"
                        alt="Prish Wangila"
                        className="w-80 h-110 object-cover rounded-xl border-4 border-purple-400 animate-float"
                        style={{ boxShadow: "0 8px 32px 0 rgba(80,0,120,0.25)" }}
                    />
                </div>

                {/* Text on the right */}
                <div className="flex-1 flex flex-col justify-center items-start md:ml-8 lg:ml-16 animate-fade-in delay-100">
                    <h2 className="text-5xl md:text-6xl font-extrabold mb-8 text-purple-300 drop-shadow-lg font-montserrat">About Me</h2>
                    <p className="text-gray-200 mb-6 text-xl font-montserrat leading-relaxed">
                        I’m a <span className="text-purple-400 font-semibold">full-stack developer</span> passionate about crafting interactive and responsive web experiences.<br />
                        With a focus on modern design and clean code, I create projects that are not only functional but visually engaging.
                    </p>
                    <p className="text-gray-200 text-xl font-montserrat leading-relaxed">
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
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-24px) scale(1.04); box-shadow: 0 16px 48px 0 rgba(80,0,120,0.18); }
                    100% { transform: translateY(0px); }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}
export default About;
