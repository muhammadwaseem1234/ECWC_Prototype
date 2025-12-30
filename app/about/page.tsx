import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { MapWidget } from "@/components/common/MapWidget";
import { Heart, BookOpen, Users, Target, Award, Sparkles } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about ECWC - East Coast Community & Welfare Centre. A community-driven initiative striving to establish a center of worship, education, and welfare.",
};

const values = [
    {
        icon: BookOpen,
        title: "Qur'an & Sunnah",
        description: "Following the pristine teachings of Islam as understood by the Salaf as-Sāliḥ"
    },
    {
        icon: Users,
        title: "Community Unity",
        description: "Bringing together families in worship, learning, and mutual support"
    },
    {
        icon: Heart,
        title: "Social Welfare",
        description: "Serving humanity through charitable initiatives and community support"
    },
    {
        icon: Target,
        title: "Education Focus",
        description: "Empowering through authentic Islamic knowledge and practical learning"
    }
];

const milestones = [
    { year: "2019", event: "ECWC Founded", description: "Small group of brothers came together with a shared vision" },
    { year: "2020", event: "First Classes", description: "Started weekly Quran and Islamic studies classes" },
    { year: "2022", event: "Land Acquired", description: "Purchased land for the new masjid project" },
    { year: "2024", event: "Construction Begins", description: "Breaking ground on our multi-purpose Islamic center" }
];

export default function AboutPage() {
    return (
        <main id="main-content" className="min-h-screen bg-slate-50 flex flex-col">
            <Navbar />

            {/* Hero Section */}
            <div className="relative bg-gradient-to-b from-primary via-primary to-primary/90 pt-32 pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
                
                <div className="container px-4 md:px-6 mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                        <span className="text-sm text-white/90 font-medium">Est. 2019 • Chennai, India</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6">
                        About{" "}
                        <span className="relative">
                            ECWC
                            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                                <path d="M2 10C50 4 150 4 198 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-secondary" />
                            </svg>
                        </span>
                    </h1>
                    <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
                        A community-driven initiative striving to establish a center of worship, education, and welfare for the East Coast Muslim community.
                    </p>
                </div>
            </div>

            {/* Mission Quote */}
            <section className="py-20 bg-white relative">
                <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                <div className="container px-4 md:px-6 mx-auto relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/5 to-white border border-primary/10 shadow-lg">
                            <div className="absolute -top-4 left-8 bg-secondary text-slate-900 text-4xl font-serif px-4 py-2 rounded-lg shadow-md">
                                "
                            </div>
                            <blockquote className="text-xl md:text-2xl lg:text-3xl font-serif text-slate-900 italic leading-relaxed text-center pt-4">
                                Firmly grounded in the Qur'an and Sunnah upon the understanding of the Salaf as-Sāliḥ.
                            </blockquote>
                            <div className="absolute -bottom-4 right-8 bg-secondary text-slate-900 text-4xl font-serif px-4 py-2 rounded-lg shadow-md">
                                "
                            </div>
                        </div>
                        <p className="mt-12 text-slate-600 text-center max-w-3xl mx-auto text-lg leading-relaxed">
                            ECWC was established with the sole purpose of connecting the community to the pristine teachings of Islam, free from innovations and partisanship. We aim to serve the creation through social welfare while focusing on the rectification of the creed and manners.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-20 bg-slate-50">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
                            <Award className="w-4 h-4 text-primary" />
                            <span className="text-sm text-primary font-semibold">Our Foundation</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Core Values</h2>
                        <p className="mt-4 text-slate-500 max-w-2xl mx-auto">The principles that guide everything we do</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <CardContent className="p-8 text-center relative z-10">
                                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                                        <value.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 text-lg mb-3">{value.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">{value.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 bg-white">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Journey</h2>
                        <p className="mt-4 text-slate-500 max-w-2xl mx-auto">Key milestones in the story of ECWC</p>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary rounded-full hidden md:block" />
                            
                            <div className="space-y-8">
                                {milestones.map((milestone, index) => (
                                    <div key={index} className="relative flex gap-6 md:gap-8 items-start">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-primary/20 z-10">
                                            {milestone.year}
                                        </div>
                                        <div className="flex-1 bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-primary/20 hover:shadow-md transition-all duration-300">
                                            <h3 className="font-bold text-slate-900 text-lg">{milestone.event}</h3>
                                            <p className="text-slate-500 mt-2">{milestone.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Committee */}
            <section className="py-20 bg-slate-50">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-secondary/20 rounded-full px-4 py-2 mb-4">
                            <Users className="w-4 h-4 text-secondary" />
                            <span className="text-sm text-primary font-semibold">Leadership</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Committee Members</h2>
                        <p className="mt-4 text-slate-500 max-w-2xl mx-auto">Dedicated volunteers serving the community</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {[
                            { name: "Brother Abdullah", role: "Chairman" },
                            { name: "Brother Yusuf", role: "Secretary" },
                            { name: "Brother Ahmad", role: "Treasurer" },
                            { name: "Brother Ibrahim", role: "Coordinator" }
                        ].map((member, index) => (
                            <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <CardContent className="p-6 flex flex-col items-center text-center">
                                    <div className="relative mb-4">
                                        <div className="w-20 h-20 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full flex items-center justify-center">
                                            <Users className="w-8 h-8 text-slate-400" />
                                        </div>
                                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center shadow-lg">
                                            <span className="text-white text-xs font-bold">{index + 1}</span>
                                        </div>
                                    </div>
                                    <h3 className="font-bold text-slate-900">{member.name}</h3>
                                    <p className="text-sm text-primary font-medium mt-1">{member.role}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Location */}
            <section className="py-20 bg-white">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Visit Us</h2>
                        <p className="mt-4 text-slate-500 max-w-2xl mx-auto">Find our location and join us for prayers and programs</p>
                    </div>
                    <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                        <MapWidget />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
