import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Experience } from "@/components/experience/Experience";
import { Skills } from "@/components/skills/Skills";
import { Projects } from "@/components/projects/Projects";
import { EngineeringFoundations } from "@/components/concepts/EngineeringFoundations";
import { Capabilities } from "@/components/capabilities/Capabilities";
import { Education } from "@/components/education/Education";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <EngineeringFoundations />
        <Capabilities />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
