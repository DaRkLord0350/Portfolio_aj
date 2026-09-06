import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Engineering Case Studies"
          title="Problems I've solved."
          gradientWord="solved."
          description="Each project started as a real technical problem — here's how I reasoned through it and what I built."
        />

        <div className="mt-14 flex flex-col gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.05} y={32}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
