import AnimatedSection from "@/components/AnimatedSection";
import { ShieldCheck, FileCheck, Settings, ClipboardCheck } from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "Implementación HACCP",
    description:
      "Diseño e implementación de sistemas de análisis de peligros y puntos críticos de control.",
  },
  {
    icon: ClipboardCheck,
    title: "Auditorías de calidad",
    description:
      "Evaluación de procesos y preparación para auditorías externas.",
  },
  {
    icon: FileCheck,
    title: "ISO 22000",
    description:
      "Gestión integral de inocuidad alimentaria basada en estándares internacionales.",
  },
  {
    icon: Settings,
    title: "ISO 9001",
    description:
      "Sistemas de gestión de calidad orientados a mejora continua.",
  },
];

const ServicesSection = () => (
  <section id="servicios" className="section-padding bg-background">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <h2 className="heading-section text-foreground text-center mb-14">
          Servicios especializados.
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.1}>
            <div className="card-corporate h-full flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-5">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-lg mb-3">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {s.description}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
