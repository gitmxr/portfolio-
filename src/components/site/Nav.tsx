import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { navLinks, profile } from "@/lib/portfolio-data";
import { useTheme } from "./useTheme";
import { cn } from "@/lib/utils";

export function Nav() {
  const { theme, toggle } = useTheme();
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.5, 1] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:pt-6">
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border border-border/70 px-4 py-2.5 backdrop-blur-xl transition-all duration-500 sm:px-6",
          scrolled ? "bg-card/90 shadow-soft" : "bg-card/70",
        )}
      >
        <a
          href="#home"
          className="font-serif text-xl italic tracking-tight text-foreground transition-colors hover:text-primary sm:text-2xl"
        >
          {profile.shortName}
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "group relative rounded-full px-3 py-2 text-sm font-medium transition-colors",
                active === link.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {link.label}
              <span
                className={cn(
                  "absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary transition-all duration-300",
                  active === link.href ? "scale-100 opacity-100" : "scale-0 opacity-0",
                )}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle color theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-primary transition-transform duration-300 hover:rotate-45 hover:border-primary/50"
          >
            {theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>
          <a
            href="#contact"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:brightness-110 sm:inline-flex"
          >
            Let&apos;s Talk
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-foreground lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "mx-auto mt-2 max-w-6xl overflow-hidden rounded-3xl border border-border/70 bg-card/95 backdrop-blur-xl transition-all duration-400 lg:hidden",
          open ? "max-h-[32rem] opacity-100 shadow-soft" : "pointer-events-none max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col p-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-2xl px-4 py-3 text-sm font-medium transition-colors",
                active === link.href
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-2xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
          >
            Let&apos;s Talk
          </a>
        </nav>
      </div>
    </header>
  );
}
