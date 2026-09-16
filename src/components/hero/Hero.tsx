import { ArrowUpRight, Download, FolderGit2 } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32 lg:flex lg:min-h-[88vh] lg:items-center lg:pb-16 lg:pt-24"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[720px] bg-[radial-gradient(60%_50%_at_50%_0%,rgba(124,58,237,0.18),transparent)]" />
      <div className="bg-grain pointer-events-none absolute inset-0 -z-10 opacity-[0.15]" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-plum">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              Available for freelance projects
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
              <span className="sm:whitespace-nowrap">I build software</span> that
              <br />
              <span className="text-gradient">solves business problems.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              I&apos;m {profile.firstName} — a {profile.role} who helps startups and businesses turn
              manual workflows, spreadsheets and disconnected tools into reliable software systems:
              internal tools, SaaS platforms, dashboards, APIs and AI-powered workflows.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button href="#projects" icon={<FolderGit2 className="h-4 w-4" />}>
                View My Work
              </Button>
              <Button href="#contact" variant="secondary" icon={<ArrowUpRight className="h-4 w-4" />}>
                Let&apos;s Work Together
              </Button>
              <Button
                href={profile.resumeUrl}
                variant="ghost"
                download
                icon={<Download className="h-4 w-4" />}
              >
                Download CV
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-border pt-6">
              <Stat value="20+" label="REST APIs shipped" />
              <Stat value="6" label="Business systems built" />
              <Stat value="6" label="Core engineering domains" />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} y={40}>
          <HeroVisual />
        </Reveal>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-2xl font-semibold text-ink">{value}</p>
      <p className="text-xs text-muted-dim">{label}</p>
    </div>
  );
}
