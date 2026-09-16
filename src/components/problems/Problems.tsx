import { Quote, ArrowRight } from "lucide-react";
import { problemsSolved } from "@/data/problems";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function Problems() {
  return (
    <section id="problems" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Problems I Solve"
          title="If this sounds familiar, let's talk."
          gradientWord="let's talk."
          description="These are the conversations that usually turn into a project."
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problemsSolved.map((item) => (
            <RevealItem key={item.id}>
              <div className="h-full rounded-2xl border border-border bg-white/[0.02] p-6 transition-colors duration-300 hover:border-border-strong">
                <div className="flex items-center gap-2 text-muted-dim">
                  <Quote className="h-3.5 w-3.5 text-plum" strokeWidth={1.75} />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em]">Common ask</p>
                </div>
                <p className="mt-3 text-[15px] italic leading-relaxed text-ink/90">&ldquo;{item.ask}&rdquo;</p>
                <div className="mt-4 flex items-start gap-2.5 border-t border-border pt-4">
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-plum" strokeWidth={1.75} />
                  <p className="text-sm leading-relaxed text-muted">{item.solution}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
