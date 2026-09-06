"use client";

import { type ReactNode, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type GlowCardProps = {
  children: ReactNode;
  className?: string;
};

export function GlowCard({ children, className }: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-surface/60 backdrop-blur-xl transition-colors duration-300 hover:border-border-strong",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(320px circle at ${pos.x}% ${pos.y}%, rgba(139,92,246,0.14), transparent 70%)`,
        }}
        aria-hidden="true"
      />
      <div className="relative">{children}</div>
    </div>
  );
}
