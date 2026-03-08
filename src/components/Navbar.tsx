import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "HACCP", href: "#haccp" },
    { label: "Servicios", href: "#servicios" },
    { label: "Certificaciones", href: "#certificaciones" },
    { label: "Industrias", href: "#industrias" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">

        <a href="#" className="flex items-center gap-3">
          <img
            src="/logo-trans.png"
            alt="Patagonian Quality"
            className="h-10 w-auto"
          />
          <span className="font-bold text-lg">
            Patagonian <span className="text-primary">Quality</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}

          <a
  href="https://wa.me/542995310897"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button variant="corporate" size="sm">
    Solicitar Diagnóstico HACCP
  </Button>
</a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>
    </nav>
  );
};

export default Navbar;