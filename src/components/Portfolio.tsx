import { ArrowUpRight, BriefcaseBusiness, CheckCircle2, Download, GraduationCap, HeartHandshake, Leaf, Linkedin, Mail, MapPin, Menu, Phone, Send, Sparkles, Sprout, X } from "lucide-react";
import { type ReactNode, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

import headshot from "@/assets/portfolio/tamim-headshot-photo.jpg";
import contentCertificate from "@/assets/portfolio/Content-Marketing-Certificate.png";
import brandingCertificate from "@/assets/portfolio/Personal-Branding-Certificate.png";
import classOne from "@/assets/portfolio/Class-activities1.jpg";
import classTwo from "@/assets/portfolio/Class-activities2.jpg";
import classThree from "@/assets/portfolio/Class-activities3.jpg";
import classFour from "@/assets/portfolio/Class-activities4.jpg";
import classFive from "@/assets/portfolio/Class-activities5.jpg";
import insightOne from "@/assets/portfolio/Insight-Hour-Event1.jpg";
import insightTwo from "@/assets/portfolio/Insight-Hour-Event2.jpg";
import insightThree from "@/assets/portfolio/Insight-Hour-Event3.jpg";
import insightFour from "@/assets/portfolio/Insight-Hour-Event4.jpg";
import insightFive from "@/assets/portfolio/Insight-Hour-Event5.jpg";
import insightSix from "@/assets/portfolio/Insight-Hour-Event6.jpg";
import raveOne from "@/assets/portfolio/Rave-Late-Event1.jpg";
import raveTwo from "@/assets/portfolio/Rave-Late-Event2.jpg";
import raveThree from "@/assets/portfolio/Rave-Late-Event3.jpg";
import raveFour from "@/assets/portfolio/Rave-Late-Event4.jpg";
import communityOne from "@/assets/portfolio/Community1.jpg";
import communityTwo from "@/assets/portfolio/Community2.jpg";
import leadershipOne from "@/assets/portfolio/leadership1.jpg";
import leadershipTwo from "@/assets/portfolio/leadership2.jpg";
import presentationOne from "@/assets/portfolio/Presentation1.jpg";
import presentationTwo from "@/assets/portfolio/Presentation2.jpg";
import publicationOne from "@/assets/portfolio/Publication-Secretary1.jpg";
import publicationTwo from "@/assets/portfolio/Publication-Secretary2.jpg";

const contactEndpoint = "https://formspree.io/f/mzdyjwkn";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/education", label: "Education" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/reflection", label: "Reflection" },
  { href: "/contact", label: "Contact" },
];

const skills = [
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

const stats = [
  { value: "400–500+", label: "daily customer transactions" },
  { value: "2028", label: "expected graduation" },
  { value: "2", label: "LinkedIn Learning certificates" },
  { value: "Level 5", label: "Business Management student" },
];

const organicRadii = ["rounded-organic-1", "rounded-organic-2", "rounded-organic-3", "rounded-organic-4"];

const reflectionStories = [
  {
    number: "01",
    title: "Teamwork & Collaboration",
    note: "While working on group presentations, I led research and segmentation efforts. I contribute to team projects with preparation, clear communication, and constructive feedback.",
    images: [classOne, classTwo, classThree],
  },
  {
    number: "02",
    title: "University Insight",
    note: "Engaging with creative professionals at Ravensbourne helped me understand how creativity, innovation, and business strategy work together.",
    images: [insightOne, insightTwo, insightThree, insightFour, insightFive, insightSix],
  },
  {
    number: "03",
    title: "Career Insight",
    note: "Career fairs and insight hours gave me direct exposure to recruitment trends, employer expectations, and the qualities companies value most.",
    images: [contentCertificate, brandingCertificate, presentationOne],
  },
  {
    number: "04",
    title: "“Prem O Porob”",
    note: "Proud to be part of celebrating Valentine’s Day and Pohela Falgun at Ravensbourne, bringing the community together through culture, music, and performance.",
    images: [raveOne, raveTwo, raveThree, raveFour],
  },
  {
    number: "05",
    title: "Community Leadership",
    note: "Community building has strengthened my discipline, creative collaboration, audience awareness, and ability to connect with diverse groups.",
    images: [communityOne, communityTwo, leadershipOne, leadershipTwo, publicationOne, publicationTwo],
  },
  {
    number: "06",
    title: "Looking Ahead",
    note: "My goal is to become a business consultant, gain real-world experience, and eventually start my own business while continuing to build skills in sales, strategy, and leadership.",
    images: [presentationTwo],
  },
];

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
        <Button asChild variant="organic" size="sm" className="hidden md:inline-flex">
          <Link to="/contact">Hire me</Link>
        </Button>
        <button className="grid h-11 w-11 place-items-center rounded-full bg-accent text-accent-foreground md:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open ? (
        <div className="mx-auto mt-3 max-w-6xl rounded-[2rem] border border-border/60 bg-surface/95 p-3 shadow-float backdrop-blur-md md:hidden">
          {navItems.map((item) => (
            <NavLink key={item.href} to={item.href} onClick={() => setOpen(false)} className={({ isActive }) => `block rounded-full px-5 py-3 font-bold transition-colors hover:bg-accent ${isActive ? "bg-accent text-primary" : "text-accent-foreground"}`}>
              {item.label}
            </NavLink>
          ))}
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
    <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
      <div className="rounded-[4rem_2rem_3rem_2rem] border border-border/60 bg-accent/45 p-8 shadow-soft">
        <HeartHandshake className="mb-6 text-primary" size={42} aria-hidden="true" />
        <h2 className="font-display text-4xl font-bold text-foreground">About Tamim</h2>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          Business Management undergraduate at Ravensbourne University London with hands-on experience in fast-paced customer operations. Skilled in managing high-volume transactions, delivering excellent customer service, and supporting operational efficiency.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {stats.map((stat, index) => (
          <div key={stat.label} className={`group ${organicRadii[index % organicRadii.length]} border border-border/60 bg-surface p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-float`}>
            <p className="font-display text-5xl font-black text-primary transition-transform duration-300 group-hover:scale-110">{stat.value}</p>
            <p className="mt-2 font-bold leading-7 text-accent-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Education = () => (
  <section id="education" className="relative overflow-hidden bg-muted/35 px-4 py-24 sm:px-6 lg:px-8">
    <OrganicBlob variant="three" className="bottom-[-8rem] left-1/2 h-96 w-96 bg-secondary/20" />
    <SectionHeading eyebrow="Education" title="Learning business through strategy, marketing, and practice">
      Academic work at Ravensbourne University London supports my interest in business strategy, marketing, consumer behaviour, SaaS sales, and data-informed growth.
    </SectionHeading>
    <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
      <article className="rounded-[2rem_5rem_2rem_3rem] border border-border/60 bg-surface p-8 shadow-soft lg:col-span-2">
        <GraduationCap className="mb-6 text-primary" size={44} aria-hidden="true" />
        <h3 className="font-display text-3xl font-bold text-foreground">Ravensbourne University London</h3>
        <p className="mt-3 text-lg font-extrabold text-primary">Business Management undergraduate — Level 5 student</p>
        <p className="mt-5 leading-8 text-muted-foreground">BSc (Hons) Business Management in London. Level 5 student, expected to finish by January 2028. Current focus areas include marketing, consumer behaviour, business strategy, market analysis, and data-driven projects.</p>
      </article>
      <div className="grid gap-8">
        {[contentCertificate, brandingCertificate].map((certificate, index) => (
          <figure key={certificate} className="group rounded-[2rem] border border-border/60 bg-surface p-3 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:rotate-1 hover:shadow-float">
            <img src={certificate} alt={index === 0 ? "LinkedIn Learning certificate for Content Marketing Customer Engagement" : "LinkedIn Learning certificate for Personal Branding"} className="aspect-[16/10] w-full rounded-[1.4rem] object-cover" loading="lazy" />
            <figcaption className="px-3 pb-2 pt-4 text-sm font-extrabold text-accent-foreground">LinkedIn Learning Certificate</figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="px-4 py-24 sm:px-6 lg:px-8">
    <SectionHeading eyebrow="Skills" title="Rounded strengths for sales, service, and operations">
      A practical skillset shaped by high-volume work, business learning, and leadership responsibilities.
    </SectionHeading>
    <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {skills.map((skill, index) => (
        <div key={skill} className={`group flex min-h-28 items-center gap-4 ${organicRadii[index % organicRadii.length]} border border-border/60 bg-surface p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-float`}>
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
            <CheckCircle2 size={24} aria-hidden="true" />
          </span>
          <p className="font-extrabold text-accent-foreground">{skill}</p>
        </div>
      ))}
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
            {["Managed 400–500+ daily transactions in a high-volume environment", "Delivered excellent customer service and improved satisfaction", "Operated efficiently during peak hours to reduce waiting time", "Processed payments accurately using POS systems", "Maintained food safety and hygiene standards", "Trained and supported new team members", "Applied upselling techniques to support revenue growth", "Resolved customer issues professionally"].map((item) => (
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

const GalleryImage = ({ src, alt, className = "", imgClassName = "object-cover" }: { src: string; alt: string; className?: string; imgClassName?: string }) => (
  <figure className={`group/image overflow-hidden rounded-[2rem] border border-border/60 bg-surface p-2 shadow-soft ${className}`}>
    <img src={src} alt={alt} className={`h-full min-h-48 w-full rounded-[1.35rem] transition-transform duration-700 group-hover/image:scale-105 ${imgClassName}`} loading="lazy" />
  </figure>
);

const Reflection = () => (
  <section id="reflection" className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
    <OrganicBlob variant="one" className="right-[-10rem] top-20 h-[30rem] w-[30rem] bg-accent/70" />
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto mb-12 max-w-4xl text-center">
        <p className="mb-3 font-body text-sm font-extrabold uppercase tracking-[0.18em] text-secondary">Reflection</p>
        <h2 className="font-display text-4xl font-bold leading-tight text-foreground md:text-5xl">Employability & Experience Gallery</h2>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">A visual reflection of my journey at Ravensbourne University London.</p>
      </div>
      <div className="mb-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="rounded-[4rem_2rem_3rem_2rem] border border-border/60 bg-accent/45 p-6 shadow-soft md:p-8">
          <p className="text-xl font-extrabold leading-8 text-foreground">I’m passionate about learning, growing, and helping businesses thrive through strategic thinking and collaboration.</p>
          <p className="mt-5 leading-8 text-muted-foreground">This site showcases my employability skills and experiences as I prepare for a successful career in business and entrepreneurship. From university workshops to community events, every moment has shaped my professional identity.</p>
        </div>
        <GalleryImage src={headshot} alt="Tamim Mia professional portrait" className="rotate-[-1deg]" imgClassName="aspect-[16/11] object-cover" />
      </div>
      <div className="grid gap-8">
        {reflectionStories.map((story, index) => (
          <article key={story.title} className={`grid gap-5 rounded-[3rem_2rem_4rem_2rem] border border-border/60 bg-surface/80 p-4 shadow-soft md:p-6 lg:grid-cols-2 lg:items-stretch ${index % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
            <div className="flex min-h-72 flex-col justify-between rounded-[2.25rem] bg-muted/55 p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <span className="font-display text-5xl font-black text-secondary/70">{story.number}</span>
                <Sparkles className="shrink-0 text-primary" size={26} aria-hidden="true" />
              </div>
              <div>
                <h3 className="mt-8 font-display text-3xl font-black leading-tight text-foreground md:text-4xl">{story.title}</h3>
                <p className="mt-4 text-base font-bold leading-8 text-muted-foreground md:text-lg">{story.note}</p>
              </div>
            </div>
            <div className="grid auto-rows-[12rem] grid-cols-2 gap-3 sm:auto-rows-[14rem] md:grid-cols-3 lg:auto-rows-[11rem]">
              {story.images.map((image, imageIndex) => (
                <GalleryImage key={image} src={image} alt={`${story.title} image ${imageIndex + 1}`} className={`${imageIndex === 0 ? "col-span-2 row-span-2 md:col-span-2" : ""} ${story.images.length === 1 ? "col-span-2 row-span-2 md:col-span-3" : ""}`} />
              ))}
            </div>
          </article>
        ))}
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

  return (
    <main className="min-h-screen overflow-hidden bg-background font-body text-foreground">
      <Navigation />
      {children}
      <footer className="px-4 py-10 text-center text-sm font-bold text-muted-foreground">
        <p>© 2026 Tamim Mia ·</p>
      </footer>
    </main>
  );
};

export default Portfolio;
