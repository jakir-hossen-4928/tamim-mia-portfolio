import { ArrowUpRight, CheckCircle2, ChevronRight, Droplets, Factory, Globe, Leaf, Lightbulb, Play, Recycle, Scale, ShieldCheck, Target, Truck, Users, Zap } from "lucide-react";
import { useState } from "react";
import Seo from "./Seo";

const ProjectCard = ({ title, category, description, children, className = "" }: { title: string; category: string; description: string; children: React.ReactNode; className?: string }) => (
    <div className={`rounded-[3rem] border border-border/50 bg-surface/50 p-8 shadow-soft backdrop-blur-sm transition-all duration-500 hover:shadow-float ${className}`}>
        <div className="mb-6">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                {category}
            </span>
            <h3 className="mt-4 font-display text-3xl font-bold text-foreground">{title}</h3>
            <p className="mt-4 text-lg text-muted-foreground">{description}</p>
        </div>
        {children}
    </div>
);

const EpsonProject = () => {
    const [activeTab, setActiveTab] = useState<"strategy" | "impact" | "benefits">("strategy");

    const impactAreas = [
        { icon: <Droplets className="text-blue-500" />, title: "Water", desc: "97% reduction compared to analogue printing where 95% of textile printing occurs." },
        { icon: <Recycle className="text-green-500" />, title: "Waste", desc: "Reduces inventory risk and eliminates landfill waste from overproduction." },
        { icon: <Zap className="text-yellow-500" />, title: "Energy", desc: "Fewer steps in the digital process significantly lower power consumption." },
        { icon: <Truck className="text-purple-500" />, title: "Logistics", desc: "Contain production to one location, slashing shipping requirements." },
    ];

    return (
        <div className="space-y-12">
            <div className="relative w-full overflow-hidden">
                <div className="flex overflow-x-auto pb-4 pt-1 sm:flex-wrap sm:gap-4 sm:pb-0 sm:pt-0">
                    <div className="flex w-max gap-3 pr-4 sm:w-auto sm:flex-wrap sm:gap-4 sm:pr-0">
                        {[
                            { id: "strategy", label: "Strategy", icon: <Target size={18} /> },
                            { id: "impact", label: "Environment", icon: <Leaf size={18} /> },
                            { id: "benefits", label: "Commercial", icon: <Scale size={18} /> },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                className={`flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-all sm:px-6 sm:py-3 ${activeTab === tab.id ? "bg-primary text-primary-foreground shadow-soft" : "bg-accent/50 text-accent-foreground hover:bg-accent"
                                    }`}
                            >
                                {tab.icon} {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 sm:min-h-[400px]">
                {activeTab === "strategy" && (
                    <div className="grid gap-4 md:grid-cols-2 lg:gap-6">
                        <div className="rounded-3xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
                            <h4 className="flex items-center gap-3 text-xl font-bold text-foreground mb-4">
                                <Lightbulb size={24} className="text-primary" /> Core Objective
                            </h4>
                            <p className="text-muted-foreground leading-relaxed">
                                Catalyzing the UK shift to reshoring direct-to-textile print production across fashion, interior decoration, and print services. Promoting sustainable, on-demand digital textile printing to replace inefficient overseas outsourcing.
                            </p>
                        </div>
                        <div className="rounded-3xl border border-secondary/20 bg-secondary/5 p-6 sm:p-8">
                            <h4 className="flex items-center gap-3 text-xl font-bold text-foreground mb-4">
                                <Target size={24} className="text-secondary" /> Strategy Roadmap
                            </h4>
                            <ul className="space-y-3">
                                {[
                                    "Regulatory-driven motivation for digital adoption",
                                    "Optimizing Monna Lisa value proposition",
                                    "Creating tactical marketing roadmaps for Epson",
                                    "Bridging industry insight with academic innovation",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-accent-foreground">
                                        <CheckCircle2 size={16} className="text-secondary" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}

                {activeTab === "impact" && (
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {impactAreas.map((area, i) => (
                            <div key={i} className="group rounded-3xl border border-border/60 bg-surface p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-float">
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/50 transition-colors group-hover:bg-accent">
                                    {area.icon}
                                </div>
                                <h5 className="mb-2 text-lg font-bold text-foreground">{area.title}</h5>
                                <p className="text-sm leading-relaxed text-muted-foreground">{area.desc}</p>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === "benefits" && (
                    <div className="grid gap-6 lg:grid-cols-3">
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
                            <div key={i} className="flex flex-col gap-4 rounded-[2rem] border border-border/40 bg-surface/40 p-6 sm:p-8">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-soft">{benefit.icon}</div>
                                <h5 className="text-xl font-bold text-foreground">{benefit.title}</h5>
                                <p className="text-muted-foreground">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

const VideoProject = () => (
    <div className="group relative overflow-hidden rounded-[3rem] border border-border/50 bg-surface/50 shadow-soft">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
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
            <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-500/10 px-4 py-1 text-[10px] font-extrabold uppercase tracking-widest text-red-500 sm:text-xs">
                    <Play size={12} fill="currentColor" /> Youtube Feature
                </div>
                <h3 className="font-display text-2xl font-bold leading-tight text-foreground sm:text-3xl md:text-4xl break-words">Interview with Professor William Gore</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
                    Part of my Professional Life Practice module, this interview explored industry expectations and professional development.
                </p>
                <div className="mt-8 space-y-4">
                    <h4 className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-widest text-primary">
                        Key Learning Outcomes
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {["Strategic Communication", "Confidence Building", "Industry Insights", "Professional Networking"].map((skill) => (
                            <span key={skill} className="rounded-full bg-primary/5 px-4 py-2 text-sm font-bold text-accent-foreground">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const Projects = () => {
    return (
        <>
            <Seo
                title="Live Projects & Presentations"
                description="Explore Tamim Mia's university projects, including strategic briefings for Epson and professional interviews."
            />
            <main className="overflow-x-hidden px-4 py-24 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-12 space-y-4 text-center sm:mb-20">
                        <p className="font-body text-xs font-extrabold uppercase tracking-[0.2em] text-secondary sm:text-sm">Showcase</p>
                        <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-7xl">Live Projects</h1>
                        <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-xl">
                            A collection of strategic briefings, professional interviews, and industry collaborations from my academic journey at Ravensbourne University London.
                        </p>
                    </div>

                    <div className="grid gap-20">
                        <section className="space-y-8 sm:space-y-10">
                            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                                <div className="max-w-2xl space-y-3 sm:space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary sm:h-12 sm:w-12">
                                            <Factory size={24} />
                                        </div>
                                        <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">Epson Strategy</h2>
                                    </div>
                                    <p className="text-base text-muted-foreground leading-relaxed sm:text-xl break-words">
                                        A briefing document outlining commercial growth opportunities for on-demand digital textile printing in the UK market.
                                    </p>
                                </div>
                                <a
                                    href="/Epson Presentation.pptx"
                                    download
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-surface px-6 py-4 text-sm font-bold shadow-soft transition-all hover:-translate-y-1 hover:shadow-float sm:w-auto sm:py-3"
                                >
                                    Download Slides <ArrowUpRight size={18} />
                                </a>
                            </div>
                            <EpsonProject />
                        </section>

                        {/* Separator */}
                        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

                        <section className="space-y-8 sm:space-y-10">
                            <div className="max-w-2xl space-y-3 sm:space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary sm:h-12 sm:w-12">
                                        <Users size={24} />
                                    </div>
                                    <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">Industry Interview</h2>
                                </div>
                                <p className="text-base text-muted-foreground leading-relaxed sm:text-xl break-words whitespace-normal">
                                    Engaging with industry leaders to bridge the gap between academic theory and real-world professional environments.
                                </p>
                            </div>
                            <VideoProject />
                        </section>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Projects;
