import React from "react";

interface TechBadgeProps {
    name: string;
    category?: string;
    size?: "sm" | "md" | "lg";
}

const categoryColors: Record<string, string> = {
    Frontend: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
    Backend: "from-green-500/20 to-emerald-500/20 border-green-500/30",
    Database: "from-amber-500/20 to-orange-500/20 border-amber-500/30",
    "AI/ML": "from-purple-500/20 to-pink-500/20 border-purple-500/30",
    Security: "from-red-500/20 to-rose-500/20 border-red-500/30",
    DevOps: "from-indigo-500/20 to-violet-500/20 border-indigo-500/30",
    "Computer Vision": "from-teal-500/20 to-cyan-500/20 border-teal-500/30",
    Core: "from-zinc-500/20 to-slate-500/20 border-zinc-500/30",
    "3D": "from-fuchsia-500/20 to-pink-500/20 border-fuchsia-500/30",
    State: "from-yellow-500/20 to-amber-500/20 border-yellow-500/30",
    Payments: "from-emerald-500/20 to-green-500/20 border-emerald-500/30",
    Automation: "from-sky-500/20 to-blue-500/20 border-sky-500/30",
    "Input Simulation": "from-violet-500/20 to-purple-500/20 border-violet-500/30",
    ML: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
};

const sizeClasses = {
    sm: "px-2 py-1 text-[9px]",
    md: "px-3 py-1.5 text-[10px]",
    lg: "px-4 py-2 text-xs",
};

export default function TechBadge({ name, category = "Core", size = "md" }: TechBadgeProps) {
    const colorClass = categoryColors[category] || categoryColors.Core;

    return (
        <span
            className={`inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r ${colorClass} border font-bold uppercase tracking-widest text-zinc-200 transition-all hover:scale-105 ${sizeClasses[size]}`}
        >
            {name}
        </span>
    );
}
