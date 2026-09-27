import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { images, profile } from "@/lib/portfolio-data";
import { CoffeeCup, LeafBranch } from "./Decor";
import { ProfileLanyardCard } from "./LanyardCard";

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(words[0] ?? "");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length] ?? "";
    const done = !deleting && text === word;
    const cleared = deleting && text === "";
    let delay = deleting ? 45 : 90;
    if (done) delay = 1800;
    if (cleared) delay = 250;

    const timer = setTimeout(() => {
      if (done) return setDeleting(true);
      if (cleared) {
        setDeleting(false);
        setIndex((i) => i + 1);
        return;
      }
      setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return text;
}

export function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section
      id="home"
      className="relative overflow-visible pt-32 pb-20 sm:pt-40 lg:pb-28 min-h-[640px] sm:min-h-[720px]"
    >
      <div className="hero-glow pointer-events-none absolute inset-0 -z-10" />
      <LeafBranch className="pointer-events-none absolute -left-16 top-10 -z-10 h-[560px] w-[180px] text-decor opacity-70 sm:-left-6" />
      <CoffeeCup className="float-slow pointer-events-none absolute -right-10 top-24 -z-10 hidden h-[260px] w-[280px] text-decor opacity-70 lg:block" />

      {/* Full-width, full-height 3D Canvas across the whole Hero section */}
      <div className="absolute inset-0 z-0 h-full w-full overflow-visible pointer-events-auto">
        <ProfileLanyardCard frontImage={images.portrait} />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 pointer-events-none">
        <div className="reveal is-visible pointer-events-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-[0.68rem] font-semibold tracking-[0.18em] uppercase shadow-soft">
            <span className="pulse-dot h-2 w-2 rounded-full bg-primary" />
            Available for opportunities
          </span>

          <h1 className="display-heading mt-7 text-[clamp(2.6rem,7.6vw,5.2rem)]">
            Crafting{" "}
            <span className="serif-accent text-primary whitespace-nowrap">high-performance</span>{" "}
            full-stack solutions
          </h1>

          <p className="serif-accent mt-6 text-xl text-primary sm:text-2xl">
            {typed}
            <span className="caret ml-0.5 font-sans not-italic">|</span>
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.heroLead}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:brightness-110"
            >
              Get In Touch
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-soft"
            >
              View My Work
            </a>
          </div>
        </div>

        {/* Right column placeholder for layout balance */}
        <div className="h-[420px] sm:h-[500px] lg:h-[560px] pointer-events-none" />
      </div>

      <div className="pointer-events-none mt-10 select-none text-center">
        <span className="display-heading text-[clamp(2.5rem,9vw,7rem)] text-watermark">
          I am {profile.name}
        </span>
      </div>
    </section>
  );
}
