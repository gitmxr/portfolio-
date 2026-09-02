import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="My recent works" title="Featured Projects" />

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 90}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-card">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} — ${project.subtitle}`}
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 text-[0.68rem] font-semibold tracking-[0.16em] uppercase backdrop-blur">
                    {project.years}
                  </span>
                  {project.placeholder && (
                    <span className="absolute right-4 top-4 rounded-full bg-primary/90 px-3 py-1 text-[0.62rem] font-semibold tracking-[0.14em] uppercase text-primary-foreground">
                      Placeholder
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="display-heading text-2xl sm:text-3xl">{project.title}</h3>
                  <p className="serif-accent mt-1 text-lg text-primary">{project.subtitle}</p>
                  <p className="mt-4 line-clamp-5 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-border pt-5">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                      >
                        Live Demo
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                    )}
                    {project.code && (
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
