"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Loader2, CheckCircle2, ShieldQuestion } from "lucide-react";
import { sendEmail } from "../actions";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const formData = new FormData(e.currentTarget);

        try {
            const result = await sendEmail(formData);
            if (result.success) {
                setIsSuccess(true);
                (e.target as HTMLFormElement).reset();
            } else {
                setError(result.error || "Failed to send message. Please call us.");
            }
        } catch (err) {
            setError("An unexpected error occurred. Please call +91 7737660232.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-slate-50 pt-24 pb-16">
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-3xl"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                        <span className="text-[10px] font-black tracking-[0.3em] uppercase text-primary">Get In Touch</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6">
                        Connect with <br />
                        Our Experts.
                    </h1>
                    <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-xl">
                        Have a question about loans or insurance? Fill out the form or reach us via phone or email. We respond within 24 hours.
                    </p>
                </motion.div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Cards - Simplified */}
                    <div className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                                whileHover={{ y: -2 }}
                                className="p-6 bg-white rounded-2xl border border-slate-100 space-y-4 hover:shadow-md transition-shadow"
                            >
                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-1">Speak to Us</p>
                                    <a href="tel:7737660232" className="text-xl font-black text-slate-900 hover:text-primary transition-colors block">+91 7737660232</a>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -2 }}
                                className="p-6 bg-white rounded-2xl border border-slate-100 space-y-4 hover:shadow-md transition-shadow"
                            >
                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-1">Email Address</p>
                                    <a href="mailto:scatalystfinancial@gmail.com" className="text-lg font-semibold text-slate-900 hover:text-primary transition-colors break-all">scatalystfinancial@gmail.com</a>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            whileHover={{ y: -2 }}
                            className="p-8 bg-white rounded-2xl border border-slate-100 space-y-6 flex flex-col md:flex-row md:items-center justify-between hover:shadow-md transition-shadow"
                        >
                            <div className="space-y-4">
                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-1">Corporate Office</p>
                                    <address className="not-italic text-xl font-black text-slate-900 leading-tight">
                                        LG18, Manglam Fun Square,<br />
                                        Durganursery, Udaipur – 313001
                                    </address>
                                    <p className="mt-2 text-primary font-bold text-xs tracking-wide uppercase">Rajasthan, India</p>
                                </div>
                            </div>
                            {/* Simplified Map Embed */}
                            <div className="w-full md:w-56 h-40 bg-white rounded-lg overflow-hidden border border-slate-100 mt-4 md:mt-0">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.234567890123!2d73.7095466!3d24.5844708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e8f1f1f1f1f1%3A0x1f1f1f1f1f1f1f1f!2sMangalam%20Fun%20Square!5e0!3m2!1sen!2sin!4v1720000000000"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Mangalam Fun Square Location"
                                />
                            </div>
                        </motion.div>

                        {/* Simplified Expert Help Card */}
                        <div className="bg-primary text-white rounded-2xl p-8 flex items-center gap-6 hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                                <ShieldQuestion size={32} />
                            </div>
                            <div>
                                <h4 className="text-xl font-black">Need expert help?</h4>
                                <p className="text-white/80 font-medium">Get a personalized consultation for complex loan structures.</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form - Simplified */}
                    <div className="p-8 bg-white rounded-2xl border border-slate-100 relative shadow-sm">
                        {isSuccess ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center justify-center h-96 space-y-6 text-center py-10"
                            >
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                    <CheckCircle2 size={48} />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-3xl font-black text-slate-900">Successfully Sent!</h3>
                                    <p className="text-slate-600 font-medium max-w-xs mx-auto text-base leading-relaxed">
                                        Thank you. Our experts will analyze your request and contact you within 24 hours.
                                    </p>
                                </div>
                                <button
                                    onClick={() => setIsSuccess(false)}
                                    className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold text-sm uppercase hover:bg-slate-800 transition-colors"
                                >
                                    Send Another Message
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="space-y-1">
                                    <h3 className="text-2xl font-black text-slate-900">Query Details</h3>
                                    <p className="text-slate-500 font-bold uppercase text-xs tracking-wide">Fill all required fields</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wide ml-1">Your Full Name</label>
                                        <input
                                            name="name"
                                            required
                                            className="w-full bg-slate-50 border border-slate-200 focus:border-primary focus:bg-white rounded-xl px-4 py-3 text-slate-900 font-semibold outline-none transition-all"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wide ml-1">Mobile Contact</label>
                                        <input
                                            name="mobile"
                                            required
                                            type="tel"
                                            className="w-full bg-slate-50 border border-slate-200 focus:border-primary focus:bg-white rounded-xl px-4 py-3 text-slate-900 font-semibold outline-none transition-all"
                                            placeholder="+91 0000 000 000"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wide ml-1">Financial Service Type</label>
                                    <select
                                        name="service"
                                        required
                                        className="w-full bg-slate-50 border border-slate-200 focus:border-primary focus:bg-white rounded-xl px-4 py-3 text-slate-900 font-semibold outline-none transition-all"
                                    >
                                        <option value="">Select a Financial Product...</option>
                                        <option value="Home Loan">Home Loan & Mortgage</option>
                                        <option value="Business Loan">Business Financing</option>
                                        <option value="Personal Loan">Personal Loan</option>
                                        <option value="Insurance">Insurance Policies</option>
                                        <option value="Other">Custom Requirements</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wide ml-1">Specific Requirements (Optional)</label>
                                    <textarea
                                        name="message"
                                        rows={3}
                                        className="w-full bg-slate-50 border border-slate-200 focus:border-primary focus:bg-white rounded-xl px-4 py-3 text-slate-900 font-semibold outline-none transition-all resize-none"
                                        placeholder="Briefly describe your situation..."
                                    ></textarea>
                                </div>

                                {error && (
                                    <motion.div
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="text-red-600 text-sm font-semibold bg-red-50 p-4 rounded-xl border border-red-200 flex items-center gap-2"
                                    >
                                        <ShieldQuestion size={16} className="rotate-180" />
                                        {error}
                                    </motion.div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-primary text-white py-4 rounded-xl font-black text-lg hover:scale-105 disabled:opacity-50 transition-all flex items-center justify-center gap-3"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="animate-spin" size={20} />
                                            SUBMITTING...
                                        </>
                                    ) : (
                                        <>
                                            SUBMIT ENQUIRY
                                            <Send size={20} />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}