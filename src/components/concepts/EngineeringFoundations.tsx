import { Server, Database, ShieldCheck, Network, BrainCircuit, Cloud, LayoutTemplate, type LucideIcon } from "lucide-react";
import { engineeringFoundations, type ConceptGroup } from "@/data/concepts";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

const iconMap: Record<ConceptGroup["icon"], LucideIcon> = {
  backend: Server,
  database: Database,
  security: ShieldCheck,
  system: Network,
  ai: BrainCircuit,
  devops: Cloud,
  frontend: LayoutTemplate,
};

export function EngineeringFoundations() {
  return (
    <section id="foundations" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Core Engineering"
          title="Engineering foundations."
          gradientWord="foundations."
          description="The concepts underneath the systems I build — demonstrated through my experience and projects, not a list of buzzwords."
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {engineeringFoundations.map((group) => {
            const Icon = iconMap[group.icon];
            return (
              <RevealItem key={group.id}>
                <div className="h-full rounded-2xl border border-border bg-white/[0.02] p-6 transition-colors duration-300 hover:border-border-strong">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border-strong bg-violet-600/10">
                      <Icon className="h-4.5 w-4.5 text-plum" strokeWidth={1.75} />
                    </div>
                    <h3 className="font-display text-base font-semibold text-ink">{group.label}</h3>
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-glow" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
