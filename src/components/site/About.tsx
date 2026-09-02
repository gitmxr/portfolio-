import { useEffect, useState } from "react";
import { images, stats } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";
import { Reveal, useInView } from "./Reveal";
import { LeafBranch } from "./Decor";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.4);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref} className="display-heading text-5xl text-primary sm:text-6xl">
      {n}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20 sm:py-28">
      <LeafBranch className="pointer-events-none absolute -right-20 top-16 -z-10 h-[520px] w-[170px] scale-x-[-1] text-decor opacity-60" />

      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Get to know me" title="About & Vision" />

        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <blockquote className="serif-accent text-2xl leading-snug text-foreground sm:text-3xl">
              “Engineering reliable software by pairing structured architecture with relentless
              attention to real-world performance.”
            </blockquote>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              I am a Full Stack Developer specializing in the MERN stack and Next.js, with
              production experience building real-time and AI-integrated applications. My background
              in ASP.NET Core and C# gave me a strong engineering foundation, and I have since
              transitioned my primary stack while independently shipping full-stack projects.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              I am Azure-certified (AZ-104) with hands-on expertise in cloud infrastructure
              management, and experienced in real-time systems such as WebSocket-based audio
              streaming, semantic and RAG search platforms, and microservices architectures — backed
              by a 3.8/4.0 CGPA in Software Engineering.
            </p>

            <div className="mt-10 flex flex-wrap gap-12">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <p className="mt-1 text-sm tracking-[0.16em] uppercase text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="group relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-card">
              <img
                src={images.workstation}
                alt="My development workstation"
                width={1200}
                height={900}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute bottom-4 left-4 rounded-full bg-background/85 px-4 py-1.5 text-xs font-semibold tracking-[0.16em] uppercase backdrop-blur">
                My Workstation
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
