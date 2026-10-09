import React from 'react';
import { DotWavePattern } from '../components/DotWavePattern';

export const About: React.FC = () => {
  return (
    <section id="nosotros" className="relative bg-white py-24 sm:py-32 lg:py-40 text-[#15202B]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Eyebrow & Title */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <span className="text-xs sm:text-sm font-semibold tracking-[0.24em] text-[#103B5E] uppercase block mb-4">
            Nosotros
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.2] text-[#15202B] tracking-tight">
            Más que asesoramiento financiero, acompañamiento a largo plazo.
          </h2>
        </div>

        {/* Two-Column Editorial Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#687481] font-light leading-relaxed">
            <p className="text-[#15202B] font-normal text-xl sm:text-2xl leading-snug">
              Somos un grupo de asesores financieros encabezado por nuestro director Gustavo Pacheco,
              quien cuenta con 23 años de experiencia en seguros e inversiones.
            </p>
            <p>
              Hoy somos más de 50 consultores trabajando con un mismo objetivo: ayudarte a planificar
              tu futuro y acompañarte en las distintas etapas de tu vida.
            </p>
            <p>
              Entendemos que las decisiones financieras no son eventos aislados, sino procesos continuos
              que deben evolucionar a la par de tus proyectos familiares, patrimoniales y empresariales.
              Por ello brindamos una atención cercana y personalizada, identificando en cada caso al profesional
              cuyo perfil mejor se adecúe a tus necesidades.
            </p>
          </div>

          <div className="lg:col-span-5 lg:pl-6 border-l border-slate-200/80">
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#103B5E]">
                Enfoque Consultivo
              </span>
              <p className="text-sm sm:text-base text-[#687481] leading-relaxed">
                Nuestra vocación de servicio une el rigor técnico del análisis de riesgo e inversión
                con una visión profundamente humana, orientada a construir relaciones de confianza
                que perduran a través de los años.
              </p>
              <div className="pt-4">
                <DotWavePattern variant="blue" className="opacity-60 max-w-xs" />
              </div>
            </div>
          </div>
        </div>

        {/* Three Prominent Stats: Editorial Typographic Integration (No Cards) */}
        <div className="border-t border-b border-slate-200/90 py-14 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 lg:gap-12">
            {/* Stat 1 */}
            <div className="flex flex-col">
              <span className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-[#103B5E] leading-none mb-3">
                23
              </span>
              <span className="text-xs uppercase tracking-widest text-[#15202B] font-semibold mb-1">
                Años de experiencia
              </span>
              <span className="text-xs sm:text-sm text-[#687481] font-light">
                Trayectoria y solidez en el mercado asegurador y de inversiones.
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col">
              <span className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-[#103B5E] leading-none mb-3">
                +50
              </span>
              <span className="text-xs uppercase tracking-widest text-[#15202B] font-semibold mb-1">
                Consultores
              </span>
              <span className="text-xs sm:text-sm text-[#687481] font-light">
                Equipo interdisciplinario con diversas miradas y especialidades.
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col">
              <span className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-[#103B5E] leading-none mb-3">
                360°
              </span>
              <span className="text-xs uppercase tracking-widest text-[#15202B] font-semibold mb-1">
                Acompañamiento
              </span>
              <span className="text-xs sm:text-sm text-[#687481] font-light">
                Soluciones integrales para personas, familias y organizaciones.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
