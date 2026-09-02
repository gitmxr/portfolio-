import { experience } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Where I have worked" title="Experience" />

        <div className="relative border-l border-border pl-8 sm:pl-12">
          {experience.map((job, i) => (
            <Reveal key={job.title} delay={i * 90} className="relative pb-12 last:pb-0">
              <span className="absolute -left-[2.35rem] top-2 h-3.5 w-3.5 rounded-full border-2 border-background bg-primary sm:-left-[3.35rem]" />
              <p className="text-sm font-semibold tracking-[0.18em] uppercase text-primary">
                {job.period}
              </p>
              <div className="mt-3 rounded-[1.5rem] border border-border bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-card">
                <h3 className="display-heading text-2xl sm:text-3xl">{job.title}</h3>
                <p className="serif-accent mt-1 text-lg text-primary">{job.org}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {job.place} · {job.status}
                </p>
                <ul className="mt-5 space-y-3">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
