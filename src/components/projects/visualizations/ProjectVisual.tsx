"use client";

import { useState } from "react";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { projectCoverSrc } from "@/data/projects";
import { PipelineFlow } from "./PipelineFlow";

export function ProjectVisual({ project }: { project: Project }) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = !imageFailed;
  const chromeLabel = showImage ? `${project.imageFolder}/cover.png` : `${project.id} — architecture`;

  return (
    <div className="relative">
      <div className="flex items-center gap-2 border-b border-border bg-black/20 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        <span className="ml-3 truncate text-xs text-muted-dim">{chromeLabel}</span>
      </div>

      {showImage ? (
        <div className="relative aspect-[16/9] w-full bg-black/30">
          <Image
            src={projectCoverSrc(project)}
            alt={project.imageAlt}
            fill
            sizes="(min-width: 1024px) 1000px, 100vw"
            className="object-contain"
            onError={() => setImageFailed(true)}
          />
          {project.imageNote ? (
            <span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-medium text-muted backdrop-blur-sm">
              {project.imageNote}
            </span>
          ) : null}
        </div>
      ) : (
        <div className="flex min-h-[280px] w-full items-center bg-black/10 p-5 sm:min-h-[340px] sm:p-8">
          <PipelineFlow steps={project.pipeline} />
        </div>
      )}
    </div>
  );
}
