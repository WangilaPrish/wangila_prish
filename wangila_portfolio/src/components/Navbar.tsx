"use client";

import Link from "next/link";
import { useState } from "react";
import { FaEnvelope, FaGlobe, FaHome, FaProjectDiagram, FaUser } from "react-icons/fa";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { href: '/#hero', label: 'Home', icon: FaHome },
        { href: '/#about', label: 'About', icon: FaUser },
        { href: '/#projects', label: 'Projects', icon: FaProjectDiagram },
        { href: '/#contact', label: 'Contact', icon: FaEnvelope },
    ];

    return (
        <nav className="backdrop-blur-lg bg-[#1A0B2E]/80 text-white shadow-lg fixed w-full z-50 border-b border-purple-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <FaGlobe className="text-purple-400 text-2xl" />
                        <Link href="/" className="text-2xl font-extrabold tracking-wide hover:text-purple-400 transition-colors">
                            Wangila
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    scroll={true}
                                    className="relative group font-montserrat font-semibold px-4 py-2 flex items-center gap-2 rounded-xl transition-all duration-200 hover:text-purple-400 hover:bg-purple-900/20 shadow-sm"
                                >
                                    <span className="text-lg"><Icon /></span>
                                    <span className="tracking-wide">{item.label}</span>
                                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="focus:outline-none p-2 rounded-full hover:bg-purple-900/30 transition-colors"
                            aria-label="Toggle Menu"
                            type="button"
                        >
                            <svg
                                className="w-7 h-7"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isOpen ? (
                                    <g>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </g>
                                ) : (
                                    <g>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </g>
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed top-16 left-0 w-full bg-[#1A0B2E]/95 backdrop-blur-lg border-b border-purple-900 shadow-lg transition-all duration-300 z-40 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            >
                <div className="px-4 py-4 space-y-2">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                scroll={true}
                                className="flex items-center gap-2 px-4 py-3 rounded-xl font-montserrat font-semibold text-base hover:text-purple-400 hover:bg-purple-900/30 transition-all duration-200 shadow-sm"
                            >
                                <span className="text-lg"><Icon /></span>
                                <span className="tracking-wide">{item.label}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Custom styles for underline animation */}
            <style jsx>{`
                .group:hover .group-hover\:scale-x-100 {
                    transform: scaleX(1);
                }
            `}</style>
        </nav>
    );
}
