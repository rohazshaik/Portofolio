import { ExternalLink, RefreshCw } from "lucide-react";

interface BrowserWindowProps {
    url: string;
}

export default function BrowserWindow({ url }: BrowserWindowProps) {
    return (
        <div className="w-full rounded-2xl overflow-hidden border border-zinc-800 bg-[#1a1a1a] shadow-2xl">
            {/* Browser Header/Toolbar */}
            <div className="h-12 bg-[#2a2a2a] flex items-center px-4 border-b border-zinc-700/50">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]" />
                </div>

                {/* URL Bar Simulation */}
                <div className="flex-1 mx-6">
                    <div className="bg-[#1a1a1a] h-7 rounded-md flex items-center px-3 text-xs text-zinc-500 font-mono w-full max-w-2xl mx-auto overflow-hidden text-ellipsis whitespace-nowrap">
                        {url}
                    </div>
                </div>

                <div className="flex gap-3 text-zinc-500">
                    <RefreshCw className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
                    </a>
                </div>
            </div>

            {/* Browser Content */}
            <div className="relative w-full h-[600px] bg-white">
                <iframe
                    src={url}
                    className="w-full h-full border-none"
                    title="Project Demo functionality"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    sandbox="allow-same-origin allow-scripts allow-forms"
                />
            </div>
        </div>
    );
}
