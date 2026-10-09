import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Segments: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contacto');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const personalItems = [
    { title: 'Planificación financiera', desc: 'Estructuración integral de ingresos, ahorro y metas familiares a corto y largo plazo.' },
    { title: 'Protección', desc: 'Resguardo económico para vos y tus seres queridos frente a cualquier eventualidad.' },
    { title: 'Retiro', desc: 'Fondos de capitalización programada para garantizar tu independencia y serenidad futura.' },
    { title: 'Inversiones', desc: 'Estrategias a medida orientadas a potenciar y preservar tu capital acumulado.' },
    { title: 'Patrimonio', desc: 'Salvaguarda integral de activos físicos, inmuebles y bienes personales.' },
  ];

  const corporateItems = [
    { title: 'ART', desc: 'Cobertura legal obligatoria, prevención y asistencia ante riesgos del trabajo.' },
    { title: 'Protección patrimonial', desc: 'Pólizas integrales de comercio, industria, responsabilidad civil y activos productivos.' },
    { title: 'Planificación corporativa', desc: 'Seguros para socios clave (Key Man), continuidad empresarial y beneficios para directivos.' },
    { title: 'Soluciones a medida', desc: 'Estructuración personalizada según el tamaño, rubro y nómina de tu organización.' },
  ];

  return (
    <section id="segmentos" className="relative bg-white py-24 sm:py-32 text-[#15202B] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm font-semibold tracking-[0.24em] text-[#103B5E] uppercase block mb-4">
            Áreas de Especialización
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.2] text-[#15202B] tracking-tight">
            Para Personas, Familias y Empresas.
          </h2>
        </div>

        {/* Dual Split Editorial Canvas (Not standard cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Pillar 1: Personas y Familias */}
          <div className="flex flex-col justify-between pt-4 lg:pr-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#103B5E]" />
                <span className="text-xs uppercase tracking-widest text-[#103B5E] font-bold">
                  Enfoque Particular
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#15202B] mb-4">
                Personas y Familias
              </h3>
              <p className="text-sm sm:text-base text-[#687481] font-light leading-relaxed mb-8">
                Diseñamos un mapa de ruta financiero y de protección que acompaña el crecimiento de tu hogar,
                el bienestar de tus hijos y la tranquilidad de tus años de retiro.
              </p>

              <div className="space-y-6 divide-y divide-slate-100">
                {personalItems.map((item, idx) => (
                  <div key={idx} className="pt-5 first:pt-0 group">
                    <h4 className="text-base font-semibold text-[#15202B] group-hover:text-[#103B5E] transition-colors flex items-center justify-between">
                      <span>{item.title}</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-[#687481] font-light mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-10">
              <button
                type="button"
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#103B5E] hover:text-[#0b2b45] transition-colors py-2 border-b border-[#103B5E]/30 hover:border-[#103B5E] cursor-pointer"
              >
                <span>Planificar para mi familia</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Pillar 2: Empresas */}
          <div className="flex flex-col justify-between pt-4 lg:pl-8 lg:border-l lg:border-slate-200">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#103B5E]" />
                <span className="text-xs uppercase tracking-widest text-[#103B5E] font-bold">
                  Enfoque Corporativo
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#15202B] mb-4">
                Empresas y Organizaciones
              </h3>
              <p className="text-sm sm:text-base text-[#687481] font-light leading-relaxed mb-8">
                Asistimos a firmas de diversos sectores en la gestión técnica de riesgos patrimoniales,
                protección de nóminas y esquemas de fidelización de talentos estratégicos.
              </p>

              <div className="space-y-6 divide-y divide-slate-100">
                {corporateItems.map((item, idx) => (
                  <div key={idx} className="pt-5 first:pt-0 group">
                    <h4 className="text-base font-semibold text-[#15202B] group-hover:text-[#103B5E] transition-colors flex items-center justify-between">
                      <span>{item.title}</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-[#687481] font-light mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-10">
              <button
                type="button"
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#103B5E] hover:text-[#0b2b45] transition-colors py-2 border-b border-[#103B5E]/30 hover:border-[#103B5E] cursor-pointer"
              >
                <span>Asesoramiento para mi empresa</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
