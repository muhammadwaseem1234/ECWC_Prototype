import { BookOpen, Scale, HeartHandshake, Users, GraduationCap, Library } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
    {
        title: "Education",
        description: "Hifdh School (NIOS aligned)",
        icon: GraduationCap,
    },
    {
        title: "Baithulmaal",
        description: "Zakat & Interest-free loans",
        icon: Scale, // Symbolizing balance/justice
    },
    {
        title: "Counseling",
        description: "Islamic Arbitration",
        icon: HeartHandshake,
    },
    {
        title: "Youth",
        description: "Matrimony & Volunteering",
        icon: Users,
    },
    {
        title: "Sisters' Wing",
        description: "Dedicated women's prayer space",
        icon: BookOpen, // Or another suitable icon
    },
    {
        title: "Library",
        description: "Study & Learning space",
        icon: Library,
    },
];

export function ServicesGrid() {
    return (
        <section className="py-12 bg-slate-50">
            <div className="container px-4 md:px-6 mx-auto">
                <h2 className="text-3xl font-extrabold text-center mb-12 text-slate-900 tracking-tight">Our Services</h2>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((getService, index) => (
                        <Card key={index} className="border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200/40 hover:border-primary/20 transition-all duration-300 rounded-xl group cursor-pointer hover:-translate-y-1">
                            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                <div className="p-3 bg-slate-50 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300" aria-hidden="true">
                                    <getService.icon className="w-7 h-7" />
                                </div>
                                <CardTitle className="text-xl text-slate-900 group-hover:text-primary transition-colors">{getService.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-600 font-medium leading-relaxed">{getService.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
