"use client";


import Link from "next/link";
import { useState } from "react";
import { FaGlobe, FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Example menuItems array for demonstration
    const menuItems = [
        { href: '/#hero', label: 'Home', icon: FaHome },
        { href: '/#about', label: 'About', icon: FaUser },
        { href: '/#projects', label: 'Projects', icon: FaProjectDiagram },
        { href: '/#contact', label: 'Contact', icon: FaEnvelope },
    ];

    return (
        <>
            <button
                className="focus:outline-none p-2 rounded-full hover:bg-purple-900/30 transition-colors"
                aria-label="Toggle Menu"
                onClick={() => setIsOpen(!isOpen)}
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
            {isOpen && (
                <>
                    <div
                        className={`md:hidden fixed top-16 left-0 w-full bg-[#1A0B2E]/95 backdrop-blur-lg border-b border-purple-900 shadow-lg transition-all duration-300 z-40 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0
 pointer-events-none'}`}
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
            <div
                className={`md:hidden fixed top-16 left-0 w-full bg-[#1A0B2E]/95 backdrop-blur-lg border-b border-purple-900 shadow-lg transition-all duration-300 z-40 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            >
                <div className="px-4 py-4 space-y-2">
                    {[
                        { href: '/#hero', label: 'Home' },
                        { href: '/#about', label: 'About' },
                        { href: '/#projects', label: 'Projects' },
                        { href: '/#contact', label: 'Contact' },
                    ].map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            scroll={true}
                            className="block px-4 py-2 rounded-lg font-medium hover:bg-purple-900/40 transition-colors duration-200"
                        >
                            {item.label}
                        </Link>
                    ))}
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
                                className="flex items-center gap-2 px-4 py-3 rounded-xl font-montserrat font-semibold
 text-base hover:text-purple-400 hover:bg-purple-900/30 transition-all duration-200 shadow-sm"
                            >
                                <span className="text-lg"><Icon /></span>
                                <span className="tracking-wide">{item.label}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    )
}
{/* Custom styles for underline animation */ }
<style jsx>{`
                .group:hover .group-hover\:scale-x-100 {
                    transform: scaleX(1);
                }
            `}</style>
        </>
    );
}
