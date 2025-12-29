import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { MapWidget } from "@/components/common/MapWidget";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white flex flex-col">
            <Navbar />

            <section className="pt-40 pb-12 md:pb-24">
                <div className="container px-4 md:px-6 mx-auto">
                    <h1 className="text-4xl font-extrabold tracking-tight text-center text-primary-900 mb-12">Get in Touch</h1>
                    <p className="max-w-[700px] mx-auto text-lg text-gray-700">
                        We are here to assist you. Visit us or reach out via phone/email.
                    </p>
                </div>
            </section>

            <section className="py-16 container px-4 md:px-6 mx-auto grid lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <div className="flex gap-4 items-start">
                        <div className="mt-1 p-2 bg-primary-50 rounded-lg text-primary-700">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
                            <p className="text-gray-600 leading-relaxed">
                                ECWC - East Coast Community & Welfare Centre<br />
                                No. 123, ECR Road, Palavakkam,<br />
                                Chennai - 600041, Tamil Nadu.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-start">
                        <div className="mt-1 p-2 bg-primary-50 rounded-lg text-primary-700">
                            <Phone className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                            <p className="text-gray-600">+91 98765 43210</p>
                            <p className="text-gray-600">+91 12345 67890</p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-start">
                        <div className="mt-1 p-2 bg-primary-50 rounded-lg text-primary-700">
                            <Mail className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                            <p className="text-gray-600">info@ecwc.in</p>
                            <p className="text-gray-600">admin@ecwc.in</p>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="h-[400px] w-full">
                    <MapWidget />
                </div>
            </section>

            <Footer />
        </main>
    );
}
