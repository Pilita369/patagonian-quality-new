import AnimatedSection from "@/components/AnimatedSection";
import { Milk, Beef, ChefHat, Factory, Truck, Globe } from "lucide-react";

const industries = [
  { icon: Milk, label: "Industria láctea" },
  { icon: Beef, label: "Frigoríficos y cárnicos" },
  { icon: ChefHat, label: "Elaboración de alimentos" },
  { icon: Factory, label: "Plantas de procesamiento" },
  { icon: Truck, label: "Distribución alimentaria" },
  { icon: Globe, label: "Empresas exportadoras" },
];

const IndustriesSection = () => (
  <section id="industrias" className="section-padding bg-background">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <h2 className="heading-section text-foreground text-center mb-6">
          Experiencia en distintos sectores de la industria alimentaria.
        </h2>
        <p className="text-muted-foreground text-body-lg text-center max-w-3xl mx-auto mb-14">
          Comprendemos los desafíos específicos de cada segmento del sector alimentario y
          adaptamos nuestros sistemas a la realidad operativa de cada organización.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {industries.map((ind, i) => (
          <AnimatedSection key={ind.label} delay={i * 0.08}>
            <div className="card-corporate flex items-center gap-4">
              <div className="w-11 h-11 rounded-lg bg-accent flex-shrink-0 flex items-center justify-center">
                <ind.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="font-heading font-medium text-foreground text-sm md:text-base">
                {ind.label}
              </span>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
