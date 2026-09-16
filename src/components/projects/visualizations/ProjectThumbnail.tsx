"use client";

import { useState } from "react";
import Image from "next/image";
import { FolderGit2 } from "lucide-react";
import type { Project } from "@/data/projects";
import { projectCoverSrc } from "@/data/projects";
import { cn } from "@/lib/utils";

const accentByVisualization: Record<Project["visualization"], string> = {
  "financial-saas": "from-indigo-500 to-violet-600",
  "commerce-ops": "from-violet-600 to-indigo-500",
  "nlp-to-sql": "from-violet-600 to-fuchsia-500",
  ocr: "from-fuchsia-500 to-indigo-500",
  "data-governance": "from-indigo-500 to-fuchsia-500",
  "business-intelligence": "from-fuchsia-500 to-violet-600",
};

export function ProjectThumbnail({
  project,
  active,
  onSelect,
}: {
  project: Project;
  active: boolean;
  onSelect: () => void;
}) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-current={active}
      aria-label={`View ${project.name}`}
      className={cn(
        "relative aspect-[16/10] w-28 shrink-0 overflow-hidden rounded-lg border bg-black/20 transition-all duration-200 sm:w-36",
        active
          ? "border-violet-glow shadow-glow-sm"
          : "border-border opacity-60 hover:opacity-100 hover:border-border-strong",
      )}
    >
      {!imageFailed ? (
        <Image
          src={projectCoverSrc(project)}
          alt=""
          fill
          sizes="144px"
          className="object-cover"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <div
          className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${accentByVisualization[project.visualization]} opacity-30`}
        >
          <FolderGit2 className="h-5 w-5 text-white" strokeWidth={1.75} />
        </div>
      )}
      <span className="absolute inset-x-0 bottom-0 truncate bg-black/60 px-1.5 py-1 text-left text-[10px] font-medium text-white/90">
        {project.name}
      </span>
    </button>
  );
}
