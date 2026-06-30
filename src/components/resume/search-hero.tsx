"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  GraduationCap,
  MoveLeftIcon,
  Search,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { profile } from "@/data/resume-profile";

const prompts = [
  "Full Stack Engineer",
  "Product Builder",
  "AI Enthusiast",
  "Problem Solver",
];
const suggestions = [
  {
    label: "bilal projects",
    id: "projects",
    title: "Projects",
    description: "Plant Health Assistant and BrewBuddy",
  },
  {
    label: "bilal experience",
    id: "experience",
    title: "Experience",
    description: "Full-stack commerce and frontend product work",
  },
  {
    label: "bilal skills",
    id: "knowledge",
    title: "Skills",
    description: "Next.js, TypeScript, Node.js, PostgreSQL, AI",
  },
  {
    label: "bilal achievements",
    id: "knowledge",
    title: "Achievements",
    description: "Ranked 1st across 3 semesters · Peak SGPA 9.73",
  },
  {
    label: "bilal ai work",
    id: "projects",
    title: "AI work",
    description: "TensorFlow.js classification with Gemini API guidance",
  },
  {
    label: "why hire bilal",
    id: "mindset",
    title: "Engineering approach",
    description: "Product thinking, reliable systems, and practical AI",
  },
];

export function SearchHero() {
  const [index, setIndex] = useState(0);
  const [query, setQuery] = useState<string>(profile.name);
  const [result, setResult] = useState(suggestions[0]);
  useEffect(() => {
    const id = window.setInterval(
      () => setIndex((value) => (value + 1) % prompts.length),
      2600,
    );
    return () => window.clearInterval(id);
  }, []);
  const search = (item?: (typeof suggestions)[number]) => {
    const selected =
      item ??
      suggestions.find((entry) =>
        query.toLowerCase().includes(entry.label.replace("bilal ", "")),
      ) ??
      suggestions[0];
    setResult(selected);
    if (item)
      window.setTimeout(
        () =>
          document
            .getElementById(selected.id)
            ?.scrollIntoView({ behavior: "smooth", block: "start" }),
        180,
      );
  };
  return (
    <section className="relative overflow-hidden px-5 pb-14 pt-10 sm:px-8 sm:pt-16">
      <Link
        href="/"
        className="border border-black h-10 w-10 rounded-full flex items-center justify-center absolute top-5 left-5 hover:bg-surface hover:bg-black hover:text-white">
        <MoveLeftIcon />
      </Link>
      <div className="relative mx-auto max-w-5xl text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-muted-foreground transition hover:bg-surface-strong hover:text-foreground"
        >
          <span className="size-2 rounded-full bg-[#34a853]" /> Mohammed Bilal
          Manna
        </Link>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 text-sm font-medium text-muted-foreground"
        >
          Explore the engineer behind the work
        </motion.p>
        <h1 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.055em] text-foreground sm:text-6xl">
          Explore the <span className="text-[#4285f4]">Engineer</span> behind
          the work.
        </h1>
        <div className="mx-auto mt-9 max-w-3xl rounded-[1.5rem] border border-border bg-surface p-2 shadow-[0_2px_8px_rgba(60,64,67,0.14)]">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              search();
            }}
            className="flex items-center gap-3"
          >
            <Search className="ml-3 size-5 shrink-0 text-[#4285f4]" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              aria-label="Search Mohammed Bilal's profile"
              className="min-w-0 flex-1 bg-transparent py-4 text-base outline-none placeholder:text-muted-foreground sm:text-lg"
            />
            <button
              type="submit"
              className="rounded-xl bg-[#4285f4] p-3 text-white transition hover:bg-[#3276df]"
              aria-label="Search profile"
            >
              <ArrowRight className="size-5" />
            </button>
          </form>
          <div className="border-t border-border px-4 pb-3 pt-3 text-left">
            <span className="mr-2 inline-flex items-center gap-1 text-xs font-medium text-muted-foreground">
              <Sparkles className="size-3 text-[#f29900]" /> exploring:
            </span>
            <AnimatePresence mode="wait">
              <motion.span
                key={prompts[index]}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="text-sm font-semibold text-foreground"
              >
                {prompts[index]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
        <div className="mx-auto mt-5 flex max-w-3xl flex-wrap justify-center gap-2">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion.label}
              onClick={() => {
                setQuery(suggestion.label);
                search(suggestion);
              }}
              className="rounded-lg border border-border bg-surface px-3 py-2 text-sm text-muted-foreground transition hover:border-[#4285f4]/35 hover:bg-[#4285f4]/[0.05] hover:text-foreground"
            >
              {suggestion.label}
            </button>
          ))}
        </div>
      </div>
      <div className="relative mx-auto mt-10 grid max-w-5xl gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.button
          key={result.title}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() =>
            document
              .getElementById(result.id)
              ?.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          className="rounded-2xl border border-border bg-surface p-5 text-left shadow-[0_1px_2px_rgba(60,64,67,0.12)] transition hover:border-[#4285f4]/35 hover:shadow-[0_4px_12px_rgba(60,64,67,0.12)]"
        >
          <p className="text-xs text-muted-foreground">
            Profile results · 1–6 of 6
          </p>
          <p className="mt-3 text-lg font-medium text-[#1a0dab]">
            {result.title} - Mohammed Bilal Manna
          </p>
          <p className="mt-1 text-sm text-[#188038]">
            bilal.dev/resume/{result.id}
          </p>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {result.description}
          </p>
        </motion.button>
        <aside className="rounded-2xl border border-border bg-surface p-5 text-left shadow-[0_1px_2px_rgba(60,64,67,0.12)]">
          <div className="flex items-start gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#4285f4] text-sm font-bold text-white">
              BM
            </div>
            <div>
              <p className="font-semibold">{profile.name}</p>
              <p className="text-sm text-muted-foreground">
                {profile.role} · Bengaluru
              </p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 border-t border-border pt-4 text-sm">
            <span className="flex items-center gap-2 text-muted-foreground">
              <BriefcaseBusiness className="size-4 text-[#34a853]" /> 2 roles
            </span>
            <span className="flex items-center gap-2 text-muted-foreground">
              <GraduationCap className="size-4 text-[#f29900]" /> BCA, 2026
            </span>
          </div>
          <button
            onClick={() =>
              document
                .getElementById("knowledge")
                ?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className="mt-4 text-sm font-medium text-[#1a0dab] hover:underline"
          >
            Explore knowledge panel
          </button>
        </aside>
      </div>
    </section>
  );
}
