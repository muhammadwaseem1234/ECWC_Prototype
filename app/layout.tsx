import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#130426',
};

export const metadata: Metadata = {
    title: {
        default: "ECWC - East Coast Community & Welfare Centre",
        template: "%s | ECWC"
    },
    description: "Building a Beacon of Guidance on the ECR. The first Ahle Hadith Masjid & Welfare Centre in Palavakkam, Chennai. Join us in worship, education, and community welfare.",
    keywords: ["ECWC", "East Coast", "Masjid", "Palavakkam", "Chennai", "Ahle Hadith", "Islamic Centre", "Welfare"],
    authors: [{ name: "ECWC" }],
    openGraph: {
        title: "ECWC - East Coast Community & Welfare Centre",
        description: "Building a Beacon of Guidance on the ECR. The first Ahle Hadith Masjid & Welfare Centre in Palavakkam.",
        type: "website",
        locale: "en_IN",
        siteName: "ECWC",
    },
    twitter: {
        card: "summary_large_image",
        title: "ECWC - East Coast Community & Welfare Centre",
        description: "Building a Beacon of Guidance on the ECR. The first Ahle Hadith Masjid & Welfare Centre in Palavakkam.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={cn(
                "min-h-screen bg-background font-sans antialiased",
                inter.variable,
                outfit.variable
            )}>
                {/* Skip to main content link for accessibility */}
                <a 
                    href="#main-content" 
                    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold"
                >
                    Skip to main content
                </a>
                {children}
            </body>
        </html>
    );
}
