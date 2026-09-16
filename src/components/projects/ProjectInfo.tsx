import { Check, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { Chip } from "@/components/ui/Chip";
import { GithubIcon } from "@/components/ui/BrandIcons";

const accentByVisualization: Record<Project["visualization"], string> = {
  "financial-saas": "from-indigo-500 to-violet-600",
  "commerce-ops": "from-violet-600 to-indigo-500",
  "nlp-to-sql": "from-violet-600 to-fuchsia-500",
  ocr: "from-fuchsia-500 to-indigo-500",
  "data-governance": "from-indigo-500 to-fuchsia-500",
  "business-intelligence": "from-fuchsia-500 to-violet-600",
};

export function ProjectInfo({ project }: { project: Project }) {
  return (
    <div className="p-6 sm:p-8 lg:p-10">
      <span
        className={`bg-gradient-to-br ${accentByVisualization[project.visualization]} bg-clip-text font-display text-xs font-bold tracking-widest text-transparent`}
      >
        CASE STUDY {project.number}
      </span>
      <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-ink sm:text-3xl">
        {project.name}
      </h3>
      <p className="mt-1.5 text-sm font-medium text-plum sm:text-base">{project.tagline}</p>

      <div className="mt-6">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-dim">
          Highlights
        </p>
        <ul className="grid gap-2.5 sm:grid-cols-2">
          {project.capabilities.map((capability) => (
            <li key={capability} className="flex gap-2.5 text-sm leading-relaxed text-muted">
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-plum" strokeWidth={2} />
              {capability}
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-6 text-sm leading-relaxed text-muted sm:text-[15px]">{project.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <Chip key={tech}>{tech}</Chip>
        ))}
      </div>

      {project.links.github || project.links.demo ? (
        <div className="mt-6 flex flex-wrap gap-3 border-t border-border pt-6">
          {project.links.demo ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-strong bg-white/[0.03] px-4 py-2 text-xs font-medium text-ink transition-colors hover:bg-white/[0.07]"
            >
              <ArrowUpRight className="h-3.5 w-3.5" />
              Live
            </a>
          ) : null}
          {project.links.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-strong bg-white/[0.03] px-4 py-2 text-xs font-medium text-ink transition-colors hover:bg-white/[0.07]"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              Code
            </a>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
