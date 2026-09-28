import Hero from "./components/Hero";
import AcercaDeMi from "./components/AcercaDeMi";
import Testimonios from "./components/Testimonios";
import CTA_Final from "./components/CTA_Final";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/projects/ProjectCard";
import { PROJECTS } from "@/data/projects";
export default function Home() {
  return (
    <main id="contenido" className="pb-10">
      <Container>
        <div id="inicio" className="scroll-mt-24">
          <Hero />
        </div>
        <div id="sobre-mi" className="hairline-top mt-10 md:mt-14">
          <AcercaDeMi />
        </div>
        <section id="proyectos" aria-labelledby="proyectos-title" className="hairline-top mt-2 scroll-mt-24 py-10 md:py-14">
          <SectionHeading
            id="proyectos-title"
            eyebrow="02 · Proyectos seleccionados"
            title="Casos reales, en producción"
            description="Tres plataformas distintas, una misma obsesión: software claro, rápido y mantenible."
          />
          <div className="grid gap-6 md:gap-8">
            {PROJECTS.map((p, i) => (
              <ProjectCard key={p.slug} index={i} {...p} />
            ))}
          </div>
        </section>
        <div id="testimonios" className="hairline-top mt-2">
          <Testimonios />
        </div>
        <div id="contacto">
          <CTA_Final />
        </div>
      </Container>
    </main>
  );
}
