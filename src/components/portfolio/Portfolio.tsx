import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowRight,
  Brain,
  Shield,
  Cpu,
  Database,
  Cloud,
  Network,
  Github,
  Linkedin,
  Mail,
  Download,
  Terminal,
  Sparkles,
  Atom,
  Zap,
  Lock,
  Code2,
  GraduationCap,
  MapPin,
  Briefcase,
  Award,
  Activity,
  ChevronRight,
  ExternalLink,
  Rocket,
} from "lucide-react";
import { NeuralBrain } from "./NeuralBrain";

/* ----------------------------- Shared bits ----------------------------- */

function SectionLabel({ children, n }: { children: React.ReactNode; n: string }) {
  return (
    <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
      <span className="text-gradient-aurora font-mono">{n}</span>
      <span className="h-px flex-1 max-w-16 bg-gradient-to-r from-[color:var(--aurora-blue)]/60 to-transparent" />
      <span>{children}</span>
    </div>
  );
}

function Section({
  id,
  label,
  number,
  title,
  subtitle,
  children,
}: {
  id: string;
  label: string;
  number: string;
  title: React.ReactNode;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative mx-auto w-full max-w-7xl px-6 py-28 md:py-36">
      <SectionLabel n={number}>{label}</SectionLabel>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">{subtitle}</p>
      )}
      <div className="mt-12">{children}</div>
    </section>
  );
}

/* ---------------------------- 0. Side rail nav ---------------------------- */

const NAV = [
  { id: "neural", label: "Neural Core" },
  { id: "identity", label: "Identity" },
  { id: "about", label: "About Me" },
  { id: "universe", label: "Universe" },
  { id: "lab", label: "Lab" },
  { id: "experience", label: "Experience" },
  { id: "certs", label: "Certs" },
  { id: "metrics", label: "Metrics" },
  { id: "mission", label: "Mission" },
  { id: "future", label: "Future" },
  { id: "connect", label: "Connect" },
];

function DimensionalNav() {
  return (
    <nav className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
      <ul className="space-y-3">
        {NAV.map((n) => (
          <li key={n.id}>
            <a
              href={`#${n.id}`}
              className="group flex items-center gap-3 text-xs uppercase tracking-wider text-muted-foreground transition hover:text-[color:var(--aurora-blue)]"
            >
              <span className="h-px w-6 bg-white/20 transition-all group-hover:w-10 group-hover:bg-[color:var(--aurora-blue)]" />
              <span className="opacity-0 transition-opacity group-hover:opacity-100">
                {n.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* ---------------------------- 1. Neural Core ---------------------------- */

function Hero({ onRecruiter }: { onRecruiter: () => void }) {
  return (
    <section
      id="neural"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <NeuralBrain />
      </div>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 0%, rgba(8,11,20,0.4) 60%, #080B14 100%)",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.3em]"
        >
          <span className="status-online">System Online · v5.0</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl font-semibold leading-[0.95] tracking-tight md:text-8xl"
        >
          <span className="block">AAISHA</span>
          <span className="block text-gradient-aurora">VERMA</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground md:text-base"
        >
          {[
            "AI/ML Engineer",
            "Cybersecurity Enthusiast",
            "Full Stack Developer",
            "Chaos Coder",
          ].map((r, i) => (
            <span key={r} className="flex items-center gap-3">
              {i > 0 && <span className="h-1 w-1 rounded-full bg-[color:var(--aurora-blue)]" />}
              {r}
            </span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/80 md:text-xl"
        >
          Exploring Intelligence. Securing Systems.{" "}
          <span className="text-gradient-cyber">Engineering the Future.</span>
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 max-w-xl border-l-2 border-[color:var(--cosmic-violet)] pl-4 text-left text-sm italic text-muted-foreground"
        >
          "Curious enough to question systems. Determined enough to build better ones."
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#connect"
            className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-[#08111f] transition hover:scale-[1.03]"
            style={{ background: "var(--gradient-aurora)" }}
          >
            Let's Connect <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
          <a
            href="#lab"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium transition hover:border-[color:var(--aurora-blue)]"
          >
            View Projects
          </a>
          <a
            href="/cv.pdf"
            download="Aaisha-Verma-CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium transition hover:border-[color:var(--aurora-green)]"
          >
            <Download className="h-4 w-4" /> Download CV
          </a>
          <button
            onClick={onRecruiter}
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--cherry-rose)]/50 px-6 py-3 text-sm font-medium text-[color:var(--cherry-rose)] transition hover:bg-[color:var(--cherry-rose)]/10"
          >
            <Zap className="h-4 w-4" /> Recruiter Mode
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95 }}
          className="mt-8 flex items-center gap-5 text-muted-foreground"
        >
          <a aria-label="GitHub" href="https://github.com/Sh4D0WB0T" target="_blank" rel="noreferrer" className="transition hover:text-[color:var(--aurora-blue)]">
            <Github className="h-5 w-5" />
          </a>
          <a aria-label="LinkedIn" href="https://www.linkedin.com/in/sh4d0wb0t" target="_blank" rel="noreferrer" className="transition hover:text-[color:var(--aurora-blue)]">
            <Linkedin className="h-5 w-5" />
          </a>
          <a aria-label="Email" href="mailto:aaishaverma5351@gmail.com" className="transition hover:text-[color:var(--aurora-blue)]">
            <Mail className="h-5 w-5" />
          </a>
        </motion.div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
        scroll to enter
      </div>
    </section>
  );
}

/* ----------------------- 2. Digital Identity Hologram ----------------------- */

function IdentityHologram() {
  const rows: [string, string][] = [
    ["NAME", "Aaisha Verma"],
    ["STATUS", "ONLINE"],
    ["UNIVERSITY", "OP Jindal University"],
    ["DEGREE", "B.Tech CSE"],
    ["SPECIALIZATION", "AI & Machine Learning"],
    ["YEAR", "4th Year"],
    ["CGPA", "7.5 / 10"],
    ["LOCATION", "Jamshedpur, India"],
    ["AVAILABILITY", "Internships · Full-Time"],
    ["MISSION", "BUILDING THE FUTURE"],
  ];
  return (
    <Section
      id="identity"
      number="02"
      label="Digital Identity"
      title={<>A holographic <span className="text-gradient-aurora">ID card.</span></>}
      subtitle="Authentication packet broadcast from the AURORA NEXUS core."
    >
      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, rotateX: -20 }}
          whileInView={{ opacity: 1, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-md float-y"
        >
          <div className="scanline relative overflow-hidden rounded-2xl glass-strong p-6">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[color:var(--aurora-blue)]">
                <Sparkles className="h-3.5 w-3.5" /> ID · 0xA4-V3R
              </div>
              <span className="status-online text-xs uppercase tracking-widest text-[color:var(--aurora-green)]">
                Online
              </span>
            </div>
            <div className="mb-6 flex items-center gap-4">
              <div
                className="flex h-16 w-16 items-center justify-center rounded-2xl text-xl font-bold text-[#08111f]"
                style={{ background: "var(--gradient-aurora)" }}
              >
                AV
              </div>
              <div>
                <div className="text-xl font-semibold">Aaisha Verma</div>
                <div className="text-sm text-muted-foreground">AI Security Architect in training</div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {rows.map(([k, v]) => (
                <div key={k}>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{k}</div>
                  <div className="text-sm">{v}</div>
                </div>
              ))}
            </div>
            <div
              className="mt-6 h-px w-full"
              style={{ background: "var(--gradient-aurora)" }}
            />
            <div className="mt-3 flex justify-between text-[10px] uppercase tracking-widest text-muted-foreground">
              <span>AURORA NEXUS</span>
              <span>v5.0 · STABLE</span>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* --------------------------- 3. Motherboard / About --------------------------- */

const MB_COMPONENTS = [
  { icon: Cpu, name: "CPU Core", role: "Problem Solving", tint: "var(--aurora-blue)" },
  { icon: Shield, name: "Security Chip", role: "Cybersecurity", tint: "var(--cherry-rose)" },
  { icon: Brain, name: "Neural Processor", role: "Artificial Intelligence", tint: "var(--cosmic-violet)" },
  { icon: Database, name: "Memory Module", role: "Knowledge", tint: "var(--aurora-green)" },
  { icon: Network, name: "Network Controller", role: "Communication", tint: "var(--champagne-gold)" },
  { icon: Cloud, name: "Cloud Engine", role: "Infrastructure", tint: "var(--sakura-pink)" },
];

function AboutMe() {
  return (
    <Section
      id="about"
      number="03"
      label="About Me"
      title={<>About <span className="text-gradient-aurora">me.</span></>}
      subtitle="The systems, ideas, and obsessions inside the engineer."
    >
        <div className="mx-auto max-w-3xl space-y-6">
          <p className="text-lg leading-relaxed text-foreground/85">
            I'm a Computer Science Engineering student specializing in{" "}
            <span className="text-[color:var(--aurora-blue)]">Artificial Intelligence</span> and{" "}
            <span className="text-[color:var(--cosmic-violet)]">Machine Learning</span>, with a
            growing obsession for <span className="text-[color:var(--cherry-rose)]">Cybersecurity</span>{" "}
            and software engineering.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            My journey revolves around building intelligent systems, understanding complex
            technologies, and shipping solutions that solve real-world problems. I constantly explore
            emerging tech and believe innovation begins with curiosity and continuous learning.
          </p>
          <div className="grid grid-cols-2 gap-3 pt-2 text-sm sm:grid-cols-3">
            {MB_COMPONENTS.map((c) => (
              <div key={c.name} className="flex items-center gap-2 rounded-lg glass px-3 py-2">
                <c.icon className="h-4 w-4" style={{ color: c.tint }} />
                <span className="text-foreground/80">{c.role}</span>
              </div>
            ))}
          </div>
        </div>
    </Section>
  );
}

/* --------------------------- 4. CE Universe / Skills --------------------------- */

const SKILL_PLANETS = [
  {
    name: "AI Planet",
    color: "var(--cosmic-violet)",
    skills: ["Neural Networks", "Prompt Engineering", "AI Agents", "Gemini / OpenAI APIs"],
  },
  {
    name: "Machine Learning",
    color: "var(--aurora-blue)",
    skills: ["Python", "Scikit-learn", "Pandas", "Numpy", "Model Evaluation"],
  },
  {
    name: "Cybersecurity",
    color: "var(--cherry-rose)",
    skills: ["Password Security", "Threat Monitoring", "WebSocket Defense", "Auth Hardening"],
  },
  {
    name: "Full Stack",
    color: "var(--aurora-green)",
    skills: ["JavaScript / TS", "React", "FastAPI", ".NET", "HTML / CSS"],
  },
  {
    name: "Data & Analytics",
    color: "var(--champagne-gold)",
    skills: ["Power BI", "SQL", "DBMS", "Dashboard Design"],
  },
  {
    name: "Automation",
    color: "var(--sakura-pink)",
    skills: ["Binance API", "Trading Bots", "Python Scripts", "Logging Systems"],
  },
  {
    name: "Languages",
    color: "var(--aurora-blue)",
    skills: ["Python", "Java", "JavaScript", "C#", "TypeScript"],
  },
  {
    name: "Tools",
    color: "var(--cosmic-violet)",
    skills: ["Git", "GitHub", "Figma", "VS Code", "Power BI"],
  },
];

function Universe() {
  const [active, setActive] = useState(0);
  return (
    <Section
      id="universe"
      number="04"
      label="Computer Engineering Universe"
      title={<>An orbit of <span className="text-gradient-aurora">skills.</span></>}
      subtitle="Computer Engineering core surrounded by domain planets. Tap one to explore."
    >
      <div className="grid items-start gap-10 md:grid-cols-[1.1fr_1fr]">
        {/* Orbit */}
        <div className="relative mx-auto aspect-square w-full max-w-[520px]">
          {/* center */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div
              className="flex h-24 w-24 items-center justify-center rounded-full text-xs font-semibold tracking-widest text-[#08111f]"
              style={{ background: "var(--gradient-aurora)" }}
            >
              CE CORE
            </div>
          </div>
          {/* rings */}
          {[40, 60, 80].map((p) => (
            <div
              key={p}
              className="absolute left-1/2 top-1/2 rounded-full border border-white/10"
              style={{ width: `${p}%`, height: `${p}%`, transform: "translate(-50%,-50%)" }}
            />
          ))}
          {/* planets */}
          {SKILL_PLANETS.map((p, i) => {
            const angle = (i / SKILL_PLANETS.length) * Math.PI * 2;
            const r = 44; // %
            const x = 50 + Math.cos(angle) * r;
            const y = 50 + Math.sin(angle) * r;
            const isActive = i === active;
            return (
              <button
                key={p.name}
                onClick={() => setActive(i)}
                className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition"
                style={{ left: `${x}%`, top: `${y}%` }}
                aria-label={p.name}
              >
                <span
                  className={`block rounded-full transition ${isActive ? "scale-110" : ""}`}
                  style={{
                    width: isActive ? 28 : 18,
                    height: isActive ? 28 : 18,
                    background: p.color,
                    boxShadow: `0 0 ${isActive ? 30 : 14}px ${p.color}`,
                  }}
                />
                <span
                  className={`mt-2 block text-[10px] uppercase tracking-widest transition ${
                    isActive ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {p.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <div className="rounded-2xl glass p-6">
          <div className="mb-4 flex items-center gap-3">
            <span
              className="h-3 w-3 rounded-full"
              style={{ background: SKILL_PLANETS[active].color, boxShadow: `0 0 14px ${SKILL_PLANETS[active].color}` }}
            />
            <h3 className="text-xl font-semibold">{SKILL_PLANETS[active].name}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {SKILL_PLANETS[active].skills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs"
              >
                {s}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Skills mapped from real projects in the AI Research Lab below — including BlackHawk AI,
            the Trading Bot, the Password Analyzer, and the Sales Analytics dashboard.
          </p>
        </div>
      </div>
    </Section>
  );
}

/* --------------------------- 5. AI Research Laboratory --------------------------- */

type Project = {
  id: string;
  title: string;
  objective: string;
  tech: string[];
  features?: string[];
  status: string;
  impact: string;
  flagship?: boolean;
  live?: string;
  github?: string;
};

const PROJECTS: Project[] = [
  {
    id: "AI-001",
    title: "Vendor Tracking System",
    objective: "Vendor registration and workflow tracking platform.",
    tech: ["Web Technologies", "DBMS", "SQL"],
    status: "Successful",
    impact: "Improved tracking and monitoring of vendor workflows.",
  },
  {
    id: "AI-002",
    title: "Sales Analytics Dashboard",
    objective: "Compare business performance across India and Netherlands.",
    tech: ["Power BI", "Data Analytics", "SQL"],
    status: "Successful",
    impact: "Created interactive business insights for cross-region performance.",
  },
  {
    id: "AI-003",
    title: "Password Strength Analyzer",
    objective: "Modern password security analysis platform.",
    tech: ["HTML", "CSS", "JavaScript"],
    features: [
      "Real-time validation",
      "Password strength analysis",
      "Security recommendations",
      "Smart suggestions",
      "Secure password generation",
    ],
    status: "Deployed",
    impact: "Promotes cybersecurity awareness and secure password practices.",
    live: "https://sh4d0wb0t.github.io/password-checker/",
    github: "https://github.com/Sh4D0WB0T",
  },
  {
    id: "AI-004",
    title: "Simplified Trading Bot",
    objective: "Automated Binance Futures Testnet trading system.",
    tech: ["Python", "Binance API", "Automation"],
    features: ["Market Orders", "Limit Orders", "Buy / Sell Support", "Input Validation", "Logging System"],
    status: "Completed",
    impact: "Demonstrates automation, APIs and system engineering.",
    github: "https://github.com/Sh4D0WB0T",
  },
  {
    id: "AI-005",
    title: "BlackHawk AI",
    objective: "Autonomous AI-powered cyber defense ecosystem.",
    tech: ["Python", "FastAPI", "Machine Learning", "WebSockets", "Cybersecurity"],
    features: [
      "Threat Monitoring",
      "Alert Management",
      "AI Analysis",
      "Security Dashboards",
      "Threat Visualization",
    ],
    status: "In Development",
    impact: "Building intelligent cyber defense infrastructure.",
    flagship: true,
    github: "https://github.com/Sh4D0WB0T",
  },
];

function StatusPill({ status }: { status: string }) {
  const map: Record<string, string> = {
    Successful: "var(--aurora-green)",
    Completed: "var(--aurora-green)",
    Deployed: "var(--aurora-blue)",
    "In Development": "var(--cherry-rose)",
  };
  const c = map[status] ?? "var(--aurora-blue)";
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10px] uppercase tracking-widest"
      style={{ color: c, borderColor: `${c}55` }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: c, boxShadow: `0 0 8px ${c}` }} />
      {status}
    </span>
  );
}

function Lab() {
  return (
    <Section
      id="lab"
      number="05"
      label="AI Research Laboratory"
      title={<>Classified <span className="text-gradient-aurora">experiments.</span></>}
      subtitle="Each project is a research artifact — objective, technology, status, impact."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.05 }}
            className={`relative overflow-hidden rounded-2xl p-6 ${
              p.flagship ? "glass-strong glow-violet md:col-span-2" : "glass"
            }`}
          >
            {p.flagship && (
              <div className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] uppercase tracking-widest text-[#08111f]"
                style={{ background: "var(--gradient-aurora)" }}>
                <Rocket className="h-3 w-3" /> Flagship Project
              </div>
            )}
            <div className="mb-3 flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
              <span className="font-mono text-[color:var(--aurora-blue)]">EXPERIMENT {p.id}</span>
              <StatusPill status={p.status} />
            </div>
            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.objective}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px]">
                  {t}
                </span>
              ))}
            </div>
            {p.features && (
              <ul className="mt-4 grid grid-cols-1 gap-1.5 text-sm sm:grid-cols-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-foreground/80">
                    <ChevronRight className="h-3.5 w-3.5 text-[color:var(--aurora-blue)]" />
                    {f}
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
              <div className="text-xs text-muted-foreground">
                <span className="text-foreground/70">Impact · </span>
                {p.impact}
              </div>
              <div className="flex shrink-0 items-center gap-2">
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs text-[#08111f]"
                    style={{ background: "var(--gradient-aurora)" }}
                  >
                    Live Demo <ExternalLink className="h-3 w-3" />
                  </a>
                )}
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-xs transition hover:border-white/40"
                  >
                    <Github className="h-3 w-3" /> GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

/* --------------------------- 6. Cyber Command Center --------------------------- */

function CyberCenter() {
  const feed = [
    { sev: "HIGH", msg: "Brute-force pattern detected · auth/login", color: "var(--cherry-rose)" },
    { sev: "MED", msg: "Suspicious outbound WebSocket frame", color: "var(--champagne-gold)" },
    { sev: "LOW", msg: "TLS handshake anomaly · region: APAC", color: "var(--aurora-blue)" },
    { sev: "INFO", msg: "BlackHawk AI policy update v0.4.2 deployed", color: "var(--aurora-green)" },
    { sev: "HIGH", msg: "Credential stuffing wave neutralized", color: "var(--cherry-rose)" },
  ];
  return (
    <Section
      id="cyber"
      number="06"
      label="Cyber Command Center"
      title={<>A simulated <span className="text-gradient-aurora">SOC.</span></>}
      subtitle="A snapshot of how I think about security — monitoring, signal, and response."
    >
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl glass p-6 md:col-span-2">
          <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-widest text-muted-foreground">
            <span className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-[color:var(--aurora-green)]" /> Threat Feed · Live
            </span>
            <span className="status-online">Operational</span>
          </div>
          <ul className="space-y-3 font-mono text-sm">
            {feed.map((f, i) => (
              <li key={i} className="flex items-center gap-3">
                <span
                  className="rounded px-1.5 py-0.5 text-[10px] font-semibold"
                  style={{ color: f.color, border: `1px solid ${f.color}44` }}
                >
                  {f.sev}
                </span>
                <span className="text-foreground/85">{f.msg}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          {[
            { icon: Shield, t: "Threat Intelligence", d: "OSINT pipelines, IoC enrichment" },
            { icon: Lock, t: "Auth Hardening", d: "Password security & secure flows" },
            { icon: Brain, t: "AI Analysis", d: "ML-driven anomaly detection" },
          ].map((b) => (
            <div key={b.t} className="rounded-xl glass p-4">
              <div className="flex items-center gap-3">
                <b.icon className="h-5 w-5 text-[color:var(--aurora-blue)]" />
                <div>
                  <div className="text-sm font-semibold">{b.t}</div>
                  <div className="text-xs text-muted-foreground">{b.d}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* --------------------------- 7. Evolution Timeline --------------------------- */

const EVOLUTION = [
  { v: "v1.0", title: "Programming Foundations", note: "First lines of Python, Java, C#." },
  { v: "v2.0", title: "Web Development Internship", note: "Academor — frontend craft." },
  { v: "v3.0", title: "Data Analytics Exploration", note: "Cisco · Power BI dashboards." },
  { v: "v4.0", title: "Cybersecurity Exploration", note: "Password security, threat modeling." },
  { v: "v5.0", title: "AI Systems Development", note: "Agents, ML, BlackHawk AI." },
  { v: "vFuture", title: "AI Security Architect", note: "Autonomous defense + AGI safety." },
];

function Evolution() {
  return (
    <Section
      id="evolution"
      number="07"
      label="Engineer Evolution Timeline"
      title={<>Shipped as <span className="text-gradient-aurora">versions.</span></>}
    >
      <ol className="relative space-y-6 border-l border-white/10 pl-6">
        {EVOLUTION.map((e, i) => (
          <motion.li
            key={e.v}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="relative"
          >
            <span
              className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full"
              style={{ background: i === EVOLUTION.length - 1 ? "var(--gradient-aurora)" : "var(--aurora-blue)", boxShadow: "0 0 12px var(--aurora-blue)" }}
            />
            <div className="flex flex-wrap items-baseline gap-x-3">
              <span className="font-mono text-sm text-[color:var(--aurora-blue)]">AAISHA {e.v}</span>
              <h3 className="text-lg font-semibold">{e.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{e.note}</p>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}

/* --------------------------- 8. Experience --------------------------- */

function Experience() {
  const items = [
    {
      org: "Tata Steel Limited",
      role: "IT Services Internship",
      time: "Jun 2025 – Aug 2025",
      dept: "Engineering & Projects IT Applications",
      bullets: ["Enterprise IT exposure", "Vendor Systems", "Corporate technology environment"],
    },
    {
      org: "Academor",
      role: "Web Development Internship",
      time: "Mar 2024 – Apr 2024",
      dept: "Frontend Development",
      bullets: ["2-Month training", "Web Development", "Hands-on frontend"],
    },
  ];
  return (
    <Section
      id="experience"
      number="08"
      label="Experience Center"
      title={<>Real <span className="text-gradient-aurora">missions.</span></>}
    >
      <div className="grid gap-5 md:grid-cols-2">
        {items.map((x) => (
          <div key={x.org} className="rounded-2xl glass p-6">
            <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
              <Briefcase className="h-4 w-4 text-[color:var(--aurora-blue)]" /> {x.time}
            </div>
            <h3 className="text-xl font-semibold">{x.org}</h3>
            <div className="text-sm text-[color:var(--aurora-blue)]">{x.role}</div>
            <div className="mt-1 text-xs text-muted-foreground">{x.dept}</div>
            <ul className="mt-4 space-y-1.5 text-sm">
              {x.bullets.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <ChevronRight className="h-3.5 w-3.5 text-[color:var(--aurora-green)]" /> {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* --------------------------- 9. Certifications --------------------------- */

function Certs() {
  const list = [
    { t: "Web Development Certification", o: "Academor", c: "var(--aurora-blue)" },
    { t: "Data Analytics Essentials", o: "Cisco Networking Academy", c: "var(--cosmic-violet)" },
    { t: "Tata Steel Vocational Training", o: "IT Services", c: "var(--cherry-rose)" },
  ];
  return (
    <Section
      id="certs"
      number="09"
      label="Certification Center"
      title={<>Verified <span className="text-gradient-aurora">credentials.</span></>}
    >
      <div className="grid gap-5 md:grid-cols-3">
        {list.map((c) => (
          <motion.div
            key={c.t}
            whileHover={{ y: -6 }}
            className="rounded-2xl glass p-6"
          >
            <div
              className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
              style={{ background: `linear-gradient(135deg, ${c.c}, transparent)` }}
            >
              <Award className="h-6 w-6 text-white" />
            </div>
            <div className="text-sm uppercase tracking-widest text-muted-foreground">{c.o}</div>
            <div className="mt-1 text-lg font-semibold">{c.t}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* --------------------------- 10. Metrics --------------------------- */

function Metrics() {
  const stats = [
    { label: "CGPA", value: "7.5" },
    { label: "Internships", value: "2" },
    { label: "Certifications", value: "3+" },
    { label: "Featured Projects", value: "5+" },
    { label: "University Year", value: "4th" },
    { label: "Open to Work", value: "YES" },
  ];
  return (
    <Section
      id="metrics"
      number="10"
      label="Engineering Metrics"
      title={<>Mission <span className="text-gradient-aurora">telemetry.</span></>}
    >
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl glass p-5 text-center">
            <div className="text-3xl font-semibold text-gradient-aurora md:text-4xl">{s.value}</div>
            <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* --------------------------- 11. Current Mission --------------------------- */

function Mission() {
  const blocks = [
    {
      title: "Currently Learning",
      items: ["Cybersecurity", "AI Agents", "Cloud Security"],
      icon: GraduationCap,
      color: "var(--aurora-blue)",
    },
    {
      title: "Currently Building",
      items: ["BlackHawk AI", "AI Cyber Defense Platform"],
      icon: Code2,
      color: "var(--cosmic-violet)",
    },
    {
      title: "Current Focus",
      items: ["Artificial Intelligence", "Machine Learning", "Cybersecurity"],
      icon: Activity,
      color: "var(--cherry-rose)",
    },
  ];
  return (
    <Section
      id="mission"
      number="11"
      label="Current Mission"
      title={<>Right <span className="text-gradient-aurora">now.</span></>}
    >
      <div className="grid gap-5 md:grid-cols-3">
        {blocks.map((b) => (
          <div key={b.title} className="rounded-2xl glass p-6">
            <b.icon className="h-6 w-6" style={{ color: b.color }} />
            <h3 className="mt-3 text-lg font-semibold">{b.title}</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-foreground/85">
              {b.items.map((i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: b.color }} /> {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* --------------------------- 12. Future Tech --------------------------- */

function Future() {
  const list = [
    { t: "Artificial General Intelligence", s: "Researching", icon: Brain },
    { t: "AI Agents", s: "Building", icon: Sparkles },
    { t: "Quantum Security", s: "Learning", icon: Atom },
    { t: "Autonomous Cyber Defense", s: "Developing", icon: Shield },
  ];
  return (
    <Section
      id="future"
      number="12"
      label="Future Technology Center"
      title={<>Years <span className="text-gradient-aurora">ahead.</span></>}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((x) => (
          <div key={x.t} className="rounded-2xl glass p-5">
            <x.icon className="h-6 w-6 text-[color:var(--aurora-blue)]" />
            <div className="mt-3 text-base font-semibold">{x.t}</div>
            <div className="mt-1 text-xs uppercase tracking-widest text-[color:var(--aurora-green)]">
              · {x.s}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* --------------------------- 15. Let's Connect --------------------------- */

function Connect() {
  return (
    <Section
      id="connect"
      number="15"
      label="Let's Connect"
      title={<>Let's build something <span className="text-gradient-aurora">meaningful.</span></>}
      subtitle="AI, cybersecurity, software engineering, research, or wild ideas — I'm in."
    >
      <div className="grid items-start gap-6 md:grid-cols-2">
        <div className="rounded-2xl glass-strong p-8">
          <div className="text-sm uppercase tracking-widest text-muted-foreground">Direct line</div>
          <a
            href="mailto:aaishaverma5351@gmail.com"
            className="mt-2 block text-2xl font-semibold text-gradient-aurora hover:underline"
          >
            aaishaverma5351@gmail.com
          </a>
          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-[color:var(--aurora-blue)]" /> Jamshedpur, Jharkhand, India
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:aaishaverma5351@gmail.com"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-[#08111f]"
              style={{ background: "var(--gradient-aurora)" }}
            >
              <Mail className="h-4 w-4" /> Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/sh4d0wb0t"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href="https://github.com/Sh4D0WB0T"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </div>
        <div className="rounded-2xl glass p-8">
          <div className="text-sm uppercase tracking-widest text-muted-foreground">Quick chat</div>
          <p className="mt-3 text-lg leading-relaxed">
            Don't want to write an email? Open <span className="text-[color:var(--aurora-blue)]">AAISHA AI</span>{" "}
            in the bottom-right corner — my digital twin can answer questions about my work, projects,
            and availability, then route you to me.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Sparkles className="h-4 w-4 text-[color:var(--cosmic-violet)]" /> Powered by Lovable AI · Gemini
          </div>
        </div>
      </div>
    </Section>
  );
}

/* --------------------------- 14. Recruiter Drawer --------------------------- */

function RecruiterDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 28 }}
        className="absolute right-0 top-0 h-full w-full max-w-md overflow-y-auto glass-strong p-6"
      >
        <div className="mb-6 flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-widest text-[color:var(--cherry-rose)]">Recruiter Mode</div>
            <h3 className="text-2xl font-semibold">30-Second Profile</h3>
          </div>
          <button onClick={onClose} className="rounded-full glass px-3 py-1.5 text-xs">Close</button>
        </div>

        <div className="space-y-5 text-sm">
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Candidate</div>
            <div className="text-lg font-semibold">Aaisha Verma</div>
            <div className="text-muted-foreground">AI/ML · Cybersecurity · Full Stack</div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              ["Year", "4th"],
              ["CGPA", "7.5"],
              ["Internships", "2"],
              ["Projects", "5+"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-lg glass p-3">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{k}</div>
                <div className="text-base font-semibold">{v}</div>
              </div>
            ))}
          </div>
          <div>
            <div className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">Core Skills</div>
            <div className="flex flex-wrap gap-1.5">
              {["Python", "Java", "JavaScript", "C#", ".NET", "FastAPI", "ML", "SQL", "Power BI", "Git"].map((s) => (
                <span key={s} className="rounded-full border border-white/10 px-2.5 py-1 text-[11px]">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">Flagship</div>
            <div className="rounded-lg glass p-3">
              <div className="text-sm font-semibold">BlackHawk AI</div>
              <div className="text-xs text-muted-foreground">Autonomous AI cyber defense platform — Python, FastAPI, ML, WebSockets.</div>
            </div>
          </div>
          <div>
            <div className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">Experience</div>
            <ul className="space-y-2">
              <li className="rounded-lg glass p-3">
                <div className="text-sm font-semibold">Tata Steel · IT Services Intern</div>
                <div className="text-xs text-muted-foreground">Jun 2025 – Aug 2025</div>
              </li>
              <li className="rounded-lg glass p-3">
                <div className="text-sm font-semibold">Academor · Web Dev Intern</div>
                <div className="text-xs text-muted-foreground">Mar 2024 – Apr 2024</div>
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            <a href="mailto:aaishaverma5351@gmail.com" className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-[#08111f]" style={{ background: "var(--gradient-aurora)" }}>
              <Mail className="h-3.5 w-3.5" /> Contact
            </a>
            <a href="https://www.linkedin.com/in/sh4d0wb0t" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs"><Linkedin className="h-3.5 w-3.5" /> LinkedIn</a>
            <a href="https://github.com/Sh4D0WB0T" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs"><Github className="h-3.5 w-3.5" /> GitHub</a>
          </div>
        </div>
      </motion.aside>
    </div>
  );
}

/* --------------------------- 16. Secret Terminal --------------------------- */

const TERMINAL_RESPONSES: Record<string, string | string[]> = {
  help: [
    "Available commands:",
    "  help, whoami, skills, projects, future, contact, status, sudo whoami, clear",
  ],
  whoami: "aaisha@aurora-nexus:~$ 4th-year CSE (AI & ML) student · Jamshedpur, India",
  skills: "Python · Java · JavaScript · C# · .NET · FastAPI · ML · SQL · Power BI · Git · Cybersecurity",
  projects: [
    "AI-001 Vendor Tracking System  [Successful]",
    "AI-002 Sales Analytics Dashboard [Successful]",
    "AI-003 Password Strength Analyzer [Deployed]",
    "AI-004 Simplified Trading Bot     [Completed]",
    "AI-005 BlackHawk AI               [In Development · Flagship]",
  ],
  future: "AGI research · AI Agents · Quantum Security · Autonomous Cyber Defense",
  contact: "aaishaverma5351@gmail.com · linkedin.com/in/sh4d0wb0t · github.com/Sh4D0WB0T",
  status: "ONLINE · Open to internships & full-time roles · CGPA 7.5",
  "sudo whoami": [
    "Cybersecurity Enthusiast",
    "AI Explorer",
    "Chaos Coder",
    "Future Engineer",
  ],
};

function SecretTerminal() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [lines, setLines] = useState<string[]>([
    "AURORA NEXUS Terminal · v5.0",
    "Type 'help' to begin.",
  ]);

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    const out: string[] = [`aaisha@nexus:~$ ${raw}`];
    if (cmd === "clear") {
      setLines([]);
      return;
    }
    const r = TERMINAL_RESPONSES[cmd];
    if (!r) out.push(`command not found: ${cmd}`);
    else if (Array.isArray(r)) out.push(...r);
    else out.push(r);
    setLines((prev) => [...prev, ...out]);
  };

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full glass-strong transition hover:scale-105"
        aria-label="Open secret terminal"
      >
        <Terminal className="h-5 w-5 text-[color:var(--aurora-green)]" />
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-24 left-6 z-50 flex h-[420px] max-h-[70vh] w-[460px] max-w-[92vw] flex-col overflow-hidden rounded-xl glass-strong font-mono"
        >
          <div className="flex items-center justify-between border-b border-white/10 px-3 py-2 text-xs">
            <span className="flex items-center gap-2 text-[color:var(--aurora-green)]">
              <span className="h-2 w-2 rounded-full bg-[color:var(--aurora-green)]" /> nexus@terminal
            </span>
            <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">×</button>
          </div>
          <div className="flex-1 space-y-1 overflow-y-auto p-3 text-xs leading-relaxed">
            {lines.map((l, i) => (
              <div
                key={i}
                className={l.startsWith("aaisha@") ? "text-[color:var(--aurora-blue)]" : "text-foreground/85"}
              >
                {l}
              </div>
            ))}
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              run(input);
              setInput("");
            }}
            className="flex items-center gap-2 border-t border-white/10 px-3 py-2 text-xs"
          >
            <span className="text-[color:var(--aurora-green)]">$</span>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
              placeholder="type a command…"
              autoFocus
            />
          </form>
        </motion.div>
      )}
    </>
  );
}

/* --------------------------- Page --------------------------- */

export function Portfolio() {
  const [recruiter, setRecruiter] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const barWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={scrollRef} className="relative min-h-screen text-foreground">
      {/* progress bar */}
      <motion.div
        className="fixed left-0 top-0 z-50 h-0.5"
        style={{ width: barWidth, background: "var(--gradient-aurora)" }}
      />
      <DimensionalNav />

      <Hero onRecruiter={() => setRecruiter(true)} />
      <IdentityHologram />
      <Motherboard />
      <Universe />
      <Lab />
      <CyberCenter />
      <Evolution />
      <Experience />
      <Certs />
      <Metrics />
      <Mission />
      <Future />
      <Connect />

      <footer className="border-t border-white/5 px-6 py-10 text-center text-xs text-muted-foreground">
        <div>AURORA NEXUS · Built by Aaisha Verma · {new Date().getFullYear()}</div>
        <div className="mt-2 font-mono">
          "Curious enough to question systems. Determined enough to build better ones."
        </div>
      </footer>

      <RecruiterDrawer open={recruiter} onClose={() => setRecruiter(false)} />
      <SecretTerminal />
    </div>
  );
}