import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, Sun, Moon, Sunrise, Sunset } from "lucide-react";

const prayerTimes = [
    { name: "Fajr", time: "05:15 AM", icon: Sunrise },
    { name: "Dhuhr", time: "12:30 PM", icon: Sun },
    { name: "Asr", time: "04:45 PM", icon: Sun },
    { name: "Maghrib", time: "06:15 PM", icon: Sunset },
    { name: "Isha", time: "08:00 PM", icon: Moon },
];

export function PrayerWidget() {
    return (
        <Card className="w-full bg-white/80 backdrop-blur-sm shadow-xl shadow-slate-200/50 border border-slate-200/80 rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-500">
            <CardHeader className="pb-3 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-slate-100/50">
                <CardTitle className="text-base flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-800">
                        <div className="p-1.5 bg-primary/10 rounded-lg">
                            <Clock className="h-4 w-4 text-primary" />
                        </div>
                        <span className="font-bold">Prayer Times</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-slate-500">
                        <MapPin className="h-3 w-3" />
                        <span>Chennai</span>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
                <div className="space-y-2">
                    {prayerTimes.map((prayer, index) => (
                        <div 
                            key={prayer.name} 
                            className="flex justify-between items-center p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-1.5 bg-slate-100 rounded-lg group-hover:bg-primary/10 transition-colors">
                                    <prayer.icon className="h-4 w-4 text-slate-500 group-hover:text-primary transition-colors" />
                                </div>
                                <span className="font-medium text-slate-700">{prayer.name}</span>
                            </div>
                            <span className="font-bold font-mono text-sm text-slate-900 bg-slate-100 px-3 py-1 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                                {prayer.time}
                            </span>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
