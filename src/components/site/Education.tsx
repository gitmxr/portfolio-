import { education } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Sprig } from "./Decor";

export function Education() {
  return (
    <section id="education" className="relative overflow-hidden py-20 sm:py-28">
      <Sprig className="pointer-events-none absolute -left-10 bottom-10 -z-10 h-40 w-72 text-decor opacity-60" />

      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="My background" title="Education Timeline" />

        <div className="relative border-l border-border pl-8 sm:pl-12">
          {education.map((item, i) => (
            <Reveal key={`${item.title}-${i}`} delay={i * 80} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[2.35rem] top-2 h-3.5 w-3.5 rounded-full border-2 border-background bg-primary sm:-left-[3.35rem]" />
              <p className="text-sm font-semibold tracking-[0.18em] uppercase text-primary">
                {item.period}
              </p>
              <div className="mt-3 rounded-[1.5rem] border border-border bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-card sm:p-7">
                <h3 className="display-heading text-xl sm:text-2xl">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.org}</p>
                <span className="mt-4 inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {item.note}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
