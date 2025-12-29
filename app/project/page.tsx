import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Landmark, CreditCard, QrCode, Heart, Target, TrendingUp, Copy, CheckCircle2, Shield, Users } from "lucide-react";
import { ProjectGallery } from "@/components/project/ProjectGallery";

export default function ProjectPage() {
    const currentAmount = 12500000;
    const goalAmount = 35000000;
    const percentage = (currentAmount / goalAmount) * 100;

    const bankDetails = [
        { label: "Account Name", value: "ECWC Construction Fund" },
        { label: "Account No", value: "1234567890", mono: true },
        { label: "Bank", value: "State Bank of India" },
        { label: "Branch", value: "Palavakkam" },
        { label: "IFSC Code", value: "SBIN0001234", mono: true },
    ];

    const impactStats = [
        { icon: Users, label: "Families Supported", value: "200+" },
        { icon: Heart, label: "Donors", value: "350+" },
        { icon: Shield, label: "Tax Exempt", value: "80G" },
    ];

    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 flex flex-col relative">
            <div className="fixed inset-0 bg-dot-pattern opacity-30 pointer-events-none -z-10" />
            <div className="fixed inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-secondary/[0.02] pointer-events-none -z-10" />
            <Navbar />

            {/* Header Section */}
            <section className="pt-28 sm:pt-32 pb-8 border-b border-slate-200/60 bg-white/50 backdrop-blur-sm">
                <div className="container px-4 sm:px-6 lg:px-8 mx-auto text-center">
                    <div className="inline-block px-6 py-2 text-2xl sm:text-3xl font-arabic text-secondary mb-4 font-bold">
                        بسم الله الرحمن الرحيم
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
                        The Masjid Project
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Join us in building the first Ahle Hadith Masjid & Welfare Centre in Palavakkam
                    </p>
                </div>
            </section>

            <section className="py-10 md:py-16 container px-4 sm:px-6 lg:px-8 mx-auto max-w-6xl space-y-12">

                {/* Project Gallery & Description */}
                <div className="space-y-6">
                    <ProjectGallery />
                    <div className="text-center space-y-4">
                        <p className="max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
                            From a vision to reality. Follow our journey in establishing a center of{" "}
                            <span className="font-semibold text-slate-800">worship, education, and welfare</span>{" "}
                            for the community of Palavakkam and beyond.
                        </p>
                        
                        {/* Impact Stats */}
                        <div className="flex flex-wrap justify-center gap-6 pt-4">
                            {impactStats.map((stat, index) => (
                                <div key={index} className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl border border-slate-200 shadow-sm">
                                    <div className="p-2 bg-primary/5 rounded-lg">
                                        <stat.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-lg font-bold text-slate-900">{stat.value}</div>
                                        <div className="text-xs text-slate-500">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Donation Card */}
                <Card className="border border-slate-200/80 shadow-2xl shadow-slate-200/50 bg-white rounded-3xl overflow-hidden relative">
                    {/* Gradient header */}
                    <div className="h-2 bg-gradient-to-r from-primary via-secondary to-primary" />
                    
                    <CardHeader className="pt-8 pb-6 text-center border-b border-slate-100 bg-gradient-to-b from-slate-50/50 to-white">
                        <div className="mx-auto mb-4 p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 w-fit">
                            <Landmark className="w-10 h-10 text-primary" />
                        </div>
                        <CardTitle className="text-2xl sm:text-3xl font-bold text-slate-900">Construction Fund</CardTitle>
                        <CardDescription className="text-base text-slate-600 max-w-md mx-auto mt-2">
                            Invest in your Akhirah. Sadaqah Jariyah for land acquisition and building construction.
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-8 p-6 sm:p-8 lg:p-10">
                        {/* Progress Section */}
                        <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 p-6 rounded-2xl border border-slate-100">
                            <div className="grid sm:grid-cols-2 gap-4 mb-6">
                                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                                    <div className="flex items-center gap-2 text-emerald-600 mb-1">
                                        <TrendingUp className="w-4 h-4" />
                                        <span className="text-xs font-semibold uppercase tracking-wide">Raised</span>
                                    </div>
                                    <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">₹1.25 Cr</span>
                                </div>
                                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                                    <div className="flex items-center gap-2 text-slate-500 mb-1">
                                        <Target className="w-4 h-4" />
                                        <span className="text-xs font-semibold uppercase tracking-wide">Goal</span>
                                    </div>
                                    <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">₹3.50 Cr</span>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Progress value={percentage} className="h-5 bg-slate-200 rounded-full" />
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-slate-500 font-medium">Phase 1: Land Acquisition</span>
                                    <span className="font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                                        {percentage.toFixed(0)}% Funded
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Payment Options */}
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
                            {/* Bank Transfer */}
                            <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border border-slate-200 space-y-5">
                                <div className="flex items-center gap-3">
                                    <div className="p-2.5 bg-primary/10 rounded-xl">
                                        <CreditCard className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-slate-900">Bank Transfer</h3>
                                        <p className="text-xs text-slate-500">Direct transfer to construction fund</p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    {bankDetails.map((detail, index) => (
                                        <div key={index} className="flex justify-between items-center py-2.5 border-b border-slate-100 last:border-0">
                                            <span className="text-sm text-slate-500">{detail.label}</span>
                                            <span className={`font-bold text-slate-900 text-right ${detail.mono ? 'font-mono text-base' : 'text-sm'}`}>
                                                {detail.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* QR Code */}
                            <div className="flex flex-col items-center justify-center space-y-5 bg-gradient-to-br from-secondary/5 to-amber-50/50 p-6 rounded-2xl border border-secondary/20">
                                <div className="flex items-center gap-3">
                                    <div className="p-2.5 bg-secondary/10 rounded-xl">
                                        <QrCode className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-slate-900">Scan to Pay</h3>
                                        <p className="text-xs text-slate-500">Instant UPI payment</p>
                                    </div>
                                </div>

                                {/* QR Code Display */}
                                <div className="relative bg-white p-4 rounded-2xl shadow-lg border-2 border-slate-900">
                                    {/* Corner decorations */}
                                    <div className="absolute -top-1 -left-1 w-6 h-6 border-t-4 border-l-4 border-secondary rounded-tl-lg" />
                                    <div className="absolute -top-1 -right-1 w-6 h-6 border-t-4 border-r-4 border-secondary rounded-tr-lg" />
                                    <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-4 border-l-4 border-secondary rounded-bl-lg" />
                                    <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-4 border-r-4 border-secondary rounded-br-lg" />
                                    
                                    <div className="w-44 h-44 bg-slate-50 flex items-center justify-center rounded-xl">
                                        <div className="text-center">
                                            <QrCode className="w-20 h-20 text-slate-300 mx-auto mb-2" />
                                            <span className="text-xs font-medium text-slate-400">Sample QR Code</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 justify-center">
                                    {['GPay', 'PhonePe', 'Paytm', 'BHIM'].map((app) => (
                                        <span key={app} className="text-xs bg-white px-3 py-1.5 rounded-full font-medium text-slate-600 border border-slate-200">
                                            {app}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Tax Exemption Notice */}
                        <div className="flex items-center gap-4 bg-emerald-50 border border-emerald-100 p-4 rounded-xl">
                            <div className="p-2 bg-emerald-100 rounded-lg shrink-0">
                                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-emerald-800">
                                    All donations are Tax Exempt under Section 80G
                                </p>
                                <p className="text-xs text-emerald-600 mt-0.5">
                                    Receipt will be sent via WhatsApp/Email within 24 hours
                                </p>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="text-center pt-4">
                            <Button className="bg-gradient-to-r from-secondary to-amber-500 hover:from-secondary/90 hover:to-amber-500/90 text-white font-bold h-16 px-12 text-lg rounded-2xl shadow-xl shadow-secondary/25 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300">
                                <Heart className="w-6 h-6 mr-3" />
                                Donate Now & Earn Sadaqah Jariyah
                            </Button>
                        </div>
                    </CardContent>
                </Card>

            </section>

            <Footer />
        </main>
    );
}
