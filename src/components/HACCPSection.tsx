import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle2 } from "lucide-react";
import haccpImage from "@/assets/haccp-image.jpg";

const benefits = [
  "Identificación de riesgos sanitarios",
  "Control preventivo de procesos",
  "Cumplimiento de requisitos regulatorios",
  "Preparación para auditorías",
  "Mayor confianza de clientes y mercados",
];

const HACCPSection = () => (
  <section id="haccp" className="section-padding bg-card">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
      <AnimatedSection>
        <h2 className="heading-section text-foreground mb-6">
          HACCP: el sistema clave para la seguridad alimentaria.
        </h2>
        <div className="space-y-4 text-muted-foreground text-body-lg mb-8">
          <p>
            El sistema HACCP permite identificar, evaluar y controlar peligros que pueden
            afectar la inocuidad de los alimentos.
          </p>
          <p>
            En Patagonian Quality acompañamos a las organizaciones en todo el proceso de
            implementación, desde el análisis inicial hasta la puesta en marcha del sistema.
          </p>
        </div>
        <ul className="space-y-3">
          {benefits.map((b) => (
            <li key={b} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground text-sm md:text-base">{b}</span>
            </li>
          ))}
        </ul>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src={haccpImage}
            alt="Auditor revisando procesos de producción alimentaria en planta"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default HACCPSection;
