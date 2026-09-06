import Link from "next/link";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { Mail } from "lucide-react";

const footerLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Link href="#top" className="font-display text-lg font-semibold text-ink">
            {profile.firstName}
            <span className="text-gradient">.</span>
          </Link>
          <p className="mt-1 text-sm text-muted-dim">{profile.role}</p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-border-strong hover:text-ink"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-border-strong hover:text-ink"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.links.email}
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-border-strong hover:text-ink"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl px-5 text-xs text-muted-dim sm:px-8">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js, TypeScript & Tailwind CSS.
      </div>
    </footer>
  );
}
