import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock } from "lucide-react";

const prayerTimes = [
    { name: "Fajr", time: "05:15 AM" },
    { name: "Dhuhr", time: "12:30 PM" },
    { name: "Asr", time: "04:45 PM" },
    { name: "Maghrib", time: "06:15 PM" },
    { name: "Isha", time: "08:00 PM" },
];

export function PrayerWidget() {
    return (
        <Card className="w-full shadow-lg shadow-slate-200/50 border border-slate-200 rounded-2xl overflow-hidden">
            <CardHeader className="pb-4 border-b border-slate-100 bg-slate-50/50">
                <CardTitle className="text-lg flex items-center gap-2 text-slate-800">
                    <Clock className="h-5 w-5 text-primary" /> Prayer Times
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-3">
                    {prayerTimes.map((prayer) => (
                        <div key={prayer.name} className="flex justify-between items-center border-b pb-1 last:border-0 last:pb-0">
                            <span className="font-medium text-muted-foreground">{prayer.name}</span>
                            <span className="font-semibold font-mono">{prayer.time}</span>
                        </div>
                    ))}
                    <p className="text-xs text-center pt-2 text-muted-foreground">Chennai, TN</p>
                </div>
            </CardContent>
        </Card>
    );
}
