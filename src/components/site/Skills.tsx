import { ArrowUpRight } from "lucide-react";
import { certifications, skillGroups } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="My expertise" title="Technical Stack" />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={(i % 3) * 90}>
              <div className="h-full rounded-[1.5rem] border border-border bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-card">
                <h3 className="display-heading text-2xl">{group.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{group.caption}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-muted px-3 py-1.5 text-xs font-medium text-foreground transition-colors duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={90} className="md:col-span-2 lg:col-span-3">
            <div className="rounded-[1.5rem] border border-border bg-card p-7 shadow-soft">
              <h3 className="display-heading text-2xl">Certifications</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Professional milestones and certified courses
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {certifications.map((cert, i) => (
                  <a
                    key={`${cert.label}-${i}`}
                    href={cert.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                  >
                    {cert.label}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
