import { process } from "@/data/process";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function HowIWork() {
  return (
    <section id="how-i-work" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="How I Work"
          title="From idea to production."
          gradientWord="to production."
          description="A simple, repeatable process for turning a business problem into shipped software."
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step) => (
            <RevealItem key={step.number}>
              <div className="h-full rounded-2xl border border-border bg-white/[0.02] p-6 transition-colors duration-300 hover:border-border-strong">
                <span className="bg-gradient-to-br from-violet-600 to-fuchsia-500 bg-clip-text font-display text-4xl font-bold text-transparent">
                  {step.number}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-dim">{step.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
