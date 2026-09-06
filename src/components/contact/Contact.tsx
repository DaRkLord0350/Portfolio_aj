import { Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-border-strong bg-gradient-to-b from-white/[0.04] to-transparent p-8 sm:p-12 lg:p-16">
          <div
            className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-violet-600/25 blur-[110px]"
            aria-hidden="true"
          />

          <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-plum">
                  Contact
                </span>
                <h2 className="mt-5 text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">
                  Let&apos;s build something <span className="text-gradient">useful.</span>
                </h2>
                <p className="mt-4 max-w-md text-base text-muted">
                  Have a product, system or technical problem that needs solving? I&apos;d like to
                  hear about it.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href={profile.links.email} icon={<Mail className="h-4 w-4" />}>
                    Email Me
                  </Button>
                  <Button
                    href={profile.links.github}
                    external
                    variant="secondary"
                    icon={<GithubIcon className="h-4 w-4" />}
                  >
                    View GitHub
                  </Button>
                  <Button
                    href={profile.links.linkedin}
                    external
                    variant="secondary"
                    icon={<LinkedinIcon className="h-4 w-4" />}
                  >
                    Connect on LinkedIn
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-sm text-muted-dim">
                  <span>{profile.email}</span>
                  <span>{profile.phone}</span>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.15} y={30}>
              <div className="glass-panel-strong rounded-2xl p-6 sm:p-7">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
