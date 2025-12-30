"use client";

import { Calendar, Clock, MapPin, ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FeaturedEvent() {
    return (
        <section className="container px-4 sm:px-6 lg:px-8 mx-auto mb-16 md:mb-24">
            <Link href="/events" className="block group">
                <div className="relative overflow-hidden rounded-3xl bg-white border border-slate-200/80 shadow-xl hover:shadow-2xl transition-all duration-500">
                    {/* Animated gradient border */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-amber-400 to-secondary bg-[length:200%_100%] animate-gradient" />
                    
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-secondary/5 to-transparent rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />

                    <div className="relative p-6 sm:p-8 md:p-10 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">

                        {/* Event Content */}
                        <div className="space-y-5 flex-1">
                            {/* Live Badge */}
                            <div className="flex items-center gap-3">
                                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-red-50 to-rose-50 text-red-600 text-xs font-bold uppercase tracking-wider rounded-full border border-red-100">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                    </span>
                                    Upcoming Live
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight group-hover:text-primary transition-colors duration-300">
                                Understanding the{" "}
                                <span className="bg-gradient-to-r from-secondary to-amber-500 bg-clip-text text-transparent">
                                    Methodology of the Salaf
                                </span>
                            </h3>

                            {/* Event Meta */}
                            <div className="flex flex-wrap gap-3 md:gap-4">
                                <div className="flex items-center gap-2 text-sm font-medium text-slate-700 bg-slate-50/80 px-4 py-2 rounded-xl border border-slate-100">
                                    <Calendar className="w-4 h-4 text-primary" />
                                    <span>Fri, Jan 3rd, 2026</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm font-medium text-slate-700 bg-slate-50/80 px-4 py-2 rounded-xl border border-slate-100">
                                    <Clock className="w-4 h-4 text-primary" />
                                    <span>6:30 PM (Maghrib)</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm font-medium text-slate-700 bg-slate-50/80 px-4 py-2 rounded-xl border border-slate-100">
                                    <MapPin className="w-4 h-4 text-primary" />
                                    <span>ECWC Main Hall</span>
                                </div>
                            </div>
                        </div>

                        {/* Action Button */}
                        <div className="w-full md:w-auto flex flex-col items-center gap-3">
                            <Button className="w-full md:w-auto bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-bold px-8 h-14 rounded-xl shadow-lg shadow-primary/20 group-hover:shadow-xl transition-all duration-300">
                                <Play className="w-5 h-5 mr-2 fill-current" />
                                View Event
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <span className="text-xs text-slate-500 font-medium">Free Entry • All Welcome</span>
                        </div>
                    </div>
                </div>
            </Link>

            <style jsx>{`
                @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                .animate-gradient {
                    animation: gradient 3s ease infinite;
                }
            `}</style>
        </section>
    );
}
