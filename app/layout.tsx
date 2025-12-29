import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
    title: "ECWC - East Coast Community & Welfare Centre",
    description: "Building a Beacon of Guidance on the ECR. The first Ahle Hadith Masjid & Welfare Centre in Palavakkam.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn(
                "min-h-screen bg-background font-sans antialiased",
                inter.variable,
                outfit.variable
            )}>
                {children}
            </body>
        </html>
    );
}
