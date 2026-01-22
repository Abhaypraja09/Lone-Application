import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, BadgeCheck, Copyright } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-12 sm:pb-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 lg:gap-12">
                    {/* Brand Section */}
                    <div className="space-y-6 sm:space-y-8 text-center sm:text-left flex flex-col items-center sm:items-start">
                        <Link href="/" className="inline-block transition-transform hover:scale-105">
                            <Image
                                src="/images/logo.jpg"
                                alt="Catalyst Financial Services logo"
                                width={160}
                                height={50}
                                className="object-contain"
                            />
                        </Link>
                        <p className="text-slate-500 text-sm leading-relaxed max-w-xs font-medium">
                            Udaipur's premier financial consultancy. Empowering growth through specialized loan solutions and comprehensive insurance planning.
                        </p>
                        <div className="inline-flex items-center gap-3 text-primary font-black text-[10px] uppercase tracking-widest bg-primary/5 px-4 py-2 rounded-xl border border-primary/10">
                            <BadgeCheck size={16} />
                            Verified Finance Partner
                        </div>
                    </div>

                    {/* Quick Access */}
                    <div className="text-center sm:text-left">
                        <h4 className="text-slate-900 font-black text-xs uppercase tracking-[0.2em] mb-6 sm:mb-8">Navigation</h4>
                        <ul className="space-y-4">
                            {['Home', 'Services', 'Contact', 'Get a Quote'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={item === 'Home' ? '/' : item === 'Get a Quote' ? '/contact' : `/${item.toLowerCase()}`}
                                        className="text-slate-500 hover:text-primary text-sm font-bold flex items-center justify-center sm:justify-start gap-2 group transition-all"
                                    >
                                        <div className="w-1 h-1 bg-slate-200 rounded-full group-hover:w-3 group-hover:bg-primary transition-all duration-300"></div>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Solutions */}
                    <div className="text-center sm:text-left">
                        <h4 className="text-slate-900 font-black text-xs uppercase tracking-[0.2em] mb-6 sm:mb-8">Specializations</h4>
                        <ul className="space-y-4">
                            {[
                                "Home Loan & Mortgage",
                                "Business Growth",
                                "Personal Needs",
                                "Machinery Finance",
                                "Life Insurance"
                            ].map((service) => (
                                <li key={service} className="text-slate-500 text-sm font-bold flex items-center justify-center sm:justify-start gap-3">
                                    <div className="w-1 h-1 bg-primary/40 rounded-full"></div>
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact - High Trust */}
                    <div className="space-y-6 sm:space-y-8 text-center sm:text-left flex flex-col items-center sm:items-start">
                        <h4 className="text-slate-900 font-black text-xs uppercase tracking-[0.2em] mb-2 sm:mb-0">Connect</h4>
                        <div className="space-y-6 w-full">
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                                <div className="w-10 h-10 shrink-0 bg-slate-50 rounded-xl flex items-center justify-center text-primary border border-slate-100">
                                    <MapPin size={20} />
                                </div>
                                <address className="not-italic text-sm text-slate-500 leading-snug font-bold">
                                    LG18, Manglam Fun Square,<br />
                                    Durganursery, Udaipur – 313001
                                </address>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 group">
                                <div className="w-10 h-10 shrink-0 bg-slate-50 rounded-xl flex items-center justify-center text-primary border border-slate-100 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <Phone size={18} />
                                </div>
                                <a href="tel:7737660232" className="text-base font-black text-slate-900 hover:text-primary transition-colors">
                                    +91 7737660232
                                </a>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 group">
                                <div className="w-10 h-10 shrink-0 bg-slate-50 rounded-xl flex items-center justify-center text-primary border border-slate-100 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <Mail size={18} />
                                </div>
                                <a href="mailto:scatalystfinancial@gmail.com" className="text-sm font-bold text-slate-500 hover:text-primary transition-colors truncate max-w-full px-4 sm:px-0">
                                    scatalystfinancial@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Absolute Bottom Signature Section */}
            <div className="bg-slate-50 py-8 sm:py-16 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-center space-y-8 sm:space-y-10">

                        {/* 1. Global Metadata Row */}
                        <div className="flex flex-col items-center space-y-6">
                            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 text-center">
                                <p className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-[0.3em] flex items-center justify-center gap-2">
                                    <Copyright size={14} className="text-primary" />
                                    2025 Catalyst Financial Services. All Rights Reserved.
                                </p>

                                <div className="hidden md:block w-px h-1 bg-slate-200"></div>

                                <div className="flex items-center gap-4 sm:gap-8">
                                    <Link href="/privacy" className="text-[10px] md:text-xs font-black text-slate-400 hover:text-primary transition-colors uppercase tracking-[0.2em]">
                                        Privacy
                                    </Link>
                                    <div className="w-1 h-1 bg-slate-200 rounded-full"></div>
                                    <Link href="/terms" className="text-[10px] md:text-xs font-black text-slate-400 hover:text-primary transition-colors uppercase tracking-[0.2em]">
                                        Terms
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* 2. Absolute Bottom Signature */}
                        <div className="pt-8 border-t border-slate-200/60 w-full flex flex-col items-center gap-6">
                            <Link
                                href="https://vybtek.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col sm:flex-row items-center gap-3 transition-all duration-500 group"
                            >
                                <span className="text-[11px] font-bold text-slate-400 tracking-wider group-hover:text-primary transition-colors">Created By :-</span>
                                <div className="flex items-center gap-3">
                                    <Image
                                        src="/images/logo.png"
                                        alt="VybTek"
                                        width={20}
                                        height={20}
                                        className="object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                                    />
                                    <span className="text-lg sm:text-xl font-black text-slate-900 transition-colors tracking-tighter group-hover:text-primary">
                                        VybTek IT Solutions
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
