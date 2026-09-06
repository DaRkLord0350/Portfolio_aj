import { cn } from "@/lib/utils";

export function Chip({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-white/[0.03] px-3 py-1 text-xs font-medium text-muted transition-colors",
        className,
      )}
    >
      {children}
    </span>
  );
}
