import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ eyebrow, title, align = "center", className }: Props) {
  return (
    <Reveal
      className={cn(
        "mb-12 flex flex-col gap-3 sm:mb-16",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="display-heading text-4xl sm:text-5xl lg:text-6xl">{title}</h2>
      <span className="mt-1 block h-[3px] w-16 rounded-full bg-primary/70" />
    </Reveal>
  );
}
