"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

export default function FluidNavigation() {
    const [isExpanding, setIsExpanding] = useState(false);
    const router = useRouter();

    const handleExpand = () => {
        setIsExpanding(true);
        // Navigate after animation completes
        setTimeout(() => {
            router.push("/projects");
        }, 800);
    };

    return (
        <div className="relative flex justify-center items-center h-20 w-full z-50">
            {/* Expanded Background Layer */}
            {isExpanding && (
                <motion.div
                    layoutId="fluid-bg"
                    className="fixed inset-0 bg-white z-[60]"
                    initial={{ borderRadius: "100px", scale: 0.1, opacity: 0 }}
                    animate={{
                        scale: 20,
                        opacity: 1,
                        borderRadius: "0px",
                    }}
                    transition={{
                        duration: 0.8,
                        ease: [0.76, 0, 0.24, 1], // Custom heavy ease
                    }}
                />
            )}

            {/* Button Layer */}
            <motion.button
                className="relative z-[70] bg-zinc-100 hover:bg-white text-black rounded-full px-8 py-4 flex items-center gap-3 text-sm font-bold tracking-widest uppercase transition-colors shadow-xl overflow-hidden group"
                onClick={handleExpand}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <span className="relative z-10 transition-colors group-hover:text-black">
                    View All Projects
                </span>
                <div className="relative z-10 p-1.5 bg-black rounded-full text-white group-hover:bg-zinc-800 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                </div>
            </motion.button>
        </div>
    );
}
