import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { profile } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { CoffeeCup } from "./Decor";

const WhatsappIcon = (props: React.ComponentProps<"svg">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const channels = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { 
    icon: WhatsappIcon, 
    label: "WhatsApp", 
    value: profile.phone, 
    href: `https://wa.me/${profile.phone.replace(/[^0-9]/g, "")}` 
  },
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

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Web3Forms access key
    formData.append("access_key", "e37dff65-3813-4398-bf16-764f89b14927");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thanks for reaching out — I'll get back to you shortly.");
        form.reset();
      } else {
        toast.error(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setSending(false);
    }
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
