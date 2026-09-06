"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Server, Database, ShieldCheck, BrainCircuit, Cloud, ArrowRight, ArrowDown } from "lucide-react";
import { profile } from "@/data/profile";

const nodes = [
  { id: "api", label: "API", icon: Server, style: "left-[2%] top-[14%] lg:left-[4%]" },
  { id: "database", label: "DATABASE", icon: Database, style: "right-[0%] top-[6%] lg:right-[2%]" },
  { id: "auth", label: "AUTH", icon: ShieldCheck, style: "left-[0%] top-[62%] lg:left-[1%]" },
  { id: "ai", label: "AI", icon: BrainCircuit, style: "right-[3%] top-[46%] lg:right-[5%]" },
  { id: "cloud", label: "CLOUD", icon: Cloud, style: "left-[16%] top-[92%] lg:left-[18%]" },
] as const;

const connectorPaths = [
  "M 14 20 C 30 22, 38 28, 48 34",
  "M 86 12 C 70 18, 62 24, 50 32",
  "M 8 66 C 24 60, 36 52, 48 44",
  "M 92 52 C 76 50, 64 46, 50 40",
  "M 22 90 C 32 76, 40 62, 48 50",
];

export function HeroVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-[6/5] w-full max-w-[640px]">
      <div
        className="pointer-events-none absolute -left-10 top-4 h-56 w-56 rounded-full bg-violet-600/25 blur-[90px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-6 bottom-6 h-64 w-64 rounded-full bg-indigo-500/20 blur-[100px]"
        aria-hidden="true"
      />

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {connectorPaths.map((d, i) => (
          <path
            key={d}
            d={d}
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="0.35"
            strokeDasharray="2 3"
            className={shouldReduceMotion ? "" : "animate-dash"}
            style={{ animationDelay: `${i * 0.3}s` }}
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>

      {nodes.map(({ id, label, icon: Icon, style }, i) => (
        <motion.div
          key={id}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
          className={`absolute z-20 ${style} ${shouldReduceMotion ? "" : "animate-float-slow"}`}
          style={{ animationDelay: `${i * 0.6}s` }}
        >
          <div className="flex items-center gap-1.5 rounded-xl glass-panel-strong px-2.5 py-2 shadow-glow-sm">
            <Icon className="h-3.5 w-3.5 text-plum" strokeWidth={2} />
            <span className="text-[10px] font-semibold tracking-wider text-muted">{label}</span>
          </div>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-1/2 top-1/2 z-10 w-[78%] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="rounded-t-xl border border-b-0 border-white/10 bg-[#0c0c1a] px-3 pt-2.5 shadow-glow-lg">
          <div className="flex items-center gap-1.5 pb-2">
            <span className="h-2 w-2 rounded-full bg-red-400/70" />
            <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
            <span className="h-2 w-2 rounded-full bg-green-400/70" />
            <span className="ml-2 text-[10px] text-muted-dim">localhost — production system</span>
          </div>
        </div>
        <div className="rounded-b-xl border border-t-0 border-white/10 bg-gradient-to-b from-[#0a0a18] to-[#07070f] p-4 sm:p-5">
          <p className="text-[11px] font-semibold tracking-wide text-ink">{profile.name}</p>
          <p className="mt-0.5 text-[9px] uppercase tracking-[0.2em] text-violet-glow">API System</p>

          <div className="mt-3.5 grid grid-cols-2 gap-2">
            <SystemPill label="FastAPI" />
            <SystemPill label="PostgreSQL" />
          </div>
          <div className="mt-1.5 flex items-center justify-center text-muted-dim">
            <ArrowDown className="h-3 w-3" />
          </div>
          <div className="grid grid-cols-2 items-center gap-2">
            <SystemPill label="Authentication" tone="strong" />
            <div className="flex items-center justify-center text-muted-dim">
              <ArrowRight className="h-3 w-3" />
            </div>
          </div>
          <div className="mt-1.5 flex items-center justify-center text-muted-dim">
            <ArrowDown className="h-3 w-3" />
          </div>
          <SystemPill label="Background Jobs" full />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30, x: 10 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className={`absolute -bottom-6 -right-2 z-30 hidden w-[30%] sm:block ${shouldReduceMotion ? "" : "animate-float-slower"}`}
      >
        <div className="rounded-[1.4rem] border border-white/10 bg-[#0a0a16] p-1.5 shadow-glow-md">
          <div className="rounded-[1rem] bg-gradient-to-b from-[#0d0d1e] to-[#07070f] px-3 py-4">
            <div className="mx-auto mb-3 h-1 w-6 rounded-full bg-white/15" />
            <p className="text-[8px] text-muted-dim">Hi, I&apos;m</p>
            <p className="text-[11px] font-semibold text-ink">{profile.firstName}</p>
            <p className="text-[7px] font-medium text-violet-glow">{profile.role}</p>
            <div className="mt-2.5 h-1 w-3/4 rounded-full bg-gradient-to-r from-violet-500 to-indigo-400" />
            <div className="mt-1.5 h-1 w-1/2 rounded-full bg-white/10" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function SystemPill({ label, tone, full }: { label: string; tone?: "strong"; full?: boolean }) {
  return (
    <div
      className={`rounded-lg border px-2.5 py-1.5 text-center text-[9px] font-medium ${
        tone === "strong"
          ? "border-violet-glow/40 bg-violet-600/15 text-plum"
          : "border-white/10 bg-white/[0.04] text-muted"
      } ${full ? "col-span-2 mt-1.5" : ""}`}
    >
      {label}
    </div>
  );
}
