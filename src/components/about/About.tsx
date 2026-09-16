import { Database, KeyRound, Layers, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { AboutVisual } from "./AboutVisual";

const pillars = [
  {
    icon: Layers,
    title: "Backend engineering",
    description: "REST APIs and services that power CRM, invoicing and operational workflows.",
  },
  {
    icon: Database,
    title: "Database design",
    description: "Normalized schemas and optimized queries that scale with the business.",
  },
  {
    icon: KeyRound,
    title: "Auth & access control",
    description: "Role-based access so the right people see the right data.",
  },
  {
    icon: Sparkles,
    title: "AI & data applications",
    description: "LLM-powered workflows that turn raw data into decisions.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="About"
              title="I build systems, not just features."
              gradientWord="not just features."
            />

            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
                Most businesses don&apos;t need another complicated piece of software&nbsp;— they
                need the messy process behind it to work better. I work with startups, founders and
                growing businesses to turn manual operations into software: workflow automation,
                internal dashboards, APIs, SaaS platforms, integrations and AI-powered tools.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                My work usually starts with a simple question&nbsp;— what&apos;s taking too much
                time, creating errors, or forcing people to work manually? From there I design the
                system, build the backend, connect the data, and ship the interface that reads from
                it. Software that&apos;s useful in the real world, not just a demo.
              </p>
            </Reveal>

            <RevealGroup className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {pillars.map((pillar) => (
                <RevealItem key={pillar.title}>
                  <div className="flex h-full items-start gap-3 rounded-xl border border-border bg-white/[0.02] p-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border-strong bg-violet-600/10">
                      <pillar.icon className="h-4.5 w-4.5 text-plum" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink">{pillar.title}</p>
                      <p className="mt-1 text-xs leading-relaxed text-muted-dim">{pillar.description}</p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <Reveal delay={0.15} y={30}>
            <AboutVisual />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
