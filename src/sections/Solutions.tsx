import React, { useState } from 'react';
import { solutionsData } from '../config/site';
import { Plus, Minus, ArrowRight } from 'lucide-react';

export const Solutions: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('seguros-vida');

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const scrollToContact = () => {
    const el = document.getElementById('contacto');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="soluciones" className="relative bg-white py-24 sm:py-32 lg:py-36 text-[#15202B]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm font-semibold tracking-[0.24em] text-[#103B5E] uppercase block mb-4">
            Herramientas y Coberturas
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.2] text-[#15202B] tracking-tight mb-6">
            Soluciones para cada etapa.
          </h2>
          <p className="text-base sm:text-lg text-[#687481] font-light leading-relaxed">
            Trabajamos con diferentes herramientas para construir una planificación adaptada
            a las necesidades de cada persona, familia o empresa.
          </p>
        </div>

        {/* Editorial Rows Accordion (Not generic cards) */}
        <div className="border-t border-slate-200">
          {solutionsData.map((item, idx) => {
            const isExpanded = expandedId === item.id;
            const indexStr = String(idx + 1).padStart(2, '0');

            return (
              <div
                key={item.id}
                className={`border-b border-slate-200 transition-colors duration-300 ${
                  isExpanded ? 'bg-slate-50/50' : 'hover:bg-slate-50/30'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleExpand(item.id)}
                  aria-expanded={isExpanded}
                  className="w-full text-left py-8 sm:py-10 px-4 sm:px-6 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer focus:outline-hidden focus:bg-slate-100/70"
                >
                  <div className="flex items-start md:items-center gap-6 sm:gap-10">
                    <span className="text-sm sm:text-base font-mono font-light text-[#103B5E] tracking-widest pt-1 md:pt-0">
                      /{indexStr}
                    </span>
                    <div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-normal font-serif text-[#15202B] group-hover:text-[#103B5E] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#687481] font-light mt-1">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 self-end md:self-center">
                    <span className="text-xs uppercase tracking-widest text-[#103B5E] font-medium hidden sm:inline-block">
                      {isExpanded ? 'Ocultar detalle' : 'Ver detalle'}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition-transform duration-300 border ${
                        isExpanded
                          ? 'bg-[#103B5E] text-white border-[#103B5E]'
                          : 'border-slate-300 text-[#103B5E] bg-white'
                      }`}
                    >
                      {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>
                </button>

                {/* Expanded Content Drawer */}
                {isExpanded && (
                  <div className="px-4 sm:px-6 pb-10 pt-2 border-t border-slate-200/50">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 md:pl-16">
                      <div className="lg:col-span-6 space-y-4">
                        <p className="text-sm sm:text-base text-[#15202B] font-light leading-relaxed">
                          {item.description}
                        </p>
                        <div className="pt-2">
                          <span className="text-xs uppercase tracking-wider text-[#687481] block mb-1 font-medium">
                            Destinado a:
                          </span>
                          <p className="text-sm text-[#103B5E] font-medium">{item.forWhom}</p>
                        </div>
                      </div>

                      <div className="lg:col-span-6">
                        <span className="text-xs uppercase tracking-wider text-[#687481] block mb-3 font-medium">
                          Aspectos clave:
                        </span>
                        <ul className="space-y-2.5">
                          {item.features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-3 text-sm text-[#15202B] font-light">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#103B5E] mt-2 shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="pt-6">
                          <button
                            type="button"
                            onClick={scrollToContact}
                            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#103B5E] hover:text-[#0b2b45] transition-colors group cursor-pointer"
                          >
                            <span>Consultar sobre {item.title}</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
