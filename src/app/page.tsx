"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Home,
  Zap,
  Briefcase,
  Mail,
  ArrowUp,
  ExternalLink,
  Github,
  Linkedin,
  Clock,
  Terminal,
  Code2,
  Cpu,
  Globe,
  Database,
  ShieldCheck,
  Layers,
  FileText } from
"lucide-react";
import { motion, AnimatePresence, useScroll, useSpring, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// --- Components ---

const PixelGridReveal = ({ children }: {children: React.ReactNode;}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) setIsVisible(true);
  }, [isInView]);

  const gridSize = 8; // 8x8 grid
  const totalSquares = gridSize * gridSize;

  return (
    <div ref={ref} className="relative overflow-hidden w-full h-full rounded-3xl">
      {children}
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 pointer-events-none">
        {Array.from({ length: totalSquares }).map((_, i) =>
        <motion.div
          key={i}
          initial={{ opacity: 1 }}
          animate={isVisible ? { opacity: 0 } : { opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: isVisible ? Math.random() * 0.8 : 0,
            ease: [0.45, 0, 0.55, 1]
          }}
          className="bg-[#0a0a0a]" />

        )}
      </div>
    </div>);

};

const SectionReveal = ({ children }: {children: React.ReactNode;}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: "easeOut" }}>

      {children}
    </motion.div>);

};

const TextScramble = ({ text, className = "" }: {text: string;className?: string;}) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = "!<>-_\\/[]{}—=+*^?#________";
  const frameRef = useRef<number | null>(null);

  const scramble = () => {
    let frame = 0;
    const maxFrames = 15;

    const tick = () => {
      if (frame >= maxFrames) {
        setDisplayText(text);
        return;
      }

      const scrambled = text.
      split("").
      map((char, i) => {
        if (char === " ") return " ";
        if (frame > maxFrames / text.length * i) return text[i];
        return chars[Math.floor(Math.random() * chars.length)];
      }).
      join("");

      setDisplayText(scrambled);
      frame++;
      frameRef.current = requestAnimationFrame(tick);
    };

    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    tick();
  };

  return (
    <span
      onMouseEnter={scramble}
      className={className}>

      {displayText}
    </span>);

};

const Tooltip = ({ text, children }: {text: string;children: React.ReactNode;}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>

      {children}
      <AnimatePresence>
        {isHovered &&
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 20 }}
          exit={{ opacity: 0, x: 10 }}
          className="absolute left-full ml-2 px-3 py-1 bg-white text-black text-[10px] font-bold rounded-md whitespace-nowrap z-50 pointer-events-none uppercase tracking-widest">

            {text}
          </motion.div>
        }
      </AnimatePresence>
    </div>);

};

const SkillTicker = () => {
  const skills = [
  { name: "JavaScript", icon: <Code2 className="w-5 h-5" /> },
  { name: "React.js", icon: <Layers className="w-5 h-5" /> },
  { name: "Node.js", icon: <Terminal className="w-5 h-5" /> },
  { name: "Express.js", icon: <Terminal className="w-5 h-5" /> },
  { name: "MongoDB", icon: <Database className="w-5 h-5" /> },
  { name: "MySQL", icon: <Database className="w-5 h-5" /> },
  { name: "Python", icon: <Code2 className="w-5 h-5" /> },
  { name: "SQL", icon: <Database className="w-5 h-5" /> },
  { name: "HTML", icon: <Globe className="w-5 h-5" /> },
  { name: "CSS", icon: <Globe className="w-5 h-5" /> },
  { name: "Git & GitHub", icon: <Github className="w-5 h-5" /> },
  { name: "JWT/Auth", icon: <ShieldCheck className="w-5 h-5" /> },
  { name: "Agile", icon: <Zap className="w-5 h-5" /> }];


  return (
    <div className="relative flex overflow-x-hidden py-6 bg-[#0a0a0a]">
      <div className="animate-marquee flex whitespace-nowrap gap-12 items-center">
        {[...skills, ...skills].map((skill, i) =>
        <div key={i} className="flex flex-col items-center gap-2 min-w-[100px] group">
            <div className="text-zinc-600 group-hover:text-white transition-colors">
              {skill.icon}
            </div>
            <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-600 group-hover:text-zinc-300 transition-colors">
              {skill.name}
            </span>
          </div>
        )}
      </div>
    </div>);

};

// --- Page Component ---

export default function PortfolioPage() {
  const [currentTime, setCurrentTime] = useState("");
  const mainContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex h-screen w-full bg-[#0a0a0a] text-zinc-400 font-sans selection:bg-zinc-100 selection:text-black overflow-hidden relative">
      
      {/* --- Left Sidebar (Fixed) --- */}
      <aside className="hidden lg:flex flex-col fixed left-0 top-0 border-r border-zinc-900 bg-[#0a0a0a] py-8 z-30 justify-between items-center !w-[118px] !h-full">
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-zinc-800 p-0.5 group">
            <div className="w-full h-full rounded-full overflow-hidden bg-zinc-900 relative">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Profile-1766139448539.jpeg?width=800&height=800&resize=contain"
                alt=""
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
          </div>
        </div>

        <nav className="flex flex-col items-center gap-10">
          <Tooltip text="HOME">
            <button onClick={() => scrollToSection("hero")} className="text-zinc-600 hover:text-white transition-colors">
              <Home className="w-5 h-5" />
            </button>
          </Tooltip>
          <Tooltip text="SERVICES">
            <button onClick={() => scrollToSection("services")} className="text-zinc-600 hover:text-white transition-colors">
              <Zap className="w-5 h-5" />
            </button>
          </Tooltip>
          <Tooltip text="PROJECTS">
            <button onClick={() => scrollToSection("projects")} className="text-zinc-600 hover:text-white transition-colors">
              <Briefcase className="w-5 h-5" />
            </button>
          </Tooltip>
          <Tooltip text="CONTACT">
            <button onClick={() => scrollToSection("contact")} className="text-zinc-600 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </button>
          </Tooltip>
        </nav>

        <div className="flex flex-col items-center gap-6">
          <Tooltip text="GO TOP">
            <button
              onClick={scrollToTop}
              className="text-zinc-600 hover:text-white transition-colors">
              <ArrowUp className="w-5 h-5" />
            </button>
          </Tooltip>
        </div>
      </aside>

      {/* --- Main Content Area (Scrollable) --- */}
      <main
        ref={mainContentRef}
        id="main-content"
        className="flex-1 h-full overflow-y-auto scroll-smooth no-scrollbar relative bg-[#0a0a0a] lg:ml-[80px] lg:mr-[80px]">
        
        {/* Top Margin/Header Zone */}
        <div className="relative bg-[#0a0a0a] px-6 lg:px-12">
          <div className="max-w-6xl mx-auto flex items-center justify-between h-20 lg:h-24">
            <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2.5 rounded-full border border-zinc-800 bg-zinc-900/50 shrink-0">
              <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.6)] animate-pulse" />
              <span className="text-[9px] sm:text-[10px] font-black text-zinc-100 uppercase tracking-[0.15em] sm:tracking-[0.25em]">Available For Work</span>
            </div>
            
            <div className="flex items-center gap-3 sm:gap-6">
              <span className="hidden md:block text-[10px] font-black text-zinc-500 uppercase tracking-[0.25em] whitespace-nowrap">Local Time (IST) {currentTime}</span>
              <Button variant="outline" className="h-10 sm:h-11 rounded-full px-4 sm:px-6 bg-zinc-100 border-zinc-200 text-black text-[9px] sm:text-[10px] font-black hover:bg-white hover:border-white uppercase tracking-[0.15em] sm:tracking-[0.2em] gap-2 transition-all shadow-xl shrink-0" asChild>
                <a href="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/SDE_REFINED-3-1766139495339.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                  <span className="hidden sm:inline">Download Resume</span>
                  <span className="sm:hidden">Resume</span>
                </a>
              </Button>
            </div>
          </div>
          <div className="max-w-6xl mx-auto h-px w-full bg-zinc-900/80" />
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-12 lg:py-20 space-y-24">
          
          {/* Hero Section */}
          <section id="hero" className="flex flex-col md:flex-row gap-16 items-start">
            <div className="relative w-48 h-48 lg:w-72 lg:h-72 shrink-0">
              <PixelGridReveal>
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Profile-1766139448539.jpeg?width=800&height=800&resize=contain"
                  alt="Rohaz Shaik"
                  fill
                  className="object-cover" />
              </PixelGridReveal>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-8">

              <div className="space-y-6">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <motion.span
                      animate={{ rotate: [0, 20, 0] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                      className="text-2xl lg:text-3xl">
                      👋
                    </motion.span>
                    <span className="text-xl lg:text-2xl font-bold text-zinc-400 tracking-tight">
                      Hello I Am
                    </span>
                  </div>
                  <h1 className="text-6xl lg:text-8xl font-bold text-white tracking-tighter leading-[0.9]">
                    Rohaz Shaik
                  </h1>
                </div>
                <p className="text-lg lg:text-xl text-zinc-500 max-w-xl leading-relaxed font-medium">
                  Final-year B.Tech CSE (IoT) student specializing in MERN stack development and problem-solving. Building secure, scalable web applications with React, Node.js, and MongoDB.
                </p>
                <div className="flex items-center gap-2 text-zinc-600">
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-bold uppercase tracking-widest">Open to SDE internships & junior roles (India · IST)</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button className="bg-white text-black hover:bg-zinc-200 rounded-2xl px-10 h-16 text-xs font-black tracking-[0.2em] group overflow-hidden" asChild>
                  <a href="mailto:shaikrohaz@gmail.com">
                    <TextScramble text="EMAIL ME" />
                  </a>
                </Button>
                <Button className="bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-800 rounded-2xl px-10 h-16 text-xs font-black tracking-[0.2em] group overflow-hidden" asChild>
                  <a href="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/SDE_REFINED-3-1766139495339.pdf" target="_blank" rel="noopener noreferrer">
                    <TextScramble text="DOWNLOAD RESUME" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </section>

          {/* Ticker */}
          <SkillTicker />

          {/* Stats Row */}
          <SectionReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
              { label: "Major Projects (MERN & IoT)", value: "3+" },
              { label: "Internships Completed", value: "2" },
              { label: "B.Tech CGPA", value: "7.49" },
              { label: "Expected Graduation", value: "2026" }].
              map((stat, i) =>
              <div key={i} className="p-8 rounded-[2rem] bg-zinc-900/20 flex flex-col gap-2 hover:bg-zinc-900/40 transition-colors">
                  <span className="text-4xl font-bold text-white tracking-tighter">{stat.value}</span>
                  <span className="text-[10px] uppercase tracking-widest text-zinc-600 font-black leading-tight">{stat.label}</span>
                </div>
              )}
            </div>
          </SectionReveal>

          {/* My Experience Section */}
          <SectionReveal>
            <section id="experience" className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-white tracking-tighter">My Experience</h2>
                <p className="text-zinc-500 max-w-xl text-lg">
                  Hands-on experience building full-stack applications, collaborating in Agile teams, and shipping production-ready features.
                </p>
              </div>

              <div className="space-y-6">
                {[
                {
                  company: "SmartInternz",
                  link: "smartinternz.com",
                  role: "Full Stack Developer Intern (Remote)",
                  period: "May 2025 – Jul 2025",
                  description: [
                  "Developed DocSpot, a full-stack appointment booking system with role-based access using React.js, Node.js, Express, and MongoDB.",
                  "Implemented JWT authentication and optimized database queries, reducing backend latency by 25%.",
                  "Collaborated via Git/GitHub across multiple branches with CI integration and code reviews."]
                },
                {
                  company: "Codesoft",
                  link: "codesoft.com",
                  role: "Web Development Intern (Remote)",
                  period: "May 2024 – Jul 2024",
                  description: [
                  "Delivered 3 responsive web applications (portfolio, to-do app, e-commerce landing page).",
                  "Built 5+ responsive pages per project using HTML, CSS, JavaScript, and React.js with high mobile compatibility.",
                  "Worked with a team using Git/GitHub to manage feature branches and reduce bug reopen rate."]
                }].
                map((exp, i) =>
                <div key={i} className="p-8 lg:p-12 rounded-[2.5rem] bg-zinc-900/10 hover:bg-zinc-900/20 transition-all group relative overflow-hidden">
                    <div className="relative z-10 flex flex-col md:flex-row justify-between gap-6">
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <h3 className="text-2xl font-bold text-white tracking-tight">{exp.company}</h3>
                            <a href={`https://${exp.link}`} className="text-[10px] font-black tracking-widest text-zinc-600 hover:text-zinc-400 flex items-center gap-1 uppercase">
                              {exp.link} <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                          <p className="text-zinc-400 font-medium">{exp.role}</p>
                        </div>
                        <ul className="space-y-4">
                          {exp.description.map((item, j) =>
                        <li key={j} className="text-zinc-500 text-sm leading-relaxed flex gap-4">
                              <div className="w-1 h-1 rounded-full bg-zinc-800 mt-2 shrink-0" />
                              {item}
                            </li>
                        )}
                        </ul>
                      </div>
                      <div className="shrink-0">
                        <span className="text-[10px] font-black text-zinc-600 bg-black/50 px-4 py-2 rounded-full border border-zinc-800 uppercase tracking-widest">
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>
          </SectionReveal>

          {/* Projects Section */}
          <SectionReveal>
            <section id="projects" className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-white tracking-tighter">Projects</h2>
                <p className="text-zinc-500 max-w-xl text-lg">
                  Selected projects showcasing MERN stack skills, ML integration, and IoT-driven experiences.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-10">
                {[
                {
                  title: "LinkGuard – AI-Powered Phishing URL Detector",
                  tags: ["React", "Node.js", "Express", "MongoDB", "Python", "Docker", "CI/CD"],
                  desc: "Full-stack application that detects malicious URLs using ML models trained on lexical and host-based features, with dashboards and REST APIs.",
                  image: "https://fktivpktdznvkdjnpkwu.supabase.co/storage/v1/object/sign/new%20product/projjr.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80YWMxZmIzMy01YWU0LTQwNzgtOTJlNS02MDE3NmNhZjFjMzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJuZXcgcHJvZHVjdC9wcm9qanIucG5nIiwiaWF0IjoxNzY2MTUxMTMwLCJleHAiOjE3OTc2ODcxMzB9.jI1VvsuSP_ydnlu109lu503HfRB4nZsbOOGUV4Y0lM8"
                },
                {
                  title: "DocSpot – Seamless Appointment Booking System",
                  tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT", "Multer"],
                  desc: "Role-based appointment booking platform with secure authentication, CRUD APIs, and optimized queries reducing server response time by 25%.",
                  image: "https://raw.githubusercontent.com/rohazshaik/docspot-seamless-appointment-booking/refs/heads/main/Docs/Screenshots/Screenshot%20Doc%20(3).png"
                },
                {
                  title: "Gesture-Controlled Game Arena",
                  tags: ["Python", "OpenCV", "ESP32", "MQTT", "React", "Node.js"],
                  desc: "Computer-vision game using hand tracking as control input, with IoT robot motion and a real-time telemetry dashboard achieving high gesture accuracy.",
                  image: "https://fktivpktdznvkdjnpkwu.supabase.co/storage/v1/object/sign/new%20product/prroj.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80YWMxZmIzMy01YWU0LTQwNzgtOTJlNS02MDE3NmNhZjFjMzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJuZXcgcHJvZHVjdC9wcnJvai5wbmciLCJpYXQiOjE3NjYxNDk1ODgsImV4cCI6MTc5NzY4NTU4OH0.a-o8U1OMOhi8W9YSmkdsLoLQvV1Asj1gg-BTY1PVJA4"
                }].
                map((project, i) =>
                <div key={i} className="group space-y-6">
                    <div className="relative aspect-[16/9] rounded-[2.5rem] overflow-hidden bg-zinc-900">
                      <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-1000 opacity-40 group-hover:opacity-100" />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent flex items-end p-8 lg:p-12">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, j) =>
                        <span key={j} className="px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-[10px] font-black text-white uppercase tracking-widest">
                              {tag}
                            </span>
                        )}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4 px-2">
                      <h4 className="text-3xl font-bold text-white tracking-tighter group-hover:translate-x-2 transition-transform">{project.title}</h4>
                      <p className="text-zinc-500 leading-relaxed text-lg max-w-3xl">{project.desc}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex justify-center pt-8">
                <Button className="bg-white text-black hover:bg-zinc-200 rounded-2xl px-12 h-16 text-xs font-black tracking-[0.2em] uppercase transition-all shadow-xl hover:scale-105">
                  VIEW ALL PROJECTS
                </Button>
              </div>
            </section>
          </SectionReveal>

          {/* Tech Stack Grid */}
          <SectionReveal>
            <section id="services" className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-white tracking-tighter">My Tech Stack</h2>
                <p className="text-zinc-500 max-w-xl text-lg">
                  Tools and technologies used to build performant, secure, and scalable applications.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                { title: "Languages", desc: "JavaScript (ES6+), Python, SQL, C++, HTML5, CSS3." },
                { title: "Frameworks & Libs", desc: "React.js, Node.js, Express.js, Tailwind CSS, Bootstrap." },
                { title: "Databases & Tools", desc: "MongoDB, MySQL, Git, GitHub, Docker, Postman." },
                { title: "Concepts", desc: "REST APIs, JWT, Agile, IoT, SDLC, Data Structures." }].
                map((stack, i) =>
                <div key={i} className="p-10 rounded-[2.5rem] bg-zinc-900/10 hover:bg-zinc-900/20 transition-all space-y-4 group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-white transition-colors">
                        <Code2 className="w-6 h-6" />
                      </div>
                      <h4 className="text-xl font-bold text-white tracking-tight">{stack.title}</h4>
                    </div>
                    <p className="text-zinc-500 leading-relaxed font-medium">{stack.desc}</p>
                  </div>
                )}
              </div>
            </section>
          </SectionReveal>

          {/* Contact / Footer Section */}
          <SectionReveal>
            <section id="contact" className="space-y-12 pb-12">
              <div className="p-12 lg:p-16 rounded-[3rem] bg-zinc-900/10 flex flex-col items-center text-center space-y-10">
                <div className="space-y-4">
                  <h2 className="text-5xl lg:text-7xl font-bold text-white tracking-tighter leading-tight">Let's work together</h2>
                  <p className="text-zinc-500 text-xl">Available for new opportunities and collaborations.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
                  <div className="p-8 rounded-3xl bg-zinc-900/50 space-y-2 hover:bg-zinc-800/50 transition-colors">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 font-black">Email</span>
                    <p className="text-white font-medium text-lg">shaikrohaz@gmail.com</p>
                  </div>
                  <div className="p-8 rounded-3xl bg-zinc-900/50 space-y-2 hover:bg-zinc-800/50 transition-colors">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 font-black">Phone</span>
                    <p className="text-white font-medium text-lg">+91-9505956681</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <a href="https://linkedin.com/in/rohazshaik" target="_blank" className="p-5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-600 transition-all hover:-translate-y-1">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="https://github.com/rohazshaik" target="_blank" className="p-5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-600 transition-all hover:-translate-y-1">
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <footer className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.3em] font-black text-zinc-700">
                <span>@2025, All Rights Reserved</span>
                <span className="text-zinc-600">Built with the MERN Stack</span>
                <div className="flex gap-8">
                  <a href="https://linkedin.com/in/rohazshaik" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
                  <a href="https://github.com/rohazshaik" target="_blank" className="hover:text-white transition-colors">GitHub</a>
                </div>
              </footer>
            </section>
          </SectionReveal>

        </div>
      </main>

      {/* --- Right Sidebar (Fixed) --- */}
      <aside className="hidden lg:flex flex-col fixed right-0 top-0 border-l border-zinc-900 bg-[#0a0a0a] py-8 z-30 justify-center items-center !w-28 !h-full">
        <div className="flex flex-col gap-8">
          <a href="https://linkedin.com/in/rohazshaik" target="_blank" className="text-zinc-600 hover:text-white transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://github.com/rohazshaik" target="_blank" className="text-zinc-600 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
        </div>
      </aside>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>);

}