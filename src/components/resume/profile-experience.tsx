"use client";

import { motion } from "framer-motion";
import {
  Award,
  BrainCircuit,
  ChevronDown,
  CircleCheck,
  Code2,
  Layers3,
  MapPin,
  Rocket,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import {
  experiences,
  principles,
  profile,
  projects,
  quickFacts,
  skills,
  timeline,
} from "@/data/resume-profile";
import { AskBilal } from "@/components/resume/ask-bilal";
import { SearchHero } from "@/components/resume/search-hero";
import { SectionHeading } from "@/components/resume/section-heading";

const reveal = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.45 },
};
function Chip({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">
      {children}
    </span>
  );
}

function ExperienceCard({ item }: { item: (typeof experiences)[number] }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="rounded-3xl border border-border bg-surface p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:p-7">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-5 text-left"
      >
        <div>
          <p className="text-sm font-semibold text-[#4285f4]">
            {item.company}{" "}
            <span className="font-normal text-muted-foreground">
              · {item.period}
            </span>
          </p>
          <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em]">
            {item.title}
          </h3>
          <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
            {item.summary}
          </p>
        </div>
        <ChevronDown
          className={`mt-1 size-5 shrink-0 transition ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div className="mt-5 flex flex-wrap gap-2">
        {item.stack.map((entry) => (
          <Chip key={entry}>{entry}</Chip>
        ))}
      </div>
      {open && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mt-6 space-y-3 border-t border-border pt-5"
        >
          {item.details.map((detail) => (
            <li
              key={detail}
              className="flex gap-3 text-sm leading-6 text-muted-foreground"
            >
              <CircleCheck className="mt-1 size-4 shrink-0 text-[#34a853]" />
              {detail}
            </li>
          ))}
        </motion.ul>
      )}
    </article>
  );
}

export function ProfileExperience() {
  return (
    <main id="main-content" className="overflow-hidden">
      <SearchHero />
      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-border bg-surface/70 p-5 shadow-sm sm:p-8">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            At a glance
          </p>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
            {quickFacts.map(([label, value]) => (
              <div key={label} className="bg-surface p-4 sm:p-5">
                <p className="text-xl font-semibold tracking-[-0.04em] text-foreground">
                  {value}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="knowledge" className="scroll-mt-12 px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div {...reveal}>
            <SectionHeading
              eyebrow="Engineer knowledge panel"
              title="The essentials, connected."
            >
              A compact view of the academic signal, capabilities, and building
              interests behind the work.
            </SectionHeading>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ["Ranked 1st", "across 3 semesters"],
                ["Ranked 2nd", "across 2 semesters"],
                ["Scholarly Excellence", "award recipient"],
              ].map(([a, b]) => (
                <div
                  key={a}
                  className="rounded-2xl border border-border bg-surface p-4"
                >
                  <Award className="size-4 text-[#f29900]" />
                  <p className="mt-4 font-semibold">{a}</p>
                  <p className="text-sm text-muted-foreground">{b}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.aside
            {...reveal}
            className="rounded-[2rem] border border-border bg-surface p-6 shadow-[0_12px_35px_rgba(60,64,67,0.1)]"
          >
            <div className="flex size-12 items-center justify-center rounded-2xl bg-[#4285f4] text-lg font-bold text-white">
              BM
            </div>
            <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em]">
              {profile.name}
            </h3>
            <p className="mt-1 font-medium text-[#4285f4]">{profile.role}</p>
            <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4" />
              {profile.location}
            </p>
            <div className="mt-5 border-t border-border pt-5 text-sm">
              <p className="font-medium">{profile.degree}</p>
              <p className="mt-1 text-muted-foreground">{profile.college}</p>
              <p className="mt-3 font-semibold">
                Peak SGPA <span className="text-[#34a853]">9.73</span>
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Chip key={skill}>{skill}</Chip>
              ))}
            </div>
          </motion.aside>
        </div>
      </section>
      <section
        id="experience"
        className="scroll-mt-12 bg-surface-strong/45 px-5 py-20 sm:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Discover experience"
            title="Results from building in the real world."
          >
            Open a result for the implementation detail behind the role.
          </SectionHeading>
          <div className="mt-9 grid gap-4">
            {experiences.map((item) => (
              <ExperienceCard key={item.company} item={item} />
            ))}
          </div>
        </div>
      </section>
      <section id="projects" className="scroll-mt-12 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Project explorer"
            title="Useful ideas, made tangible."
          >
            The strongest work lives where engineering, AI, and product thinking
            meet.
          </SectionHeading>
          <div className="mt-9 grid gap-5 lg:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                {...reveal}
                className={`group relative overflow-hidden rounded-[2rem] border border-border bg-surface p-7 transition hover:-translate-y-1 hover:shadow-xl ${index === 0 ? "lg:col-span-2 lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:gap-10" : ""}`}
              >
                <div
                  className={`absolute right-0 top-0 h-40 w-40 rounded-full bg-gradient-to-br ${project.accent} opacity-10 blur-2xl transition group-hover:opacity-20`}
                />
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-foreground px-3 py-1.5 text-xs font-semibold text-background">
                    <BrainCircuit className="size-3.5" />{" "}
                    {index === 0
                      ? "Featured AI product"
                      : "Machine learning product"}
                  </div>
                  <h3 className="mt-5 text-3xl font-semibold tracking-[-0.05em]">
                    {project.title}
                  </h3>
                  <p className="mt-4 leading-7 text-muted-foreground">
                    {project.description}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">
                    {project.details}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((entry) => (
                      <Chip key={entry}>{entry}</Chip>
                    ))}
                  </div>
                </div>
                <div className="mt-7 grid gap-3 sm:grid-cols-3 lg:mt-0 lg:self-end lg:grid-cols-1">
                  {project.stats.map((stat) => (
                    <div
                      key={stat}
                      className="rounded-2xl border border-border bg-surface-strong/70 p-4 text-sm font-semibold"
                    >
                      {stat}
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <AskBilal />
      <section id="mindset" className="scroll-mt-12 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="How I approach building"
            title="A product-minded engineering practice."
          />
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map(([title, description], i) => (
              <motion.article
                key={title}
                {...reveal}
                className="rounded-3xl border border-border bg-surface p-5"
              >
                <div
                  className={`flex size-9 items-center justify-center rounded-xl ${["bg-[#4285f4]/10 text-[#4285f4]", "bg-[#ea4335]/10 text-[#ea4335]", "bg-[#f29900]/10 text-[#b36e00]", "bg-[#34a853]/10 text-[#34a853]"][i % 4]}`}
                >
                  <Layers3 className="size-4" />
                </div>
                <h3 className="mt-5 font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {description}
                </p>
              </motion.article>
            ))}
          </div>
          <div className="mt-12 grid gap-4 rounded-[2rem] border border-border bg-surface p-6 sm:grid-cols-3">
            <div>
              <Code2 className="size-5 text-[#4285f4]" />
              <h3 className="mt-4 font-semibold">Full-stack clarity</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Comfortable connecting the product surface to the systems
                beneath it.
              </p>
            </div>
            <div>
              <BrainCircuit className="size-5 text-[#ea4335]" />
              <h3 className="mt-4 font-semibold">Practical AI</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Uses AI when it creates a more capable and understandable
                experience.
              </p>
            </div>
            <div>
              <Rocket className="size-5 text-[#34a853]" />
              <h3 className="mt-4 font-semibold">Continuous learning</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Treats each product and system as an opportunity to deepen
                judgment.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-surface-strong/45 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Career timeline"
            title="A path shaped by curiosity and shipping."
          />
          <div className="mt-10 border-l border-[#4285f4]/30 pl-6">
            {timeline.map(([year, title, description]) => (
              <motion.div
                key={year}
                {...reveal}
                className="relative pb-9 last:pb-0"
              >
                <span className="absolute -left-[31px] top-1 size-3 rounded-full border-2 border-[#4285f4] bg-surface" />
                <p className="text-sm font-bold text-[#4285f4]">{year}</p>
                <h3 className="mt-1 font-semibold">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-5 py-20 sm:px-8">
        <motion.div
          {...reveal}
          className="mx-auto max-w-5xl rounded-[2rem] bg-foreground px-7 py-12 text-background sm:px-12"
        >
          <Sparkles className="size-5 text-[#f29900]" />
          <p className="mt-5 max-w-3xl text-balance text-3xl font-semibold tracking-[-0.045em] sm:text-5xl">
            I enjoy turning ideas into products, solving real problems, learning
            continuously, and building systems that create value for users.
          </p>
          <a
            href="mailto:bilalmanna.work@gmail.com"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-white/90"
          >
            Start a conversation <span aria-hidden>→</span>
          </a>
        </motion.div>
      </section>
    </main>
  );
}
