import React from 'react';
import { Logo } from '../components/Logo';
import { siteConfig } from '../config/site';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#042644] text-white py-16 sm:py-20 border-t border-[#08355c]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start pb-16 border-b border-white/10">
          {/* Logo & Philosophy */}
          <div className="md:col-span-6 space-y-5">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-block focus:outline-hidden"
              aria-label="Evolution Investment Life - Subir al inicio"
            >
              <Logo variant="white" className="h-12 w-auto" />
            </a>
            <p className="text-sm text-white/70 font-light max-w-sm leading-relaxed">
              Acompañamos tu evolución personal y patrimonial con soluciones integrales
              de seguros e inversiones.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-6 flex flex-col sm:flex-row justify-end gap-10 sm:gap-16">
            <div>
              <span className="text-xs uppercase tracking-widest text-white/40 font-semibold block mb-4">
                Navegación
              </span>
              <ul className="space-y-3 text-sm font-light text-white/80">
                <li>
                  <a
                    href="#nosotros"
                    onClick={(e) => handleLinkClick(e, '#nosotros')}
                    className="hover:text-white transition-colors"
                  >
                    Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="#metodologia"
                    onClick={(e) => handleLinkClick(e, '#metodologia')}
                    className="hover:text-white transition-colors"
                  >
                    Metodología
                  </a>
                </li>
                <li>
                  <a
                    href="#soluciones"
                    onClick={(e) => handleLinkClick(e, '#soluciones')}
                    className="hover:text-white transition-colors"
                  >
                    Soluciones
                  </a>
                </li>
                <li>
                  <a
                    href="#equipo"
                    onClick={(e) => handleLinkClick(e, '#equipo')}
                    className="hover:text-white transition-colors"
                  >
                    Equipo
                  </a>
                </li>
                <li>
                  <a
                    href="#contacto"
                    onClick={(e) => handleLinkClick(e, '#contacto')}
                    className="hover:text-white transition-colors"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-white/40 font-semibold block mb-4">
                Ubicación & Contacto
              </span>
              <div className="space-y-2 text-sm font-light text-white/80">
                <p>{siteConfig.contact.address}</p>
                <p>{siteConfig.contact.email}</p>
                <p>{siteConfig.contact.phoneDisplay}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-white/50 leading-relaxed font-light">
          <p className="max-w-2xl">
            {siteConfig.disclaimer}
          </p>
          <div className="shrink-0">
            <p>© {currentYear} Evolution Investment Life. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
