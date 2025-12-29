import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookOpen, Scale, HeartHandshake, Users, GraduationCap, Library, Utensils, Coins, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ServicesPage() {
    const services = [
        {
            title: "Hifdh School",
            icon: GraduationCap,
            color: "blue",
            description: "Center of academic & spiritual excellence. NIOS aligned Hifdh program with qualified teachers.",
            features: ["Quran Memorization", "Islamic Studies", "Academic Education"],
            colSpan: "lg:col-span-2",
        },
        {
            title: "Baithulmaal",
            icon: Coins,
            color: "emerald",
            description: "Transparent Zakat & Sadaqah distribution system to support those in need.",
            features: ["Zakat Collection", "Sadaqah Distribution", "Financial Aid"],
            colSpan: "lg:col-span-1",
        },
        {
            title: "Islamic Arbitration",
            icon: Scale,
            color: "amber",
            description: "Shariah-compliant dispute resolution for families & businesses.",
            features: ["Family Disputes", "Business Matters", "Confidential"],
            colSpan: "lg:col-span-1",
        },
        {
            title: "Counseling Center",
            icon: HeartHandshake,
            color: "rose",
            description: "Professional mental health support guided by Islamic values.",
            features: ["Individual Sessions", "Family Counseling", "Youth Support"],
            colSpan: "lg:col-span-1",
        },
        {
            title: "Youth Wing",
            icon: Users,
            color: "violet",
            description: "Sports, workshops, and volunteering to engage the next generation.",
            features: ["Sports Activities", "Workshops", "Community Service"],
            colSpan: "lg:col-span-1",
        },
        {
            title: "Women's Section",
            icon: BookOpen,
            color: "pink",
            description: "Dedicated space for learning, Tajweed, and community building for sisters.",
            features: ["Tajweed Classes", "Islamic Studies", "Community Events"],
            colSpan: "lg:col-span-2",
        },
        {
            title: "Library & Study",
            icon: Library,
            color: "slate",
            description: "Curated collection of authentic Islamic resources and study materials.",
            features: ["Islamic Books", "Study Space", "Research Materials"],
            colSpan: "lg:col-span-1",
        },
        {
            title: "Iftar & Food Bank",
            icon: Utensils,
            color: "orange",
            description: "Feeding the community during Ramadan and supporting families year-round.",
            features: ["Ramadan Iftar", "Weekly Distribution", "Emergency Support"],
            colSpan: "lg:col-span-1",
        },
    ];

    const colorClasses: Record<string, { bg: string; text: string; border: string; gradient: string }> = {
        blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-100", gradient: "from-blue-500 to-indigo-500" },
        emerald: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-100", gradient: "from-emerald-500 to-green-500" },
        amber: { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-100", gradient: "from-amber-500 to-yellow-500" },
        rose: { bg: "bg-rose-50", text: "text-rose-600", border: "border-rose-100", gradient: "from-rose-500 to-pink-500" },
        violet: { bg: "bg-violet-50", text: "text-violet-600", border: "border-violet-100", gradient: "from-violet-500 to-purple-500" },
        pink: { bg: "bg-pink-50", text: "text-pink-600", border: "border-pink-100", gradient: "from-pink-500 to-rose-500" },
        slate: { bg: "bg-slate-100", text: "text-slate-600", border: "border-slate-200", gradient: "from-slate-500 to-gray-500" },
        orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-100", gradient: "from-orange-500 to-amber-500" },
    };

    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 relative">
            <div className="fixed inset-0 bg-dot-pattern opacity-30 pointer-events-none -z-10" />
            <div className="fixed inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-secondary/[0.02] pointer-events-none -z-10" />
            <Navbar />

            {/* Hero Section */}
            <section className="pt-28 sm:pt-32 lg:pt-36 pb-12 md:pb-16">
                <div className="container px-4 sm:px-6 lg:px-8 mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-semibold text-slate-700 mb-6">
                        <HeartHandshake className="w-4 h-4 text-primary" />
                        Community Services
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                        Serving the Creation,<br />
                        <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                            Pleasing the Creator.
                        </span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 leading-relaxed">
                        A hub of welfare, education, and spiritual growth meant to uplift every member of our society.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="pb-16 md:pb-24 container px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                    {services.map((service, index) => {
                        const colors = colorClasses[service.color];
                        return (
                            <div 
                                key={index} 
                                className={`group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-1 ${service.colSpan || 'lg:col-span-1'}`}
                            >
                                {/* Gradient overlay on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                
                                {/* Content */}
                                <div className="relative z-10 h-full flex flex-col">
                                    <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${colors.bg} ${colors.text} group-hover:bg-white/20 group-hover:text-white transition-all duration-300`}>
                                        <service.icon className="h-7 w-7" />
                                    </div>
                                    
                                    <h3 className="mb-3 text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-white transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    
                                    <p className="mb-5 text-slate-600 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <div className="mt-auto space-y-2">
                                        {service.features.map((feature, idx) => (
                                            <div 
                                                key={idx}
                                                className="flex items-center gap-2 text-sm text-slate-500 group-hover:text-white/80 transition-colors duration-300"
                                            >
                                                <CheckCircle2 className={`w-4 h-4 ${colors.text} group-hover:text-white/80 transition-colors shrink-0`} />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Arrow indicator */}
                                    <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                        <div className="p-2 bg-white/20 rounded-full">
                                            <ArrowRight className="h-5 w-5 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* CTA Section – White / Separated */}
            {/* CTA Section – Matched with Footer Gradient */}
<section className="relative overflow-hidden bg-gradient-to-b from-primary/90 via-primary to-primary py-20 md:py-28">
    {/* Background decoration (same language as footer) */}
    <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

    <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Card */}
        <div
            className="
                mx-auto max-w-4xl
                rounded-3xl
                bg-white/95 backdrop-blur
                shadow-2xl
                border border-white/40
                px-8 py-12 sm:px-14 sm:py-16
                text-center
            "
        >
            {/* Gold Accent */}
            <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500" />

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Want to Get Involved?
            </h2>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                Join us in serving the community.  
                Volunteer, donate, or participate in our programs and initiatives.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                    <Button
                        className="
                            group h-14 px-10 rounded-xl
                            bg-primary text-white font-semibold text-base
                            shadow-lg
                            hover:bg-primary/90
                            transition-all duration-300
                        "
                    >
                        Contact Us
                        <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                </Link>

                <Link href="/project">
                    <Button
                        className="
                            h-14 px-10 rounded-xl
                            bg-gradient-to-r from-secondary to-amber-500
                            hover:from-secondary/90 hover:to-amber-500/90
                            text-white font-bold text-base
                            shadow-lg shadow-secondary/25
                            hover:shadow-xl hover:shadow-secondary/30
                            hover:-translate-y-0.5
                            transition-all duration-300
                            btn-shine
                        "
                    >
                        Support the Project
                    </Button>
                </Link>
            </div>
        </div>
    </div>
</section>

<Footer />

        </main>
    );
}
