import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";

export default function ProjectsGridPage() {
    const year = new Date().getFullYear();

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-zinc-400 font-sans selection:bg-white selection:text-black">
            <div className="flex flex-col lg:flex-row h-screen overflow-hidden">
                {/* LEFT COLUMN - Sticky Sidebar */}
                <aside className="w-full lg:w-[35%] lg:h-full p-8 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-zinc-900 bg-[#0a0a0a] z-10">
                    <div>
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-xs font-black tracking-widest uppercase text-zinc-500 hover:text-white transition-colors mb-12"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back Home
                        </Link>

                        <span className="text-xs font-mono text-zinc-600 tracking-widest uppercase block mb-6">
                            Portfolio // {year}
                        </span>

                        <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tighter mb-8 leading-[0.9]">
                            Rohaz <br className="hidden lg:block" />
                            Shaik
                        </h1>
                    </div>

                    <div className="space-y-8">
                        <p className="text-lg text-zinc-500 leading-relaxed max-w-md">
                            Final-year B.Tech CSE (IoT) student specializing in MERN stack development and problem-solving. Proven experience
                            building secure, scalable web applications with React, Node.js, and MongoDB. Experienced in Git/GitHub collaboration
                            and Agile workflows.
                        </p>

                        <nav className="flex gap-6 text-sm font-medium">
                            <Link href="/#about" className="hover:text-white transition-colors">
                                About
                            </Link>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                className="hover:text-white transition-colors"
                                rel="noreferrer"
                            >
                                CV
                            </a>
                            <a
                                href="https://www.linkedin.com/in/rohazshaik/"
                                target="_blank"
                                className="hover:text-white transition-colors"
                                rel="noreferrer"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/rohazshaik"
                                target="_blank"
                                className="hover:text-white transition-colors"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>
                        </nav>
                    </div>
                </aside>

                {/* RIGHT COLUMN - Scrollable Grid */}
                <main className="flex-1 h-full overflow-y-auto bg-[#0a0a0a] p-4 lg:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 pb-20">
                        {projects.map((project) => (
                            <Link
                                href={`/projects/${project.slug}`}
                                key={project.slug}
                                className="group relative aspect-square rounded-[2rem] overflow-hidden bg-zinc-900 border border-zinc-800/50 hover:border-zinc-700 transition-colors"
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-2">
                                        {project.tags[0]}
                                    </span>
                                    <h3 className="text-xl font-bold text-white leading-tight">
                                        {project.title}
                                    </h3>
                                </div>
                            </Link>
                        ))}

                        {/* Placeholder cards for grid alignment if needed */}
                        {projects.length < 9 &&
                            Array.from({ length: 9 - projects.length }).map((_, i) => (
                                <div
                                    key={`placeholder-${i}`}
                                    className="aspect-square rounded-[2rem] bg-zinc-900/30 border border-zinc-900 flex items-center justify-center p-8 text-center"
                                >
                                    <p className="text-zinc-700 font-mono text-xs uppercase tracking-widest">
                                        More coming soon
                                    </p>
                                </div>
                            ))}
                    </div>
                </main>
            </div>
        </div>
    );
}
