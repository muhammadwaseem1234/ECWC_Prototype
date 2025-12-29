"use client";

import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
// Badge is implemented inline
// The user requested a Badge: "Phase 1: Land Acquisition."
// I will just style a div as a badge to avoid extra files for now unless necessary.

export function ProjectProgress() {
    // Dummy data
    const targetAmount = 35000000; // 3.5 Crores
    const raisedAmount = 12500000; // 1.25 Crores (example)
    const percentage = (raisedAmount / targetAmount) * 100;

    return (
        <Card className="w-full bg-white border border-slate-200 shadow-xl shadow-slate-200/50 rounded-2xl overflow-hidden">
            <div className="bg-primary h-2 w-full" />
            <CardHeader className="pt-6">
                <div className="mb-4">
                    <div className="inline-block rounded-full bg-secondary/10 px-3 py-1 text-xs font-bold text-secondary-700 border border-secondary/20">
                        Phase 1: Land Acquisition
                    </div>
                </div>
                <CardTitle className="text-3xl font-extrabold text-slate-900">The Masjid Project</CardTitle>
                <CardDescription className="text-base text-slate-600">
                    Help us build the first Ahle Hadith Masjid & Welfare Centre in Palavakkam.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 pb-8">
                <div className="space-y-3">
                    <div className="flex justify-between text-base font-bold text-slate-900">
                        <span>Raised: ₹1.25 Cr</span>
                        <span>Goal: ₹3.5 Cr</span>
                    </div>
                    <Progress value={percentage} className="h-4 bg-slate-100" aria-label={`Fundraising progress: ${percentage.toFixed(1)}%`} />
                    <p className="text-sm text-right text-slate-500 font-medium">{percentage.toFixed(1)}% Funded</p>
                </div>

                <Link href="/project" className="block w-full">
                    <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold h-12 text-lg rounded-xl shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5">
                        Donate Now
                    </Button>
                </Link>
            </CardContent>
        </Card>
    );
}
