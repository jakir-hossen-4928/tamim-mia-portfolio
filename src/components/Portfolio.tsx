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

const contactEndpoint = "https://formspree.io/f/mzdyjwkn";

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
        <SectionHeading eyebrow="About Me" title="Driven by efficiency, growth, and excellence" />
        
        <div className="space-y-6 text-lg leading-relaxed">
          <p className="text-xl font-bold text-foreground">
            I am a dedicated Business Management student at Ravensbourne University London, committed to mastering the intersection of operational efficiency and strategic growth.
          </p>
          
          <p>
            My academic journey is centered on developing a robust understanding of modern business dynamics, including strategic management, financial modeling, and entrepreneurship. I believe that success in today's fast-paced economy requires a blend of analytical rigor and creative problem-solving.
          </p>

          <p>
            In the professional sphere, my experience at Pret A Manger in London has been transformative. Managing high-volume customer operations and 400-500+ daily transactions has instilled in me a deep sense of sales discipline, operational accuracy, and resilience under pressure. I pride myself on my ability to build customer rapport while maintaining strict efficiency standards.
          </p>

          <p>
            Beyond academics and work, I am deeply involved in community leadership. As the Publicity and Publication Secretary of the Bangladeshi Community, I manage communications and digital outreach, honing my ability to connect diverse audiences and lead collaborative initiatives.
          </p>

          <p className="font-bold text-primary italic">
            "My ultimate goal is to leverage these experiences to become a business consultant, helping organizations navigate complexity and achieve sustainable excellence."
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
            <h3 className="font-display text-3xl md:text-5xl font-bold mb-4">BA (Hons) Business Management</h3>
            <p className="text-xl font-medium text-secondary-foreground/80 mb-8">Ravensbourne University London · 2024 - 2028 (Expected)</p>
            
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

        {/* Key Modules Grid */}
        <div className="md:col-span-7 rounded-[3rem] border border-secondary-foreground/20 bg-secondary-foreground/5 p-8 shadow-soft">
          <div className="flex items-center gap-4 mb-8">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/20 text-primary-foreground">
              <Terminal size={20} />
            </div>
            <h3 className="font-display text-2xl font-bold">Key Focus Areas</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
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
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="mb-3 font-body text-sm font-extrabold uppercase tracking-[0.18em] text-primary-foreground/75">Experience</p>
          <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">Fast-paced service turned into sales discipline</h2>
          <p className="mt-6 text-lg leading-8 text-primary-foreground/80">At Pret A Manger in London, I developed sales discipline, operational accuracy, customer rapport, and resilience under pressure from January 2025 to present.</p>
        </div>
        <article className="rounded-[4rem_2rem_3rem_2rem] border border-primary-foreground/20 bg-primary-foreground/10 p-8 shadow-float backdrop-blur">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary-foreground text-primary"><BriefcaseBusiness size={28} aria-hidden="true" /></span>
            <div>
              <h3 className="font-display text-3xl font-bold">Pret A Manger</h3>
              <p className="font-bold text-primary-foreground/75">Team Member (Customer Operations) · London · Jan 2025 - Present</p>
            </div>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              "Managed 400-500+ daily transactions in a high-volume environment",
              "Delivered excellent customer service and improved satisfaction",
              "Operated efficiently during peak hours, reducing waiting time",
              "Processed payments with high accuracy using POS systems",
              "Maintained food safety and hygiene standards",
              "Trained and supported new team members",
              "Applied upselling techniques to support revenue growth",
              "Resolved customer issues professionally"
            ].map((item) => (
              <li key={item} className="flex gap-3 rounded-[1.5rem] bg-primary-foreground/10 p-4 text-sm font-bold leading-6">
                <CheckCircle2 className="mt-0.5 shrink-0" size={18} aria-hidden="true" /> {item}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="relative overflow-hidden bg-secondary px-4 py-24 text-secondary-foreground sm:px-6 lg:px-8">
    <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p className="mb-3 font-body text-sm font-extrabold uppercase tracking-[0.18em] text-secondary-foreground/75">Contact</p>
        <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">Let’s connect about internships, sales, and business growth</h2>
        <div className="mt-8 grid gap-4">
          <a href="mailto:Imtiaztamim521@gmail.com" className="flex items-center gap-4 rounded-full bg-secondary-foreground/12 p-4 font-bold transition-colors hover:bg-secondary-foreground/18"><Mail size={22} /> Imtiaztamim521@gmail.com</a>
          <a href="tel:+447424630174" className="flex items-center gap-4 rounded-full bg-secondary-foreground/12 p-4 font-bold transition-colors hover:bg-secondary-foreground/18"><Phone size={22} /> +44 7424 630174</a>
          <a href="https://www.linkedin.com/in/tamim-mia-08a719349" target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-full bg-secondary-foreground/12 p-4 font-bold transition-colors hover:bg-secondary-foreground/18"><Linkedin size={22} /> LinkedIn Profile</a>
          <a href="/Tamim-Mia-CV.pdf" download className="flex items-center gap-4 rounded-full bg-secondary-foreground/12 p-4 font-bold transition-colors hover:bg-secondary-foreground/18"><Download size={22} /> Download CV</a>
          <p className="flex items-center gap-4 rounded-full bg-secondary-foreground/12 p-4 font-bold"><MapPin size={22} /> 19 W Arbour Street, E1 0PQ, London, GB</p>
        </div>
      </div>
      <form action={contactEndpoint} method="POST" className="rounded-[4rem_2rem_3rem_2rem] border border-secondary-foreground/25 bg-secondary-foreground/12 p-6 shadow-float backdrop-blur md:p-8">
        <div className="grid gap-5">
          <label className="grid gap-2 font-bold">Name<input required name="name" minLength={2} maxLength={100} className="h-12 rounded-full border border-secondary-foreground/25 bg-surface/90 px-5 text-foreground outline-none ring-offset-secondary transition-shadow focus-visible:ring-2 focus-visible:ring-secondary-foreground/70" /></label>
          <label className="grid gap-2 font-bold">Email<input required name="email" type="email" maxLength={255} className="h-12 rounded-full border border-secondary-foreground/25 bg-surface/90 px-5 text-foreground outline-none ring-offset-secondary transition-shadow focus-visible:ring-2 focus-visible:ring-secondary-foreground/70" /></label>
          <label className="grid gap-2 font-bold">Message<textarea required name="message" minLength={10} maxLength={1000} rows={5} className="rounded-[1.75rem] border border-secondary-foreground/25 bg-surface/90 px-5 py-4 text-foreground outline-none ring-offset-secondary transition-shadow focus-visible:ring-2 focus-visible:ring-secondary-foreground/70" /></label>
          <Button type="submit" variant="organicLight" size="xl" className="w-full sm:w-auto">Send message <Send size={18} aria-hidden="true" /></Button>
        </div>
      </form>
    </div>
  </section>
);

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
