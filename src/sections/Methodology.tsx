import React from 'react';
import { processSteps } from '../config/site';

export const Methodology: React.FC = () => {
  const criteria = [
    { label: 'Situación actual', desc: 'Diagnóstico patrimonial y financiero presente.' },
    { label: 'Necesidades', desc: 'Prioridades de resguardo y liquidez inmediata.' },
    { label: 'Objetivos', desc: 'Metas a mediano y largo plazo.' },
    { label: 'Etapa de vida', desc: 'El momento biológico, familiar o corporativo en curso.' },
  ];

  return (
    <section id="metodologia" className="relative bg-[#F5F7F9] py-24 sm:py-32 text-[#15202B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm font-semibold tracking-[0.24em] text-[#063B68] uppercase block mb-4">
            Nuestra Forma de Trabajar
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.2] text-[#15202B] tracking-tight mb-6">
            “Cada persona atraviesa momentos distintos. Su planificación también debería hacerlo.”
          </h2>
          <p className="text-base sm:text-lg text-[#687481] font-light leading-relaxed">
            En Evolution no creemos en fórmulas estandarizadas. Nuestro método se fundamenta en un
            análisis exhaustivo y personalizado que permite estructurar soluciones acordes al momento exacto
            en que te encontrás.
          </p>
        </div>

        {/* Four Foundational Pillars of Analysis */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {criteria.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-7 border border-slate-200/70 rounded-xs shadow-2xs hover:border-[#063B68]/40 transition-colors"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#063B68]" />
                <span className="text-xs uppercase tracking-widest text-[#063B68] font-semibold">
                  Eje {idx + 1}
                </span>
              </div>
              <h3 className="text-lg font-medium text-[#15202B] mb-2">{item.label}</h3>
              <p className="text-sm text-[#687481] font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Visual Sequential Flow: CONOCER -> PLANIFICAR -> ACOMPAÑAR -> EVOLUCIONAR */}
        <div className="pt-10 border-t border-slate-200">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#687481]">
              El Recorrido
            </span>
          </div>

          <div className="relative">
            {/* Desktop connecting line */}
            <div className="hidden lg:block absolute top-7 left-12 right-12 h-px bg-slate-300" />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-8 relative z-10">
              {processSteps.map((step, idx) => (
                <div key={idx} className="flex flex-col relative group">
                  {/* Step indicator node with dot matrix motif */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-14 h-14 rounded-xs bg-[#063B68] text-white flex items-center justify-center font-serif text-lg font-light shadow-xs">
                      {step.number}
                    </div>
                    {/* Visual dot connector for mobile / tablets */}
                    <div className="lg:hidden flex-1 h-px bg-slate-200" />
                  </div>

                  <h3 className="text-lg font-semibold tracking-wider text-[#063B68] uppercase mb-2">
                    {step.name}
                  </h3>
                  <p className="text-sm text-[#687481] font-light leading-relaxed">
                    {step.description}
                  </p>

                  {/* Subtle brand dots on hover */}
                  <div className="mt-4 flex gap-1 opacity-40 group-hover:opacity-100 transition-opacity">
                    <span className="w-1 h-1 rounded-full bg-[#063B68]" />
                    <span className="w-1 h-1 rounded-full bg-[#063B68]" />
                    <span className="w-1 h-1 rounded-full bg-[#063B68]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
