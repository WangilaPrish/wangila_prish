"use client";

export default function Contact() {
    return (
        <section
            id="contact"
            className="px-6 md:px-16 py-20 bg-[var(--primary-color)] text-white"
        >
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
                    Contact Me
                </h2>
                <p className="text-center mb-12 text-gray-300">
                    Have a project in mind or just want to say hi? Send me a message!
                </p>

                <form className="flex flex-col gap-6">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="px-4 py-3 rounded-lg bg-white/10 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="px-4 py-3 rounded-lg bg-white/10 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <textarea
                        name="message"
                        rows={5}
                        placeholder="Your Message"
                        className="px-4 py-3 rounded-lg bg-white/10 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-purple-600 hover:bg-purple-700 transition-colors px-6 py-3 rounded-lg text-white font-medium w-max mx-auto"
                    >
                        Send Message
                    </button>
                </form>

                <div className="mt-12 flex justify-center gap-8 text-gray-300">
                    <a href="mailto:your.email@example.com" className="hover:text-white">
                        Email
                    </a>
                    <a href="https://github.com/yourusername" className="hover:text-white">
                        GitHub
                    </a>
                    <a href="https://linkedin.com/in/yourusername" className="hover:text-white">
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
}
