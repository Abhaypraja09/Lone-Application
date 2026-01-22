"use client";

import { useState, useEffect } from "react";
import { fetchAdminMessages, deleteAdminMessage, adminLogin, adminLogout } from "../admin-actions";
import { Message } from "@/lib/data";
import { Trash2, Loader2, LogOut, Lock, LayoutDashboard, User, Phone, Briefcase, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminPage() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState("");

    useEffect(() => {
        loadMessages();
    }, [isLoggedIn]);

    const loadMessages = async () => {
        if (!isLoggedIn) {
            setIsLoading(false);
            return;
        }
        setIsLoading(true);
        try {
            const data = await fetchAdminMessages();
            setMessages(data.reverse()); // Show newest first
        } catch (err) {
            setIsLoggedIn(false);
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await adminLogin(password);
        if (res.success) {
            setIsLoggedIn(true);
            setLoginError("");
        } else {
            setLoginError(res.error || "Login failed");
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this message?")) return;
        await deleteAdminMessage(id);
        setMessages(messages.filter(m => m.id !== id));
    };

    const handleLogout = async () => {
        await adminLogout();
        setIsLoggedIn(false);
        window.location.href = "/"; // Instant redirection to home page
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center">
                <Loader2 className="animate-spin text-primary" size={40} />
            </div>
        );
    }

    if (!isLoggedIn) {
        return (
            <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-12 shadow-2xl"
                >
                    <div className="text-center space-y-4 mb-10">
                        <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto">
                            <Lock size={40} />
                        </div>
                        <h1 className="text-3xl font-black text-slate-900 tracking-tighter">Admin Portal</h1>
                        <p className="text-slate-500 font-medium">Please enter your password to continue</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-200 focus:border-primary rounded-xl px-5 py-4 text-slate-900 font-bold outline-none transition-all"
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        {loginError && (
                            <p className="text-red-500 text-sm font-bold text-center bg-red-50 py-3 rounded-lg border border-red-100">{loginError}</p>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-primary text-white py-4 rounded-xl font-black text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/20"
                        >
                            Unlock Dashboard
                        </button>
                    </form>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Sidebar */}
            <div className="hidden lg:flex w-80 bg-white border-r border-slate-200 flex-col p-8 space-y-10">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/30">
                        <LayoutDashboard size={24} />
                    </div>
                    <div>
                        <h2 className="text-xl font-black text-slate-900 tracking-tighter">Catalyst</h2>
                        <p className="text-[10px] uppercase tracking-widest font-black text-primary">Admin Panel</p>
                    </div>
                </div>

                <nav className="flex-1 space-y-2">
                    <button className="w-full flex items-center gap-4 px-6 py-4 bg-primary/5 text-primary rounded-2xl font-black text-sm uppercase tracking-widest transition-all">
                        <User size={18} />
                        Inquiries
                    </button>
                </nav>

                <button
                    onClick={handleLogout}
                    className="flex items-center gap-4 px-6 py-4 text-red-500 hover:bg-red-50 rounded-2xl font-black text-sm uppercase tracking-widest transition-all"
                >
                    <LogOut size={18} />
                    Sign Out
                </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col h-screen overflow-hidden">
                <header className="h-24 bg-white border-b border-slate-200 flex items-center justify-between px-8 sm:px-12 flex-shrink-0">
                    <div className="flex items-center gap-4 lg:hidden">
                        <h2 className="text-xl font-black text-slate-900 tracking-tighter">Dashboard</h2>
                    </div>
                    <div className="hidden lg:block">
                        <h2 className="text-2xl font-black text-slate-900 tracking-tighter">New Inquiries</h2>
                        <p className="text-xs text-slate-500 font-medium">Manage your loan and insurance applications</p>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="h-10 w-px bg-slate-200 hidden sm:block"></div>
                        <button onClick={handleLogout} className="lg:hidden text-slate-500"><LogOut size={24} /></button>
                        <div className="flex items-center gap-3">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-black text-slate-900">Admin</p>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Administrator</p>
                            </div>
                            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 font-black">A</div>
                        </div>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto p-4 sm:p-8 lg:p-12">
                    <div className="max-w-6xl mx-auto space-y-8">
                        {messages.length === 0 ? (
                            <div className="bg-white rounded-3xl border border-slate-200 p-20 flex flex-col items-center text-center space-y-4">
                                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-300">
                                    <User size={40} />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 tracking-tighter">No Inquiries Yet</h3>
                                <p className="text-slate-500 font-medium max-w-sm">When users fill out the contact form, their details will appear here.</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 gap-6">
                                <AnimatePresence mode="popLayout">
                                    {messages.map((msg) => (
                                        <motion.div
                                            key={msg.id}
                                            layout
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            className="group bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 hover:shadow-xl hover:shadow-slate-200/50 transition-all"
                                        >
                                            <div className="flex flex-col md:flex-row justify-between gap-6">
                                                <div className="space-y-6 flex-1">
                                                    <div className="flex flex-wrap items-center gap-3">
                                                        <span className="px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-full">
                                                            {msg.service}
                                                        </span>
                                                        <span className="flex items-center gap-2 text-slate-400 text-xs font-bold">
                                                            <Calendar size={14} />
                                                            {new Date(msg.createdAt).toLocaleDateString('en-IN', {
                                                                day: 'numeric',
                                                                month: 'short',
                                                                year: 'numeric',
                                                                hour: '2-digit',
                                                                minute: '2-digit'
                                                            })}
                                                        </span>
                                                    </div>

                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                        <div className="space-y-1">
                                                            <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest">Client Name</p>
                                                            <p className="text-lg font-black text-slate-900 flex items-center gap-2">
                                                                <User size={18} className="text-primary" />
                                                                {msg.name}
                                                            </p>
                                                        </div>
                                                        <div className="space-y-1">
                                                            <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest">Phone Number</p>
                                                            <a href={`tel:${msg.mobile}`} className="text-lg font-black text-slate-900 hover:text-primary transition-colors flex items-center gap-2">
                                                                <Phone size={18} className="text-primary" />
                                                                {msg.mobile}
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div className="space-y-2">
                                                        <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest">Message / Requirements</p>
                                                        <div className="bg-slate-50 rounded-2xl p-4 text-slate-700 font-medium leading-relaxed border border-slate-100">
                                                            {msg.message || "No message provided."}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex md:flex-col justify-end gap-3 flex-shrink-0">
                                                    <button
                                                        onClick={() => handleDelete(msg.id)}
                                                        className="h-12 w-12 sm:h-14 sm:w-14 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center hover:bg-red-500 hover:text-white transition-all shadow-sm"
                                                        title="Delete Inquiry"
                                                    >
                                                        <Trash2 size={24} />
                                                    </button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
}
