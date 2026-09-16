"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectVisual } from "./visualizations/ProjectVisual";
import { ProjectThumbnail } from "./visualizations/ProjectThumbnail";
import { ProjectInfo } from "./ProjectInfo";

const navButtonClasses =
  "z-20 flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-border-strong bg-black/40 text-ink backdrop-blur-md transition-colors pointer-events-auto hover:bg-black/60";

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const activeProject = projects[activeIndex];

  function goTo(index: number) {
    setActiveIndex(((index % projects.length) + projects.length) % projects.length);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(activeIndex + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(activeIndex - 1);
    }
  }

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="My Work"
          title="Real systems I've designed and built."
          gradientWord="designed and built."
          description="Selected work — evidence of what I can build for a client, not a tutorial project list."
        />

        <Reveal delay={0.12}>
          <div
            role="region"
            aria-label="Featured projects — use the left and right arrow keys to navigate"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            className="mt-12 overflow-hidden rounded-2xl border border-border-strong bg-surface/60 shadow-glow-md backdrop-blur-xl"
          >
            <div className="relative">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeProject.id}
                  className="relative z-0"
                  initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: shouldReduceMotion ? 1 : 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <ProjectVisual project={activeProject} />
                </motion.div>
              </AnimatePresence>

              <button
                type="button"
                aria-label="Previous project"
                onClick={() => goTo(activeIndex - 1)}
                className={`${navButtonClasses} absolute left-3 top-1/2 -translate-y-1/2 sm:left-4`}
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Next project"
                onClick={() => goTo(activeIndex + 1)}
                className={`${navButtonClasses} absolute right-3 top-1/2 -translate-y-1/2 sm:right-4`}
              >
                <ChevronRight className="h-4 w-4" />
              </button>

              <span className="absolute bottom-4 left-4 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
                {String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </span>
            </div>

            <div className="no-scrollbar flex gap-3 overflow-x-auto border-y border-border bg-black/20 px-4 py-4 sm:px-6">
              {projects.map((project, index) => (
                <ProjectThumbnail
                  key={project.id}
                  project={project}
                  active={index === activeIndex}
                  onSelect={() => goTo(index)}
                />
              ))}
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeProject.id}
                initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : -8 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <ProjectInfo project={activeProject} />
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
