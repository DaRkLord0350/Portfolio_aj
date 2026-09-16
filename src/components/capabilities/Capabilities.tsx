import { Zap, Server, Building2, BrainCircuit, Database, Link2, type LucideIcon } from "lucide-react";
import { capabilities, type Capability } from "@/data/capabilities";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Chip } from "@/components/ui/Chip";

const iconMap: Record<Capability["icon"], LucideIcon> = {
  zap: Zap,
  server: Server,
  building: Building2,
  brain: BrainCircuit,
  database: Database,
  link: Link2,
};

export function Capabilities() {
  return (
    <section id="capabilities" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Services"
          title="What I can build for your business."
          gradientWord="for your business."
          description="Technology is the tool. The goal is always the same — turn a business problem into working software."
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => {
            const Icon = iconMap[capability.icon];
            return (
              <RevealItem key={capability.id}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-glow-sm">
                  <div
                    className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-violet-600/0 blur-2xl transition-colors duration-500 group-hover:bg-violet-600/20"
                    aria-hidden="true"
                  />
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border-strong bg-violet-600/10">
                    <Icon className="h-5 w-5 text-plum" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">{capability.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-dim">{capability.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {capability.tags.map((tag) => (
                      <Chip key={tag} className="text-[10px]">
                        {tag}
                      </Chip>
                    ))}
                  </div>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
