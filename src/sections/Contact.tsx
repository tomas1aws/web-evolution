import React from 'react';
import { siteConfig } from '../config/site';
import { Mail, Phone, MessageSquare, Instagram, Linkedin } from 'lucide-react';

export const Contact: React.FC = () => {
  const { contact } = siteConfig;

  return (
    <section id="contacto" className="relative bg-[#F5F7F9] py-24 sm:py-32 text-[#15202B]">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="space-y-8">
          <div>
            <span className="text-xs sm:text-sm font-semibold tracking-[0.24em] text-[#103B5E] uppercase block mb-4">
              Contacto
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.2] text-[#15202B] tracking-tight mb-4">
              Iniciemos una conversación.
            </h2>
            <p className="text-base text-[#687481] font-light leading-relaxed">
              Comunicate directamente con nuestro equipo por cualquiera de estos canales.
              Estamos para brindarte atención personalizada.
            </p>
          </div>

          {/* Canales de contacto directos. No se recopilan datos mediante formularios. */}
          <div className="space-y-4 pt-2">
            {contact.whatsapp && (
              <a
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white border border-slate-200/80 rounded-xs hover:border-[#103B5E]/40 transition-colors group"
              >
                <div className="w-10 h-10 shrink-0 rounded-xs bg-[#103B5E]/5 text-[#103B5E] flex items-center justify-center group-hover:bg-[#103B5E] group-hover:text-white transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#687481] block font-medium">
                    WhatsApp
                  </span>
                  <span className="text-sm font-medium text-[#15202B]">
                    {contact.whatsappDisplay || 'Atención directa'}
                  </span>
                </div>
              </a>
            )}

            {contact.email && (
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-4 p-4 bg-white border border-slate-200/80 rounded-xs hover:border-[#103B5E]/40 transition-colors group"
              >
                <div className="w-10 h-10 shrink-0 rounded-xs bg-[#103B5E]/5 text-[#103B5E] flex items-center justify-center group-hover:bg-[#103B5E] group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs uppercase tracking-wider text-[#687481] block font-medium">
                    Correo Electrónico
                  </span>
                  <span className="text-sm font-medium text-[#15202B] break-all">
                    {contact.email}
                  </span>
                </div>
              </a>
            )}

            {contact.phone && (
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-4 p-4 bg-white border border-slate-200/80 rounded-xs hover:border-[#103B5E]/40 transition-colors group"
              >
                <div className="w-10 h-10 shrink-0 rounded-xs bg-[#103B5E]/5 text-[#103B5E] flex items-center justify-center group-hover:bg-[#103B5E] group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#687481] block font-medium">
                    Teléfono
                  </span>
                  <span className="text-sm font-medium text-[#15202B]">
                    {contact.phoneDisplay}
                  </span>
                </div>
              </a>
            )}
          </div>

          {(contact.instagram || contact.linkedin) && (
            <div className="pt-4">
              <span className="text-xs uppercase tracking-widest text-[#687481] block mb-3 font-medium">
                Redes Profesionales
              </span>
              <div className="flex items-center gap-3">
                {contact.instagram && (
                  <a
                    href={contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white border border-slate-200 text-[#103B5E] rounded-xs hover:border-[#103B5E] hover:text-[#0b2b45] transition-colors focus:outline-hidden"
                    aria-label="Instagram de everlife"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                )}
                {contact.linkedin && (
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white border border-slate-200 text-[#103B5E] rounded-xs hover:border-[#103B5E] hover:text-[#0b2b45] transition-colors focus:outline-hidden"
                    aria-label="LinkedIn de everlife"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
