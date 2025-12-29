'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/project', label: 'Project' },
    { href: '/services', label: 'Services' },
    { href: '/events', label: 'Events' },
    { href: '/contact', label: 'Contact' },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <>
            <nav className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                scrolled ? "py-2" : "py-4"
            )}>
                <div className="container mx-auto px-4">
                    <div className={cn(
                        "flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500",
                        scrolled 
                            ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-slate-900/5 border border-slate-200/50" 
                            : "bg-white/80 backdrop-blur-md border border-white/20 shadow-xl shadow-black/5"
                    )}>
                        {/* Logo Area */}
                        <Link href="/" className="flex items-center gap-3 group" aria-label="ECWC Home">
                            <div className={cn(
                                "relative transition-all duration-300",
                                scrolled ? "w-9 h-9" : "w-10 h-10"
                            )}>
                                <Image
                                    src="/logo/ecwc_logo.png"
                                    alt="ECWC Logo"
                                    fill
                                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                                    priority
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-800 group-hover:text-primary transition-colors duration-300 hidden sm:block">
                                    East Coast Community & Welfare Centre
                                </span>
                                <span className="text-lg font-bold tracking-tight text-slate-800 group-hover:text-primary transition-colors duration-300 sm:hidden">
                                    ECWC
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden lg:flex items-center">
                            <div className="flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-xl border border-slate-200/50">
                                {navLinks.map((link) => (
                                    <Link 
                                        key={link.href}
                                        href={link.href} 
                                        className={cn(
                                            "px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300",
                                            pathname === link.href
                                                ? "bg-white text-primary shadow-sm"
                                                : "text-slate-600 hover:text-primary hover:bg-white/50"
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden lg:flex items-center gap-4">
                            <Link href="/project">
                                <Button className="rounded-xl bg-gradient-to-r from-secondary to-amber-500 hover:from-secondary/90 hover:to-amber-500/90 text-white font-bold px-6 shadow-lg shadow-secondary/25 hover:shadow-xl hover:shadow-secondary/30 hover:-translate-y-0.5 transition-all duration-300 btn-shine">
                                    Donate Now
                                </Button>
                            </Link>

                            <a
                                href="https://www.ahlehadeestnpy.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative w-10 h-10 hover:scale-105 transition-transform duration-300 rounded-full overflow-hidden border-2 border-slate-200 hover:border-secondary"
                                aria-label="Visit Jamiat Ahle Hadees Website"
                            >
                                <Image
                                    src="/logo/jahtnp_logo.png"
                                    alt="Jamiat Ahle Hadees Logo"
                                    fill
                                    className="object-contain p-0.5"
                                />
                            </a>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden p-2.5 text-slate-600 bg-slate-100 rounded-xl hover:bg-slate-200 hover:text-primary transition-all duration-300 active:scale-95"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                            aria-expanded={isOpen}
                        >
                            <div className="relative w-5 h-5">
                                <span className={cn(
                                    "absolute left-0 block h-0.5 w-5 bg-current transform transition-all duration-300",
                                    isOpen ? "top-2.5 rotate-45" : "top-1"
                                )} />
                                <span className={cn(
                                    "absolute left-0 top-2.5 block h-0.5 w-5 bg-current transition-all duration-300",
                                    isOpen ? "opacity-0 scale-0" : "opacity-100"
                                )} />
                                <span className={cn(
                                    "absolute left-0 block h-0.5 w-5 bg-current transform transition-all duration-300",
                                    isOpen ? "top-2.5 -rotate-45" : "top-4"
                                )} />
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={cn(
                "fixed inset-0 z-40 lg:hidden transition-all duration-500",
                isOpen ? "visible" : "invisible"
            )}>
                {/* Backdrop */}
                <div 
                    className={cn(
                        "absolute inset-0 bg-slate-900/20 backdrop-blur-sm transition-opacity duration-500",
                        isOpen ? "opacity-100" : "opacity-0"
                    )}
                    onClick={() => setIsOpen(false)}
                />

                {/* Menu Panel */}
                <div className={cn(
                    "absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}>
                    <div className="flex flex-col h-full">
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-slate-100">
                            <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                                <div className="relative w-10 h-10">
                                    <Image
                                        src="/logo/ecwc_logo.png"
                                        alt="ECWC Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <span className="text-lg font-bold text-slate-800">ECWC</span>
                            </Link>
                            <button
                                className="p-2 text-slate-600 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors"
                                onClick={() => setIsOpen(false)}
                                aria-label="Close menu"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <nav className="flex-1 overflow-y-auto py-6 px-4">
                            <div className="space-y-2">
                                {navLinks.map((link, index) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={cn(
                                            "flex items-center justify-between px-4 py-4 rounded-xl font-semibold transition-all duration-300",
                                            pathname === link.href
                                                ? "bg-primary/5 text-primary border border-primary/10"
                                                : "text-slate-700 hover:bg-slate-50 hover:text-primary"
                                        )}
                                        onClick={() => setIsOpen(false)}
                                        style={{ 
                                            animationDelay: `${index * 50}ms`,
                                            animation: isOpen ? 'slideInRight 0.3s ease forwards' : 'none'
                                        }}
                                    >
                                        <span className="text-lg">{link.label}</span>
                                        <ChevronRight className={cn(
                                            "w-5 h-5 transition-transform",
                                            pathname === link.href ? "text-primary" : "text-slate-400"
                                        )} />
                                    </Link>
                                ))}
                            </div>
                        </nav>

                        {/* Footer CTA */}
                        <div className="p-6 border-t border-slate-100 space-y-4 bg-slate-50">
                            <Link href="/project" className="block" onClick={() => setIsOpen(false)}>
                                <Button className="w-full rounded-xl bg-gradient-to-r from-secondary to-amber-500 text-white font-bold h-14 text-lg shadow-lg shadow-secondary/25">
                                    Donate Now
                                </Button>
                            </Link>
                            <p className="text-center text-sm text-slate-500">
                                Support the Masjid construction
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            `}</style>
        </>
    );
}
