import React from 'react';
import { ArrowRight } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  const scrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-white py-24 sm:py-32 border-t border-slate-200 text-[#15202B] overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10">
        <span className="text-xs uppercase tracking-[0.26em] text-[#063B68] font-semibold block mb-4">
          Comenzar la Planificación
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.18] text-[#15202B] mb-6 tracking-tight">
          Tu futuro se construye con las decisiones de hoy.
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-[#687481] font-light leading-relaxed max-w-2xl mx-auto mb-10">
          Conversemos sobre tus objetivos y encontremos juntos una planificación que te acompañe en cada etapa.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => scrollTo('contacto')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#063B68] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-xs hover:bg-[#042644] transition-colors shadow-xs group cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#063B68] focus:ring-offset-2"
          >
            <span>Contactanos</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>

          <button
            type="button"
            onClick={() => scrollTo('equipo')}
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 text-[#063B68] text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-xs border border-slate-300 hover:border-[#063B68] hover:bg-slate-50 transition-colors cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#063B68] focus:ring-offset-2"
          >
            Conocé al equipo
          </button>
        </div>
      </div>
    </section>
  );
};
