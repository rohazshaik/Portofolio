"use client";

import React, { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

interface MermaidDiagramProps {
    chart: string;
    className?: string;
}

export default function MermaidDiagram({ chart, className = "" }: MermaidDiagramProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [svg, setSvg] = useState<string>("");
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        mermaid.initialize({
            startOnLoad: false,
            theme: "dark",
            themeVariables: {
                primaryColor: "#3b82f6",
                primaryTextColor: "#f4f4f5",
                primaryBorderColor: "#27272a",
                lineColor: "#52525b",
                secondaryColor: "#18181b",
                tertiaryColor: "#27272a",
                background: "#0a0a0a",
                mainBkg: "#18181b",
                nodeBorder: "#3b82f6",
                clusterBkg: "#18181b",
                clusterBorder: "#27272a",
                titleColor: "#f4f4f5",
                edgeLabelBackground: "#18181b",
            },
            flowchart: {
                htmlLabels: true,
                curve: "basis",
                padding: 20,
            },
        });

        const renderDiagram = async () => {
            try {
                const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
                const { svg } = await mermaid.render(id, chart);
                setSvg(svg);
                setError(null);
            } catch (err) {
                console.error("Mermaid render error:", err);
                setError("Failed to render diagram");
            }
        };

        renderDiagram();
    }, [chart]);

    if (error) {
        return (
            <div className={`bg-red-900/20 border border-red-800 rounded-2xl p-6 ${className}`}>
                <p className="text-red-400 text-sm">{error}</p>
            </div>
        );
    }

    return (
        <div
            ref={containerRef}
            className={`bg-zinc-900/50 rounded-2xl p-6 overflow-x-auto ${className}`}
            dangerouslySetInnerHTML={{ __html: svg }}
            style={{
                minHeight: "300px",
            }}
        />
    );
}
