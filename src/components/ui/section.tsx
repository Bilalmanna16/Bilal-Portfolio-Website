import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  headerClassName?: string;
  containerClassName?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  headerClassName,
  containerClassName
}: SectionProps) {
  return (
    <section id={id} className={cn("relative py-20 sm:py-28", className)}>
      <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10", containerClassName)}>
        {(eyebrow || title || description) && (
          <div className={cn("mb-12 max-w-3xl", headerClassName)}>
            {eyebrow && (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.035em] text-foreground sm:text-5xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
