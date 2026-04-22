import { ArrowUpRight, BriefcaseBusiness, CheckCircle2, GraduationCap, HeartHandshake, Leaf, Linkedin, Mail, MapPin, Menu, Phone, Send, Sparkles, Sprout, X } from "lucide-react";
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
  "Customer engagement",
  "Consultative selling",
  "POS accuracy",
  "Upselling strategy",
  "Team support",
  "Market analysis",
  "Business strategy",
  "Publicity & publication",
  "Problem solving",
  "High-volume operations",
  "Communication",
  "Customer success mindset",
];

const stats = [
  { value: "400+", label: "daily customer transactions" },
  { value: "2028", label: "expected graduation" },
  { value: "2", label: "LinkedIn Learning certificates" },
  { value: "7", label: "reflection galleries" },
];

const organicRadii = ["rounded-organic-1", "rounded-organic-2", "rounded-organic-3", "rounded-organic-4"];

const reflections = [
  {
    title: "Class activities",
    note: "Collaborative learning, peer feedback, and business practice in action.",
    images: [classOne, classTwo, classThree, classFour, classFive],
  },
  {
    title: "Insight Hour Event",
    note: "Industry conversations that shaped my understanding of professional growth.",
    images: [insightOne, insightTwo, insightThree, insightFour, insightFive, insightSix],
  },
  {
    title: "RaveLate Event",
    note: "Event energy, coordination, and community moments captured through participation.",
    images: [raveOne, raveTwo, raveThree, raveFour],
  },
  {
    title: "Community",
    note: "Building belonging through shared cultural and student experiences.",
    images: [communityOne, communityTwo],
  },
  {
    title: "Leadership",
    note: "Developing confidence through responsibility, service, and visible contribution.",
    images: [leadershipOne, leadershipTwo],
  },
  {
    title: "Publicity & Publication Secretary",
    note: "Serving the Bangladeshi Community through communication and representation.",
    images: [publicationOne, publicationTwo],
  },
  {
    title: "Presentation",
    note: "Sharing ideas clearly, confidently, and with audience awareness.",
    images: [presentationOne, presentationTwo],
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
          Business Management student at Ravensbourne University London, building a career in technology sales through customer engagement, operations, and community leadership.
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
          <p className="font-display text-3xl font-bold text-primary">SaaS Sales</p>
          <p className="mt-1 text-sm font-bold text-muted-foreground">Customer success focused internship goal</p>
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
          I am motivated, adaptable, and goal-oriented. My background combines academic business study with hands-on customer operations in London, where speed, accuracy, empathy, and teamwork matter every day.
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
      Academic work at Ravensbourne University London supports my interest in SaaS sales, CRM, consumer behaviour, and data-informed growth.
    </SectionHeading>
    <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
      <article className="rounded-[2rem_5rem_2rem_3rem] border border-border/60 bg-surface p-8 shadow-soft lg:col-span-2">
        <GraduationCap className="mb-6 text-primary" size={44} aria-hidden="true" />
        <h3 className="font-display text-3xl font-bold text-foreground">Ravensbourne University London</h3>
        <p className="mt-3 text-lg font-extrabold text-primary">Business Management undergraduate — Level 5 student</p>
        <p className="mt-5 leading-8 text-muted-foreground">Expected to finish by January 2028. Current focus areas include marketing, consumer behaviour, business strategy, market analysis, and data-driven projects.</p>
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
          <p className="mt-6 text-lg leading-8 text-primary-foreground/80">At Pret A Manger in London, I developed operational accuracy, customer rapport, and resilience under pressure.</p>
        </div>
        <article className="rounded-[4rem_2rem_3rem_2rem] border border-primary-foreground/20 bg-primary-foreground/10 p-8 shadow-float backdrop-blur">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary-foreground text-primary"><BriefcaseBusiness size={28} aria-hidden="true" /></span>
            <div>
              <h3 className="font-display text-3xl font-bold">Pret A Manger</h3>
              <p className="font-bold text-primary-foreground/75">Team Member · London</p>
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

const Reflection = () => (
  <section id="reflection" className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
    <OrganicBlob variant="one" className="right-[-10rem] top-20 h-[30rem] w-[30rem] bg-accent/70" />
    <SectionHeading eyebrow="Reflection" title="A bento gallery of learning, community, and leadership">
      Moments from class activities, events, presentations, community work, and my role as publicity and publication secretary.
    </SectionHeading>
    <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:auto-rows-[24rem] lg:grid-cols-6 lg:gap-6">
      {reflections.map((group, index) => (
        <article key={group.title} className={`group relative min-h-[22rem] overflow-hidden ${organicRadii[index % organicRadii.length]} border border-border/60 bg-surface shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-float ${index === 0 || index === 1 ? "lg:col-span-3 lg:row-span-2 lg:min-h-[32rem]" : index === 2 ? "lg:col-span-4" : "lg:col-span-2"}`}>
          <div className="grid h-full min-h-[22rem] grid-cols-2 gap-1.5 p-2 lg:min-h-full">
            {group.images.slice(0, 4).map((image, imageIndex) => (
              <img key={image} src={image} alt={`${group.title} reflection image ${imageIndex + 1}`} className={`h-full min-h-36 w-full rounded-[1.35rem] object-cover transition-transform duration-700 group-hover:scale-105 ${imageIndex === 0 && group.images.length < 3 ? "col-span-2" : ""}`} loading="lazy" />
            ))}
          </div>
          <div className="absolute inset-x-3 bottom-3 rounded-[1.5rem_2rem_1.5rem_1.8rem] border border-border/50 bg-surface/92 p-4 shadow-soft backdrop-blur-md sm:inset-x-4 sm:bottom-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-xl font-black leading-tight text-foreground sm:text-2xl">{group.title}</h3>
                <p className="mt-1 line-clamp-2 text-sm font-bold leading-6 text-muted-foreground">{group.note}</p>
              </div>
              <Sparkles className="shrink-0 text-secondary" size={22} aria-hidden="true" />
            </div>
          </div>
        </article>
      ))}
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
          <p className="flex items-center gap-4 rounded-full bg-secondary-foreground/12 p-4 font-bold"><MapPin size={22} /> London, United Kingdom</p>
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

const Portfolio = () => {
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
        <p>© {new Date().getFullYear()} Tamim Mia · Business Management Portfolio</p>
      </footer>
    </main>
  );
};

export default Portfolio;
