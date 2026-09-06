import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: ReactNode;
  external?: boolean;
  download?: boolean | string;
  className?: string;
};

const baseStyles =
  "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-none";

const variants = {
  primary:
    "bg-gradient-to-r from-violet-600 to-indigo-500 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset,0_8px_30px_-8px_rgba(124,58,237,0.6)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.14)_inset,0_10px_40px_-6px_rgba(124,58,237,0.8)] hover:-translate-y-0.5",
  secondary:
    "border border-border-strong bg-white/[0.03] text-ink hover:bg-white/[0.07] hover:-translate-y-0.5",
  ghost: "text-muted hover:text-ink",
};

export function Button({
  href,
  children,
  variant = "primary",
  icon,
  external,
  download,
  className,
}: ButtonProps) {
  const classes = cn(baseStyles, variants[variant], className);

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...(download ? { download } : {})}
      >
        {children}
        {icon}
      </a>
    );
  }

  if (download) {
    return (
      <a href={href} download className={classes}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {icon}
    </Link>
  );
}
