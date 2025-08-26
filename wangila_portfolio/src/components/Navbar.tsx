"use client";

import { AnimatePresence, motion } from "framer-motion";
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
        <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 14 }}
            className="backdrop-blur-lg bg-gradient-to-br from-[var(--primary-color)] via-purple-900 to-black text-white shadow-2xl fixed w-full z-50 border-b border-purple-900"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="flex-shrink-0 flex items-center gap-2"
                    >
                        <FaGlobe className="text-purple-400 text-2xl animate-spin-slow" />
                        <Link href="/" className="text-2xl font-extrabold tracking-wide hover:text-purple-400 transition-colors font-montserrat">
                            Wangila
                        </Link>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {menuItems.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={item.href}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                                >
                                    <Link
                                        href={item.href}
                                        scroll={true}
                                        className="relative group font-montserrat font-semibold px-4 py-2 flex items-center gap-2 rounded-xl transition-all duration-200 hover:text-purple-400 hover:bg-purple-900/20 shadow-sm"
                                    >
                                        <span className="text-lg"><Icon /></span>
                                        <span className="tracking-wide">{item.label}</span>
                                        <motion.span
                                            layoutId="underline"
                                            className="absolute left-0 -bottom-1 w-full h-0.5 bg-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"
                                        />
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <motion.button
                            whileTap={{ scale: 0.9 }}
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
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ y: -40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -40, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 80, damping: 14 }}
                        className="md:hidden fixed top-16 left-0 w-full bg-gradient-to-r from-[#1A0B2E]/95 via-purple-900/95 to-[#1A0B2E]/95 backdrop-blur-lg shadow-lg z-40"
                    >
                        <div className="px-4 py-4 space-y-2">
                            {menuItems.map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={item.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                                    >
                                        <Link
                                            href={item.href}
                                            scroll={true}
                                            className="flex items-center gap-2 px-4 py-3 rounded-xl font-montserrat font-semibold text-base hover:text-purple-400 hover:bg-purple-900/30 transition-all duration-200 shadow-sm"
                                        >
                                            <span className="text-lg"><Icon /></span>
                                            <span className="tracking-wide">{item.label}</span>
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Custom styles for underline animation and slow spin */}
            <style jsx>{`
                .group:hover .group-hover\:scale-x-100 {
                    transform: scaleX(1);
                }
                .animate-spin-slow {
                    animation: spin 4s linear infinite;
                }
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </motion.nav>
    );
}
