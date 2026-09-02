import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { profile } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { CoffeeCup } from "./Decor";

const channels = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: profile.linkedinHandle,
    href: profile.linkedin,
  },
  { icon: Github, label: "GitHub", value: profile.githubHandle, href: profile.github },
];

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Thanks for reaching out — I'll get back to you shortly.");
      e.currentTarget?.reset();
    }, 700);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-28">
      <CoffeeCup className="float-slow pointer-events-none absolute -right-8 top-10 -z-10 hidden h-[240px] w-[260px] text-decor opacity-60 lg:block" />

      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Get in touch" title="Let's Connect" />

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <h3 className="serif-accent text-2xl leading-snug sm:text-3xl">
              Let&apos;s build something extraordinary together.
            </h3>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              I am always open to discussing new products, full-stack opportunities, cloud and
              DevOps work, or collaborating on real-time and AI-driven tools. Drop a message!
            </p>

            <div className="mt-8 space-y-3">
              {channels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-[1.25rem] border border-border bg-card p-4 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <channel.icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs tracking-[0.16em] uppercase text-muted-foreground">
                      {channel.label}
                    </span>
                    <span className="block text-sm font-semibold text-foreground">
                      {channel.value}
                    </span>
                  </span>
                </a>
              ))}
              <p className="flex items-center gap-3 pt-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                {profile.location}
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={onSubmit}
              className="rounded-[2rem] border border-border bg-card p-7 shadow-card sm:p-9"
            >
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs tracking-[0.16em] uppercase text-muted-foreground"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs tracking-[0.16em] uppercase text-muted-foreground"
                  >
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                    placeholder="jane@company.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs tracking-[0.16em] uppercase text-muted-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full resize-none rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:brightness-110 disabled:opacity-70"
                >
                  {sending ? "Sending..." : "Send Message"}
                  <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
