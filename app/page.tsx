import { ImageSlideshow } from "@/components/home/ImageSlideshow";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PrayerWidget } from "@/components/home/PrayerWidget";
import { ProjectProgress } from "@/components/home/ProjectProgress";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { Button } from "@/components/ui/button";
import { MapWidget } from "@/components/common/MapWidget";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col bg-slate-50/50">
            <div className="fixed inset-0 bg-dot-pattern opacity-[0.4] pointer-events-none -z-10" />
            <Navbar />

            {/* Hero Section */}
            <section className="w-full pt-40 pb-12 md:pb-24 lg:pb-32">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid gap-12 lg:grid-cols-[1fr_400px] lg:gap-16 items-start">
                        <div className="flex flex-col justify-center space-y-8">
                            <div className="space-y-6">
                                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl text-slate-900 leading-tight">
                                    Building a Beacon of <span className="text-primary">Guidance</span>.
                                </h1>
                                <p className="max-w-[600px] text-slate-600 md:text-xl leading-relaxed">
                                    The first <span className="font-semibold text-slate-900">Ahle Hadith Masjid & Welfare Centre</span> in Palavakkam.
                                </p>
                                <div className="inline-flex items-center rounded-full bg-secondary/10 px-4 py-1.5 text-sm text-secondary-700 font-bold border border-secondary/20">
                                    Grounded in Qur’an and Sunnah
                                </div>
                            </div>

                            {/* Slideshow */}
                            <div className="w-full">
                                <ImageSlideshow />
                            </div>
                        </div>

                        <div className="flex flex-col gap-8">
                            <ProjectProgress />
                            <PrayerWidget />
                        </div>
                    </div>
                </div>
            </section>

            <ServicesGrid />

            <Footer />
        </main>
    );
}
