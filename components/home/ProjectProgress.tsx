"use client";

import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { Heart, Target, TrendingUp } from "lucide-react";

export function ProjectProgress() {
    const targetAmount = 35000000;
    const raisedAmount = 12500000;
    const percentage = (raisedAmount / targetAmount) * 100;

    return (
        <Card className="w-full bg-white/90 backdrop-blur-sm border border-slate-200/80 shadow-2xl shadow-slate-300/30 rounded-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500">
            {/* Gradient header bar */}
            <div className="h-1.5 bg-gradient-to-r from-primary via-primary/80 to-secondary" />
            
            <CardHeader className="pt-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-secondary/10 to-amber-100/30 px-4 py-1.5 text-xs font-bold text-amber-700 border border-secondary/20">
                        <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                        Phase 1: Land Acquisition
                    </div>
                    <div className="p-2 bg-primary/5 rounded-xl">
                        <Target className="w-5 h-5 text-primary" />
                    </div>
                </div>
                <CardTitle className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                    The Masjid Project
                </CardTitle>
                <CardDescription className="text-base text-slate-600 mt-2 leading-relaxed">
                    Help us build the first Ahle Hadith Masjid & Welfare Centre in Palavakkam.
                </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6 pb-6">
                {/* Stats Row */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-4 rounded-xl border border-emerald-100">
                        <div className="flex items-center gap-2 text-emerald-600 mb-1">
                            <TrendingUp className="w-4 h-4" />
                            <span className="text-xs font-semibold uppercase tracking-wide">Raised</span>
                        </div>
                        <span className="text-xl sm:text-2xl font-extrabold text-slate-900">₹1.25 Cr</span>
                    </div>
                    <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-4 rounded-xl border border-slate-200">
                        <div className="flex items-center gap-2 text-slate-500 mb-1">
                            <Target className="w-4 h-4" />
                            <span className="text-xs font-semibold uppercase tracking-wide">Goal</span>
                        </div>
                        <span className="text-xl sm:text-2xl font-extrabold text-slate-900">₹3.5 Cr</span>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                    <div className="relative">
                        <Progress value={percentage} className="h-4 bg-slate-100 rounded-full" aria-label={`Fundraising progress: ${percentage.toFixed(1)}%`} />
                        <div className="absolute right-0 -top-1 bg-white shadow-lg border border-slate-200 px-2 py-0.5 rounded-full text-xs font-bold text-primary">
                            {percentage.toFixed(0)}%
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <Link href="/project" className="block w-full">
                    <Button className="w-full bg-gradient-to-r from-secondary to-amber-500 hover:from-secondary/90 hover:to-amber-500/90 text-white font-bold h-14 text-lg rounded-xl shadow-lg shadow-secondary/25 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 group btn-shine">
                        <Heart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                        Donate Now
                    </Button>
                </Link>
            </CardContent>
        </Card>
    );
}
