import AnimatedSection from "@/components/AnimatedSection";
import { Award } from "lucide-react";

const certs = ["HACCP", "ISO 22000", "ISO 9001"];

const CertificationsSection = () => (
  <section id="certificaciones" className="section-padding bg-card">
    <div className="max-w-7xl mx-auto text-center">
      <AnimatedSection>
       <h2 className="heading-section text-foreground mb-12">
           Estándares internacionales.
         </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {certs.map((c) => (
            <div
              key={c}
              className="card-corporate flex flex-col items-center gap-4 w-48"
            >
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <span className="font-heading font-bold text-lg text-foreground">{c}</span>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <p className="text-muted-foreground text-body-lg max-w-3xl mx-auto">
          Los sistemas de gestión basados en estándares internacionales permiten garantizar la
          inocuidad alimentaria, fortalecer el control de procesos y mejorar el posicionamiento
          de la empresa en el mercado.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default CertificationsSection;
