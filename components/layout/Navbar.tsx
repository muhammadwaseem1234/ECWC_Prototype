'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils'; // Assuming you have a cn utility

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
                <div className="w-full max-w-5xl bg-white/90 backdrop-blur-md border border-white/20 shadow-xl shadow-black/5 rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300">

                    {/* Logo Area */}
                    <Link href="/" className="flex items-center gap-2 group" aria-label="ECWC Home">
                        <div className="h-9 w-9 bg-primary text-white rounded-full flex items-center justify-center font-black text-lg shadow-sm group-hover:scale-105 transition-transform">
                            E
                        </div>
                        <span className="text-xl font-bold tracking-tight text-slate-800 group-hover:text-primary transition-colors">ECWC</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1 bg-slate-100/50 p-1 rounded-full border border-slate-200/50">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/project">Project</NavLink>
                        <NavLink href="/services">Services</NavLink>
                        <NavLink href="/events">Events</NavLink>
                        <NavLink href="/contact">Contact</NavLink>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        {/* <Link href="/contact" className="text-sm font-semibold text-slate-600 hover:text-primary">Contact</Link> */}
                        <Link href="/project">
                            <Button className="rounded-full bg-secondary hover:bg-secondary/90 text-primary-950 font-bold px-6 shadow-md shadow-secondary/20 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                                Donate
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-slate-600 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 animate-in fade-in slide-in-from-bottom-10 duration-200">
                    <div className="flex flex-col items-center space-y-6 text-center">
                        <Link href="/" className="text-3xl font-bold text-slate-900" onClick={() => setIsOpen(false)}>Home</Link>
                        <Link href="/project" className="text-3xl font-bold text-slate-900" onClick={() => setIsOpen(false)}>The Project</Link>
                        <Link href="/services" className="text-3xl font-bold text-slate-900" onClick={() => setIsOpen(false)}>Services</Link>
                        <Link href="/events" className="text-3xl font-bold text-slate-900" onClick={() => setIsOpen(false)}>Events</Link>
                        <Link href="/contact" className="text-3xl font-bold text-slate-900" onClick={() => setIsOpen(false)}>Contact</Link>
                        <Link href="/project" className="w-full mt-4" onClick={() => setIsOpen(false)}>
                            <Button size="lg" className="rounded-full bg-secondary text-primary-950 font-bold px-8 text-xl w-full">
                                Donate Now
                            </Button>
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link href={href} className="px-5 py-2 text-sm font-medium text-slate-600 hover:text-primary-900 hover:bg-white rounded-full transition-all duration-300">
            {children}
        </Link>
    )
}
