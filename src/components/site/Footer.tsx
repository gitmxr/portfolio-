import { Github, Linkedin, Mail } from "lucide-react";
import { navLinks, profile } from "@/lib/portfolio-data";
import { Sprig } from "./Decor";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border py-14">
      <Sprig className="pointer-events-none absolute -right-6 -top-4 -z-10 h-32 w-64 scale-x-[-1] text-decor opacity-50" />

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-5">
        <a href="#home" className="font-serif text-3xl italic text-foreground">
          {profile.shortName}
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {[
            { icon: Github, href: profile.github, label: "GitHub" },
            { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
            { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
