import type { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#4285f4]">{eyebrow}</p><h2 className="mt-3 text-balance text-3xl font-semibold tracking-[-0.045em] text-foreground sm:text-5xl">{title}</h2>{children && <p className="mt-4 text-base leading-7 text-muted-foreground">{children}</p>}</div>;
}
