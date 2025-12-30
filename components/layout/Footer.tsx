import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail, Phone, ArrowRight, Heart, ExternalLink } from 'lucide-react';

const quickLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/project', label: 'The Masjid Project' },
    { href: '/services', label: 'Our Services' },
    { href: '/events', label: 'Events & Lectures' },
    { href: '/contact', label: 'Contact Us' },
];

const socialLinks = [
    { href: 'https://www.youtube.com/@ECWCPalavakkam', label: 'YouTube', icon: '▶' },
    { href: 'https://wa.me/919876543210', label: 'WhatsApp', icon: '💬' },
];

export function Footer() {
    return (
        <footer className="w-full bg-gradient-to-b from-primary via-primary to-primary/90 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
            
            {/* Main Footer Content */}
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
                <div className="grid gap-10 md:gap-12 md:grid-cols-2 lg:grid-cols-4">
                    
                    {/* Brand Column */}
                    <div className="lg:col-span-1 space-y-6">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative w-12 h-12 bg-white/10 rounded-xl p-2 group-hover:bg-white/20 transition-colors">
                                <Image
                                    src="/logo/ecwc_logo.png"
                                    alt="ECWC Logo"
                                    fill
                                    className="object-contain p-1"
                                />
                            </div>
                            <div>
                                <span className="text-xl font-bold text-white">ECWC</span>
                                <p className="text-xs text-slate-400">Palavakkam, Chennai</p>
                            </div>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            East Coast Community & Welfare Centre — Building a Beacon of Guidance on the ECR.
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl flex items-center justify-center text-lg transition-all duration-300 hover:-translate-y-1"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-5">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link 
                                        href={link.href}
                                        className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
                                    >
                                        <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                        <span>{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-5">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="p-2 bg-white/5 rounded-lg shrink-0">
                                    <MapPin className="w-4 h-4 text-secondary" />
                                </div>
                                <div className="text-sm text-slate-400">
                                    ECR Road, Palavakkam,<br />
                                    Chennai - 600041
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="p-2 bg-white/5 rounded-lg shrink-0">
                                    <Mail className="w-4 h-4 text-secondary" />
                                </div>
                                <a href="mailto:info@ecwc.in" className="text-sm text-slate-400 hover:text-white transition-colors">
                                    info@ecwc.in
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="p-2 bg-white/5 rounded-lg shrink-0">
                                    <Phone className="w-4 h-4 text-secondary" />
                                </div>
                                <a href="tel:+919876543210" className="text-sm text-slate-400 hover:text-white transition-colors">
                                    +91 98765 43210
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Mission Statement */}
                    <div className="space-y-5">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-white">Our Mission</h4>
                        <blockquote className="relative">
                            <div className="absolute -left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary to-secondary/30 rounded-full" />
                            <p className="text-slate-400 text-sm italic leading-relaxed pl-4">
                                "Firmly grounded in the Qur'an and Sunnah upon the understanding of the Salaf as-Sāliḥ."
                            </p>
                        </blockquote>
                        <a
                            href="https://www.ahlehadeestnpy.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs text-slate-500 hover:text-secondary transition-colors"
                        >
                            <span>Affiliated with Jamiat Ahle Hadees</span>
                            <ExternalLink className="w-3 h-3" />
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-white/10">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                        <p>© {new Date().getFullYear()} ECWC. All rights reserved.</p>
                        <p className="flex items-center gap-1">
                            Built with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> for the Ummah
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
