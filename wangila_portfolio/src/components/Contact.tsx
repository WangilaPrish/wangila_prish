"use client";

export default function Contact() {
    return (
        <section
            id="contact"
            className="px-6 md:px-16 py-20 bg-gradient-to-br from-[var(--primary-color)] via-purple-900 to-black text-white relative overflow-hidden"
        >
            {/* Animated background shape */}
            <div className="absolute top-0 left-1/2 w-96 h-96 bg-purple-700 opacity-20 rounded-full blur-3xl -translate-x-1/2 animate-pulse z-0" />

            <div className="max-w-3xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-purple-300 drop-shadow-lg animate-fade-in">Contact Me</h2>
                <p className="text-center mb-12 text-gray-300 animate-fade-in delay-100">
                    Have a project in mind or just want to say hi? Send me a message!
                </p>

                <form className="flex flex-col gap-6 bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-lg animate-fade-in delay-200">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="px-4 py-3 rounded-lg bg-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="px-4 py-3 rounded-lg bg-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    />
                    <textarea
                        name="message"
                        rows={5}
                        placeholder="Your Message"
                        className="px-4 py-3 rounded-lg bg-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-purple-600 hover:bg-purple-700 transition-colors px-8 py-3 rounded-xl text-white font-semibold w-max mx-auto shadow-lg"
                    >
                        Send Message
                    </button>
                </form>

                <div className="mt-12 flex justify-center gap-8 text-gray-300 animate-fade-in delay-300">
                    <a href="mailto:nabwonyaprish@gmail.com" className="hover:text-purple-400 transition-colors text-lg font-medium">
                        Email
                    </a>
                    <a href="https://github.com/WangilaPrish" className="hover:text-purple-400 transition-colors text-lg font-medium">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/priscilla-wangila/" className="hover:text-purple-400 transition-colors text-lg font-medium">
                        LinkedIn
                    </a>
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
                .delay-200 { animation-delay: 0.2s; }
                .delay-300 { animation-delay: 0.3s; }
            `}</style>
        </section>
    );
}
