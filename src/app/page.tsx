"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  User,
  Settings,
  ShieldCheck,
  LayoutDashboard,
  Truck,
  ArrowRight,
  PieChart,
  TrendingUp,
  Globe,
  Zap,
  CheckCircle2
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { motion } from "framer-motion";

export default function HomePage() {
  const featuredServices = [
    {
      title: "Home Loan & Mortgage",
      description: "Low interest rates for your dream home with fast processing and minimal paperwork.",
      icon: PieChart,
    },
    {
      title: "Business Loan",
      description: "Fuel your business growth with collateral-free financing and flexible repayment terms.",
      icon: Briefcase,
    },
    {
      title: "Personal Loan",
      description: "Quick personal loans for all your immediate financial requirements and lifestyle dreams.",
      icon: User,
    },
    {
      title: "Machinery Purchase",
      description: "Specialized loans for industrial machinery and advanced equipment to scale production.",
      icon: Settings,
    },
    {
      title: "Overdraft / Cash Credit",
      description: "Flexible working capital to manage your business cash flow and operational expenses.",
      icon: LayoutDashboard,
    },
    {
      title: "Commercial Vehicle",
      description: "Easy financing for trucks, buses, and logistics fleet expansion with competitive rates.",
      icon: Truck,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section - Optimized for all screens */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center pt-24 sm:pt-32 pb-12 overflow-hidden bg-slate-50">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 -left-1/4 w-full h-full bg-primary/5 blur-[120px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-0 -right-1/4 w-full h-full bg-primary/5 blur-[120px] rounded-full animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-6 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-8 md:space-y-10 order-2 lg:order-1 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-[10px] uppercase font-black tracking-[0.2em] mx-auto lg:mx-0">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Trusted Partner in Udaipur
              </div>

              <h1 className="text-5xl sm:text-7xl lg:text-[100px] font-black leading-[0.85] tracking-tight text-slate-900">
                Finance <br />
                <span className="text-primary italic">Made</span> <br />
                Simple.
              </h1>

              <p className="text-lg sm:text-xl text-slate-500 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
                Expert solutions for your Home, Business, and Personal financial needs. Premium consultancy for Udaipur residents.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <Link href="/contact" className="group w-full sm:w-auto relative px-8 py-4 bg-primary text-white rounded-2xl font-black text-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/20 flex items-center justify-center gap-3">
                  Start Now
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/services" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-black text-lg transition-all hover:bg-slate-50 flex items-center justify-center">
                  View Services
                </Link>
              </div>

              {/* Responsive Stats */}
              <div className="pt-8 md:pt-12 grid grid-cols-3 gap-4 md:gap-12">
                {[
                  { label: "Loan Managed", value: "₹250Cr+" },
                  { label: "Happy Clients", value: "5k+" },
                  { label: "Years Experience", value: "15+" }
                ].map((stat, i) => (
                  <div key={i} className="space-y-1">
                    <p className="text-xl sm:text-3xl font-black text-slate-900 tracking-tighter">{stat.value}</p>
                    <p className="text-[8px] sm:text-[10px] uppercase tracking-widest text-slate-400 font-bold">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Visual Column - Visible on all screens but smaller on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-5 relative order-1 lg:order-2"
            >
              <div className="relative z-20 max-w-[280px] sm:max-w-[400px] lg:max-w-none mx-auto">
                <div className="bg-white overflow-hidden rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-12 flex items-center justify-center relative w-full aspect-square shadow-2xl group">
                  <div className="relative w-full h-full flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                    <Image
                      src="/images/logo.jpg"
                      alt="Catalyst Financial Services"
                      width={400}
                      height={400}
                      className="object-contain relative z-10 w-full h-full"
                      priority
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent"></div>
                </div>

                {/* Floating Badges - Hidden on small mobile */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 md:-top-10 md:-right-10 p-3 md:p-6 bg-white shadow-xl rounded-xl hidden sm:block"
                >
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-primary/10 rounded-lg md:rounded-xl flex items-center justify-center text-primary">
                      <TrendingUp size={20} className="md:size-24" />
                    </div>
                    <div>
                      <p className="text-[8px] md:text-[10px] uppercase tracking-widest text-slate-400 font-bold">Best ROI</p>
                      <p className="text-sm md:text-lg font-black text-slate-900">Starts @ 8.4%</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-12 p-3 md:p-6 bg-primary text-white shadow-xl rounded-xl hidden sm:block"
                >
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-white/20 rounded-lg md:rounded-xl flex items-center justify-center">
                      <ShieldCheck size={20} className="md:size-24" />
                    </div>
                    <div>
                      <p className="text-[8px] md:text-[10px] uppercase tracking-widest opacity-70 font-bold">Secure</p>
                      <p className="text-sm md:text-lg font-black">100% Verified</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Expertise Section - Liquid Layout */}
      <section className="py-24 sm:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 sm:mb-24 gap-8">
            <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
              <h2 className="text-primary font-black tracking-[0.4em] uppercase text-[10px] sm:text-xs">Our Expertise</h2>
              <h3 className="text-5xl sm:text-6xl lg:text-8xl font-black text-slate-900 tracking-tight leading-none">
                Tailored <br /> Solutions.
              </h3>
            </div>
            <p className="text-lg sm:text-xl text-slate-500 max-w-md font-medium leading-relaxed text-center lg:text-left">
              We provide comprehensive financial assistance to turn your aspirations into reality with speed and precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Ultra Responsive */}
      <section className="bg-slate-900 py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-12 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
          <div className="space-y-10 sm:space-y-12 order-2 lg:order-1 text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[0.9]">
              Future <br /> <span className="text-primary italic">Focused</span> <br /> Finance.
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:gap-8 max-w-md mx-auto lg:mx-0">
              {[
                { title: "Instant Approval", desc: "No long waiting times for your needs.", icon: Zap },
                { title: "Transparent Process", desc: "Zero hidden charges, pure trust.", icon: ShieldCheck },
                { title: "Local Presence", desc: "Expert support here in Udaipur.", icon: Globe }
              ].map((point) => (
                <div key={point.title} className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start text-center sm:text-left">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center text-primary flex-shrink-0">
                    <point.icon size={24} className="sm:size-28" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg sm:text-xl font-bold text-white uppercase tracking-tight">{point.title}</h4>
                    <p className="text-slate-400 font-medium text-sm sm:text-base leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 p-6 sm:p-12 bg-white/5 backdrop-blur-xl relative rounded-[2rem] border border-white/10">
            <div className="space-y-8 sm:space-y-10 relative z-10 text-white text-center">
              <h4 className="text-3xl sm:text-4xl font-black tracking-tight">Ready to Scale?</h4>
              <div className="flex flex-col gap-4 sm:gap-5">
                <Link
                  href="/contact"
                  className="bg-primary text-white py-5 sm:py-6 rounded-2xl font-black text-lg sm:text-xl hover:scale-[1.02] transition-all shadow-xl shadow-primary/20 active:scale-95 flex items-center justify-center gap-3"
                >
                  Start Now
                  <ArrowRight size={20} />
                </Link>
                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-white/10"></div>
                  <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.5em]">Direct Line</span>
                  <div className="h-px flex-1 bg-white/10"></div>
                </div>
                <a
                  href="tel:7737660232"
                  className="text-white bg-white/5 py-5 sm:py-6 rounded-2xl font-black text-lg sm:text-xl hover:bg-white/10 border border-white/5 transition-all text-center"
                >
                  +91 7737660232
                </a>
              </div>
              <div className="flex items-center justify-center gap-2 text-primary">
                <CheckCircle2 size={16} />
                <span className="text-[10px] font-black uppercase tracking-widest">Udaipur HO: Available 10AM - 7PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}