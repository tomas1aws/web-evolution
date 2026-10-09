import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Metodología', href: '#metodologia' },
    { label: 'Soluciones', href: '#soluciones' },
    { label: 'Equipo', href: '#equipo' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs py-3 border-b border-slate-100'
            : 'bg-transparent py-5 sm:py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center group focus:outline-hidden focus:ring-2 focus:ring-blue-400 rounded-sm"
            aria-label="everlife - Inicio"
          >
            <Logo
              variant={isScrolled ? 'blue' : 'white'}
              className="h-16 sm:h-20 w-auto transition-transform duration-300 group-hover:opacity-90"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-[14px] font-medium tracking-wide transition-colors duration-200 focus:outline-hidden focus:ring-2 focus:ring-blue-400 rounded-xs py-1 ${
                  isScrolled
                    ? 'text-[#15202B] hover:text-[#103B5E]'
                    : 'text-white/85 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* Subtle CTA */}
            <a
              href="#contacto"
              onClick={(e) => handleLinkClick(e, '#contacto')}
              className={`inline-flex items-center text-[13.5px] font-semibold tracking-wider uppercase px-5 py-2.5 transition-all duration-300 focus:outline-hidden focus:ring-2 focus:ring-offset-2 ${
                isScrolled
                  ? 'bg-[#103B5E] text-white hover:bg-[#0b2b45] rounded-sm'
                  : 'bg-white/10 text-white border border-white/30 hover:bg-white hover:text-[#103B5E] rounded-sm'
              }`}
            >
              Contactanos
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-sm transition-colors focus:outline-hidden focus:ring-2 focus:ring-blue-400 ${
                isScrolled ? 'text-[#103B5E] hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#103B5E] text-white transition-all duration-400 md:hidden flex flex-col justify-between p-8 pt-28 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <nav className="flex flex-col space-y-6">
          <p className="text-xs uppercase tracking-widest text-white/50 font-medium">Navegación</p>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-2xl font-light tracking-wide hover:text-white/80 transition-colors py-1 flex items-center justify-between border-b border-white/10 pb-4"
            >
              <span>{link.label}</span>
              <ArrowUpRight className="w-5 h-5 text-white/40" />
            </a>
          ))}
        </nav>

        <div className="pt-8 border-t border-white/15">
          <p className="text-xs uppercase tracking-wider text-white/50 mb-3">Asesoramiento integral</p>
          <p className="text-sm text-white/80 font-light mb-6">
            Acompañamos tu evolución en cada etapa de la vida.
          </p>
          <a
            href="#contacto"
            onClick={(e) => handleLinkClick(e, '#contacto')}
            className="block text-center w-full py-3.5 px-6 bg-white text-[#103B5E] font-semibold text-sm tracking-wider uppercase rounded-sm hover:bg-white/90 transition-colors"
          >
            Contactanos
          </a>
        </div>
      </div>
    </>
  );
};
