import { GraduationCap, Award } from "lucide-react";
import { education, certifications } from "@/data/education";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

const fieldMotifs = ["CS", "DATABASES", "SYSTEMS", "ALGORITHMS"];

export function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Education & Certifications"
          title="Where the foundation began."
          gradientWord="foundation began."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[3fr_2fr]">
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-[1.75rem] border border-border-strong bg-gradient-to-b from-white/[0.05] to-white/[0.015] p-8 shadow-glow-sm sm:p-10 lg:p-12">
              <div className="bg-grain pointer-events-none absolute inset-0 opacity-[0.25]" aria-hidden="true" />

              <Reveal y={12}>
                <div className="relative flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-plum" strokeWidth={1.75} />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-plum">
                    Academic Foundation
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.08} y={14}>
                <h3 className="relative mt-4 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-[2.6rem]">
                  {education.institution}
                </h3>
              </Reveal>

              <Reveal delay={0.16} y={14}>
                <p className="relative mt-3 text-xl font-medium text-ink/90 sm:text-2xl">{education.degree}</p>
              </Reveal>

              <Reveal delay={0.24} y={10}>
                <div className="relative mt-7 flex flex-wrap items-end justify-between gap-6">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-dim">
                    <span className="rounded-full border border-violet-glow/30 bg-violet-600/10 px-3.5 py-1.5 font-semibold text-plum">
                      {education.period}
                    </span>
                    <span className="text-muted-dim/60">•</span>
                    <span>{education.location}</span>
                  </div>

                  <div
                    className="hidden flex-col items-end gap-1 sm:flex"
                    aria-hidden="true"
                  >
                    {fieldMotifs.map((word) => (
                      <span
                        key={word}
                        className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-dim/50"
                      >
                        {word}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-border bg-white/[0.02] p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border-strong bg-violet-600/10">
                  <Award className="h-5 w-5 text-plum" strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-lg font-semibold text-ink">Certifications</h3>
              </div>
              <RevealGroup className="mt-4 flex flex-col gap-2.5">
                {certifications.map((cert) => (
                  <RevealItem key={cert}>
                    <div className="flex items-center gap-3 rounded-xl border border-border bg-black/20 px-4 py-3 text-sm text-muted transition-colors hover:border-border-strong">
                      <Award className="h-3.5 w-3.5 shrink-0 text-violet-glow" strokeWidth={1.75} />
                      {cert}
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
