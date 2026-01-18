// src/components/TextShuffle.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";

interface TextShuffleProps {
    text: string;
    className?: string;
}

// A high‑quality text shuffle animation that randomly cycles characters
// and resolves into the final provided text.
export default function TextShuffle({ text, className = "" }: TextShuffleProps) {
    const [display, setDisplay] = useState(text);
    const chars = "!<>-_\/[]{}—=+*^?#________";
    const frameRef = useRef<number | null>(null);

    useEffect(() => {
        let frame = 0;
        const maxFrames = 20; // number of animation frames
        const tick = () => {
            if (frame >= maxFrames) {
                setDisplay(text);
                return;
            }
            const shuffled = text
                .split("")
                .map((char, i) => {
                    if (char === " ") return " ";
                    // gradually reveal the correct character as frames progress
                    if (frame > (maxFrames / text.length) * i) return text[i];
                    return chars[Math.floor(Math.random() * chars.length)];
                })
                .join("");
            setDisplay(shuffled);
            frame++;
            frameRef.current = requestAnimationFrame(tick);
        };
        // start animation on mount
        if (frameRef.current) cancelAnimationFrame(frameRef.current);
        tick();
        return () => {
            if (frameRef.current) cancelAnimationFrame(frameRef.current);
        };
    }, [text]);

    return (
        <span className={className}>
            {display}
        </span>
    );
}
