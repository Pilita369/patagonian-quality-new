import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Reducir riesgos sanitarios",
  "Mejorar el control operativo",
  "Fortalecer la confianza de clientes",
  "Acceder a mercados más exigentes",
  "Consolidar una cultura de mejora continua",
];

const StrategicValueSection = () => (
  <section className="section-padding bg-primary">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <AnimatedSection>
        <h2 className="heading-section text-primary-foreground mb-6">
          La seguridad alimentaria como ventaja competitiva.
        </h2>
        <p className="text-primary-foreground/80 text-body-lg">
          La implementación de sistemas HACCP y normas de calidad no solo permite cumplir con
          requisitos regulatorios. También contribuye a:
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <ul className="space-y-4">
          {benefits.map((b) => (
            <li key={b} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
              <span className="text-primary-foreground/90 text-lg">{b}</span>
            </li>
          ))}
        </ul>
      </AnimatedSection>
    </div>
  </section>
);

export default StrategicValueSection;
