import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

const CTASection = () => (
  <section id="contacto" className="section-padding bg-card">
    <div className="max-w-3xl mx-auto text-center">
      <AnimatedSection>
        <h2 className="heading-section text-foreground mb-6">
          Fortalezca la seguridad alimentaria de su empresa.
        </h2>

        <p className="text-muted-foreground text-body-lg mb-6">
          Implementemos un sistema HACCP sólido que garantice control, cumplimiento y confianza.
        </p>


        <div className="flex justify-center mt-6">
         <a
            href="https://wa.me/542995310897"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="corporate" size="xl">
              Solicitar Auditoría
            </Button>
          </a>

       </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
         
          <a
            href="https://www.linkedin.com/in/hector-hugo-perez-268b66217/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="hero-outline" size="xl">
              Ver LinkedIn
            </Button>
          </a>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default CTASection;