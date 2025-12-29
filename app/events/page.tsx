import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Youtube, Mic } from "lucide-react";

export default function EventsPage() {
    return (
        <main className="min-h-screen bg-white flex flex-col">
            <Navbar />

            <section className="pt-40 pb-12 md:pb-24 border-b">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div>
                            <h1 className="text-4xl font-extrabold tracking-tight text-primary-900 mb-2">Events & Lectures</h1>
                            <p className="max-w-[700px] mx-auto text-lg text-gray-700">
                                Join our gatherings of knowledge and remembrance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Upcoming Event Hero */}
            <section className="py-16 container px-4 md:px-6 mx-auto">
                <div className="flex items-center gap-3 mb-8">
                    <div className="h-8 w-1 bg-secondary rounded-full" />
                    <h2 className="text-3xl font-extrabold text-slate-900">Upcoming Event</h2>
                </div>

                <div className="relative group rounded-3xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-200/50 bg-white">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary z-10" />
                    <div className="grid md:grid-cols-[1.5fr_1fr] lg:grid-cols-[2fr_1fr]">
                        <div className="p-8 md:p-12 space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-red-600 font-bold rounded-full text-xs uppercase tracking-wider">
                                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                                Live this Friday
                            </div>
                            <h3 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
                                Understanding the <br /><span className="text-primary">Methodology of the Salaf</span>
                            </h3>
                            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                                A comprehensive lecture clarifying the importance of adhering to the way of the righteous predecessors in creed, worship, and manners.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 pt-4">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-slate-100 rounded-lg text-slate-700">
                                        <Calendar className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 font-bold uppercase">Date</p>
                                        <p className="font-semibold text-slate-900">Fri, Jan 5th</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-slate-100 rounded-lg text-slate-700">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 font-bold uppercase">Time</p>
                                        <p className="font-semibold text-slate-900">6:30 PM (Maghrib)</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-slate-100 rounded-lg text-slate-700">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 font-bold uppercase">Location</p>
                                        <p className="font-semibold text-slate-900">ECWC Main Hall</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6">
                                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-bold h-12 px-8 rounded-xl shadow-lg shadow-primary/20">
                                    Add to Calendar
                                </Button>
                            </div>
                        </div>

                        <div className="bg-slate-50 border-l border-slate-100 p-8 flex flex-col items-center justify-center text-center relative">
                            <div className="w-40 h-40 bg-white rounded-full mb-6 border-4 border-white shadow-lg flex items-center justify-center overflow-hidden relative">
                                <span className="text-slate-300 font-bold text-4xl">?</span>
                                {/* <Image src="..." /> */}
                            </div>
                            <h4 className="text-xl font-bold text-slate-900">Shaykh [Name]</h4>
                            <p className="text-sm text-slate-500 font-medium mt-1">Graduate, Madinah University</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Past Events / Archive */}
            <section className="py-12 bg-slate-50 border-t border-slate-200">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold text-slate-900">Recent Recordings</h2>
                        <Button variant="outline" className="text-primary font-bold">View All Archives</Button>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3].map((i) => (
                            <Card key={i} className="border-0 shadow-sm hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group bg-white">
                                <div className="aspect-video bg-slate-800 relative flex items-center justify-center group-hover:bg-slate-700 transition-colors cursor-pointer">
                                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                        <Youtube className="w-5 h-5" />
                                    </div>
                                </div>
                                <CardContent className="p-6">
                                    <div className="text-xs font-bold text-primary mb-2 uppercase tracking-wide">Tafseer Series</div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                        Explanation of Surah Al-Fatiha - Part {i}
                                    </h3>
                                    <div className="flex items-center gap-2 text-sm text-slate-500 mt-4">
                                        <Calendar className="w-4 h-4" />
                                        <span>2 weeks ago</span>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
