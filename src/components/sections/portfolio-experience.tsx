"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import {
  ArrowRight,
  Activity,
  BriefcaseBusiness,
  CheckCircle2,
  Database,
  Github,
  Linkedin,
  Mail,
  Moon,
  Radio,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Sun,
  Workflow,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/config/site";
import {
  exploring,
  focusAreas,
  hayaaNotes,
  navItems,
  principles,
  projects,
  proofItems,
  workflowSteps,
} from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { fadeUp, transitions } from "@/lib/motion";

const iconMap = {
  BriefcaseBusiness,
  CheckCircle2,
  Database,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
};

function EngineeringCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      const target = event.target as HTMLElement | null;
      setActive(Boolean(target?.closest("a, button")));
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden size-9 -translate-x-1/2 -translate-y-1/2 md:block"
      animate={{
        x: position.x,
        y: position.y,
        scale: active ? 1.22 : 1,
        opacity: position.x < 0 ? 0 : 1,
      }}
      transition={{ type: "spring", stiffness: 520, damping: 42, mass: 0.28 }}
    >
      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-accent/28" />
      <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-accent/28" />
      <span className="absolute inset-2 rounded-full border border-accent/35 bg-accent/5 shadow-glow" />
      <motion.span
        className="absolute inset-0 rounded-full border border-accent/10"
        animate={{
          scale: active ? [1, 1.35, 1] : 1,
          opacity: active ? [0.1, 0.35, 0.1] : 0.16,
        }}
        transition={{
          duration: 1.1,
          repeat: active ? Infinity : 0,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}

function GlobalAtmosphere() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <svg
        viewBox="0 0 1400 900"
        preserveAspectRatio="none"
        className="absolute inset-x-0 top-0 h-screen w-full opacity-45"
      >
        <path
          d="M-40 620 C220 380 330 530 560 330 S950 190 1460 420"
          fill="none"
          stroke="hsl(var(--border))"
          strokeWidth="1"
        />
        <path
          d="M-40 620 C220 380 330 530 560 330 S950 190 1460 420"
          fill="none"
          stroke="hsl(var(--accent))"
          strokeOpacity="0.18"
          strokeWidth="1.2"
          className="signal-line"
        />
      </svg>
      <motion.div
        className="absolute left-[12%] top-[22%] size-1.5 rounded-full bg-accent/70 shadow-glow"
        animate={{ opacity: [0.12, 0.7, 0.12], scale: [1, 2.2, 1] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[18%] top-[62%] size-1 rounded-full bg-accent/60 shadow-glow"
        animate={{ opacity: [0.1, 0.55, 0.1], scale: [1, 2.6, 1] }}
        transition={{
          duration: 5.6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.4,
        }}
      />
    </div>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme !== "light";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="premium-hover inline-flex size-10 items-center justify-center rounded-full border bg-surface/70 text-foreground/80 hover:border-accent/45 hover:bg-surface-strong hover:text-foreground"
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/72 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a
          href="#"
          className="group relative inline-flex items-center gap-1.5 md:gap-2 overflow-hidden rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 md:px-5 md:py-2.5 backdrop-blur-md transition-all duration-500 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:shadow-[0_0_40px_rgba(34,211,238,0.18)]"
        >
          {/* Glow */}
          <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="absolute -left-10 top-0 h-full w-20 rotate-12 bg-cyan-400/20 blur-2xl" />
            <div className="absolute right-0 top-0 h-full w-20 -rotate-12 bg-violet-500/20 blur-2xl" />
          </div>

          {/* Dot */}
          <div className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-emerald-400" />
          </div>

          {/* Name */}
          <span className="relative text-base md:text-lg font-black tracking-[-0.08em] text-white transition-all duration-300 group-hover:text-cyan-300">
            Bilal
            <span className="text-white/35"> </span>
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              manna
            </span>
          </span>

          {/* Extension */}
          <span className="relative rounded-md border border-cyan-400/20 bg-cyan-400/10 px-1.5 py-0.5 md:px-2 font-mono text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.25em] text-cyan-300">
            .dev
          </span>

          {/* Animated line */}
          <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 transition-all duration-500 group-hover:w-full" />
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 md:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href="#contact">Let&apos;s Talk</a>
          </Button>
        </div>
      </div>
    </header>
  );
}

function HeroVisual() {
  const signals = [
    {
      label: "webhook received",
      value: "200 OK",
      className: "left-2 top-[12%] lg:-left-8",
    },
    {
      label: "payment verified",
      value: "HMAC pass",
      className: "right-0 top-[22%] lg:-right-10",
    },
    {
      label: "deployment",
      value: "synced",
      className: "bottom-[13%] left-4 lg:-left-7",
    },
    {
      label: "postgresql",
      value: "connected",
      className: "bottom-[34%] right-3 lg:-right-8",
    },
  ];

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      transition={{ ...transitions.calm, delay: 0.2 }}
      className="relative mx-auto mt-2 w-full max-w-[620px] lg:mt-0 lg:translate-x-8"
    >
      <div className="blueprint-mask absolute -inset-24 opacity-75" />
      <div className="absolute -inset-14 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -bottom-10 left-8 right-8 h-28 bg-background blur-2xl" />
      <svg
        aria-hidden="true"
        viewBox="0 0 620 620"
        className="absolute -inset-8 h-[calc(100%+4rem)] w-[calc(100%+4rem)]"
      >
        <path
          d="M68 420 C152 290 250 338 332 205 S508 130 558 246"
          fill="none"
          stroke="hsl(var(--border))"
          strokeWidth="1"
        />
        <path
          d="M68 420 C152 290 250 338 332 205 S508 130 558 246"
          fill="none"
          stroke="hsl(var(--accent))"
          strokeOpacity="0.42"
          strokeWidth="1.2"
          className="flow-line"
        />
      </svg>
      <motion.div
        className="absolute left-8 right-8 top-8 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent"
        animate={{ opacity: [0.25, 0.8, 0.25], scaleX: [0.8, 1, 0.8] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative overflow-visible">
        {signals.map((signal, index) => (
          <motion.div
            key={signal.label}
            className={cn(
              "absolute z-30 hidden min-w-36 border-l border-accent/45 bg-background/52 px-3 py-2 text-xs shadow-glow backdrop-blur-xl md:block",
              signal.className,
            )}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: [0, -4, 0] }}
            transition={{
              opacity: { duration: 0.5, delay: 0.45 + index * 0.12 },
              y: {
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.45,
              },
            }}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              {signal.label}
            </p>
            <p className="mt-1 flex items-center gap-2 font-medium">
              <span className="size-1.5 rounded-full bg-accent" />
              {signal.value}
            </p>
          </motion.div>
        ))}
        <div className="sketch-note absolute -bottom-3 left-[18%] z-30 hidden text-[10px] uppercase text-accent/70 md:block">
          calm system state
        </div>
        <motion.div
          className="absolute left-[9%] top-[17%] z-20 size-2 rounded-full bg-accent"
          animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.9, 1] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[12%] top-[47%] z-20 size-2 rounded-full bg-accent"
          animate={{ opacity: [0.2, 0.9, 0.2], scale: [1, 1.7, 1] }}
          transition={{
            duration: 3.1,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
        />
        <div className="absolute -left-5 top-1/2 z-20 hidden h-40 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-accent/70 to-transparent lg:block" />
        <div className="absolute -right-7 bottom-24 z-20 hidden h-px w-32 bg-gradient-to-r from-accent/70 to-transparent lg:block" />

        <div className="ambient-float relative z-10 aspect-[0.78] overflow-hidden rounded-[3rem] bg-surface/20 shadow-premium ring-1 ring-border/45">
          <Image
            src="/images/me-new.png"
            alt="Mohammed Bilal, product-focused full-stack engineer"
            fill
            priority
            sizes="(max-width: 768px) 94vw, 620px"
            className="scale-[1.03] md:scale-[2] object-cover object-[54%_45%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/35 via-transparent to-background/5" />
          <div className="absolute inset-x-8 bottom-8 z-20 flex items-center justify-between border-t border-border/55 pt-4 text-xs text-muted-foreground">
            <span className="font-mono">transaction.event</span>
            <span className="flex items-center gap-2 text-foreground">
              <Radio className="size-3 text-accent" /> successful
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function HeroAtmosphere() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <div className="blueprint-mask absolute left-1/2 top-14 h-[42rem] w-[80rem] -translate-x-1/2 opacity-35" />
      <div className="absolute left-[10%] top-28 hidden h-[38rem] w-px bg-gradient-to-b from-transparent via-border/80 to-transparent lg:block" />
      <div className="absolute right-[13%] top-24 hidden h-[31rem] w-px bg-gradient-to-b from-transparent via-accent/35 to-transparent lg:block" />
      <svg
        viewBox="0 0 1200 680"
        preserveAspectRatio="none"
        className="absolute inset-x-0 top-12 h-[44rem] w-full opacity-70"
      >
        <path
          d="M80 510 C230 350 330 450 470 255 S760 120 1080 310"
          fill="none"
          stroke="hsl(var(--border))"
          strokeWidth="1"
        />
        <path
          d="M80 510 C230 350 330 450 470 255 S760 120 1080 310"
          fill="none"
          stroke="hsl(var(--accent))"
          strokeOpacity="0.28"
          strokeWidth="1.2"
          className="flow-line"
        />
      </svg>
      <motion.div
        className="absolute left-[22%] top-[32%] size-1.5 rounded-full bg-accent"
        animate={{ opacity: [0.15, 0.9, 0.15], scale: [1, 2.1, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[29%] top-[24%] size-1 rounded-full bg-accent"
        animate={{ opacity: [0.1, 0.75, 0.1], scale: [1, 2.4, 1] }}
        transition={{
          duration: 4.1,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.9,
        }}
      />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-1rem)] overflow-hidden pb-24 pt-28 sm:pb-32 sm:pt-36">
      <HeroAtmosphere />
      <div className="absolute inset-x-0 top-16 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.86fr_1.14fr] lg:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={transitions.calm}
          className="relative lg:pt-8"
        >
          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-12 bg-accent/70" />
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">
              Product Engineer
            </p>
          </div>
          <h1 className="max-w-3xl text-balance font-serif text-6xl font-normal leading-[0.9] tracking-[-0.075em] text-foreground sm:text-8xl lg:text-[7.2rem]">
            Mohammed Bilal Manna
          </h1>
          <p className="mt-8 max-w-xl text-balance text-2xl font-medium leading-tight tracking-[-0.035em] text-foreground/88 sm:text-3xl">
            Building reliable web systems, payment workflows, and AI-assisted
            product experiences.
          </p>
          <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">
            I care about calm interfaces, dependable backend flows, and product
            decisions that make software easier to trust.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="group shadow-glow hover:shadow-[0_0_60px_hsl(var(--accent)/0.16)]"
            >
              <a href="#hayaa">
                View Systems
                <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a
                href={siteConfig.resume}
                download="Mohammed Bilal Manna - Final Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </Button>
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="mr-1 border-l border-accent/50 pl-3 font-mono text-xs uppercase tracking-[0.16em]">
              Available for product roles
            </span>
            <SocialLink href={siteConfig.github} icon={Github} label="GitHub" />
            <SocialLink
              href={siteConfig.linkedin}
              icon={Linkedin}
              label="LinkedIn"
            />
            <SocialLink
              href={`mailto:${siteConfig.email}`}
              icon={Mail}
              label="Email"
            />
          </div>
        </motion.div>
        <HeroVisual />
      </div>
    </section>
  );
}

function SocialLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="premium-hover inline-flex size-9 items-center justify-center rounded-full border bg-surface/70 text-foreground/72 hover:border-accent/45 hover:bg-surface-strong hover:text-foreground"
    >
      <Icon className="size-4" />
    </a>
  );
}

function ProofStrip() {
  return (
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <div className="relative border-y border-border/70 py-5">
        <div className="absolute inset-y-0 left-1/2 hidden w-px bg-border/60 lg:block" />
        <div className="grid gap-5 sm:grid-cols-5">
          {proofItems.map((item) => (
            <div
              key={item}
              className="group premium-hover flex items-center gap-3 text-sm font-medium"
            >
              <span className="grid size-8 shrink-0 place-items-center border border-border/70 bg-surface/50 text-accent transition group-hover:border-accent/50">
                <CheckCircle2 className="size-4" />
              </span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WorkflowVisualization() {
  const [activeStage, setActiveStage] = useState(3);
  const active = workflowSteps[activeStage];
  const positions = [
    "lg:left-[4%] lg:top-[23%]",
    "lg:left-[20%] lg:top-[9%]",
    "lg:left-[39%] lg:top-[20%]",
    "lg:left-[55%] lg:top-[9%]",
    "lg:left-[70%] lg:top-[28%]",
    "lg:left-[46%] lg:top-[68%]",
    "lg:left-[74%] lg:top-[70%]",
  ];

  return (
    <div className="relative min-h-[640px] overflow-hidden border-y bg-surface/28 p-5 shadow-glow sm:p-8 lg:min-h-[680px]">
      <div className="blueprint-mask absolute inset-0 opacity-80" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-accent/10 to-transparent" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent/8 blur-3xl" />
      <svg
        aria-hidden="true"
        viewBox="0 0 980 620"
        className="absolute inset-0 hidden h-full w-full lg:block"
        preserveAspectRatio="none"
      >
        <path
          d="M86 245 C198 124 280 162 382 228 S560 128 680 204 770 330 880 284"
          fill="none"
          stroke="hsl(var(--border))"
          strokeWidth="1"
        />
        <path
          d="M86 245 C198 124 280 162 382 228 S560 128 680 204 770 330 880 284"
          fill="none"
          stroke="hsl(var(--accent))"
          strokeOpacity="0.58"
          strokeWidth="1.4"
          className="flow-line"
        />
        <path
          d="M388 230 C438 370 470 454 548 476 S690 430 782 470"
          fill="none"
          stroke="hsl(var(--border))"
          strokeWidth="1"
        />
        <path
          d="M388 230 C438 370 470 454 548 476 S690 430 782 470"
          fill="none"
          stroke="hsl(var(--accent))"
          strokeOpacity="0.45"
          strokeWidth="1.2"
          className="flow-line"
        />
      </svg>
      <motion.div
        aria-hidden="true"
        className="absolute left-[6%] top-[39%] hidden size-2 rounded-full bg-accent shadow-glow lg:block"
        animate={{
          x: [0, 160, 335, 520, 710],
          y: [0, -110, -18, -96, 30],
          opacity: [0, 1, 1, 1, 0],
        }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute left-[42%] top-[37%] hidden size-1.5 rounded-full bg-accent shadow-glow lg:block"
        animate={{
          x: [0, 80, 170, 278],
          y: [0, 190, 214, 204],
          opacity: [0, 0.85, 0.85, 0],
        }}
        transition={{
          duration: 6.4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.3,
        }}
      />
      <div className="relative z-10 mb-10 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
            Live transaction model
          </p>
          <h3 className="mt-2 max-w-xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
            Checkout is treated as a system of trust, not a button.
          </h3>
        </div>
        <div className="border-l border-accent/50 bg-background/45 px-3 py-2 text-xs font-medium text-accent backdrop-blur sm:min-w-40">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            system state
          </p>
          <p className="mt-1">{active.state}</p>
        </div>
      </div>
      <div className="relative z-10 grid gap-4 lg:min-h-[440px] lg:block">
        {workflowSteps.map((step, index) => {
          const Icon = iconMap[step.icon];
          const isActive = activeStage === index;

          return (
            <motion.div
              key={step.label}
              onMouseEnter={() => setActiveStage(index)}
              onFocus={() => setActiveStage(index)}
              role="button"
              aria-pressed={isActive}
              tabIndex={0}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ ...transitions.quick, delay: index * 0.08 }}
              className={cn(
                "group premium-hover relative border-l bg-background/58 p-4 text-left backdrop-blur-md outline-none hover:border-accent/70 focus-visible:ring-2 focus-visible:ring-accent/50 lg:absolute lg:w-44",
                isActive ? "border-accent/80 shadow-glow" : "border-border/80",
                positions[index],
              )}
            >
              <div
                className={cn(
                  "mb-5 inline-flex size-9 items-center justify-center border bg-surface text-accent transition",
                  isActive && "border-accent bg-accent text-accent-foreground",
                )}
              >
                <Icon className="size-4" />
              </div>
              <p className="text-sm font-semibold">{step.label}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {step.detail}
              </p>
              <motion.span
                className="absolute -left-[5px] top-5 size-2 bg-accent"
                animate={{ opacity: [0.35, 1, 0.35], scale: [1, 1.45, 1] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
              />
            </motion.div>
          );
        })}
      </div>
      <div className="relative z-10 mt-8 grid gap-5 border-t border-border/70 pt-6 lg:grid-cols-[0.45fr_0.55fr]">
        <div>
          <p className="sketch-note font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
            active stage
          </p>
          <h4 className="mt-2 text-2xl font-semibold tracking-[-0.035em]">
            {active.label}
          </h4>
        </div>
        <p className="leading-7 text-muted-foreground">{active.note}</p>
      </div>
      <div className="sketch-note absolute bottom-6 left-8 hidden text-[10px] uppercase text-accent/55 lg:block">
        async event
      </div>
      <div className="sketch-note absolute right-10 top-32 hidden text-[10px] uppercase text-accent/55 lg:block">
        retry-safe
      </div>
    </div>
  );
}

function FeaturedSystem() {
  return (
    <Section
      id="hayaa"
      eyebrow="Featured system"
      title="Hayaa By Noor"
      description="A commerce build where checkout, payment verification, order state, inventory, and customer experience had to move together without treating the frontend as the source of truth."
      headerClassName="lg:ml-[10%] lg:max-w-4xl"
      className="overflow-hidden"
    >
      <div className="relative">
        <div className="blueprint-mask absolute -inset-x-20 -top-20 h-[48rem] opacity-30" />
        <div className="absolute left-[7%] top-8 hidden h-[46rem] w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent lg:block" />
        <div className="relative z-10 grid gap-10 lg:grid-cols-[0.34fr_0.66fr] lg:items-start">
          <aside className="lg:sticky lg:top-24">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
              engineering story
            </p>
            <h3 className="mt-4 max-w-sm text-3xl font-semibold tracking-[-0.04em]">
              The hard part was making payment state trustworthy.
            </h3>
            <p className="mt-5 max-w-sm leading-7 text-muted-foreground">
              The storefront matters, but the system is really about what
              happens after a customer decides to pay: verification, state
              changes, persistence, and keeping the UI honest about backend
              outcomes.
            </p>
            <div className="mt-8 grid gap-4 border-l border-border/70 pl-5">
              {hayaaNotes.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                  <span className="text-sm leading-6">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button
                asChild
                className="group hover:shadow-[0_0_54px_hsl(var(--accent)/0.14)]"
              >
                <a href={siteConfig.hayaaLive} target="_blank" rel="noreferrer">
                  Live Site
                  <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
                </a>
              </Button>
              {/* <Button asChild variant="secondary">
                <a href={siteConfig.hayaaGithub}>
                  GitHub <Github className="size-4" />
                </a>
              </Button> */}
            </div>
          </aside>
          <div>
            <WorkflowVisualization />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                {
                  label: "verification",
                  value: "HMAC checked before state mutation",
                },
                {
                  label: "order lifecycle",
                  value: "open -> paid -> persisted",
                },
                {
                  label: "data model",
                  value: "orders, inventory, payments aligned",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="premium-hover border-t border-border/70 pt-4 hover:border-accent/50"
                >
                  <p className="sketch-note font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function FocusAreas() {
  return (
    <Section
      id="focus"
      eyebrow="Engineering focus"
      title="Capability expressed as product ownership."
      description="The stack matters because it supports product behavior: interfaces, data, payments, reliability, and useful AI-enabled workflows."
      headerClassName="lg:max-w-xl"
    >
      <div className="relative">
        <div className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-accent/60 via-border to-transparent lg:block" />
        <div className="grid gap-x-10 gap-y-2 lg:grid-cols-2 lg:pl-12">
          {focusAreas.map((area, index) => {
            const Icon = iconMap[area.icon];
            return (
              <motion.article
                key={area.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ ...transitions.quick, delay: index * 0.04 }}
                className="group premium-hover grid grid-cols-[2.75rem_1fr] gap-4 border-t border-border/70 py-7 hover:border-accent/50"
              >
                <div className="inline-flex size-10 items-center justify-center border bg-surface/70 text-accent transition group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon className="size-4" />
                </div>
                <div>
                  <h3 className="font-semibold">{area.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
                    {area.body}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

function SelectedProjects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected projects"
      title="Smaller builds, same product mindset."
      description="A compact set of supporting work focused on product clarity, clean architecture, and startup-relevant workflows."
      headerClassName="lg:ml-auto lg:max-w-2xl"
    >
      <div className="relative border-y border-border/70">
        <div className="absolute left-1/3 top-0 hidden h-full w-px bg-border/60 lg:block" />
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="premium-hover grid gap-6 border-b border-border/70 py-9 last:border-b-0 hover:border-accent/45 lg:grid-cols-[0.38fr_0.62fr] lg:items-start"
          >
            <div>
              <span className="font-mono text-xs text-accent">
                0{index + 1}
              </span>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
                {project.title}
              </h3>
            </div>
            <div>
              <p className="max-w-2xl leading-7 text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {project.points.map((point) => (
                  <div
                    key={point}
                    className="border-l border-accent/40 pl-3 text-sm leading-6"
                  >
                    {point}
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Principles() {
  return (
    <Section
      eyebrow="Engineering principles"
      title="Taste, restraint, and systems thinking."
      description="The work is guided by practical engineering judgment: make the system understandable, reliable, and useful before making it clever."
      className="py-20"
      containerClassName="max-w-6xl"
    >
      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-border to-transparent" />
        {principles.map((principle, index) => (
          <div
            key={principle}
            className="premium-hover relative grid gap-4 py-7 pl-12 sm:grid-cols-[8rem_1fr]"
          >
            <span className="absolute left-[11px] top-9 size-3 bg-accent" />
            <span className="font-mono text-xs text-accent">
              principle 0{index + 1}
            </span>
            <p className="max-w-2xl text-xl font-medium leading-8 tracking-[-0.025em]">
              {principle}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function ExploringExperience() {
  return (
    <Section className="py-16" containerClassName="max-w-7xl">
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative border-t border-border/70 pt-7">
          <Activity className="absolute right-0 top-7 size-5 text-accent" />
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Currently exploring
          </p>
          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
            {exploring.map((item) => (
              <span
                key={item}
                className="border-b border-border/70 pb-2 text-sm text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="mt-6 leading-7 text-muted-foreground">
            AI is positioned here as a practical product layer: useful
            automation, clearer workflows, and faster execution where it
            improves the actual user experience.
          </p>
        </div>
        <div className="border-t border-border/70 pt-7">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Experience
          </p>
          <div className="mt-6 border-l pl-5">
            <div className="relative">
              <span className="absolute -left-[29px] top-1 size-3 rounded-full border-2 border-accent bg-background" />
              <p className="font-semibold">IAAHE Internship</p>
              <p className="mt-2 leading-7 text-muted-foreground">
                Collaborated with a cross-functional team to design responsive
                web pages, reusable UI components, and 60+ logo concepts for an
                educational organization using WordPress and Figma workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="px-5 pb-10 pt-16 sm:px-8 lg:px-10 rounded-md"
    >
      <div className="mx-auto max-w-7xl border-y border-foreground/20 bg-foreground px-6 py-10 text-background shadow-premium sm:px-10 lg:px-14 rounded-2xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-sm font-medium opacity-70">
              Startup-ready engineering
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">
              Interested in building product-focused systems and modern web
              experiences.
            </h2>
            <p className="mt-5 max-w-2xl leading-7 opacity-72">
              I am focused on full-stack roles where product thinking, backend
              reliability, polished UI, and practical AI workflows all matter.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button
              asChild
              variant="secondary"
              className="border-background/20 bg-background text-foreground"
            >
              <a href={`mailto:${siteConfig.email}`}>
                Email <Mail className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="secondary"
              className="border-background/20 bg-background/10 text-background hover:bg-background/16"
            >
              <a href={siteConfig.linkedin}>
                LinkedIn <Linkedin className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="secondary"
              className="border-background/20 bg-background/10 text-background hover:bg-background/16"
            >
              <a href={siteConfig.github}>
                GitHub <Github className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PortfolioExperience() {
  return (
    <main id="main-content" className="relative">
      <EngineeringCursor />
      <GlobalAtmosphere />
      <Header />
      <div className="relative z-10">
        <Hero />
        <ProofStrip />
        <FeaturedSystem />
        <FocusAreas />
        <SelectedProjects />
        <Principles />
        <ExploringExperience />
        <Contact />
      </div>
    </main>
  );
}
