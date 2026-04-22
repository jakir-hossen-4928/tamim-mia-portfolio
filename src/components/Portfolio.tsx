import { ArrowUpRight, BriefcaseBusiness, CheckCircle2, Download, GraduationCap, Laptop, Languages, Leaf, Linkedin, Mail, MapPin, Menu, Phone, Send, Sparkles, Sprout, Terminal, X } from "lucide-react";
import { type ReactNode, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button, buttonVariants } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

import Reflection from "./Reflection";

const headshot = "https://i.ibb.co.com/yFgqtp4q/tamim-headshot-photo.jpg";
const contentCertificate = "https://i.ibb.co.com/5xFRPM2j/Linked-In-Learning-Certificate-Content-Marketing-Customer-Engagement.png";
const brandingCertificate = "https://i.ibb.co.com/Nn7xsTKh/Linked-In-Learning-Certificate-personal-Branding.png";

const contactEndpoint = `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_KEY}`;

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/education", label: "Education" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/reflection", label: "Reflection" },
];

const professionalSkills = [
  "Customer Service",
  "Team Collaboration",
  "Problem Solving",
  "Time Management",
  "Operations Support",
  "Sales & Upselling",
  "Data Handling",
  "POS Systems",
  "Communication",
  "Attention to Detail",
  "Adaptability",
  "Training & Onboarding",
];

const itTools = [
  { name: "Microsoft Office (Word, Excel, PowerPoint)", level: 90 },
  { name: "Google Workspace (Docs, Sheets)", level: 88 },
  { name: "Microsoft Teams & Outlook", level: 85 },
  { name: "Amazon Seller Central", level: 78 },
  { name: "Mac & PC Proficiency", level: 92 },
];

const languageSkills = [
  { name: "English (Fluent)", level: 95 },
  { name: "Bangla (Fluent)", level: 100 },
  { name: "Hindi (Advanced)", level: 80 },
  { name: "Urdu (Advanced)", level: 78 },
];

const stats = [
  { value: "400–500+", label: "daily customer transactions" },
  { value: "2028", label: "expected graduation" },
  { value: "2", label: "LinkedIn Learning certificates" },
  { value: "Level 5", label: "Business Management student" },
];

const organicRadii = ["rounded-organic-1", "rounded-organic-2", "rounded-organic-3", "rounded-organic-4"];

const OrganicBlob = ({ className, variant = "one" }: { className: string; variant?: "one" | "two" | "three" }) => (
  <div aria-hidden="true" className={`organic-blob organic-blob-${variant} ${className}`} />
);

const SectionHeading = ({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) => (
  <div className="mx-auto mb-14 max-w-3xl text-center">
    <p className="mb-3 font-body text-sm font-extrabold uppercase tracking-[0.18em] text-secondary">{eyebrow}</p>
    <h2 className="font-display text-4xl font-bold leading-tight text-foreground md:text-5xl">{title}</h2>
    {children ? <p className="mt-5 text-lg leading-8 text-muted-foreground">{children}</p> : null}
  </div>
);

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-border/60 bg-surface/75 px-4 py-3 shadow-soft backdrop-blur-md">
        <Link to="/" className="flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground shadow-soft">
            <Leaf size={20} aria-hidden="true" />
          </span>
          <span className="font-display text-xl font-bold text-foreground">Tamim Mia</span>
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.href} to={item.href} className={({ isActive }) => `rounded-full px-4 py-2 text-sm font-bold transition-all duration-300 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${isActive ? "bg-accent text-primary" : "text-accent-foreground"}`}>
              {item.label}
            </NavLink>
          ))}
        </div>
        <Link
          to="/contact"
          className={cn(buttonVariants({ variant: "organic", size: "sm" }), "hidden md:inline-flex")}
        >
          Hire me
        </Link>
        <button className="grid h-11 w-11 place-items-center rounded-full bg-accent text-accent-foreground md:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open ? (
        <div className="mx-auto mt-3 max-w-6xl rounded-[2rem] border border-border/60 bg-surface/95 p-4 shadow-float backdrop-blur-md md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `block rounded-2xl px-5 py-3.5 font-bold transition-all duration-300 ${isActive ? "bg-primary text-primary-foreground shadow-soft" : "text-accent-foreground hover:bg-accent/50"}`}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <Link
            to="/contact"
            className={cn(buttonVariants({ variant: "organic", size: "lg" }), "mt-4 flex w-full items-center justify-center gap-2 py-4 text-base")}
            onClick={() => setOpen(false)}
          >
            Hire me <Send size={18} />
          </Link>
        </div>
      ) : null}
    </header>
  );
};

const Hero = () => (
  <section id="home" className="relative isolate overflow-hidden px-4 pb-24 pt-32 sm:px-6 lg:px-8">
    <OrganicBlob variant="one" className="left-[-8rem] top-24 h-80 w-80 bg-primary/20" />
    <OrganicBlob variant="two" className="right-[-6rem] top-40 h-96 w-96 bg-secondary/25" />
    <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
      <div>
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface/70 px-4 py-2 text-sm font-extrabold text-primary shadow-soft backdrop-blur-sm">
          <Sprout size={18} aria-hidden="true" /> Business Management Undergraduate
        </p>
        <h1 className="font-display text-5xl font-black leading-[0.98] text-foreground md:text-7xl">Tamim Mia</h1>
        <p className="mt-6 max-w-2xl text-xl leading-9 text-muted-foreground">
          Business Management undergraduate at Ravensbourne University London with hands-on experience in fast-paced customer operations, high-volume transactions, customer service, and operational efficiency.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button asChild variant="organic" size="xl">
            <Link to="/contact">Start a conversation <Send size={18} aria-hidden="true" /></Link>
          </Button>
          <Button asChild variant="organicOutline" size="xl">
            <a href="/Tamim-Mia-Cover-Letter.pdf" target="_blank" rel="noreferrer">View cover letter <ArrowUpRight size={18} aria-hidden="true" /></a>
          </Button>
        </div>
        <div className="mt-8 grid max-w-2xl grid-cols-1 gap-3 text-sm font-bold text-accent-foreground sm:grid-cols-3">
          <a className="inline-flex items-center gap-2 rounded-full bg-accent/70 px-4 py-3" href="tel:+447424630174"><Phone size={16} /> +44 7424 630174</a>
          <a className="inline-flex items-center gap-2 rounded-full bg-accent/70 px-4 py-3 sm:col-span-2" href="mailto:Imtiaztamim521@gmail.com"><Mail size={16} /> Imtiaztamim521@gmail.com</a>
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
        <div className="group rotate-[-2deg] rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] border-[10px] border-surface bg-surface p-3 shadow-float transition-transform duration-700 hover:rotate-0">
          <img src={headshot} alt="Tamim Mia portrait" className="aspect-[4/5] w-full rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
        </div>
        <div className="absolute -bottom-6 right-4 max-w-[14rem] rounded-[2rem_4rem_2rem_3rem] border border-border/60 bg-surface/90 p-5 shadow-soft backdrop-blur">
          <p className="font-display text-3xl font-bold text-primary">Corporate Internship</p>
          <p className="mt-1 text-sm font-bold text-muted-foreground">Business, sales, and operations focused</p>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="px-4 py-24 sm:px-6 lg:px-8">
    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div className="space-y-6 text-muted-foreground">
        <SectionHeading eyebrow="About Me" title="Turning Business Challenges into Measurable Results" />

        <div className="space-y-6 text-lg leading-relaxed">
          <p className="text-xl font-bold text-foreground">
            Business Management student at Ravensbourne University London with a strong focus on operational efficiency, revenue optimization, and customer experience excellence.
          </p>

          <p>
            I specialize in applying data-driven decision-making and structured problem-solving to improve business performance. My academic training includes strategic management, financial analysis, and entrepreneurship, allowing me to approach challenges with both analytical precision and commercial awareness.
          </p>

          <p>
            At Pret A Manger, I operate in a high-volume retail environment handling 400–500+ daily transactions. This experience has strengthened my ability to maintain speed, accuracy, and service quality under pressure while directly contributing to sales performance and customer retention. I consistently focus on upselling, reducing service friction, and improving overall operational flow.
          </p>

          <p>
            In addition, my role as Publicity and Publication Secretary for the Bangladeshi Community has developed my skills in digital communication, audience engagement, and campaign execution. I manage content distribution and outreach strategies aimed at increasing visibility and participation.
          </p>

          <p>
            I am particularly interested in roles related to business operations, consulting, and growth strategy, where I can contribute to improving efficiency, scaling systems, and driving measurable business outcomes.
          </p>

          <p className="font-bold text-primary italic">
            "I aim to deliver measurable impact by optimizing processes, enhancing customer experience, and supporting data-informed business decisions."
          </p>
        </div>
      </div>

      <div className="space-y-8">
        <div className="grid gap-4 sm:grid-cols-2">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-[2.5rem_1.5rem_2rem_1.5rem] border border-border/60 bg-accent/35 p-8 text-center shadow-soft transition-transform duration-300 hover:scale-[1.03]">
              <p className="font-display text-4xl font-black text-primary">{stat.value}</p>
              <p className="mt-2 text-xs font-extrabold uppercase tracking-widest text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="rounded-[3rem] border border-primary/20 bg-primary/5 p-8 shadow-soft backdrop-blur-sm">
          <h4 className="font-display text-xl font-bold text-foreground mb-4">Core Values</h4>
          <ul className="space-y-3">
            {[
              "Strategic Thinking & Long-term Vision",
              "Operational Excellence & Efficiency",
              "Customer-Centric Growth Mindset",
              "Collaborative & Inclusive Leadership"
            ].map((value) => (
              <li key={value} className="flex items-center gap-3 text-sm font-bold text-accent-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Education = () => (
  <section id="education" className="bg-secondary px-4 py-24 text-secondary-foreground sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <SectionHeading eyebrow="Education" title="Building a foundation for leadership" />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* University Main Card */}
        <div className="md:col-span-8 rounded-[3rem] border border-secondary-foreground/20 bg-secondary-foreground/5 p-8 md:p-12 shadow-soft backdrop-blur-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
            <GraduationCap size={120} />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground mb-6">
              Primary Academic Path
            </div>
            <h3 className="font-display text-3xl md:text-5xl font-bold mb-4">BSc (Hons) Business Management</h3>
            <p className="text-xl font-medium text-secondary-foreground/80 mb-8">Ravensbourne University London · 2025 - 2028 (Expected)</p>

            <p className="text-lg leading-relaxed text-secondary-foreground/70 max-w-2xl">
              Focusing on modern business strategy, financial modeling, and entrepreneurship. Actively engaged in professional workshops and industry networking events to bridge the gap between theory and practice.
            </p>
          </div>
        </div>

        {/* Academic Journey Summary */}
        <div className="md:col-span-4 rounded-[3rem] border border-secondary-foreground/20 bg-primary/20 p-8 flex flex-col justify-center shadow-soft">
          <Sparkles className="text-primary-foreground/40 mb-6" size={32} />
          <h4 className="font-display text-2xl font-bold mb-4">Academic Journey</h4>
          <p className="text-secondary-foreground/80 leading-relaxed font-medium">
            My path is tailored towards understanding complex market dynamics and developing leadership capabilities for the 2030s business world.
          </p>
        </div>

        {/* LinkedIn Certificates */}
        <div className="md:col-span-5 space-y-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px flex-1 bg-secondary-foreground/20" />
            <span className="text-xs font-bold uppercase tracking-widest opacity-60">Professional Certifications</span>
            <div className="h-px flex-1 bg-secondary-foreground/20" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { src: contentCertificate, title: "Content Marketing" },
              { src: brandingCertificate, title: "Personal Branding" }
            ].map((cert, i) => (
              <a key={i} href={cert.src} target="_blank" rel="noreferrer" className="group relative overflow-hidden rounded-[2rem] border border-secondary-foreground/20 bg-surface/10 p-2 shadow-soft transition-all hover:-translate-y-1 hover:bg-surface/20">
                <img src={cert.src} alt={cert.title} className="aspect-[4/3] w-full rounded-[1.5rem] object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="text-[10px] font-bold text-white uppercase tracking-wider mb-1">LinkedIn Learning</p>
                  <p className="text-sm font-bold text-white leading-tight">{cert.title}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Academic Achievement (HSC) */}
        <div className="md:col-span-6 rounded-[3rem] border border-secondary-foreground/20 bg-secondary-foreground/5 p-8 shadow-soft backdrop-blur-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
            <GraduationCap size={100} />
          </div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground mb-4">
              Higher Secondary
            </div>
            <h3 className="font-display text-2xl font-bold mb-2">HSC (A Level Equivalent)</h3>
            <p className="text-lg font-medium text-secondary-foreground/80 mb-1">Jaj Bhuiyan College</p>
            <p className="text-sm font-bold text-secondary-foreground/60 mb-6">Subject: Commerce · 2019 - 2021</p>
            <div className="inline-flex items-center gap-2 rounded-2xl bg-primary/20 px-4 py-2 border border-primary/20">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <p className="text-lg font-black text-primary-foreground">Grade: GPA 5.00 / 5.00</p>
            </div>
          </div>
        </div>

        {/* Academic Achievement (SSC) */}
        <div className="md:col-span-6 rounded-[3rem] border border-secondary-foreground/20 bg-secondary-foreground/5 p-8 shadow-soft backdrop-blur-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
            <CheckCircle2 size={100} />
          </div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground mb-4">
              Secondary Education
            </div>
            <h3 className="font-display text-2xl font-bold mb-2">SSC</h3>
            <p className="text-lg font-medium text-secondary-foreground/80 mb-1">Madhabdi S.P. Institution</p>
            <p className="text-sm font-bold text-secondary-foreground/60 mb-6">Class of 2019</p>
            <div className="inline-flex items-center gap-2 rounded-2xl bg-primary/20 px-4 py-2 border border-primary/20">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <p className="text-lg font-black text-primary-foreground">Grade: GPA 5.00 / 5.00</p>
            </div>
          </div>
        </div>

        {/* Achievements & Scholarships */}
        <div className="md:col-span-12 rounded-[3rem] border border-primary/20 bg-primary/10 p-8 md:p-12 shadow-soft backdrop-blur-sm relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/30 px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground mb-6">
                Special Recognition
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">Academic Excellence & Scholarships</h3>
              <p className="text-lg font-medium text-secondary-foreground/80">Reflecting a consistent track record of high achievement and commitment to learning.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Scholarship Award", detail: "£11,000 from Ravensbourne University London" },
                { title: "Perfect GPA", detail: "GPA 5.00/5.00 in both SSC & HSC" },
                { title: "Academic Excellence", detail: "Consistently ranked among top performers" },
                { title: "International Recognition", detail: "Recognized for strong academic potential" }
              ].map((ach, i) => (
                <div key={i} className="rounded-2xl bg-secondary-foreground/10 p-5 border border-secondary-foreground/10 group hover:bg-primary/20 transition-colors">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">{ach.title}</p>
                  <p className="text-sm font-bold text-secondary-foreground leading-tight">{ach.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Modules Grid */}
        <div className="md:col-span-12 rounded-[3rem] border border-secondary-foreground/20 bg-secondary-foreground/5 p-8 shadow-soft">
          <div className="flex items-center gap-4 mb-8">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/20 text-primary-foreground">
              <Terminal size={20} />
            </div>
            <h3 className="font-display text-2xl font-bold">Key Focus Areas</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              "Strategic Management",
              "Entrepreneurial Finance",
              "Business Operations",
              "Digital Marketing",
              "International Business",
              "Project Management"
            ].map((module) => (
              <div key={module} className="flex items-center gap-3 rounded-2xl bg-secondary-foreground/10 p-4 transition-all hover:bg-secondary-foreground/20 group">
                <div className="h-2 w-2 rounded-full bg-primary transition-all group-hover:scale-125" />
                <span className="text-sm font-bold opacity-90">{module}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="px-4 py-24 sm:px-6 lg:px-8 bg-surface/30">
    <SectionHeading eyebrow="Skills & Expertise" title="Comprehensive capabilities for modern operations" />

    <div className="mx-auto max-w-7xl space-y-20">
      {/* Professional Skills Grid */}
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
            <BriefcaseBusiness size={20} />
          </div>
          <h3 className="font-display text-2xl font-bold text-foreground">Professional Skills</h3>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {professionalSkills.map((skill, index) => (
            <div key={skill} className={`group flex items-center gap-3 ${organicRadii[index % organicRadii.length]} border border-border/60 bg-surface p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-float hover:border-primary/30`}>
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <CheckCircle2 size={16} aria-hidden="true" />
              </span>
              <p className="text-sm font-bold text-accent-foreground">{skill}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* IT & Tools Section */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-secondary/10 text-secondary">
              <Laptop size={20} />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground">IT & Tools</h3>
          </div>
          <div className="space-y-6 rounded-[2.5rem] border border-border/60 bg-surface/50 p-8 shadow-soft backdrop-blur-sm">
            {itTools.map((tool) => (
              <div key={tool.name} className="space-y-2">
                <div className="flex justify-between text-sm font-bold">
                  <span className="text-accent-foreground">{tool.name}</span>
                  <span className="text-secondary">{tool.level}%</span>
                </div>
                <Progress value={tool.level} className="h-2 bg-secondary/10" />
              </div>
            ))}
          </div>
        </div>

        {/* Languages Section */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent">
              <Languages size={20} />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground">Languages</h3>
          </div>
          <div className="space-y-6 rounded-[2.5rem] border border-border/60 bg-surface/50 p-8 shadow-soft backdrop-blur-sm">
            {languageSkills.map((lang) => (
              <div key={lang.name} className="space-y-2">
                <div className="flex justify-between text-sm font-bold">
                  <span className="text-accent-foreground">{lang.name}</span>
                  <span className="text-accent">{lang.level}%</span>
                </div>
                <Progress value={lang.level} className="h-2 bg-accent/10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="bg-primary px-4 py-24 text-primary-foreground sm:px-6 lg:px-8">
    <div className="mx-auto max-w-6xl">
      <SectionHeading eyebrow="Experience & Leadership" title="Driving growth through operational excellence" />

      <div className="grid gap-20">
        {/* Professional Progression Card */}
        <article className="rounded-[4rem_2rem_3rem_2rem] border border-primary-foreground/20 bg-primary-foreground/10 p-8 md:p-12 shadow-float backdrop-blur">
          <div className="mb-10 flex flex-wrap items-center gap-6">
            <span className="grid h-16 w-16 place-items-center rounded-2xl bg-primary-foreground text-primary shadow-soft"><BriefcaseBusiness size={32} aria-hidden="true" /></span>
            <div>
              <h3 className="font-display text-4xl font-bold">Pret A Manger</h3>
              <p className="text-xl font-bold text-primary-foreground/75">London · April 2025 - Present</p>
            </div>
          </div>

          <div className="space-y-10 relative before:absolute before:left-6 before:top-2 before:bottom-2 before:w-px before:bg-primary-foreground/20">
            {[
              {
                role: "Barista Leader",
                date: "April 2026 - Present",
                active: true,
                desc: [
                  "Leading daily team operations in a fast-paced environment",
                  "Training and supporting new team members",
                  "Maintaining high standards of customer service",
                  "Managing workflow during peak hours"
                ]
              },
              {
                role: "Barista",
                date: "July 2025 - April 2026",
                desc: [
                  "Optimized high-volume food and beverage preparation",
                  "Mastered fast-paced service workflows",
                  "Consistently met quality and speed benchmarks"
                ]
              },
              {
                role: "Team Member",
                date: "April 2025 - June 2025",
                desc: [
                  "Handled high transaction volumes with accuracy",
                  "Developed foundational customer service skills",
                  "Maintained operational excellence standards"
                ]
              }
            ].map((pos, idx) => (
              <div key={idx} className="relative pl-14">
                <div className={`absolute left-5 top-1.5 h-3 w-3 rounded-full border-2 border-primary-foreground ${pos.active ? 'bg-primary-foreground scale-125' : 'bg-transparent'}`} />
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <h4 className="text-2xl font-bold">{pos.role}</h4>
                  <span className="text-sm font-bold uppercase tracking-widest opacity-60">{pos.date}</span>
                </div>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {pos.desc.map((item, i) => (
                    <li key={i} className="flex gap-3 rounded-2xl bg-primary-foreground/10 p-4 text-sm font-medium leading-relaxed group hover:bg-primary-foreground/20 transition-colors">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-primary-foreground/60" size={16} aria-hidden="true" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>

        {/* Leadership Card */}
        <article className="rounded-[3rem_4rem_2rem_3rem] border border-primary-foreground/20 bg-primary-foreground/5 p-8 md:p-12 shadow-float backdrop-blur relative overflow-hidden group">
          <Sparkles className="absolute -top-10 -right-10 text-primary-foreground/10 group-hover:scale-150 transition-transform duration-1000" size={240} />
          <div className="relative z-10">
            <div className="mb-8 flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary-foreground/20">
                <Sprout size={24} />
              </div>
              <h3 className="font-display text-3xl font-bold">Leadership Roles</h3>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-2xl font-bold mb-2">Publicity & Publication Secretary</h4>
                <p className="font-bold text-primary-foreground/70 mb-6">Bangladeshi Community · Ravensbourne University London</p>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    "Managing communications and promotional activities for community events",
                    "Creating and publishing content across digital platforms",
                    "Coordinating with team members to increase student engagement"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors border border-primary-foreground/10">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary-foreground/60 mt-2 shrink-0" />
                      <p className="text-sm font-medium leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Volunteering Sub-section */}
        <div className="pt-10 border-t border-primary-foreground/10">
          <SectionHeading eyebrow="Giving Back" title="Community & Impact" />
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { name: "Bangladesh Red Crescent Society", role: "Member" },
              { name: "Bondhon Blood Donation Organization", role: "Member" }
            ].map((vol, i) => (
              <div key={i} className="flex items-center gap-6 p-8 rounded-[2.5rem] border border-primary-foreground/20 bg-primary-foreground/10 shadow-soft group hover:bg-primary-foreground/20 transition-all">
                <div className="h-14 w-14 grid place-items-center rounded-2xl bg-primary-foreground/20 text-primary-foreground transition-colors shadow-soft">
                  <CheckCircle2 />
                </div>
                <div>
                  <h4 className="text-xl font-bold">{vol.name}</h4>
                  <p className="text-sm font-bold opacity-60 uppercase tracking-widest mt-1">{vol.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch(contactEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        const data = await response.json();
        if (data.errors) {
          setErrorMessage(data.errors.map((error: any) => error.message).join(", "));
        } else {
          setErrorMessage("Oops! There was a problem submitting your form.");
        }
        setStatus("error");
      }
    } catch (error) {
      setErrorMessage("Oops! Connection error. Please try again later.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-secondary px-4 py-24 text-secondary-foreground sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="animate-in fade-in slide-in-from-left-4 duration-700">
          <p className="mb-3 font-body text-sm font-extrabold uppercase tracking-[0.18em] text-secondary-foreground/75">Contact</p>
          <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">Let’s connect about internships, sales, and business growth</h2>
          <div className="mt-8 grid gap-4">
            <a href="mailto:Imtiaztamim521@gmail.com" className="flex items-center gap-4 rounded-full bg-secondary-foreground/12 p-4 font-bold transition-colors hover:bg-secondary-foreground/18">
              <Mail size={22} /> Imtiaztamim521@gmail.com
            </a>
            <a href="tel:+447424630174" className="flex items-center gap-4 rounded-full bg-secondary-foreground/12 p-4 font-bold transition-colors hover:bg-secondary-foreground/18">
              <Phone size={22} /> +44 7424 630174
            </a>
            <a href="https://www.linkedin.com/in/tamim-mia-08a719349" target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-full bg-secondary-foreground/12 p-4 font-bold transition-colors hover:bg-secondary-foreground/18">
              <Linkedin size={22} /> LinkedIn Profile
            </a>
            <a href="/Tamim-Mia-CV.pdf" download className="flex items-center gap-4 rounded-full bg-secondary-foreground/12 p-4 font-bold transition-colors hover:bg-secondary-foreground/18">
              <Download size={22} /> Download CV
            </a>
            <p className="flex items-center gap-4 rounded-full bg-secondary-foreground/12 p-4 font-bold">
              <MapPin size={22} /> 19 W Arbour Street, E1 0PQ, London, GB
            </p>
          </div>
        </div>

        <div className="relative">
          {status === "success" ? (
            <div className="flex h-full min-h-[400px] flex-col items-center justify-center rounded-[4rem_2rem_3rem_2rem] border border-primary/20 bg-primary/10 p-12 text-center shadow-float backdrop-blur animate-in zoom-in-95 duration-500">
              <div className="mb-6 grid h-20 w-20 place-items-center rounded-full bg-primary text-primary-foreground shadow-soft transition-transform hover:scale-110">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="font-display text-3xl font-bold">Message Sent!</h3>
              <p className="mt-4 text-lg font-medium opacity-80">
                Thank you for reaching out, Tamim. I'll get back to you as soon as possible.
              </p>
              <Button
                onClick={() => setStatus("idle")}
                variant="organicLight"
                size="lg"
                className="mt-8"
              >
                Send another message
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-[4rem_2rem_3rem_2rem] border border-secondary-foreground/25 bg-secondary-foreground/12 p-6 shadow-float backdrop-blur md:p-8 animate-in fade-in slide-in-from-right-4 duration-700"
            >
              <div className="grid gap-5">
                <label className="grid gap-2 font-bold">
                  Name
                  <input
                    required
                    name="name"
                    disabled={status === "submitting"}
                    minLength={2}
                    maxLength={100}
                    className="h-12 rounded-full border border-secondary-foreground/25 bg-surface/90 px-5 text-foreground outline-none ring-offset-secondary transition-all focus-visible:ring-2 focus-visible:ring-secondary-foreground/70 disabled:opacity-50"
                  />
                </label>
                <label className="grid gap-2 font-bold">
                  Email
                  <input
                    required
                    name="email"
                    type="email"
                    disabled={status === "submitting"}
                    maxLength={255}
                    className="h-12 rounded-full border border-secondary-foreground/25 bg-surface/90 px-5 text-foreground outline-none ring-offset-secondary transition-all focus-visible:ring-2 focus-visible:ring-secondary-foreground/70 disabled:opacity-50"
                  />
                </label>
                <label className="grid gap-2 font-bold">
                  Message
                  <textarea
                    required
                    name="message"
                    disabled={status === "submitting"}
                    minLength={10}
                    maxLength={1000}
                    rows={5}
                    className="rounded-[1.75rem] border border-secondary-foreground/25 bg-surface/90 px-5 py-4 text-foreground outline-none ring-offset-secondary transition-all focus-visible:ring-2 focus-visible:ring-secondary-foreground/70 disabled:opacity-50"
                  />
                </label>

                {status === "error" && (
                  <p className="rounded-2xl bg-destructive/10 p-4 text-sm font-bold text-destructive animate-in shake-1">
                    {errorMessage}
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  variant="organicLight"
                  size="xl"
                  className="w-full sm:w-auto overflow-hidden relative"
                >
                  <span className={cn("inline-flex items-center gap-2 transition-transform duration-300", status === "submitting" ? "-translate-y-12" : "translate-y-0")}>
                    Send message <Send size={18} aria-hidden="true" />
                  </span>
                  {status === "submitting" && (
                    <span className="absolute inset-x-0 bottom-0 top-0 flex items-center justify-center gap-2 font-bold animate-in slide-in-from-bottom-8 duration-300">
                      Sending... <Sparkles size={18} className="animate-pulse" />
                    </span>
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

const pageSections = {
  home: <Hero />,
  about: <About />,
  education: <Education />,
  skills: <Skills />,
  experience: <Experience />,
  reflection: <Reflection />,
  contact: <Contact />,
};

export const HomePage = () => pageSections.home;
export const AboutPage = () => pageSections.about;
export const EducationPage = () => pageSections.education;
export const SkillsPage = () => pageSections.skills;
export const ExperiencePage = () => pageSections.experience;
export const ReflectionPage = () => pageSections.reflection;
export const ContactPage = () => pageSections.contact;

const Portfolio = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Tamim Mia",
      url: "https://tamimmia.netlify.app/",
      jobTitle: "Business Management Undergraduate",
      email: "mailto:Imtiaztamim521@gmail.com",
      telephone: "+44 7424 630174",
      address: { "@type": "PostalAddress", addressLocality: "London", addressCountry: "GB" },
      alumniOf: "Ravensbourne University London",
      sameAs: ["https://www.linkedin.com/in/tamim-mia-08a719349"],
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
    return () => script.remove();
  }, []);

  const getFooterBgColor = () => {
    switch (pathname) {
      case "/":
        return "bg-background";
      case "/about":
        return "bg-background";
      case "/education":
        return "bg-secondary";
      case "/skills":
        return "bg-surface/30";
      case "/experience":
        return "bg-primary";
      case "/reflection":
        return "bg-background";
      case "/contact":
        return "bg-secondary";
      default:
        return "bg-background";
    }
  };

  const getFooterTextColor = () => {
    switch (pathname) {
      case "/experience":
        return "text-primary-foreground/60";
      case "/contact":
      case "/education":
        return "text-secondary-foreground/60";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-background font-body text-foreground">
      <Navigation />
      {children}
      <footer className={`px-4 py-10 text-center text-sm font-bold transition-colors duration-500 ${getFooterBgColor()} ${getFooterTextColor()}`}>
        <p>© 2026 Tamim Mia · All rights reserved</p>
      </footer>
    </main>
  );
};

export default Portfolio;
