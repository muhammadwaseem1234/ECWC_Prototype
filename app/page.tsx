import { ImageSlideshow } from "@/components/home/ImageSlideshow";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PrayerWidget } from "@/components/home/PrayerWidget";
import { ProjectProgress } from "@/components/home/ProjectProgress";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FeaturedEvent } from "@/components/home/FeaturedEvent";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
    return (
        <main id="main-content" className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 via-white to-slate-50">
            {/* Subtle background pattern */}
            <div className="fixed inset-0 bg-dot-pattern opacity-30 pointer-events-none -z-10" />
            <div className="fixed inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-secondary/[0.02] pointer-events-none -z-10" />
            
            <Navbar />

            {/* Hero Section */}
            <section className="w-full pt-28 sm:pt-32 lg:pt-36 pb-8 md:pb-16 lg:pb-20">
                <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
                    <div className="grid gap-8 lg:gap-12 xl:gap-16 lg:grid-cols-[1.2fr_400px] items-start">
                        {/* Left Content */}
                        <div className="flex flex-col justify-center space-y-6 sm:space-y-8">
                            {/* Badge */}
                            <div className="hidden md:block inline-flex items-center self-start gap-2 rounded-full bg-gradient-to-r from-secondary/10 to-amber-100/50 px-4 py-2 text-sm font-semibold text-amber-700 border border-secondary/20 shadow-sm">
                                <span>Grounded in Qur'an and Sunnah</span>
                            </div>
                            {/* Main Heading */}
                            <div className="space-y-4">
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                                    East Coast Community and Welfare{" "}
                                    <span className="relative inline-block">
                                        <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                                            Center
                                        </span>
                                        <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                                            <path d="M2 10C50 4 150 4 198 10" stroke="url(#paint0_linear)" strokeWidth="3" strokeLinecap="round"/>
                                            <defs>
                                                <linearGradient id="paint0_linear" x1="2" y1="10" x2="198" y2="10">
                                                    <stop stopColor="#C5A028"/>
                                                    <stop offset="1" stopColor="#D4AF37"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </span>
                                </h1>
                                <p className="max-w-xl text-lg sm:text-xl text-slate-600 leading-relaxed">
                                    The first{" "}
                                    <span className="font-semibold text-slate-800">Ahle Hadith Masjid & Welfare Centre</span>{" "}
                                    in Palavakkam, Chennai.
                                </p>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                <Link href="/about">
                                    <Button className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-bold px-8 h-14 text-base shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300 group">
                                        <span>Learn About Us</span>
                                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                                <Link href="/services">
                                    <Button
    variant="outline"
    className="
        w-full sm:w-auto
        h-14 px-8 rounded-xl
        font-semibold text-base
        border-2 border-slate-200
        text-slate-800
        bg-white/80 backdrop-blur
        shadow-md
        hover:border-secondary/60
        hover:bg-secondary/5
        hover:shadow-lg hover:shadow-secondary/20
        hover:-translate-y-0.5
        transition-all duration-300
        btn-shine
    "
>
    Our Services
</Button>
                                </Link>
                            </div>

                            {/* Slideshow */}
                            <div className="w-full pt-4">
                                <ImageSlideshow />
                            </div>
                        </div>

                        {/* Right Sidebar - Widgets */}
                        <div className=" hidden md:block flex flex-col gap-6 lg:sticky lg:top-28">
                            <ProjectProgress />
                            <PrayerWidget />
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Upcoming Event */}
            <FeaturedEvent />

            {/* Services Section */}
            <ServicesGrid />

            {/* Footer */}
            <Footer />
        </main>
    );
}
