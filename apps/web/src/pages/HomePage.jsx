import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Code2,
  Server,
  Wrench,
  Terminal,
  Trophy,
  Award,
  ExternalLink,
  Menu,
  X,
  Sparkles,
  ChevronRight,
  Cpu,
  Braces,
} from "lucide-react";

const PROFILE_IMG =
  "https://horizons-cdn.hostinger.com/c1c4af78-c151-4675-9685-f9b53c1ba82c/83e36437c36c5a48aabd34a20a76314a.png";
const STUDY_NOTION_IMG =
  "https://images.hostinger.com/fbe54be7-9a2a-4ca9-a870-a37ae86f2cfe.png";
const AI_PLATFORM_IMG =
  "https://images.hostinger.com/522e2062-981f-4d8c-83e8-93f54e215d87.png";

const links = {
  github: "https://github.com/Arjun20X",
  linkedin: "https://linkedin.com/in/",
  leetcode: "https://leetcode.com/u/arjun8960962697/",
  gfg: "https://www.geeksforgeeks.org/profile/arjunpratapswph8",
  codeforces: "https://codeforces.com/profile/arjunpratapsingh2082004",
  codechef: "https://www.codechef.com/users/kettle_lark_99",
  email: "arjunpratapsingh2082004@gmail.com",
  phone: "+91 8960962697",
};

const nav = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

const skillGroups = [
  {
    icon: Code2,
    title: "Frontend",
    items: [
      "React.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "UI/UX Fundamentals",
    ],
  },
  {
    icon: Server,
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JWT Auth",
      "Flask",
    ],
  },
  {
    icon: Wrench,
    title: "Tools & DevOps",
    items: [
      "Git & GitHub",
      "Postman",
      "VS Code",
      "MongoDB Compass",
      "Cloudinary",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    icon: Terminal,
    title: "Languages & OS",
    items: ["C++", "JavaScript", "Windows", "Linux"],
  },
];

const proficiency = [
  { name: "React.js", level: 92 },
  { name: "Node.js / Express", level: 88 },
  { name: "MongoDB", level: 82 },
  { name: "JavaScript (ES6+)", level: 90 },
  { name: "C++ / DSA", level: 86 },
  { name: "Tailwind CSS", level: 90 },
];

const projects = [
  {
    name: "Study Notion",
    period: "May 2025 – Jun 2025",
    img: STUDY_NOTION_IMG,
    tag: "EdTech Platform",
    repo: "https://github.com/Arjun20X/StudyNotion",
    live: "https://study-notion-six-amber.vercel.app/",
    desc: "A full-featured ed-tech platform for creating, buying and consuming online courses.",
    points: [
      "Built React modules for dashboard, auth and course pages",
      "OTP-based email verification with secure JWT authentication",
      "Integrated Razorpay payment gateway for course purchases",
      "End-to-end state management and API integration",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Razorpay"],
  },
  {
    name: "Skill_Bridge_AI",
    period: "Nov 2025 – Dec 2025",
    img: AI_PLATFORM_IMG,
    tag: "AI / ML",
    repo: "https://github.com/Arjun20X/Skill_Bridge_AI",
    live: "https://aiskillgap.netlify.app/",
    desc: "An intelligent platform that analyses skill gaps and recommends personalised learning paths.",
    points: [
      "React frontend built with reusable modular components",
      "Consumed REST APIs using Axios with clean error handling",
      "Integrated a Flask NLP microservice for skill analysis",
      "Optimized rendering for a smooth, fast experience",
    ],
    stack: ["React", "Flask", "NLP", "Axios", "REST"],
  },
];

const achievements = [
  {
    icon: Award,
    title: "AWS Certified Cloud Practitioner",
    sub: "Amazon Web Services",
  },
  { icon: Trophy, title: "533 Global Rank", sub: "CodeChef Starters 226" },
  { icon: Cpu, title: "Pupil @ Codeforces", sub: "Rating 1319" },
  { icon: Trophy, title: "2★ @ CodeChef", sub: "Rating 1565" },
  { icon: Braces, title: "LeetCode", sub: "Rating 1610" },
  { icon: Award, title: "SIH Runner-up", sub: "Institute Level" },
];

const marqueeItems = [
  "React",
  "Node.js",
  "MongoDB",
  "Express",
  "JavaScript",
  "C++",
  "Tailwind",
  "Flask",
  "Docker",
  "JWT",
  "REST APIs",
  "Git",
];

const ease = [0.22, 1, 0.36, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

function Section({ id, children, className = "" }) {
  return (
    <motion.section
      id={id}
      className={`relative mx-auto w-full max-w-6xl px-6 py-24 md:py-32 ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{ show: { transition: { staggerChildren: 0.08 } } }}
    >
      {children}
    </motion.section>
  );
}

function Label({ children }) {
  return (
    <motion.div variants={fadeUp} className="mb-4 flex items-center gap-3">
      <span className="h-px w-8 bg-primary" />
      <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
        {children}
      </span>
    </motion.div>
  );
}

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const bar = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <motion.div
        style={{ scaleX: bar }}
        className="fixed left-0 top-0 z-[60] h-0.5 w-full origin-left bg-gradient-to-r from-primary to-secondary"
      />

      {/* Nav */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-border bg-background/80 backdrop-blur-xl" : ""}`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <button
            onClick={() => go("home")}
            className="font-display text-lg font-bold tracking-tight"
          >
            APS<span className="text-primary">.</span>
          </button>
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
              </button>
            ))}
          </nav>
          <button
            onClick={() => go("contact")}
            className="hidden rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 active:scale-95 md:block"
          >
            Hire Me
          </button>
          <button
            className="md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-t border-border bg-background/95 px-6 py-4 md:hidden"
          >
            {nav.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className="block w-full py-3 text-left text-muted-foreground"
              >
                {n.label}
              </button>
            ))}
            <button
              onClick={() => go("contact")}
              className="mt-2 w-full rounded-full bg-primary py-2.5 font-semibold text-primary-foreground"
            >
              Hire Me
            </button>
          </motion.div>
        )}
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-[100dvh] items-center overflow-hidden grid-bg pt-28"
      >
        <div className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[500px] glow" />
        <div
          className="pointer-events-none absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(circle,hsl(var(--secondary)/0.22),transparent 60%)",
          }}
        />
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Available for internships , freelance & full-time
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            >
              Arjun Pratap
              <br />
              <span className="text-gradient">Singh</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-md text-lg text-muted-foreground"
            >
              Full-Stack Developer building fast, scalable web apps with the
              MERN stack — and a competitive programmer who has solved{" "}
              <span className="text-foreground">1300+ DSA problems</span>.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={() => go("projects")}
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-105 active:scale-95"
              >
                View My Work{" "}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <button
                onClick={() => go("contact")}
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-semibold transition-colors hover:bg-muted"
              >
                Let's Talk
              </button>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="mt-8 flex items-center gap-5 text-muted-foreground"
            >
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-primary"
              >
                <Github />
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-primary"
              >
                <Linkedin />
              </a>
              <a
                href={`mailto:${links.email}`}
                className="transition-colors hover:text-primary"
              >
                <Mail />
              </a>
              <span className="flex items-center gap-1.5 text-sm">
                <MapPin className="h-4 w-4" /> Ghaziabad, UP
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-primary/30 to-secondary/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border">
              <img
                src={PROFILE_IMG}
                alt="Arjun Pratap Singh"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background to-transparent p-5">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-primary">{"<full-stack />"}</span>
                  <span className="text-muted-foreground">B.Tech CSE '27</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <div className="relative overflow-hidden border-y border-border bg-card/40 py-4">
        <div className="flex w-max animate-marquee gap-4">
          {[...marqueeItems, ...marqueeItems].map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-4 font-display text-xl font-medium text-muted-foreground"
            >
              {t} <Sparkles className="h-4 w-4 text-primary/60" />
            </span>
          ))}
        </div>
      </div>

      {/* About */}
      <Section id="about">
        <Label>About Me</Label>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl font-bold md:text-4xl"
          >
            Turning ideas into reliable, well-crafted software.
          </motion.h2>
          <motion.div
            variants={fadeUp}
            className="space-y-4 text-muted-foreground md:col-span-2"
          >
            <p className="text-lg leading-relaxed">
              I'm a Computer Science undergrad at KIET Group of Institutions
              with a strong foundation in data structures, algorithms and modern
              web engineering. I love designing clean APIs, building responsive
              interfaces, and shipping products that feel effortless to use.
            </p>
            <p className="leading-relaxed">
              Whether it's an ed-tech platform with secure payments or an
              AI-powered learning tool, I focus on scalable architecture,
              thoughtful UX and code that's a pleasure to maintain.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-4">
              {[
                ["1300+", "DSA Solved"],
                ["1", "Internship & Freelance"],
                ["79%", "B.Tech CGPA"],
                ["5+", "Coding Platforms"],
              ].map(([n, l]) => (
                <div
                  key={l}
                  className="rounded-2xl border border-border bg-card/50 p-4"
                >
                  <div className="font-display text-2xl font-bold text-primary">
                    {n}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <h3 className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">
                Education
              </h3>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="text-foreground">B.Tech CSE</span> — KIET
                  Group of Institutions · 2023–2027 · 79%
                </p>
                <p>
                  <span className="text-foreground">12th CBSE</span> — Harmilap
                  Mission School · 86.4%
                </p>
                <p>
                  <span className="text-foreground">10th CBSE</span> — Harmilap
                  Mission School · 94.4%
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills">
        <Label>Tech Stack</Label>
        <motion.h2
          variants={fadeUp}
          className="mb-12 font-display text-3xl font-bold md:text-4xl"
        >
          Skills & <span className="text-gradient">capabilities</span>
        </motion.h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((g) => (
            <motion.div
              key={g.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/50"
            >
              <g.icon className="h-7 w-7 text-primary" strokeWidth={1.6} />
              <h3 className="mt-4 font-display text-lg font-semibold">
                {g.title}
              </h3>
              <ul className="mt-3 space-y-1.5">
                {g.items.map((i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-primary/70" /> {i}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-6 rounded-2xl border border-border bg-card/40 p-8 sm:grid-cols-2">
          {proficiency.map((p) => (
            <motion.div key={p.name} variants={fadeUp}>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-medium">{p.name}</span>
                <span className="font-mono text-xs text-primary">
                  {p.level}%
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-muted">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${p.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects">
        <Label>Selected Work</Label>
        <motion.h2
          variants={fadeUp}
          className="mb-12 font-display text-3xl font-bold md:text-4xl"
        >
          Projects I've <span className="text-gradient">built</span>
        </motion.h2>
        <div className="space-y-8">
          {projects.map((p, idx) => (
            <motion.article
              key={p.name}
              variants={fadeUp}
              className={`group grid grid-cols-1 gap-8 overflow-hidden rounded-3xl border border-border bg-card/40 p-6 md:grid-cols-2 md:p-8 ${idx % 2 ? "md:[direction:rtl]" : ""}`}
            >
              <div className="relative overflow-hidden rounded-2xl border border-border [direction:ltr]">
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center [direction:ltr]">
                <div className="mb-3 flex items-center gap-3">
                  <span className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
                    {p.tag}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {p.period}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold">{p.name}</h3>
                <p className="mt-2 text-muted-foreground">{p.desc}</p>
                <ul className="mt-4 space-y-2">
                  {p.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex gap-2 text-sm text-muted-foreground"
                    >
                      <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{" "}
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  <a
                    href={p.repo || links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 active:scale-95"
                  >
                    <Github className="h-4 w-4" /> Code
                  </a>
                  <a
                    href={p.live || p.repo || links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-semibold transition-colors hover:bg-muted"
                  >
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience">
        <Label>Experience</Label>
        <motion.h2
          variants={fadeUp}
          className="mb-12 font-display text-3xl font-bold md:text-4xl"
        >
          Where I've <span className="text-gradient">worked</span>
        </motion.h2>
        <motion.div
          variants={fadeUp}
          className="relative border-l border-border pl-8"
        >
          <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-primary bg-background" />
          <div className="rounded-2xl border border-border bg-card/50 p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-display text-xl font-bold">
                Backend Developer Intern
              </h3>
              <span className="font-mono text-xs text-primary">
                Sep 2024 – Nov 2024
              </span>
            </div>
            <p className="mt-1 text-muted-foreground">
              Envol Hire · Remote · Internship
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {[
                "Integrated REST APIs with React components",
                "Debugged API and data-flow issues across the stack",
                "Built backend modules with Node.js, Express & MongoDB (JWT auth)",
                "Tested and validated APIs using Postman",
                "Maintained modular, scalable and clean code",
              ].map((t) => (
                <li
                  key={t}
                  className="flex gap-2 text-sm text-muted-foreground"
                >
                  <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{" "}
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </Section>

      {/* Achievements */}
      <Section id="achievements">
        <Label>Achievements</Label>
        <motion.h2
          variants={fadeUp}
          className="mb-12 font-display text-3xl font-bold md:text-4xl"
        >
          Certifications & <span className="text-gradient">wins</span>
        </motion.h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a) => (
            <motion.div
              key={a.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/50"
            >
              <div className="rounded-xl bg-primary/10 p-3">
                <a.icon className="h-6 w-6 text-primary" strokeWidth={1.6} />
              </div>
              <div>
                <h3 className="font-display font-semibold leading-tight">
                  {a.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{a.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact">
        <motion.div
          variants={fadeUp}
          className="relative overflow-hidden rounded-3xl border border-border bg-card/40 p-10 text-center md:p-16 grid-bg"
        >
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 glow" />
          <div className="relative">
            <Label>
              <span className="mx-auto inline-block">Get in touch</span>
            </Label>
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold md:text-5xl">
              Let's build something{" "}
              <span className="text-gradient">exceptional</span> together.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              Open to full-time roles, internships and freelance collaborations.
              Drop a message and I'll get back within a day.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${links.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-105 active:scale-95"
              >
                <Mail className="h-4 w-4" /> Email Me
              </a>
              <a
                href={`tel:${links.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-semibold transition-colors hover:bg-muted"
              >
                <Phone className="h-4 w-4" /> {links.phone}
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm">
              {[
                ["GitHub", links.github],
                ["LinkedIn", links.linkedin],
                ["LeetCode", links.leetcode],
                ["Codeforces", links.codeforces],
                ["CodeChef", links.codechef],
                ["GeeksforGeeks", links.gfg],
              ].map(([l, u]) => (
                <a
                  key={l}
                  href={u}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
          <span className="font-display font-bold text-foreground">
            Arjun Pratap Singh<span className="text-primary">.</span>
          </span>
          <span>
            © {new Date().getFullYear()} — Built with React & Tailwind.
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4" /> Ghaziabad, Uttar Pradesh
          </span>
        </div>
      </footer>
    </div>
  );
}
