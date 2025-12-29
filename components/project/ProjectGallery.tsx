'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ImageIcon, Expand } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const slides = [
    '/slides/slide1.png',
    '/slides/slide2.png',
    '/slides/slide3.png',
    '/slides/slide4.png',
];

const captions = [
    'Proposed site for the Masjid',
    'Architectural concept design',
    'Community gathering vision',
    'Progress on construction',
];

export function ProjectGallery() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);

    const nextSlide = useCallback(() => {
        setDirection(1);
        setCurrent((prev) => (prev + 1) % slides.length);
    }, []);

    const prevSlide = useCallback(() => {
        setDirection(-1);
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    }, []);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction < 0 ? '100%' : '-100%',
            opacity: 0,
        }),
    };

    return (
        <div className="relative w-full aspect-[16/9] bg-slate-100 rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/50 border border-slate-200/80 group">
            {/* Main Image */}
            <AnimatePresence mode='wait' custom={direction}>
                <motion.div
                    key={current}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ type: "tween", duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="absolute inset-0"
                >
                    <Image
                        src={slides[current]}
                        alt={captions[current]}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                    />
                </motion.div>
            </AnimatePresence>

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <motion.p
                    key={current}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-white text-lg md:text-xl font-semibold"
                >
                    {captions[current]}
                </motion.p>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-white text-slate-700 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                aria-label="Previous image"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-white text-slate-700 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                aria-label="Next image"
            >
                <ChevronRight className="w-5 h-5" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-6 right-6 md:right-8 flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setDirection(index > current ? 1 : -1);
                            setCurrent(index);
                        }}
                        className={cn(
                            "h-2 rounded-full transition-all duration-300",
                            current === index 
                                ? 'bg-white w-6' 
                                : 'bg-white/40 w-2 hover:bg-white/60'
                        )}
                        aria-label={`Go to image ${index + 1}`}
                    />
                ))}
            </div>

            {/* Gallery Badge */}
            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Gallery</span>
                <span className="text-white/60">{current + 1}/{slides.length}</span>
            </div>
        </div>
    );
}
