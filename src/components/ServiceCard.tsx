"use client";
import { LucideIcon, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    href?: string;
}

const ServiceCard = ({ title, description, icon: Icon, href = "/contact" }: ServiceCardProps) => {
    return (
        <motion.div
            whileHover={{ y: -8, boxShadow: "0 30px 60px -12px rgba(0,0,0,0.12)" }}
            className="bento-card p-10 group relative overflow-hidden bg-white"
        >
            {/* Hover Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all transform duration-500 group-hover:-rotate-6 ring-4 ring-transparent group-hover:ring-primary/10">
                <Icon size={32} className="text-primary group-hover:text-white transition-colors duration-500" />
            </div>

            <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight uppercase leading-tight group-hover:text-primary transition-colors">
                {title}
            </h3>

            <p className="text-slate-500 leading-relaxed mb-8 font-medium">
                {description}
            </p>

            <Link
                href={href}
                className="inline-flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest hover:gap-4 transition-all duration-300"
            >
                Start Exploration
                <ArrowRight size={16} />
            </Link>
        </motion.div>
    );
};

export default ServiceCard;
