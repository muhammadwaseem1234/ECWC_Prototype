import Link from 'next/link';
import { MapPin, Mail, Phone } from 'lucide-react';

export function Footer() {
    return (
        <footer className="w-full border-t bg-slate-50 py-12 text-sm text-muted-foreground">
            <div className="container mx-auto px-4 md:px-6 grid gap-8 md:grid-cols-4">
                <div className="space-y-4">
                    <h3 className="text-lg font-bold text-primary-900">ECWC</h3>
                    <p className="text-xs">
                        East Coast Community & Welfare Centre.<br />
                        Building a Beacon of Guidance on the ECR.
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><Link href="/project">The Masjid Project</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/events">Events</Link></li>
                        <li><Link href="/donate">Donate</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-foreground mb-4">Contact</h4>
                    <ul className="space-y-2">
                        <li className="flex items-center"><MapPin className="mr-2 h-4 w-4" /> Palavakkam, Chennai</li>
                        <li className="flex items-center"><Mail className="mr-2 h-4 w-4" /> info@ecwc.in</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-foreground mb-4">Mission</h4>
                    <p className="italic">
                        "Firmly grounded in the Qur’an and Sunnah upon the understanding of the Salaf as-Sāliḥ."
                    </p>
                </div>
            </div>
            <div className="container mx-auto px-4 md:px-6 mt-8 pt-8 border-t text-center text-xs">
                © {new Date().getFullYear()} ECWC. All rights reserved.
            </div>
        </footer>
    );
}
