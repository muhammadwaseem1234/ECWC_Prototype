import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Play, Youtube, ArrowRight, Users } from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Events & Lectures",
    description: "Join our gatherings of knowledge and remembrance. View upcoming Islamic lectures, events, and past recordings from ECWC.",
};

export default function EventsPage() {
    const recentVideos = [
        "TEpvu23buXU",
        "7HIcfWEzkUQ",
        "zT6PG_DfAb8"
    ];

    return (
        <main id="main-content" className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 flex flex-col">
            <div className="fixed inset-0 bg-dot-pattern opacity-30 pointer-events-none -z-10" />
            <Navbar />

            {/* Header Section */}
            <section className="pt-28 sm:pt-32 pb-8 border-b border-slate-200/60 bg-white/50 backdrop-blur-sm">
                <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                        <div className="space-y-3">
                            <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-2 text-sm font-semibold text-primary border border-primary/10">
                                <Calendar className="w-4 h-4" />
                                Community Gatherings
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
                                Events & Lectures
                            </h1>
                            <p className="text-lg text-slate-600 max-w-xl">
                                Join our gatherings of knowledge and remembrance based on the Qur'an and Sunnah.
                            </p>
                        </div>
                        <a
                            href="https://www.youtube.com/@ECWCPalavakkam"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button className="rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold shadow-lg shadow-red-200/50">
                                <Youtube className="w-5 h-5 mr-2" />
                                Subscribe on YouTube
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            {/* Upcoming Event Hero */}
            <section className="py-10 md:py-16 container px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="flex items-center gap-3 mb-6">
                    <div className="h-8 w-1.5 bg-gradient-to-b from-secondary to-amber-400 rounded-full" />
                    <h2 className="text-2xl font-extrabold text-slate-900">Upcoming Event</h2>
                </div>

                <div className="relative group rounded-3xl overflow-hidden border border-slate-200/80 shadow-2xl shadow-slate-200/50 bg-white">
                    {/* Animated gradient border */}
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-pulse" />
                    
                    <div className="grid lg:grid-cols-[1.5fr_1fr] gap-0">
                        {/* Event Content */}
                        <div className="p-6 sm:p-8 lg:p-10 space-y-6">
                            <div className="flex flex-wrap items-center gap-3">
                                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-red-50 to-rose-50 text-red-600 font-bold rounded-full text-xs uppercase tracking-wider border border-red-100">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                    </span>
                                    Live this Friday
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-600 font-medium rounded-full text-xs">
                                    <Users className="w-3 h-3" />
                                    Open for All
                                </span>
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
                                    Understanding the{" "}
                                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                        Methodology of the Salaf
                                    </span>
                                </h3>
                                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                                    A comprehensive lecture clarifying the importance of adhering to the way of the righteous predecessors in creed, worship, and manners.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <div className="flex items-center gap-2 text-sm font-medium text-slate-700 bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-100">
                                    <Calendar className="w-4 h-4 text-primary" />
                                    <span>Fri, Jan 3rd, 2026</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm font-medium text-slate-700 bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-100">
                                    <Clock className="w-4 h-4 text-primary" />
                                    <span>6:30 PM (After Maghrib)</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm font-medium text-slate-700 bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-100">
                                    <MapPin className="w-4 h-4 text-primary" />
                                    <span>ECWC Main Hall</span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 pt-2">
                                <Button className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-bold h-12 px-8 rounded-xl shadow-lg shadow-primary/20">
                                    <Calendar className="w-5 h-5 mr-2" />
                                    Add to Calendar
                                </Button>
                                <Button variant="outline" className="border-2 border-slate-200 hover:bg-slate-50 font-semibold h-12 px-8 rounded-xl">
                                    Get Directions
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                        </div>

                        {/* Speaker Section */}
                        <div className="bg-gradient-to-br from-slate-50 to-slate-100 border-t lg:border-t-0 lg:border-l border-slate-100 p-6 sm:p-8 flex flex-col items-center justify-center text-center gap-5">
                            <div className="relative">
                                <div className="absolute -inset-2 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-xl" />
                                <div className="relative w-28 h-28 sm:w-32 sm:h-32 bg-white rounded-full border-4 border-white shadow-xl overflow-hidden">
                                    <Image
                                        src="/scholars/Mohammad Umar Sulaiman.png"
                                        alt="Umar Sulaiman"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <span className="text-xs font-bold text-secondary uppercase tracking-wider">Speaker</span>
                                <h4 className="text-xl font-bold text-slate-900">Umar Sulaiman</h4>
                                <p className="text-sm text-slate-500 font-medium max-w-[200px] leading-relaxed">
                                    Director – Operations, PERF Group of Institutions
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Past Events / Archive */}
            <section className="py-12 md:py-16 bg-gradient-to-b from-slate-50 to-white border-t border-slate-100">
                <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold text-slate-900">Recent Recordings</h2>
                            <p className="text-slate-600">Watch previous lectures and events</p>
                        </div>
                        <a
                            href="https://www.youtube.com/@ECWCPalavakkam"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button variant="outline" className="rounded-xl border-2 border-slate-200 hover:border-red-200 hover:bg-red-50 hover:text-red-600 font-semibold group">
                                <Youtube className="w-4 h-4 mr-2" />
                                View All on YouTube
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {recentVideos.map((videoId, index) => (
                            <Card key={index} className="border-0 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden bg-white group">
                                <div className="aspect-video w-full bg-slate-900 relative">
                                    <iframe
                                        className="w-full h-full"
                                        src={`https://www.youtube.com/embed/${videoId}`}
                                        title={`ECWC Lecture Recording ${index + 1}`}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
