const codeLines = [
  { n: 1, text: "from fastapi import FastAPI, Depends", tone: "muted" },
  { n: 2, text: "from app.auth import require_role", tone: "muted" },
  { n: 3, text: "", tone: "muted" },
  { n: 4, text: "app = FastAPI()", tone: "ink" },
  { n: 5, text: "", tone: "muted" },
  { n: 6, text: '@app.post("/invoices")', tone: "plum" },
  { n: 7, text: "async def create_invoice(", tone: "ink" },
  { n: 8, text: "    payload: InvoiceSchema,", tone: "muted" },
  { n: 9, text: "    user=Depends(require_role('finance')),", tone: "muted" },
  { n: 10, text: "):", tone: "ink" },
  { n: 11, text: "    record = await db.invoices.create(payload)", tone: "muted" },
  { n: 12, text: "    await queue.enqueue('reconcile', record.id)", tone: "muted" },
  { n: 13, text: "    return record", tone: "ink" },
];

const toneClass: Record<string, string> = {
  muted: "text-muted-dim",
  ink: "text-ink/90",
  plum: "text-plum",
};

export function AboutVisual() {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-violet-600/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="overflow-hidden rounded-2xl glass-panel-strong shadow-glow-md">
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          <span className="ml-3 text-xs text-muted-dim">services/invoices.py</span>
        </div>
        <pre className="overflow-x-auto p-5 text-[13px] leading-relaxed">
          <code>
            {codeLines.map((line) => (
              <div key={line.n} className="flex gap-4">
                <span className="w-4 shrink-0 select-none text-right text-muted-dim/60">{line.n}</span>
                <span className={toneClass[line.tone]}>{line.text || " "}</span>
              </div>
            ))}
          </code>
        </pre>
      </div>

      <div className="absolute -bottom-6 -left-6 hidden w-40 rounded-xl glass-panel-strong p-3 shadow-glow-sm sm:block">
        <p className="text-[10px] uppercase tracking-wider text-muted-dim">Query time</p>
        <p className="mt-1 font-display text-lg font-semibold text-ink">Indexed &amp; optimized</p>
      </div>
    </div>
  );
}
