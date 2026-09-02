import { ArrowRight } from "lucide-react";
import { articles, profile } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Blog() {
  return (
    <section id="blog" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="My engineering articles" title="Latest Articles" />

        <div className="grid gap-6 md:grid-cols-3">
          {articles.map((article, i) => (
            <Reveal key={article.title} delay={i * 90}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-card">
                <div className="relative flex h-40 items-center justify-center bg-primary/10">
                  <span className="display-heading text-4xl text-primary/40">{article.tag}</span>
                  {article.placeholder && (
                    <span className="absolute right-3 top-3 rounded-full bg-primary/90 px-3 py-1 text-[0.6rem] font-semibold tracking-[0.14em] uppercase text-primary-foreground">
                      Placeholder
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs tracking-[0.16em] uppercase text-muted-foreground">
                    {article.tag} · {article.read}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground">
                    {article.title}
                  </h3>
                  <p className="mt-3 line-clamp-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {article.excerpt}
                  </p>
                  <span className="group/link mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Read Article
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
          >
            View All Articles
            <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
