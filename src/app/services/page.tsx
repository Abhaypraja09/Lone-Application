"use client";

import { motion } from "framer-motion";
import {
    PieChart,
    Briefcase,
    User,
    Settings,
    LayoutDashboard,
    Truck,
    HeartPulse,
    HardHat,
    BadgePercent,
    Calculator,
    ShieldCheck,
    TrendingUp,
    ArrowRight
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";

const allServices = [
    {
        title: "Home Loan & Mortgage",
        description: "Get the best rates for your dream home or unlock value from your property.",
        icon: PieChart,
    },
    {
        title: "Business Loan",
        description: "Scale your business with our flexible financing and quick capital options.",
        icon: Briefcase,
    },
    {
        title: "Personal Loan",
        description: "Tailor-made personal loans for your dreams, travel, or medical needs.",
        icon: User,
    },
    {
        title: "Machinery Purchase",
        description: "Specialized equipment financing to boost your industrial production.",
        icon: Settings,
    },
    {
        title: "Overdraft / Cash Credit",
        description: "Smart working capital solutions to manage your business liquidity.",
        icon: LayoutDashboard,
    },
    {
        title: "Commercial Vehicle",
        description: "Expand your logistics fleet with our easy commercial vehicle loans.",
        icon: Truck,
    },
    {
        title: "Life Insurance",
        description: "Secure the future of your loved ones with comprehensive life coverage.",
        icon: HeartPulse,
    },
    {
        title: "General Insurance",
        description: "Protect your assets, health, and business with our range of insurance plans.",
        icon: ShieldCheck,
    },
    {
        title: "Two/Four Wheeler Loan",
        description: "Easy financing for your next car or bike with minimal documentation.",
        icon: TrendingUp,
    },
    {
        title: "Loan Against Property",
        description: "Unlock the hidden value of your residential or commercial property.",
        icon: BadgePercent,
    },
    {
        title: "Tractor / Agri Loan",
        description: "Dedicated financing for farmers and agriculture-related businesses.",
        icon: HardHat,
    },
    {
        title: "Project Finance",
        description: "Expert funding solutions for large-scale industrial and infrastructure projects.",
        icon: Calculator,
    },
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-slate-50 pt-24 pb-16">
            {/* Header Section - Simplified */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                        <span className="text-[10px] font-black tracking-[0.3em] uppercase text-primary">Our Solutions</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6">
                        Comprehensive <br />
                        Financial Portfolio.
                    </h1>
                    <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-2xl">
                        From basic loans to complex project financing, we bridge the gap between your needs and the best lenders in India.
                    </p>
                </motion.div>
            </section>

            {/* Services Grid - Tightened Spacing */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {allServices.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                            <ServiceCard {...service} />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Simple CTA - Clean Dark Card */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-slate-900 rounded-2xl p-8 lg:p-16 text-center shadow-lg">
                    <div className="space-y-8">
                        <h2 className="text-3xl lg:text-5xl font-black text-white leading-tight">
                            Take the first step <br />
                            <span className="text-primary">Right Now.</span>
                        </h2>
                        <p className="text-slate-300 font-medium text-base max-w-xl mx-auto">
                            Ready to transform your financial status? Our experts are standing by to guide you through every detail.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/contact"
                                className="bg-primary text-white px-10 py-4 rounded-xl font-black text-lg hover:scale-105 transition-all flex items-center gap-3 shadow-lg active:scale-95"
                            >
                                Start Free Application
                                <ArrowRight size={20} />
                            </Link>
                            <a
                                href="tel:7737660232"
                                className="bg-white/10 text-white px-10 py-4 rounded-xl font-black text-lg hover:bg-white/20 transition-all flex items-center gap-3 border border-white/20 active:scale-95"
                            >
                                Call +91 7737660232
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}