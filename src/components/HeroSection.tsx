import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/banner-trans.png')" }}
    />

    <div className="absolute inset-0 bg-black/45" />

    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 w-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <div className="mb-6">
          <img
            src="/logo-trans.png"
            alt="Patagonian Quality"
            className="h-20 md:h-25 w-auto object-contain drop-shadow-lg"
          />
        </div>

        <h1 className="heading-display text-primary-foreground mb-6">
          Especialistas en implementación HACCP para la industria alimentaria.
        </h1>

        <p className="text-body-lg text-primary-foreground/85 mb-10 max-w-2xl">
          Ayudamos a las empresas a garantizar la inocuidad alimentaria mediante
          sistemas HACCP, auditorías y gestión de calidad basados en estándares
          internacionales.
        </p>

       <div className="flex flex-wrap gap-4">

  <a
    href="https://wa.me/542995310897"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button variant="hero" size="xl">
      Solicitar Diagnóstico HACCP
    </Button>
  </a>

  <a href="#servicios">
    <Button variant="hero-outline" size="xl">
      Ver Servicios
    </Button>
  </a>

</div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;