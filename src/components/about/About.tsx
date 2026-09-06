import { Database, KeyRound, Layers, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { AboutVisual } from "./AboutVisual";

const pillars = [
  {
    icon: Layers,
    title: "Backend engineering",
    description: "REST APIs and services built with FastAPI and Node.js for enterprise systems.",
  },
  {
    icon: Database,
    title: "Database design",
    description: "Normalized schemas, indexing and query optimization for transactional workloads.",
  },
  {
    icon: KeyRound,
    title: "Auth & access control",
    description: "JWT authentication, RBAC and API security across enterprise modules.",
  },
  {
    icon: Sparkles,
    title: "AI & data applications",
    description: "LLM-driven pipelines with LangChain, vector search and Gemini.",
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
              title="Building systems that actually work."
              gradientWord="actually work."
            />

            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
                I&apos;m a backend-focused full-stack developer who designs scalable services and
                the databases underneath them. My work spans REST API design, authentication and
                authorization, enterprise modules like CRM and invoicing, and AI-powered pipelines
                that connect language models to real production data.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                On the frontend, I use React and Next.js to ship the interfaces that sit on top of
                those systems&nbsp;— so the same person who designs the schema can also ship the
                dashboard that reads from it.
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
