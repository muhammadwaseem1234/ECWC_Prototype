import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight, Send } from "lucide-react";
import { MapWidget } from "@/components/common/MapWidget";
import Link from "next/link";

export default function ContactPage() {
    const contactInfo = [
        {
            icon: MapPin,
            title: "Visit Us",
            details: ["ECWC - East Coast Community & Welfare Centre", "No. 123, ECR Road, Palavakkam", "Chennai - 600041, Tamil Nadu"],
            action: { label: "Get Directions", href: "#map" },
            color: "blue",
        },
        {
            icon: Phone,
            title: "Call Us",
            details: ["+91 98765 43210", "+91 12345 67890"],
            action: { label: "Call Now", href: "tel:+919876543210" },
            color: "emerald",
        },
        {
            icon: Mail,
            title: "Email Us",
            details: ["info@ecwc.in", "admin@ecwc.in"],
            action: { label: "Send Email", href: "mailto:info@ecwc.in" },
            color: "violet",
        },
        {
            icon: Clock,
            title: "Office Hours",
            details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 1:00 PM", "Sunday: Closed (Jumu'ah only)"],
            action: null,
            color: "amber",
        },
    ];

    const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
        blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-100" },
        emerald: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-100" },
        violet: { bg: "bg-violet-50", text: "text-violet-600", border: "border-violet-100" },
        amber: { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-100" },
    };

    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 flex flex-col">
            <div className="fixed inset-0 bg-dot-pattern opacity-30 pointer-events-none -z-10" />
            <Navbar />

            {/* Header */}
            <section className="pt-28 sm:pt-32 lg:pt-36 pb-12 md:pb-16">
                <div className="container px-4 sm:px-6 lg:px-8 mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-semibold text-slate-700 mb-6">
                        <MessageCircle className="w-4 h-4 text-primary" />
                        We'd Love to Hear From You
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-4">
                        Get in Touch
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 leading-relaxed">
                        Have questions? Want to volunteer? We're here to help connect you with our community.
                    </p>
                </div>
            </section>

            {/* Contact Cards */}
            <section className="pb-12 container px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {contactInfo.map((item, index) => {
                        const colors = colorClasses[item.color];
                        return (
                            <Card key={index} className="border border-slate-200/80 shadow-lg shadow-slate-200/30 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group hover:-translate-y-1">
                                <CardContent className="p-6 space-y-4">
                                    <div className={`inline-flex p-3 rounded-xl ${colors.bg} ${colors.border} border`}>
                                        <item.icon className={`w-6 h-6 ${colors.text}`} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <div className="space-y-1">
                                            {item.details.map((detail, idx) => (
                                                <p key={idx} className="text-sm text-slate-600 leading-relaxed">
                                                    {detail}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                    {item.action && (
                                        <a 
                                            href={item.action.href}
                                            className={`inline-flex items-center gap-2 text-sm font-semibold ${colors.text} group-hover:gap-3 transition-all`}
                                        >
                                            {item.action.label}
                                            <ArrowRight className="w-4 h-4" />
                                        </a>
                                    )}
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </section>

            {/* Map & Quick Contact */}
            <section id="map" className="py-12 md:py-16 container px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="grid lg:grid-cols-[1fr_400px] gap-8 lg:gap-12">
                    {/* Map */}
                    <div className="order-2 lg:order-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-8 w-1.5 bg-gradient-to-b from-primary to-secondary rounded-full" />
                            <h2 className="text-2xl font-bold text-slate-900">Find Us</h2>
                        </div>
                        <MapWidget />
                    </div>

                    {/* Quick Contact Card */}
                    <div className="order-1 lg:order-2">
                        <Card className="border border-slate-200/80 shadow-2xl shadow-slate-200/50 rounded-3xl overflow-hidden sticky top-28">
                            <div className="h-1.5 bg-gradient-to-r from-primary to-secondary" />
                            <CardContent className="p-6 sm:p-8 space-y-6">
                                <div className="text-center">
                                    <div className="mx-auto mb-4 p-4 rounded-2xl bg-gradient-to-br from-emerald-50 to-green-50 w-fit">
                                        <Send className="w-8 h-8 text-emerald-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Quick Contact</h3>
                                    <p className="text-sm text-slate-600">
                                        Reach us directly via WhatsApp for the fastest response.
                                    </p>
                                </div>

                                <a
                                    href="https://wa.me/919876543210?text=Assalamu%20Alaikum%2C%20I%20would%20like%20to%20inquire%20about..."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <Button className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-bold h-14 rounded-xl shadow-lg shadow-emerald-200/50 text-base">
                                        <MessageCircle className="w-5 h-5 mr-2" />
                                        Chat on WhatsApp
                                    </Button>
                                </a>

                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-slate-200"></div>
                                    </div>
                                    <div className="relative flex justify-center text-xs uppercase">
                                        <span className="bg-white px-3 text-slate-500 font-medium">or</span>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <a href="tel:+919876543210" className="flex items-center gap-4 p-4 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors group">
                                        <div className="p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                                            <Phone className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500 font-medium">Call Us</p>
                                            <p className="font-semibold text-slate-900">+91 98765 43210</p>
                                        </div>
                                    </a>
                                    <a href="mailto:info@ecwc.in" className="flex items-center gap-4 p-4 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors group">
                                        <div className="p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                                            <Mail className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500 font-medium">Email Us</p>
                                            <p className="font-semibold text-slate-900">info@ecwc.in</p>
                                        </div>
                                    </a>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
<section className="relative overflow-hidden bg-gradient-to-br from-primary/90 via-primary to-primary py-16 md:py-20">
    {/* Background */}
    <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
    <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

    <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Card */}
        <div
            className="
                mx-auto max-w-3xl
                rounded-2xl
                bg-white/95 backdrop-blur
                shadow-2xl
                border border-white/40
                px-8 py-10 sm:px-12 sm:py-12
                text-center
            "
        >
            {/* Gold accent line */}
            <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500" />

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Want to Support Our Cause?
            </h2>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto mb-8 leading-relaxed">
                Help us build the Masjid and serve the community.  
                <span className="font-medium text-slate-700">
                    Every contribution brings lasting reward.
                </span>
            </p>

            <Link href="/project">
                <Button className="rounded-xl bg-gradient-to-r from-secondary to-amber-500 hover:from-secondary/90 hover:to-amber-500/90 text-white font-bold px-6 shadow-lg shadow-secondary/25 hover:shadow-xl hover:shadow-secondary/30 hover:-translate-y-0.5 transition-all duration-300 btn-shine">
                                    Donate Now
                                </Button>
            </Link>
        </div>
    </div>
</section>

            <Footer />
        </main>
    );
}
