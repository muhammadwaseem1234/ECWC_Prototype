import { color } from "framer-motion";
import { BookOpen, Scale, HeartHandshake, Users, GraduationCap, Library, ArrowRight, Bookmark } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Makthab",
        description: "Islamic & Academic learning for Kids and adults",
        icon: GraduationCap,
        color: "from-blue-500 to-indigo-500",
        bgColor: "bg-blue-50",
        hoverBg: "group-hover:bg-blue-500",
    },
    {
        title: "Baithulmaal",
        description: "Zakat & Welfare distribution",
        icon: Scale,
        color: "from-emerald-500 to-green-500",
        bgColor: "bg-emerald-50",
        hoverBg: "group-hover:bg-emerald-500",
    },
    {
        title: "Tafseer",
        description: "Bi-Monthly Tafseer Session",
        icon: BookOpen,
        color: "from-rose-500 to-pink-500",
        bgColor: "bg-rose-50",
        hoverBg: "group-hover:bg-rose-500",
    },
    {
        title: "Hifz",
        description: "Quran and Hifz Classes",
        icon: Bookmark,
        color: "from-neutral-500 to-neutral-400",
        bgColor: "bg-neutral-50",
        hoverBg: "group-hover:bg-neutral-500",

    },
    {
        title: "Youth",
        description: "BI-Monthly Tarbiya Session",
        icon: HeartHandshake,
        color: "from-violet-500 to-purple-500",
        bgColor: "bg-violet-50",
        hoverBg: "group-hover:bg-violet-500",
    },
    {
        title: "Sisters' Wing",
        description: "BI-Monthly Sister's Tarbiya Session",
        icon: Users,
        color: "from-pink-500 to-rose-400",
        bgColor: "bg-pink-50",
        hoverBg: "group-hover:bg-pink-500",
    },
    {
        title: "Library",
        description: "Islamic resources",
        icon: Library,
        color: "from-amber-500 to-orange-500",
        bgColor: "bg-amber-50",
        hoverBg: "group-hover:bg-amber-500",
    },
];

export function ServicesGrid() {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
            
            <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-2 text-sm font-semibold text-primary mb-4 border border-primary/10">
                        What We Offer
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                        Our Services
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Comprehensive welfare and educational services for the community
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                    {services.map((service, index) => (
                        <Link 
                            href="/services" 
                            key={index}
                            className="group relative bg-white rounded-2xl border border-slate-200/80 p-5 md:p-6 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden"
                        >
                            {/* Gradient overlay on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                            
                            {/* Content */}
                            <div className="relative z-10 flex flex-col items-center text-center gap-3">
                                <div className={`p-3 ${service.bgColor} rounded-xl ${service.hoverBg} group-hover:text-white transition-all duration-300`}>
                                    <service.icon className="w-6 h-6 text-current" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-white transition-colors duration-300 leading-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-xs text-slate-500 group-hover:text-white/80 mt-1 hidden sm:block transition-colors duration-300">
                                        {service.description}
                                    </p>
                                </div>
                            </div>

                            {/* Arrow indicator */}
                            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <ArrowRight className="w-4 h-4 text-white" />
                            </div>
                        </Link>
                    ))}
                </div>

                {/* View All Link */}
                <div className="text-center mt-10">
                    <Link 
                        href="/services"
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors group"
                    >
                        <span>View All Services</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
