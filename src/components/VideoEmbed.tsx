"use client";

import React from "react";

interface VideoEmbedProps {
    url?: string;
    title?: string;
    className?: string;
}

function getYouTubeId(url: string): string | null {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
}

export default function VideoEmbed({ url, title = "Demo Video", className = "" }: VideoEmbedProps) {
    if (!url) {
        return (
            <div className={`bg-zinc-900/50 rounded-2xl p-8 flex flex-col items-center justify-center ${className}`}>
                <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center mb-4">
                    <svg
                        className="w-8 h-8 text-zinc-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </div>
                <p className="text-zinc-500 text-sm font-medium">Demo video coming soon</p>
            </div>
        );
    }

    const youtubeId = getYouTubeId(url);

    if (youtubeId) {
        return (
            <div className={`relative aspect-video rounded-2xl overflow-hidden ${className}`}>
                <iframe
                    src={`https://www.youtube.com/embed/${youtubeId}?rel=0`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                />
            </div>
        );
    }

    // Fallback for non-YouTube videos
    return (
        <div className={`relative aspect-video rounded-2xl overflow-hidden ${className}`}>
            <video
                src={url}
                controls
                autoPlay
                className="absolute inset-0 w-full h-full object-cover"
                title={title}
            />
        </div>
    );
}
