import { Braces, Server, LayoutTemplate, Database, Cloud, Sparkles } from "lucide-react";
import { skillGroups } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Chip } from "@/components/ui/Chip";

const groupIcons: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  languages: Braces,
  backend: Server,
  frontend: LayoutTemplate,
  databases: Database,
  cloud: Cloud,
  "ai-data": Sparkles,
};

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="A toolkit built for production."
          gradientWord="production."
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = groupIcons[group.id] ?? Server;
            return (
              <RevealItem key={group.id}>
                <div className="group h-full rounded-2xl border border-border bg-white/[0.02] p-6 transition-colors duration-300 hover:border-border-strong">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border-strong bg-violet-600/10">
                      <Icon className="h-4.5 w-4.5 text-plum" strokeWidth={1.75} />
                    </div>
                    <h3 className="font-display text-base font-semibold text-ink">{group.label}</h3>
                  </div>

                  <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-white/[0.05]">
                    <div className="h-full w-full origin-left scale-x-[0.15] rounded-full bg-gradient-to-r from-violet-glow to-indigo-400 transition-transform duration-700 ease-out group-hover:scale-x-100" />
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Chip key={item} className="group-hover:border-border-strong group-hover:text-ink">
                        {item}
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
