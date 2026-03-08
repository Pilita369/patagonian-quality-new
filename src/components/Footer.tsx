import { Linkedin, Instagram, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground px-6 py-14 lg:px-12">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {/* Marca */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/logo-trans.png"
              alt="Patagonian Quality"
              className="h-10"
            />
            <span className="font-bold text-lg">
              Patagonian <span className="text-primary">Quality</span>
            </span>
          </div>

          <p className="text-sm text-primary-foreground/70 leading-relaxed max-w-xs">
            Consultora especializada en implementación HACCP,
            inocuidad alimentaria y sistemas de gestión para la
            industria alimentaria.
          </p>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="font-semibold mb-4 text-primary">
            Contacto
          </h3>

          <div className="flex flex-col gap-3 text-sm">

            <a
              href="https://wa.me/542995310897"
              target="_blank"
              className="flex items-center gap-2 hover:text-primary transition"
            >
              <Phone size={16} />
              WhatsApp: 2995 31-0897
            </a>

            <a
              href="https://www.linkedin.com/in/hector-hugo-perez-268b66217/"
              target="_blank"
              className="flex items-center gap-2 hover:text-primary transition"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>

            <a
              href="https://www.instagram.com/patagonian.quality/?hl=es"
              target="_blank"
              className="flex items-center gap-2 hover:text-primary transition"
            >
              <Instagram size={16} />
              Instagram
            </a>

          </div>
        </div>

        {/* Servicios */}
        <div>
          <h3 className="font-semibold mb-4 text-primary">
            Servicios
          </h3>

          <ul className="text-sm text-primary-foreground/70 space-y-2">
            <li>Implementación HACCP</li>
            <li>Auditorías de calidad</li>
            <li>ISO 22000</li>
            <li>ISO 9001</li>
            <li>Certificación y cumplimiento normativo</li>
          </ul>
        </div>

      </div>

      {/* Línea inferior */}
      <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-xs text-primary-foreground/50 flex flex-col md:flex-row items-center justify-between gap-3">

        <p>
          © {new Date().getFullYear()} Patagonian Quality. Todos los derechos reservados.
        </p>

        <p>
          Desarrollado por{" "}
          <a
            href="https://digitanea.com"
            target="_blank"
            className="text-primary hover:underline"
          >
            Digitanea
          </a>
        </p>

      </div>

    </footer>
  );
};

export default Footer;