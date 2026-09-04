import React from 'react';
import { siteConfig } from '../config/site';

export const Team: React.FC = () => {
  const { director, coordinators, consultantsCount } = siteConfig.company;

  return (
    <section id="equipo" className="relative bg-[#F5F7F9] py-24 sm:py-32 text-[#15202B]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm font-semibold tracking-[0.24em] text-[#063B68] uppercase block mb-4">
            Capital Humano
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.2] text-[#15202B] tracking-tight mb-6">
            Un equipo, diferentes miradas.
          </h2>
          <p className="text-base sm:text-lg text-[#687481] font-light leading-relaxed">
            Al ser un equipo amplio y diverso, contamos con diferentes puntos de vista y experiencias
            para que encuentres al profesional que mejor te representa.
          </p>
        </div>

        {/* Director Spotlight */}
        <div className="bg-white border border-slate-200/80 rounded-xs p-8 sm:p-12 mb-16 shadow-2xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Elegant Monogram / Portrait Container prepared for real photography */}
            <div className="md:col-span-4 lg:col-span-3">
              <div className="aspect-4/5 w-full max-w-[240px] bg-[#063B68] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden rounded-xs border border-[#042644]">
                {/* Visual subtle dot motif */}
                <div
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #FFFFFF 1px, transparent 1px)',
                    backgroundSize: '16px 16px',
                  }}
                />
                <span className="font-serif text-4xl sm:text-5xl font-light tracking-wider text-white/90">
                  {director.initials}
                </span>
                <span className="text-[11px] uppercase tracking-[0.25em] text-white/60 mt-2 font-medium">
                  Dirección
                </span>
              </div>
            </div>

            {/* Director Details */}
            <div className="md:col-span-8 lg:col-span-9 space-y-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#063B68] font-bold block mb-1">
                  Director
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#15202B] font-normal">
                  {director.name}
                </h3>
                <p className="text-sm sm:text-base font-medium text-[#063B68] mt-1">
                  {director.experience}
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#687481] font-light leading-relaxed max-w-2xl">
                {director.bio} Encabeza el equipo de consultoría con el propósito de acercar herramientas
                de máxima calidad técnica y resguardo patrimonial, manteniendo siempre el trato humano
                y la cercanía como premisa irrenunciable.
              </p>
            </div>
          </div>
        </div>

        {/* Coordinators Grid */}
        <div className="mb-20">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#063B68]">
              Coordinación
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {coordinators.map((coordinator, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-xs p-6 flex flex-col items-start transition-all duration-300 hover:border-[#063B68]/40 hover:-translate-y-0.5"
              >
                {/* Monogram Placeholder */}
                <div className="w-14 h-14 bg-slate-100 border border-slate-200 text-[#063B68] rounded-xs flex items-center justify-center font-serif text-lg font-medium mb-4">
                  {coordinator.initials}
                </div>
                <h4 className="text-base font-semibold text-[#15202B] leading-snug">
                  {coordinator.name}
                </h4>
                <p className="text-xs text-[#687481] uppercase tracking-wider mt-1">
                  {coordinator.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 50+ Consultants Callout (Typographic statement) */}
        <div className="border-t border-slate-300/80 pt-12 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-2xl sm:text-3xl text-[#063B68] font-light">
              Más de {consultantsCount} consultores forman parte de Evolution Investment Life.
            </p>
            <p className="text-sm sm:text-base text-[#687481] font-light mt-1">
              Una red sólida de profesionales comprometidos con la evolución y tranquilidad de cada cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
