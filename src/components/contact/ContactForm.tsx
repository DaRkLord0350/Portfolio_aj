"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { profile } from "@/data/profile";

export function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  function handleChange(field: keyof typeof values) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
    };
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${values.name || "your website"}`);
    const body = encodeURIComponent(
      `${values.message}\n\n— ${values.name}${values.email ? ` (${values.email})` : ""}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  const inputClasses =
    "w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm text-ink placeholder:text-muted-dim outline-none transition-colors focus:border-violet-glow";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
            value={values.name}
            onChange={handleChange("name")}
            placeholder="Jane Doe"
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
            value={values.email}
            onChange={handleChange("email")}
            placeholder="jane@company.com"
            className={inputClasses}
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-muted-dim">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={values.message}
          onChange={handleChange("message")}
          placeholder="Tell me about your project or problem…"
          className={`${inputClasses} resize-none`}
        />
      </div>
      <button
        type="submit"
        className="mt-1 inline-flex items-center justify-center gap-2 self-start rounded-full bg-gradient-to-r from-violet-600 to-indigo-500 px-6 py-3 text-sm font-medium text-white shadow-glow-sm transition-transform hover:-translate-y-0.5"
      >
        Send Message
        <Send className="h-4 w-4" />
      </button>
      <p className="text-xs text-muted-dim">
        This opens your email client with the message pre-filled — nothing is sent from this page directly.
      </p>
    </form>
  );
}
