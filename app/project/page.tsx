import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Circle, Landmark, ArrowRight, CreditCard, Wallet } from "lucide-react";

export default function ProjectPage() {
    return (
        <main className="min-h-screen bg-slate-50/50 flex flex-col relative">
            <div className="fixed inset-0 bg-dot-pattern opacity-[0.4] pointer-events-none -z-10" />
            <Navbar />

            {/* Header Section */}
            <section className="pt-40 pb-12 md:pb-24 border-b border-slate-200/60 bg-white/50 backdrop-blur-sm">
                <div className="container px-4 md:px-6 mx-auto text-center">
                    <div className="inline-block px-4 py-1 text-2xl font-arabic text-secondary-700 mb-4 font-bold">
                        بسم الله الرحمن الرحيم
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">The Masjid Project</h1>
                    <p className="max-w-[700px] mx-auto text-lg md:text-xl text-slate-600 leading-relaxed">
                        From a vision to reality. Follow our journey in establishing the first <span className="font-semibold text-slate-900">Ahle Hadith Masjid & Welfare Centre</span> in Palavakkam.
                    </p>
                </div>
            </section>

            <section className="py-16 container px-4 md:px-6 mx-auto grid lg:grid-cols-2 gap-16 items-start">
                {/* Donation Card Side */}
                <div className="order-2 lg:order-1 sticky top-32">
                    <Card className="border border-slate-200 shadow-2xl shadow-slate-200/50 bg-white rounded-3xl overflow-hidden relative">
                        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary to-secondary" />
                        <CardHeader className="pt-8 pb-4">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-3 rounded-2xl bg-primary-50 text-primary">
                                    <Landmark className="w-6 h-6" />
                                </div>
                                <CardTitle className="text-2xl font-bold text-slate-900">Construction Fund</CardTitle>
                            </div>
                            <CardDescription className="text-base text-slate-600">
                                Invest in your Akhirah. Sadaqah Jariyah for land acquisition and building construction.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6 pb-8">
                            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-4">
                                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                                    <span className="text-slate-500 font-semibold">Account Name</span>
                                    <span className="font-bold text-slate-900 text-right">ECWC Construction</span>
                                </div>
                                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                                    <span className="text-slate-500 font-semibold">Account Number</span>
                                    <span className="font-mono font-bold text-slate-900 text-lg tracking-wide text-right">1234567890</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-slate-500 font-semibold">IFSC Code</span>
                                    <span className="font-mono font-bold text-slate-900 tracking-wide text-right">SBIN0001234</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 text-base rounded-xl shadow-md flex gap-2">
                                    <CreditCard className="w-4 h-4" /> Transfer
                                </Button>
                                <Button variant="outline" className="w-full border-2 border-slate-200 hover:bg-slate-50 text-slate-900 font-bold h-12 text-base rounded-xl flex gap-2">
                                    <Wallet className="w-4 h-4" /> UPI
                                </Button>
                            </div>
                            <p className="text-center text-xs text-slate-400 font-medium">
                                All donations are Tax Exempt under 80G.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Timeline Side */}
                <div className="order-1 lg:order-2">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="h-8 w-1 bg-secondary rounded-full" />
                        <h2 className="text-3xl font-extrabold text-slate-900">Project Timeline</h2>
                    </div>

                    <div className="space-y-0 relative border-l-2 border-slate-200 ml-4 pb-12">
                        <TimelineItem
                            status="completed"
                            title="Phase 1: Project Launch"
                            date="January 2024"
                            description="Official announcement and formation of the trust. Initial fundraising strategy deployed."
                        />
                        <TimelineItem
                            status="current"
                            title="Phase 2: Land Acquisition"
                            date="Current Stage"
                            description="Identifying and purchasing suitable land in Palavakkam. We have identified a 3-Ground plot and are in negotiation."
                        />
                        <TimelineItem
                            status="upcoming"
                            title="Phase 3: Construction Begins"
                            date="Est. Late 2025"
                            description="Foundation laying ceremony and start of structural work. Architectural planning."
                        />
                        <TimelineItem
                            status="upcoming"
                            title="Phase 4: Inauguration"
                            date="Est. 2026"
                            description="Opening the doors for daily prayers, classes, and community services."
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function TimelineItem({ status, title, date, description }: { status: 'completed' | 'current' | 'upcoming', title: string, date: string, description: string }) {
    const isCompleted = status === 'completed';
    const isCurrent = status === 'current';

    return (
        <div className="relative pl-10 pb-12 last:pb-0">
            {/* Dot */}
            <div className={`absolute -left-[9px] top-0 p-1 rounded-full border-4 border-slate-50 transition-all duration-500
                ${isCompleted ? 'bg-primary text-white' : ''} 
                ${isCurrent ? 'bg-secondary text-white ring-4 ring-secondary/20' : ''}
                ${status === 'upcoming' ? 'bg-slate-200 text-slate-400' : ''}
            `}>
                {isCompleted && <CheckCircle2 className="w-5 h-5" />}
                {isCurrent && <div className="w-5 h-5 rounded-full flex items-center justify-center"><Circle className="w-3 h-3 fill-white" /></div>}
                {status === 'upcoming' && <div className="w-5 h-5 rounded-full" />}
            </div>

            <div className={`transition-all duration-500 ${isCurrent ? 'translate-x-2' : ''}`}>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-2 uppercase
                    ${isCurrent ? 'bg-secondary/10 text-secondary-700' : 'text-slate-500 bg-slate-100'}
                `}>
                    {date}
                </span>
                <h3 className={`text-xl font-bold mb-2 ${status === 'upcoming' ? 'text-slate-400' : 'text-slate-900'}`}>{title}</h3>
                <p className={`text-base leading-relaxed ${status === 'upcoming' ? 'text-slate-400' : 'text-slate-600'}`}>
                    {description}
                </p>
            </div>
        </div>
    )
}
