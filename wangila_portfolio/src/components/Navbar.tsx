"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#1A0B2E] text-white shadow-md fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-bold tracking-wide">
                            Wangila
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        <Link href="/" className="hover:text-purple-400 transition-colors">
                            Home
                        </Link>
                        <Link href="/about" className="hover:text-purple-400 transition-colors">
                            About
                        </Link>
                        <Link href="/projects" className="hover:text-purple-400 transition-colors">
                            Projects
                        </Link>
                        <Link href="/contact" className="hover:text-purple-400 transition-colors">
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="focus:outline-none"
                            aria-label="Toggle Menu"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#1A0B2E] px-2 pt-2 pb-4 space-y-1">
                    <Link
                        href="/"
                        className="block px-3 py-2 rounded-md hover:bg-purple-900 transition-colors"
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className="block px-3 py-2 rounded-md hover:bg-purple-900 transition-colors"
                    >
                        About
                    </Link>
                    <Link
                        href="/projects"
                        className="block px-3 py-2 rounded-md hover:bg-purple-900 transition-colors"
                    >
                        Projects
                    </Link>
                    <Link
                        href="/contact"
                        className="block px-3 py-2 rounded-md hover:bg-purple-900 transition-colors"
                    >
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    );
}
