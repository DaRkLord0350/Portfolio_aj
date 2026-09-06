import { Quote, Compass } from "lucide-react";
import type { Project } from "@/data/projects";
import { GlowCard } from "@/components/ui/GlowCard";
import { Chip } from "@/components/ui/Chip";
import { PipelineFlow } from "./visualizations/PipelineFlow";

const accentByVisualization: Record<Project["visualization"], string> = {
  "nlp-to-sql": "from-violet-600 to-fuchsia-500",
  "financial-saas": "from-indigo-500 to-violet-600",
  ocr: "from-fuchsia-500 to-indigo-500",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <GlowCard className="p-6 sm:p-8 lg:p-10">
      <div className="relative flex flex-wrap items-start justify-between gap-4">
        <span
          className={`pointer-events-none absolute -top-2 right-0 select-none bg-gradient-to-br ${accentByVisualization[project.visualization]} bg-clip-text font-display text-[5rem] font-bold leading-none text-transparent opacity-[0.12] sm:text-[7rem]`}
          aria-hidden="true"
        >
          {project.number}
        </span>
        <div className="relative">
          <span
            className={`bg-gradient-to-br ${accentByVisualization[project.visualization]} bg-clip-text font-display text-xs font-bold tracking-widest text-transparent`}
          >
            CASE STUDY {project.number}
          </span>
          <h3 className="mt-2 max-w-lg font-display text-2xl font-semibold leading-tight text-ink sm:text-3xl">
            {project.name}
          </h3>
        </div>
      </div>

      <div className="relative mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <Chip key={tech}>{tech}</Chip>
        ))}
      </div>

      <div className="relative mt-8 grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-white/[0.02] p-5">
          <div className="flex items-center gap-2 text-muted-dim">
            <Quote className="h-3.5 w-3.5 text-plum" strokeWidth={1.75} />
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em]">The Problem</p>
          </div>
          <p className="mt-3 text-[15px] italic leading-relaxed text-ink/90">&ldquo;{project.problem}&rdquo;</p>
        </div>
        <div className="rounded-xl border border-border bg-white/[0.02] p-5">
          <div className="flex items-center gap-2 text-muted-dim">
            <Compass className="h-3.5 w-3.5 text-plum" strokeWidth={1.75} />
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em]">The Approach</p>
          </div>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">{project.approach}</p>
        </div>
      </div>

      <div className="relative mt-6">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-dim">
          What I Built
        </p>
        <ul className="grid gap-2.5 sm:grid-cols-2">
          {project.built.map((point) => (
            <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-glow" />
              {point}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mt-6">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-dim">
          Architecture
        </p>
        <PipelineFlow steps={project.pipeline} />
      </div>

      <div className="relative mt-6">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-dim">
          Key Engineering Concepts
        </p>
        <div className="flex flex-wrap gap-2">
          {project.concepts.map((cap) => (
            <Chip key={cap} className="border-violet-glow/30 bg-violet-600/10 text-plum">
              {cap}
            </Chip>
          ))}
        </div>
      </div>
    </GlowCard>
  );
}
