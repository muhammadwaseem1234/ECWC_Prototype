import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { MapWidget } from "@/components/common/MapWidget";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white flex flex-col">
            <Navbar />

            <div className="bg-primary pt-40 pb-20 text-center">
                <div className="container px-4 md:px-6 mx-auto">
                    <h1 className="text-4xl font-black tracking-tight text-white mb-4 sm:text-5xl">About ECWC</h1>
                    <p className="text-primary-100 max-w-2xl mx-auto text-lg leading-relaxed">
                        A community-driven initiative striving to establish a center of worship, education, and welfare.
                    </p>
                </div>
            </div>

            {/* Mission */}
            <section className="py-16 bg-white">
                <div className="container px-4 md:px-6 mx-auto text-center">
                    <div className="max-w-3xl mx-auto p-8 border-y-2 border-primary-100">
                        <p className="text-2xl md:text-3xl font-serif text-primary-900 italic leading-relaxed">
                            "Firmly grounded in the Qur’an and Sunnah upon the understanding of the Salaf as-Sāliḥ."
                        </p>
                    </div>
                    <p className="mt-8 text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        ECWC was established with the sole purpose of connecting the community to the pristine teachings of Islam, free from innovations and partisanship. We aim to serve the creating through social welfare while focusing on the rectification of the creed and manners.
                    </p>
                </div>
            </section>

            {/* Management Team */}
            <section className="py-16 bg-gray-50">
                <div className="container px-4 md:px-6 mx-auto">
                    <h2 className="text-2xl font-bold text-center text-primary-900 mb-12">Committee Members</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map((i) => (
                            <Card key={i} className="border border-gray-200 shadow-sm">
                                <CardContent className="p-6 flex flex-col items-center">
                                    <div className="w-24 h-24 bg-gray-200 rounded-full mb-4" />
                                    <h3 className="font-bold text-gray-900">Brother Name</h3>
                                    <p className="text-sm text-primary-700 font-medium">Position/Role</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container px-4 md:px-6 mx-auto">
                    <h2 className="text-2xl font-bold text-center text-primary-900 mb-8">Locate Us</h2>
                    <MapWidget />
                </div>
            </section>

            <Footer />
        </main>
    );
}
