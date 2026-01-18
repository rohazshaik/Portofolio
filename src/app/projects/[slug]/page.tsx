import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Github, Play, FileText } from "lucide-react";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";
import { Button } from "@/components/ui/button";
import TechBadge from "@/components/TechBadge";
import MermaidDiagram from "@/components/MermaidDiagram";
import VideoEmbed from "@/components/VideoEmbed";
import ProjectGallery from "@/components/ProjectGallery";
import BrowserWindow from "@/components/BrowserWindow";

export async function generateStaticParams() {
    const slugs = getAllProjectSlugs();
    return slugs.map((slug) => ({ slug }));
}

interface ProjectPageProps {
    params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-zinc-400">
            {/* Header */}
            <header className="sticky top-0 z-50 border-b border-zinc-900 bg-[#0a0a0a]/80 backdrop-blur-xl">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link
                        href="/#projects"
                        className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span className="text-xs font-black uppercase tracking-widest">Back to Projects</span>
                    </Link>

                    <div className="flex gap-3">
                        {project.githubUrl && (
                            <Button
                                variant="outline"
                                size="sm"
                                className="rounded-full gap-2"
                                asChild
                            >
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                    <Github className="w-4 h-4" />
                                    <span className="hidden sm:inline">GitHub</span>
                                </a>
                            </Button>
                        )}
                        {project.docsUrl && (
                            <Button
                                variant="outline"
                                size="sm"
                                className="rounded-full gap-2 border-blue-500/20 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300"
                                asChild
                            >
                                <a href={project.docsUrl} target="_blank" rel="noopener noreferrer">
                                    <FileText className="w-4 h-4" />
                                    <span className="hidden sm:inline">Docs</span>
                                </a>
                            </Button>
                        )}
                        {project.liveUrl && (
                            <Button
                                size="sm"
                                className="rounded-full gap-2 bg-white text-black hover:bg-zinc-200"
                                asChild
                            >
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="w-4 h-4" />
                                    <span className="hidden sm:inline">Live Demo</span>
                                </a>
                            </Button>
                        )}
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-6 py-12 space-y-16">
                {/* Hero Section */}
                <section className="space-y-8">
                    <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-[10px] font-black text-zinc-400 uppercase tracking-widest"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
                            {project.title}
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-3xl leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    {/* Hero Image */}
                    <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-zinc-900">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />
                    </div>
                </section>

                {/* Highlights */}
                {project.highlights.length > 0 && (
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold text-white tracking-tight">Key Highlights</h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            {project.highlights.map((highlight, i) => (
                                <div
                                    key={i}
                                    className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800 hover:bg-zinc-900/50 transition-colors"
                                >
                                    <p className="text-zinc-300 font-medium">{highlight}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Architecture Diagram */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-white tracking-tight">Architecture</h2>
                    <MermaidDiagram chart={project.diagram} className="border border-zinc-800" />
                </section>

                {/* Live Demo Browser or Video Demo */}
                {(project.liveUrl || project.videoUrl || project.demoComingSoon) && (
                    <section className="space-y-6">
                        <div className="flex items-center gap-3">
                            <Play className="w-5 h-5 text-zinc-500" />
                            <h2 className="text-2xl font-bold text-white tracking-tight">
                                {project.liveUrl ? 'Live Demo' : 'Video Demo'}
                            </h2>
                        </div>

                        {project.demoComingSoon ? (
                            <div className="w-full h-[400px] rounded-2xl border border-zinc-800 bg-[#1a1a1a] flex flex-col items-center justify-center gap-4 text-center p-8">
                                <div className="w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center mb-2">
                                    <Play className="w-8 h-8 text-zinc-600" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Demo Coming Soon</h3>
                                <p className="text-zinc-500 max-w-sm">
                                    We are currently preparing the demo for this project. Check back later!
                                </p>
                            </div>
                        ) : project.liveUrl ? (
                            <BrowserWindow url={project.liveUrl} />
                        ) : (
                            project.videoUrl && (
                                <VideoEmbed url={project.videoUrl} title={`${project.title} Demo`} className="border border-zinc-800" />
                            )
                        )}
                    </section>
                )}

                {/* Screenshot Gallery */}
                {project.gallery && project.gallery.length > 0 && (
                    <ProjectGallery images={project.gallery} title={project.title} />
                )}

                {/* Features */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-white tracking-tight">Features</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {project.features.map((feature, i) => (
                            <div
                                key={i}
                                className="flex gap-4 p-5 rounded-2xl bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors"
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                                <p className="text-zinc-400 leading-relaxed">{feature}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Tech Stack */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-white tracking-tight">Tech Stack</h2>
                    <div className="flex flex-wrap gap-3">
                        {project.techStack.map((tech) => (
                            <TechBadge key={tech.name} name={tech.name} category={tech.category} size="lg" />
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="p-8 md:p-12 rounded-3xl bg-zinc-900/30 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-2xl font-bold text-white tracking-tight">Interested in this project?</h3>
                        <p className="text-zinc-500 mt-2">Check out the source code{project.liveUrl ? ' or live demo' : ''}.</p>
                    </div>
                    <div className="flex gap-4 flex-wrap">
                        {project.githubUrl && (
                            <Button variant="outline" className="rounded-2xl px-8 h-12 gap-2" asChild>
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                    <Github className="w-4 h-4" />
                                    View Source
                                </a>
                            </Button>
                        )}
                        {project.docsUrl && (
                            <Button variant="outline" className="rounded-2xl px-8 h-12 gap-2 border-blue-500/20 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300" asChild>
                                <a href={project.docsUrl} target="_blank" rel="noopener noreferrer">
                                    <FileText className="w-4 h-4" />
                                    Docs
                                </a>
                            </Button>
                        )}
                        {project.liveUrl && (
                            <Button className="rounded-2xl px-8 h-12 gap-2 bg-white text-black hover:bg-zinc-200" asChild>
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="w-4 h-4" />
                                    Live Demo
                                </a>
                            </Button>
                        )}
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t border-zinc-900 py-8">
                <div className="max-w-6xl mx-auto px-6 flex justify-between items-center text-[10px] uppercase tracking-widest font-black text-zinc-700">
                    <Link href="/" className="hover:text-white transition-colors">
                        Back to Portfolio
                    </Link>
                    <span>Rohaz Shaik © 2025</span>
                </div>
            </footer>
        </div>
    );
}
