import React, { useState } from 'react';
import { siteConfig } from '../config/site';
import { ContactFormData } from '../types';
import { Mail, Phone, MessageSquare, Instagram, Linkedin, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const { contact } = siteConfig;
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Por favor completá los campos requeridos (Nombre, Email y Consulta).');
      return;
    }

    setIsSubmitting(true);
    // Simulate responsive submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      });
    }, 600);
  };

  return (
    <section id="contacto" className="relative bg-[#F5F7F9] py-24 sm:py-32 text-[#15202B]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context & Contact Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs sm:text-sm font-semibold tracking-[0.24em] text-[#063B68] uppercase block mb-4">
                Contacto
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.2] text-[#15202B] tracking-tight mb-4">
                Iniciemos una conversación.
              </h2>
              <p className="text-base text-[#687481] font-light leading-relaxed">
                Dejanos tu consulta o comunicate directamente con nuestro equipo.
                Un asesor se pondrá en contacto para brindarte atención personalizada.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-4 pt-2">
              {/* WhatsApp */}
              {contact.whatsapp && (
                <a
                  href={`https://wa.me/${contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white border border-slate-200/80 rounded-xs hover:border-[#063B68]/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xs bg-[#063B68]/5 text-[#063B68] flex items-center justify-center group-hover:bg-[#063B68] group-hover:text-white transition-colors">
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

              {/* Email */}
              {contact.email && (
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-4 p-4 bg-white border border-slate-200/80 rounded-xs hover:border-[#063B68]/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xs bg-[#063B68]/5 text-[#063B68] flex items-center justify-center group-hover:bg-[#063B68] group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#687481] block font-medium">
                      Correo Electrónico
                    </span>
                    <span className="text-sm font-medium text-[#15202B] break-all">
                      {contact.email}
                    </span>
                  </div>
                </a>
              )}

              {/* Phone */}
              {contact.phone && (
                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-center gap-4 p-4 bg-white border border-slate-200/80 rounded-xs hover:border-[#063B68]/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xs bg-[#063B68]/5 text-[#063B68] flex items-center justify-center group-hover:bg-[#063B68] group-hover:text-white transition-colors">
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

            {/* Social Channels */}
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
                    className="p-3 bg-white border border-slate-200 text-[#063B68] rounded-xs hover:border-[#063B68] hover:text-[#042644] transition-colors focus:outline-hidden"
                    aria-label="Instagram de Evolution Investment Life"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                )}
                {contact.linkedin && (
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white border border-slate-200 text-[#063B68] rounded-xs hover:border-[#063B68] hover:text-[#042644] transition-colors focus:outline-hidden"
                    aria-label="LinkedIn de Evolution Investment Life"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200/80 rounded-xs p-8 sm:p-12 shadow-2xs">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#15202B]">
                    Consulta recibida
                  </h3>
                  <p className="text-sm sm:text-base text-[#687481] max-w-md mx-auto font-light leading-relaxed">
                    Muchas gracias por contactarnos. Un asesor de nuestro equipo revisará tus datos
                    y se comunicará a la brevedad para coordinar una reunión.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs uppercase tracking-widest font-semibold text-[#063B68] hover:text-[#042644] transition-colors underline cursor-pointer"
                    >
                      Enviar otra consulta
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Nombre */}
                    <div>
                      <label htmlFor="firstName" className="block text-xs uppercase tracking-wider text-[#15202B] font-semibold mb-2">
                        Nombre <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Ej. Martín"
                        className="w-full px-4 py-3.5 bg-slate-50/60 border border-slate-200 rounded-xs text-sm text-[#15202B] focus:outline-hidden focus:border-[#063B68] focus:bg-white transition-colors"
                      />
                    </div>

                    {/* Apellido */}
                    <div>
                      <label htmlFor="lastName" className="block text-xs uppercase tracking-wider text-[#15202B] font-semibold mb-2">
                        Apellido
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Ej. González"
                        className="w-full px-4 py-3.5 bg-slate-50/60 border border-slate-200 rounded-xs text-sm text-[#15202B] focus:outline-hidden focus:border-[#063B68] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs uppercase tracking-wider text-[#15202B] font-semibold mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="nombre@ejemplo.com"
                        className="w-full px-4 py-3.5 bg-slate-50/60 border border-slate-200 rounded-xs text-sm text-[#15202B] focus:outline-hidden focus:border-[#063B68] focus:bg-white transition-colors"
                      />
                    </div>

                    {/* Teléfono */}
                    <div>
                      <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-[#15202B] font-semibold mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+54 11 ..."
                        className="w-full px-4 py-3.5 bg-slate-50/60 border border-slate-200 rounded-xs text-sm text-[#15202B] focus:outline-hidden focus:border-[#063B68] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Consulta */}
                  <div>
                    <label htmlFor="message" className="block text-xs uppercase tracking-wider text-[#15202B] font-semibold mb-2">
                      Consulta <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Contanos brevemente sobre tus objetivos o inquietudes en seguros o inversiones..."
                      className="w-full px-4 py-3.5 bg-slate-50/60 border border-slate-200 rounded-xs text-sm text-[#15202B] focus:outline-hidden focus:border-[#063B68] focus:bg-white transition-colors resize-y"
                    />
                  </div>

                  {errorMsg && (
                    <p className="text-xs text-red-600 bg-red-50 p-3 rounded-xs border border-red-200">
                      {errorMsg}
                    </p>
                  )}

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-9 py-4 bg-[#063B68] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-xs hover:bg-[#042644] transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#063B68] focus:ring-offset-2 cursor-pointer disabled:opacity-60"
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar consulta'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
