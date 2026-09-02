import { services } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="My services" title="How I Can Help" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.no} delay={i * 90}>
              <div className="group h-full rounded-[1.5rem] border border-border bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-card">
                <span className="display-heading block text-4xl text-primary/25 transition-colors duration-500 group-hover:text-primary/60">
                  {service.no}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
