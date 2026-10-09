import React from 'react';
import { DotWaveCanvas } from '../components/DotWaveCanvas';
import { ArrowDown, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-between bg-[#103B5E] text-white overflow-hidden pt-32 pb-16 px-6 sm:px-8 lg:px-12"
      style={{
        background: 'radial-gradient(ellipse at 50% 25%, #215477 0%, #103B5E 55%, #0b2b45 100%)',
      }}
      aria-label="Introducción everlife"
    >
      {/* Abstract Living Dot-Wave Canvas */}
      <DotWaveCanvas
        variant="light-on-dark"
        density="normal"
        speed={0.00055}
        interactive={true}
        className="opacity-70"
      />

      {/* Subtle geometric light beam overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          background: 'radial-gradient(circle at 80% 80%, rgba(255,255,255,0.08) 0%, transparent 60%)',
        }}
      />

      {/* Main Content with generous negative space */}
      <div className="relative z-10 max-w-5xl mx-auto w-full my-auto text-center flex flex-col items-center">
        {/* Brand Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/80 text-[12px] sm:text-[13px] font-semibold tracking-[0.22em] uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
          <span>everlife</span>
        </div>

        {/* Hero Title */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.12] text-white max-w-4xl mb-7">
          Acompañamos <span className="italic font-normal">tu evolución</span>.
        </h1>

        {/* Hero Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-white/85 font-light leading-relaxed max-w-2xl mb-12 tracking-wide">
          Planificamos junto a vos cada etapa de tu vida, combinando experiencia,
          asesoramiento personalizado y soluciones en seguros e inversiones.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => scrollTo('soluciones')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-[#103B5E] text-sm font-semibold tracking-wider uppercase rounded-sm hover:bg-slate-100 transition-all duration-300 shadow-sm group focus:outline-hidden focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#103B5E] cursor-pointer"
          >
            <span>Conocé cómo podemos acompañarte</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>

          <button
            type="button"
            onClick={() => scrollTo('equipo')}
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 text-white text-sm font-semibold tracking-wider uppercase rounded-sm border border-white/30 hover:bg-white/10 hover:border-white/60 transition-all duration-300 focus:outline-hidden focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#103B5E] cursor-pointer"
          >
            Conocé nuestro equipo
          </button>
        </div>
      </div>

      {/* Bottom Scroll Indicator & Brand Signature */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-8 flex items-end justify-between text-xs text-white/50 tracking-widest uppercase">
        <div className="hidden sm:block">
          <span className="font-light">Asesoramiento Integral 360°</span>
        </div>

        <button
          type="button"
          onClick={() => scrollTo('nosotros')}
          className="mx-auto sm:mx-0 flex items-center gap-2 hover:text-white/80 transition-colors p-2 focus:outline-hidden"
          aria-label="Desplazarse a la siguiente sección"
        >
          <span>Descubrí más</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </button>

        <div className="hidden sm:block text-right">
          <span className="font-light">23 Años de Trayectoria</span>
        </div>
      </div>
    </section>
  );
};
