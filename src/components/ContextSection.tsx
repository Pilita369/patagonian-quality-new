import { Linkedin, Instagram, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-24 bg-muted">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-6">
          Solicitar Auditoría o Diagnóstico HACCP
        </h2>

        <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
          Si tu empresa necesita implementar HACCP, preparar auditorías o mejorar
          sus sistemas de calidad, podés contactarte directamente.
        </p>

        <div className="flex flex-wrap justify-center gap-6">

          <a
            href="https://wa.me/542995310897"
            target="_blank"
            className="flex items-center gap-3 bg-green-500 text-white px-6 py-3 rounded-lg"
          >
            <Phone size={18} />
            WhatsApp
          </a>

          <a
            href="https://www.linkedin.com/in/hector-hugo-perez-268b66217/"
            target="_blank"
            className="flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>

          <a
            href="https://www.instagram.com/patagonian.quality/?hl=es"
            target="_blank"
            className="flex items-center gap-3 bg-pink-500 text-white px-6 py-3 rounded-lg"
          >
            <Instagram size={18} />
            Instagram
          </a>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;