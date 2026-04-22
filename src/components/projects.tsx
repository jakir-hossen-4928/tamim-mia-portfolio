import { ArrowUpRight, CheckCircle2, ChevronRight, Droplets, Factory, Globe, Leaf, Lightbulb, Play, Recycle, Scale, ShieldCheck, Target, Truck, Users, Zap } from "lucide-react";
import { useState } from "react";
import Seo from "./Seo";

/* ---------- CARD ---------- */
const ProjectCard = ({ title, category, description, children, className = "" }: { title: string; category: string; description: string; children: React.ReactNode; className?: string }) => (
    <div className={`rounded-2xl sm:rounded-[3rem] border border-border/50 bg-surface/50 p-5 sm:p-8 shadow-soft backdrop-blur-sm transition-all duration-500 hover:shadow-float ${className}`}>
        <div className="mb-6">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-primary">
                {category}
            </span>
            <h3 className="mt-3 font-display text-xl sm:text-3xl font-bold text-foreground">{title}</h3>
            <p className="mt-3 text-sm sm:text-lg text-muted-foreground">{description}</p>
        </div>
        {children}
    </div>
);

/* ---------- EPSON PROJECT ---------- */
const EpsonProject = () => {
    const [activeTab, setActiveTab] = useState<"strategy" | "impact" | "benefits" | string>("strategy");

    const tabs = [
        { id: "strategy", label: "Strategy", icon: <Target size={16} /> },
        { id: "impact", label: "Environment", icon: <Leaf size={16} /> },
        { id: "benefits", label: "Commercial", icon: <Scale size={16} /> },
    ];

    const impactAreas = [
        { icon: <Droplets className="text-blue-500" />, title: "Water", desc: "97% reduction compared to analogue printing where 95% of textile printing occurs." },
        { icon: <Recycle className="text-green-500" />, title: "Waste", desc: "Reduces inventory risk and eliminates landfill waste from overproduction." },
        { icon: <Zap className="text-yellow-500" />, title: "Energy", desc: "Fewer steps in the digital process significantly lower power consumption." },
        { icon: <Truck className="text-purple-500" />, title: "Logistics", desc: "Contain production to one location, slashing shipping requirements." },
    ];

    return (
        <div className="space-y-6 sm:space-y-8">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 sm:gap-4">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm rounded-full font-bold transition-all ${activeTab === tab.id
                                ? "bg-primary text-secondary-foreground shadow-soft"
                                : "bg-accent/50 text-accent-foreground hover:bg-accent"
                            }`}
                    >
                        {tab.icon} {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                {activeTab === "strategy" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div className="p-5 sm:p-8 border border-primary/20 bg-primary/5 rounded-2xl sm:rounded-3xl">
                            <h4 className="flex items-center gap-3 text-lg sm:text-xl font-bold text-foreground mb-4">
                                <Lightbulb size={24} className="text-primary" /> Core Objective
                            </h4>
                            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed break-words">
                                Catalyzing the UK shift to reshoring direct-to-textile print production across fashion, interior decoration, and print services. Promoting sustainable, on-demand digital textile printing to replace inefficient overseas outsourcing.
                            </p>
                        </div>
                        <div className="p-5 sm:p-8 border border-secondary/20 bg-secondary/5 rounded-2xl sm:rounded-3xl">
                            <h4 className="flex items-center gap-3 text-lg sm:text-xl font-bold text-foreground mb-4">
                                <Target size={24} className="text-secondary" /> Strategy Roadmap
                            </h4>
                            <ul className="space-y-3 sm:space-y-4">
                                {[
                                    "Regulatory-driven motivation for digital adoption",
                                    "Optimizing Monna Lisa value proposition",
                                    "Creating tactical marketing roadmaps for Epson",
                                    "Bridging industry insight with academic innovation",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm font-medium text-accent-foreground">
                                        <CheckCircle2 size={16} className="text-secondary mt-0.5 shrink-0" />
                                        <span className="min-w-0 flex-1 break-words">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}

                {activeTab === "impact" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {impactAreas.map((area, i) => (
                            <div key={i} className="group p-5 border border-border/60 bg-surface rounded-2xl sm:rounded-3xl shadow-soft transition-all hover:-translate-y-1">
                                <div className="mb-4 inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-accent/50 group-hover:bg-accent transition-colors">
                                    {area.icon}
                                </div>
                                <h5 className="mb-2 text-base sm:text-lg font-bold text-foreground">{area.title}</h5>
                                <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">{area.desc}</p>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === "benefits" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {[
                            {
                                title: "Human Ethics",
                                icon: <ShieldCheck className="text-emerald-500" />,
                                desc: "Enhanced visibility and control over labor practices, ensuring compliance with the UK Modern Slavery Act."
                            },
                            {
                                title: "Personalisation",
                                icon: <Users className="text-blue-500" />,
                                desc: "Shift from mass production to tailored design. Print what you need, when you need it—from single items to bulk."
                            },
                            {
                                title: "Market Speed",
                                icon: <Zap className="text-orange-500" />,
                                desc: "Eliminates long lead times and logistics risks like geopolitical disruptions and freight delays."
                            },
                        ].map((benefit, i) => (
                            <div key={i} className="flex flex-col gap-4 p-5 sm:p-8 rounded-2xl sm:rounded-[2rem] border border-border/40 bg-surface/40">
                                <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-white shadow-soft">
                                    {benefit.icon}
                                </div>
                                <div className="space-y-2">
                                    <h5 className="text-lg sm:text-xl font-bold text-foreground break-words">{benefit.title}</h5>
                                    <p className="text-xs sm:text-sm text-muted-foreground break-words">{benefit.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

/* ---------- VIDEO PROJECT ---------- */
const VideoProject = () => (
    <div className="rounded-2xl sm:rounded-[3rem] border border-border/50 bg-surface/50 overflow-hidden shadow-soft">
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative aspect-video overflow-hidden">
                <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/Yg6NaNfpvU4"
                    title="Interview with Professor William Gore"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="flex flex-col justify-center p-5 sm:p-8 lg:p-12">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-500/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-red-500">
                    <Play size={12} fill="currentColor" /> Youtube Feature
                </div>
                <h3 className="font-display text-xl sm:text-3xl font-bold leading-tight text-foreground break-words">
                    Interview with Professor William Gore
                </h3>
                <p className="mt-4 text-sm sm:text-lg leading-relaxed text-muted-foreground break-words">
                    Part of my Professional Life Practice module, this interview explored industry expectations and professional development.
                </p>
                <div className="mt-8 space-y-4">
                    <h4 className="flex items-center gap-2 text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-primary">
                        Key Learning Outcomes
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {["Strategic Communication", "Confidence Building", "Industry Insights", "Professional Networking"].map((skill) => (
                            <span key={skill} className="rounded-full bg-primary/5 px-3 py-1.5 text-xs font-bold text-accent-foreground">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

/* ---------- MAIN PROJECTS PAGE ---------- */
const Projects = () => {
    return (
        <>
            <Seo
                title="Live Projects & Presentations"
                description="Explore Tamim Mia's university projects, including strategic briefings for Epson and professional interviews."
            />
            <main className="px-4 py-16 sm:py-24 overflow-x-hidden">
                <div className="mx-auto max-w-7xl">
                    {/* Header */}
                    <div className="text-center mb-12 sm:mb-20 space-y-4">
                        <p className="font-body text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.2em] text-secondary">
                            Showcase
                        </p>
                        <h1 className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground">
                            Live Projects
                        </h1>
                        <p className="mt-4 text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto break-words">
                            A collection of strategic briefings, professional interviews, and industry collaborations from my academic journey at Ravensbourne University London.
                        </p>
                    </div>

                    {/* Epson Selection */}
                    <section className="space-y-6 sm:space-y-10 mb-16 sm:mb-24">
                        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
                            <div className="max-w-2xl space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="grid h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                        <Factory size={24} />
                                    </div>
                                    <h2 className="font-display text-2xl sm:text-4xl font-bold text-foreground">Epson Strategy</h2>
                                </div>
                                <p className="text-sm sm:text-xl text-muted-foreground break-words leading-relaxed">
                                    A briefing document outlining commercial growth opportunities for on-demand digital textile printing in the UK market.
                                </p>
                            </div>
                            <a
                                href="/Epson Presentation.pptx"
                                download
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-surface px-6 py-4 sm:py-3 text-sm font-bold shadow-soft transition-all hover:-translate-y-1 hover:shadow-float"
                            >
                                Download Slides <ArrowUpRight size={18} />
                            </a>
                        </div>
                        <EpsonProject />
                    </section>

                    <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-16 sm:mb-24" />

                    {/* Video Selection */}
                    <section className="space-y-6 sm:space-y-10">
                        <div className="max-w-2xl space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="grid h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <Users size={24} />
                                </div>
                                <h2 className="font-display text-2xl sm:text-4xl font-bold text-foreground">Industry Interview</h2>
                            </div>
                            <p className="text-sm sm:text-xl text-muted-foreground break-words leading-relaxed whitespace-normal">
                                Engaging with industry leaders to bridge the gap between academic theory and real-world professional environments.
                            </p>
                        </div>
                        <VideoProject />
                    </section>
                </div>
            </main>
        </>
    );
};

export default Projects;
