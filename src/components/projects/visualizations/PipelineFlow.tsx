import {
  MessageSquare,
  Database,
  Search,
  BrainCircuit,
  Code2,
  Users,
  Server,
  ShieldCheck,
  Layers,
  Webhook,
  Landmark,
  FileText,
  Image as ImageIcon,
  ScanText,
  FileJson,
  ArrowRight,
  ArrowDown,
  type LucideIcon,
} from "lucide-react";

const stepIcons: Record<string, LucideIcon> = {
  "Natural Language": MessageSquare,
  "Schema Retrieval": Database,
  "Vector Search": Search,
  "Gemini / LLM": BrainCircuit,
  "SQL Generation": Code2,
  MySQL: Database,
  Users: Users,
  "Next.js / React": Layers,
  "REST APIs": Server,
  "Auth / RBAC": ShieldCheck,
  "Business Services": Layers,
  PostgreSQL: Database,
  "Background Jobs / Webhooks": Webhook,
  "External Financial APIs": Landmark,
  Document: FileText,
  "Image Preprocessing": ImageIcon,
  OCR: ScanText,
  "Data Extraction": Search,
  "Structured JSON": FileJson,
  "Backend / Analytics": Server,
  "Banking APIs": Landmark,
  "AI Copilot": BrainCircuit,
  "Orders / Inventory": Layers,
  "Multi-Source Data": Database,
  Ingestion: Database,
  Profiling: Search,
  "Quality Scoring": ShieldCheck,
  Cleansing: Code2,
  "MDM / Golden Records": Database,
  "Governance & Reporting": FileText,
};

export function PipelineFlow({ steps }: { steps: string[] }) {
  return (
    <div className="rounded-xl border border-border bg-black/20 p-4 sm:p-5">
      <div className="flex flex-col gap-1.5 xl:flex-row xl:items-center xl:gap-1">
        {steps.map((step, i) => {
          const Icon = stepIcons[step] ?? Layers;
          const isLast = i === steps.length - 1;
          return (
            <div key={step} className="flex flex-col items-stretch gap-1.5 xl:flex-1 xl:flex-row xl:items-center">
              <div className="flex flex-1 items-center gap-2 rounded-lg border border-border bg-white/[0.03] px-3 py-2.5">
                <Icon className="h-3.5 w-3.5 shrink-0 text-plum" strokeWidth={1.75} />
                <span className="text-[11px] font-medium leading-tight text-muted sm:text-xs">{step}</span>
              </div>
              {!isLast ? (
                <div className="flex items-center justify-center text-muted-dim xl:px-0.5">
                  <ArrowDown className="h-3.5 w-3.5 xl:hidden" />
                  <ArrowRight className="hidden h-3.5 w-3.5 xl:block" />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
