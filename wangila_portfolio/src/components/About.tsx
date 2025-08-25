"use client";

export default function About() {
    return (
        <section
            id="about"
            className="px-6 md:px-16 py-20 bg-[var(--primary-color)] text-white"
        >
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
                {/* Image */}
                <div className="flex-shrink-0">
                    <img
                        src="/profile.jpg" // replace with your image
                        alt="Prish Wangila"
                        className="w-64 h-64 object-cover rounded-xl border-4 border-purple-600"
                    />
                </div>

                {/* Text */}
                <div className="flex-1">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
                    <p className="text-gray-300 mb-4">
                        I’m a full-stack developer passionate about crafting interactive and responsive web experiences.
                        With a focus on modern design and clean code, I create projects that are not only functional but visually engaging.
                    </p>
                    <p className="text-gray-300">
                        I enjoy learning new technologies, exploring design patterns, and continuously improving my skills.
                        When I’m not coding, you can find me exploring nature, photography, or experimenting with UI/UX design.
                    </p>
                </div>
            </div>
        </section>
    );
}
