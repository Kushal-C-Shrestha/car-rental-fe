import type { ReactNode } from "react";

type HomeSectionTone = "white" | "muted" | "dark";

type HomeSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  innerClassName?: string;
  tone?: HomeSectionTone;
};

const tones: Record<HomeSectionTone, string> = {
  white: "bg-white text-zinc-950",
  muted: "bg-[#f8f8f8] text-zinc-950",
  dark: "bg-zinc-950 text-white",
};

export function HomeSection({
  children,
  className = "py-24",
  id,
  innerClassName = "",
  tone = "white",
}: HomeSectionProps) {
  return (
    <section id={id} className={`${tones[tone]} px-5 ${className}`}>
      <div className={`mx-auto max-w-6xl ${innerClassName}`}>{children}</div>
    </section>
  );
}
