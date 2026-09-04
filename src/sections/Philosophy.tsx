import React from 'react';
import { DotWaveCanvas } from '../components/DotWaveCanvas';

export const Philosophy: React.FC = () => {
  return (
    <section
      id="filosofia"
      className="relative bg-[#063B68] text-white py-28 sm:py-36 lg:py-44 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 50% 50%, #07477c 0%, #063B68 70%, #042542 100%)',
      }}
      aria-label="Filosofía institucional"
    >
      {/* Abstract subtle dot wave in the background */}
      <DotWaveCanvas
        variant="light-on-dark"
        density="sparse"
        speed={0.0004}
        interactive={false}
        className="opacity-25"
      />

      {/* Decorative vertical center marker */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-px h-12 bg-white/20" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-white/50 block mb-8 font-medium">
          Nuestra Filosofía
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.2] text-white mb-8 tracking-tight">
          “Acompañamos tu <span className="italic font-normal">evolución personal</span>.”
        </h2>

        <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
          Creemos que una planificación adecuada puede transformar la vida de cada cliente.
        </p>

        <div className="mt-12 flex justify-center items-center gap-1.5 opacity-40">
          <span className="w-1 h-1 rounded-full bg-white" />
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          <span className="w-2 h-2 rounded-full bg-white" />
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          <span className="w-1 h-1 rounded-full bg-white" />
        </div>
      </div>
    </section>
  );
};
