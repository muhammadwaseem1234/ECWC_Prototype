'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const slides = [
    '/slides/slide1.png',
    '/slides/slide2.png',
    '/slides/slide3.png',
    '/slides/slide4.png',
];

export function ImageSlideshow() {
    const [current, setCurrent] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [direction, setDirection] = useState(1);

    const nextSlide = useCallback(() => {
        setDirection(1);
        setCurrent((prev) => (prev + 1) % slides.length);
    }, []);

    const prevSlide = useCallback(() => {
        setDirection(-1);
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    }, []);

    const goToSlide = (index: number) => {
        setDirection(index > current ? 1 : -1);
        setCurrent(index);
    };

    useEffect(() => {
        if (!isPlaying) return;
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [isPlaying, nextSlide]);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
            scale: 1.1,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction: number) => ({
            x: direction < 0 ? '100%' : '-100%',
            opacity: 0,
            scale: 0.9,
        }),
    };

    return (
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl shadow-slate-300/50 border border-slate-200/80 group bg-slate-100">
            {/* Main Image Container */}
            <AnimatePresence mode='wait' custom={direction}>
                <motion.div
                    key={current}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ 
                        type: "tween", 
                        duration: 0.5,
                        ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    className="absolute inset-0"
                >
                    <Image
                        src={slides[current]}
                        alt={`Slide ${current + 1}`}
                        fill
                        className="object-cover"
                        priority={current === 0}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                    />
                    {/* Gradient overlay for text visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
                </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/90 hover:bg-white text-slate-700 shadow-lg backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 active:scale-95"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/90 hover:bg-white text-slate-700 shadow-lg backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 active:scale-95"
                aria-label="Next slide"
            >
                <ChevronRight className="w-5 h-5" />
            </button>

            {/* Bottom Controls */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full">
                {/* Play/Pause */}
                <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-1 text-white/80 hover:text-white transition-colors"
                    aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                >
                    {isPlaying ? (
                        <Pause className="w-4 h-4" />
                    ) : (
                        <Play className="w-4 h-4" />
                    )}
                </button>

                {/* Divider */}
                <div className="w-px h-4 bg-white/30" />

                {/* Indicators */}
                <div className="flex gap-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={cn(
                                "h-2 rounded-full transition-all duration-300",
                                current === index 
                                    ? 'bg-white w-6' 
                                    : 'bg-white/40 w-2 hover:bg-white/60'
                            )}
                            aria-label={`Go to slide ${index + 1}`}
                            aria-current={current === index ? true : undefined}
                        />
                    ))}
                </div>
            </div>

            {/* Slide Counter */}
            <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold text-white">
                {current + 1} / {slides.length}
            </div>
        </div>
    );
}
