import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BookOpen, Scale, HeartHandshake, Users, GraduationCap, Library, Utensils, Coins, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
    const services = [
        {
            title: "Hifdh School",
            icon: GraduationCap,
            color: "text-blue-600",
            bg: "bg-blue-50",
            description: "Center of academic & spiritual excellence. NIOS aligned Hifdh program.",
            colSpan: "md:col-span-2",
        },
        {
            title: "Baithulmaal",
            icon: Coins,
            color: "text-emerald-600",
            bg: "bg-emerald-50",
            description: "Transparent Zakat & Sadaqah distribution system.",
            colSpan: "md:col-span-1",
        },
        {
            title: "Islamic Arbitration",
            icon: Scale,
            color: "text-amber-600",
            bg: "bg-amber-50",
            description: "Shariah-compliant dispute resolution for families & businesses.",
            colSpan: "md:col-span-1",
        },
        {
            title: "Counseling Center",
            icon: HeartHandshake,
            color: "text-rose-600",
            bg: "bg-rose-50",
            description: "Professional mental health support guided by Islamic values.",
            colSpan: "md:col-span-1",
        },
        {
            title: "Youth Wing",
            icon: Users,
            color: "text-indigo-600",
            bg: "bg-indigo-50",
            description: "Sports, workshops, and volunteering to engage the next generation.",
            colSpan: "md:col-span-1",
        },
        {
            title: "Women's Section",
            icon: BookOpen,
            color: "text-pink-600",
            bg: "bg-pink-50",
            description: "Dedicated space for learning, Tajweed, and community building.",
            colSpan: "md:col-span-2",
        },
        {
            title: "Library & Study",
            icon: Library,
            color: "text-slate-600",
            bg: "bg-slate-100",
            description: "Curated collection of authentic Islamic resources.",
            colSpan: "md:col-span-1",
        },
        {
            title: "Iftar & Food Bank",
            icon: Utensils,
            color: "text-orange-600",
            bg: "bg-orange-50",
            description: "Feeding the community during Ramadan and throughout the year.",
            colSpan: "md:col-span-1",
        },
    ];

    return (
        <main className="min-h-screen bg-slate-50 relative">
            <div className="fixed inset-0 bg-dot-pattern opacity-[0.4] pointer-events-none -z-10" />
            <Navbar />

            <section className="pt-40 pb-16">
                <div className="container px-4 md:px-6 mx-auto text-center">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-semibold text-slate-800 mb-6">
                        Community Services
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary-950 mb-6">
                        Serving the Creation,<br />
                        <span className="text-primary-700">Pleasing the Creator.</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-slate-600">
                        A hub of welfare, education, and spiritual growth meant to uplift every member of our society.
                    </p>
                </div>
            </section>

            <section className="pb-24 container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
                    {services.map((service, index) => (
                        <div key={index} className={`group relative overflow-hidden rounded-3xl border border-white/50 bg-white/70 backdrop-blur-sm p-8 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 ${service.colSpan || 'md:col-span-1'}`}>
                            <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${service.bg} ${service.color}`}>
                                <service.icon className="h-7 w-7" />
                            </div>
                            <h3 className="mb-3 text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="mb-6 text-slate-600 leading-relaxed font-medium">
                                {service.description}
                            </p>

                            <div className="absolute bottom-8 right-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                <ArrowRight className={`h-6 w-6 ${service.color}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
