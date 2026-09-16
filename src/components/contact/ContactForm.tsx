"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { profile } from "@/data/profile";

type Status = "idle" | "loading" | "success" | "error";

const initialValues = {
  name: "",
  email: "",
  company: "",
  project: "",
  budget: "",
  timeline: "",
};

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [startedAt] = useState(() => Date.now());

  function handleChange(field: keyof typeof values) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
    };
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setError(null);

    const form = e.currentTarget;
    const honeypot = (form.elements.namedItem("website") as HTMLInputElement | null)?.value ?? "";

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, website: honeypot, startedAt }),
      });

      const data = (await response.json().catch(() => null)) as { ok: boolean; error?: string } | null;

      if (!response.ok || !data?.ok) {
        setStatus("error");
        setError(data?.error ?? "Something went wrong. Please try again or email me directly.");
        return;
      }

      setStatus("success");
      setValues(initialValues);
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again or email me directly.");
    }
  }

  const inputClasses =
    "w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm text-ink placeholder:text-muted-dim outline-none transition-colors focus:border-violet-glow disabled:opacity-60";

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-3 py-6">
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-green-400/30 bg-green-400/10">
          <CheckCircle2 className="h-5 w-5 text-green-300" strokeWidth={1.75} />
        </div>
        <p className="text-base font-semibold text-ink">Message sent.</p>
        <p className="text-sm leading-relaxed text-muted">
          Thanks — your message has been sent. I&apos;ll get back to you soon.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-xs font-medium text-plum transition-colors hover:text-ink"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      {/* Honeypot — hidden from real users, catches basic bots */}
      <div className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-muted-dim">
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={120}
            value={values.name}
            onChange={handleChange("name")}
            placeholder="Jane Doe"
            disabled={status === "loading"}
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-muted-dim">
            Your email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={200}
            value={values.email}
            onChange={handleChange("email")}
            placeholder="jane@company.com"
            disabled={status === "loading"}
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="mb-1.5 block text-xs font-medium text-muted-dim">
          Company / project <span className="text-muted-dim/60">(optional)</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          maxLength={150}
          value={values.company}
          onChange={handleChange("company")}
          placeholder="Acme Inc."
          disabled={status === "loading"}
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="project" className="mb-1.5 block text-xs font-medium text-muted-dim">
          What do you want to build?
        </label>
        <textarea
          id="project"
          name="project"
          required
          minLength={10}
          maxLength={4000}
          rows={5}
          value={values.project}
          onChange={handleChange("project")}
          placeholder="Tell me about your project or problem…"
          disabled={status === "loading"}
          className={`${inputClasses} resize-none`}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="budget" className="mb-1.5 block text-xs font-medium text-muted-dim">
            Budget <span className="text-muted-dim/60">(optional)</span>
          </label>
          <input
            id="budget"
            name="budget"
            type="text"
            maxLength={100}
            value={values.budget}
            onChange={handleChange("budget")}
            placeholder="e.g. $2,000–$5,000"
            disabled={status === "loading"}
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="timeline" className="mb-1.5 block text-xs font-medium text-muted-dim">
            Timeline <span className="text-muted-dim/60">(optional)</span>
          </label>
          <input
            id="timeline"
            name="timeline"
            type="text"
            maxLength={100}
            value={values.timeline}
            onChange={handleChange("timeline")}
            placeholder="e.g. 4–6 weeks"
            disabled={status === "loading"}
            className={inputClasses}
          />
        </div>
      </div>

      {status === "error" ? (
        <div className="flex items-start gap-2.5 rounded-xl border border-red-400/25 bg-red-400/[0.06] px-4 py-3 text-sm text-red-300">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.75} />
          <span>
            {error}{" "}
            <a href={profile.links.email} className="underline underline-offset-2 hover:text-red-200">
              Email me directly
            </a>
            .
          </span>
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-1 inline-flex items-center justify-center gap-2 self-start rounded-full bg-gradient-to-r from-violet-600 to-indigo-500 px-6 py-3 text-sm font-medium text-white shadow-glow-sm transition-transform hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            Sending…
            <Loader2 className="h-4 w-4 animate-spin" />
          </>
        ) : (
          <>
            Start a Project
            <Send className="h-4 w-4" />
          </>
        )}
      </button>
      <p className="text-xs text-muted-dim">This goes straight to my inbox — I reply to every message.</p>
    </form>
  );
}
