import { Briefcase, MapPin } from "lucide-react";
import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Chip } from "@/components/ui/Chip";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Professional experience."
          gradientWord="experience."
          description="Where I've applied backend engineering, data and product thinking in real roles."
        />

        <div className="relative mt-14 space-y-8">
          <div
            className="absolute left-6 top-3 bottom-3 hidden w-px bg-gradient-to-b from-violet-glow/50 via-border to-transparent sm:block"
            aria-hidden="true"
          />

          {experience.map((entry) =>
            entry.primary ? (
              <Reveal key={entry.company}>
                <PrimaryExperienceCard entry={entry} />
              </Reveal>
            ) : (
              <Reveal key={entry.company} delay={0.08}>
                <SecondaryExperienceCard entry={entry} />
              </Reveal>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

function PrimaryExperienceCard({ entry }: { entry: (typeof experience)[number] }) {
  return (
    <div className="relative flex flex-col gap-5 sm:flex-row sm:gap-8">
      <div className="hidden sm:block">
        <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-violet-glow bg-violet-600/20 shadow-glow-sm">
          <Briefcase className="h-5 w-5 text-plum" strokeWidth={1.75} />
        </div>
      </div>

      <div className="flex-1 rounded-[1.75rem] border border-violet-glow/30 bg-gradient-to-b from-white/[0.05] to-white/[0.015] p-6 shadow-glow-md sm:p-9">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-dim">
              Current role
            </p>
            <h3 className="mt-1.5 font-display text-2xl font-semibold text-ink sm:text-3xl">
              {entry.company}
            </h3>
            <p className="mt-1 text-base text-plum">{entry.role}</p>
          </div>
          <div className="flex flex-col items-start gap-1.5 text-xs text-muted-dim sm:items-end">
            <span className="rounded-full border border-green-400/30 bg-green-400/10 px-3 py-1 font-medium text-green-300">
              {entry.period}
            </span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3 w-3" /> {entry.location}
            </span>
          </div>
        </div>

        {entry.groups ? (
          <div className="mt-8 grid gap-3.5 sm:grid-cols-2">
            {entry.groups.map((group) => (
              <div key={group.label} className="rounded-xl border border-border bg-black/20 p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-dim">
                  {group.label}
                </p>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <Chip key={item} className="text-[11px]">
                      {item}
                    </Chip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : null}

        <div className="mt-8">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-dim">
            Responsibilities
          </p>
          <ul className="grid gap-2.5 sm:grid-cols-2">
            {entry.responsibilities.map((point) => (
              <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-glow" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap gap-2 border-t border-border pt-6">
          {entry.tags.map((tag) => (
            <Chip key={tag} className="border-violet-glow/30 bg-violet-600/10 text-plum">
              {tag}
            </Chip>
          ))}
        </div>
      </div>
    </div>
  );
}

function SecondaryExperienceCard({ entry }: { entry: (typeof experience)[number] }) {
  return (
    <div className="relative flex flex-col gap-5 sm:flex-row sm:gap-8">
      <div className="hidden h-12 w-12 shrink-0 items-center justify-center sm:flex">
        <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-border-strong bg-surface">
          <Briefcase className="h-3.5 w-3.5 text-plum" strokeWidth={1.75} />
        </div>
      </div>

      <div className="flex-1 rounded-2xl border border-border bg-white/[0.02] p-6 transition-colors hover:border-border-strong sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="font-display text-xl font-semibold text-ink">{entry.company}</h3>
            <p className="mt-0.5 text-sm text-plum">{entry.role}</p>
          </div>
          <div className="flex flex-col items-start gap-1 text-xs text-muted-dim sm:items-end">
            <span className="rounded-full border border-border bg-white/[0.03] px-3 py-1 font-medium text-muted">
              {entry.period}
            </span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3 w-3" /> {entry.location}
            </span>
          </div>
        </div>

        {entry.dimensions ? (
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {entry.dimensions.map((dimension, i) => (
              <div key={dimension} className="flex items-center gap-2">
                {i > 0 ? <span className="text-xs text-muted-dim">+</span> : null}
                <span className="rounded-full border border-border bg-white/[0.03] px-3 py-1 text-[11px] font-medium text-muted">
                  {dimension}
                </span>
              </div>
            ))}
          </div>
        ) : null}

        <ul className="mt-5 space-y-2.5">
          {entry.responsibilities.map((point) => (
            <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-glow" />
              {point}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-5">
          {entry.tags.map((tag) => (
            <Chip key={tag}>{tag}</Chip>
          ))}
        </div>
      </div>
    </div>
  );
}
