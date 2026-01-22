"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "bg-white/90 backdrop-blur-xl py-3 md:py-4 border-b border-slate-200/50 shadow-sm" : "bg-transparent py-5 md:py-8"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Link href="/" className="relative h-10 md:h-12 w-36 md:w-48 transition-all hover:scale-[1.03] active:scale-95">
                        <Image
                            src="/images/logo.jpg"
                            alt="Catalyst Financial Services logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8 lg:gap-12">
                        <div className="flex items-center gap-6 lg:gap-10">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="group relative text-[10px] lg:text-xs font-black uppercase tracking-widest text-slate-500 hover:text-primary transition-all duration-300"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            ))}
                        </div>
                        <Link
                            href="/contact"
                            className="bg-primary text-white ml-2 px-6 lg:px-8 py-3 lg:py-3.5 rounded-xl md:rounded-2xl font-black text-[10px] lg:text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-primary/20 flex items-center gap-2 group active:scale-95"
                        >
                            Apply Quick
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Mobile Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-900 p-2 hover:bg-slate-100 rounded-xl transition-all"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-[-1] transition-opacity duration-300 md:hidden ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu */}
            <div className={`md:hidden bg-white absolute top-full left-0 w-full border-b border-slate-200 py-8 px-6 space-y-6 shadow-2xl transition-all duration-300 ease-in-out origin-top ${isOpen ? "transform scale-y-100 opacity-100" : "transform scale-y-0 opacity-0 pointer-events-none"}`}>
                <div className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="block text-2xl font-black uppercase tracking-tight text-slate-900 py-2 border-b border-slate-50"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="mt-4 block bg-primary text-white text-center py-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
                        onClick={() => setIsOpen(false)}
                    >
                        Apply Now
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
