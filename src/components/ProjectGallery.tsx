"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectGalleryProps {
    images: string[];
    title: string;
}

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const scrollTo = useCallback((index: number) => {
        if (emblaApi) emblaApi.scrollTo(index);
    }, [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on("select", onSelect);
        return () => {
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi, onSelect]);

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">Gallery</h2>

            <div className="relative group p-4 rounded-3xl bg-zinc-900/30 border border-zinc-800">
                <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
                    <div className="flex">
                        {images.map((src, index) => (
                            <div className="flex-[0_0_100%] min-w-0 relative aspect-video" key={index}>
                                <Image
                                    src={src}
                                    alt={`${title} screenshot ${index + 1}`}
                                    fill
                                    className="object-cover cursor-pointer hover:opacity-90 transition-opacity"
                                    onClick={() => openLightbox(index)}
                                />
                                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                                    <span className="text-white text-xs font-bold uppercase tracking-widest bg-black/50 backdrop-blur-md px-3 py-1 rounded-full">
                                        Click to Expand
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full bg-black/50 border-white/10 text-white hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => emblaApi?.scrollPrev()}
                >
                    <ChevronLeft className="w-5 h-5" />
                </Button>

                <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full bg-black/50 border-white/10 text-white hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => emblaApi?.scrollNext()}
                >
                    <ChevronRight className="w-5 h-5" />
                </Button>
            </div>

            <div className="flex justify-center gap-2">
                {scrollSnaps.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${index === selectedIndex ? "bg-white" : "bg-zinc-700 hover:bg-zinc-600"
                            }`}
                        onClick={() => scrollTo(index)}
                    />
                ))}
            </div>

            {/* Lightbox */}
            {lightboxOpen && (
                <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4">
                    <button
                        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                        onClick={() => setLightboxOpen(false)}
                    >
                        <X className="w-8 h-8" />
                    </button>

                    <button
                        className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors"
                        onClick={() => setLightboxIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
                    >
                        <ChevronLeft className="w-10 h-10" />
                    </button>

                    <div className="relative w-full max-w-7xl aspect-video">
                        <Image
                            src={images[lightboxIndex]}
                            alt={`${title} full screenshot`}
                            fill
                            className="object-contain"
                        />
                    </div>

                    <button
                        className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors"
                        onClick={() => setLightboxIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
                    >
                        <ChevronRight className="w-10 h-10" />
                    </button>

                    <div className="absolute bottom-6 text-zinc-500 font-mono text-sm">
                        {lightboxIndex + 1} / {images.length}
                    </div>
                </div>
            )}
        </div>
    );
}
