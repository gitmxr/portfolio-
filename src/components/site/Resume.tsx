import { Download, ExternalLink, FileText } from "lucide-react";
import { profile } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Resume() {
  return (
    <section id="resume" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Curriculum Vitae" title="Download Resume" />

        <Reveal>
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-[2rem] border border-border bg-card p-8 text-center shadow-card sm:p-12">
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              Get a comprehensive overview of my engineering skills, work experience, educational
              credentials, projects, and professional certifications.
            </p>

            <div className="flex items-center gap-4 rounded-[1.5rem] border border-border bg-background px-6 py-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <FileText className="h-6 w-6" />
              </span>
              <div className="text-left">
                <p className="display-heading text-xl">{profile.name} — Resume</p>
                <p className="text-sm text-muted-foreground">{profile.role}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="/Muhammad_Riaz_Resume.pdf"
                download="Muhammad_Riaz_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:brightness-110"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
              >
                <ExternalLink className="h-4 w-4" />
                View on LinkedIn
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
