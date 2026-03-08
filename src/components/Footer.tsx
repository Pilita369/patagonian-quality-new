import { Linkedin, Mail, Instagram, Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground px-6 py-12 lg:px-12">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="text-center md:text-left">
        <span className="font-heading font-bold text-lg text-primary-foreground">
          Patagonian<span className="text-primary">Quality</span>
        </span>

        <p className="text-primary-foreground/50 text-sm mt-1">
          Consultora en Calidad e Inocuidad Alimentaria
        </p>

        <p className="text-primary-foreground/50 text-sm mt-2">
          WhatsApp: 2995 310897
        </p>
      </div>

      <div className="flex items-center gap-5">
        <a
          href="https://wa.me/542995310897"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
        >
          <Phone className="w-5 h-5" />
        </a>

        <a
          href="mailto:contacto@patagonianquality.com"
          aria-label="Email"
          className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
        >
          <Mail className="w-5 h-5" />
        </a>

        <a
          href="https://www.linkedin.com/in/hector-hugo-perez-268b66217/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
        >
          <Linkedin className="w-5 h-5" />
        </a>

        <a
          href="https://www.instagram.com/patagonian.quality/?hl=es"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
        >
          <Instagram className="w-5 h-5" />
        </a>
      </div>

      <p className="text-primary-foreground/40 text-xs text-center md:text-right">
        © {new Date().getFullYear()} Patagonian Quality. Todos los derechos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;