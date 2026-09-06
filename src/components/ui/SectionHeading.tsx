import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  gradientWord?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  gradientWord,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const parts = gradientWord ? title.split(gradientWord) : [title];

  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border-strong bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-plum">
        <span className="h-1.5 w-1.5 rounded-full bg-violet-glow shadow-[0_0_8px_2px_rgba(139,92,246,0.7)]" />
        {eyebrow}
      </span>
      <h2 className="text-3xl font-semibold text-ink sm:text-4xl md:text-5xl">
        {gradientWord ? (
          <>
            {parts[0]}
            <span className="text-gradient">{gradientWord}</span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {description ? (
        <p className={cn("max-w-2xl text-base text-muted sm:text-lg", align === "center" && "mx-auto")}>
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
