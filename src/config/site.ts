import { SiteConfig, Solution } from '../types';

/**
 * Central Configuration for everlife
 * Easily customize contact info, links, team members, and copy.
 */
export const siteConfig: SiteConfig = {
  company: {
    name: 'everlife',
    tagline: 'Acompañamos tu evolución.',
    subtagline: 'Planificamos junto a vos cada etapa de tu vida, combinando experiencia, asesoramiento personalizado y soluciones en seguros e inversiones.',
    philosophyQuote: 'Acompañamos tu evolución personal.',
    philosophySubtitle: 'Creemos que una planificación adecuada puede transformar la vida de cada cliente.',
    experienceYears: 23,
    consultantsCount: 50,
    director: {
      name: 'Gustavo Pacheco',
      role: 'Director General',
      experience: '23 años de experiencia en seguros e inversiones',
      initials: 'GP',
      bio: 'Lidera la visión estratégica y el compromiso de acompañamiento integral a largo plazo para cada cliente y familia.',
    },
    coordinators: [
      { name: 'Enrique Zeppa', role: 'Coordinador', initials: 'EZ' },
      { name: 'Juan Martin Mariosa', role: 'Coordinador', initials: 'JM' },
      { name: 'Alejandro Mon', role: 'Coordinador', initials: 'AM' },
      { name: 'Yanina Bilski', role: 'Coordinadora', initials: 'YB' },
      { name: 'Marcelo García', role: 'Coordinador', initials: 'MG' },
    ],
  },
  contact: {
    phone: '+54 11 4000-0000',
    phoneDisplay: '+54 11 4000-0000',
    whatsapp: '5491100000000',
    whatsappDisplay: '+54 9 11 0000-0000',
    email: 'contacto@evolutioninvestmentlife.com',
    address: 'Buenos Aires, Argentina',
    instagram: 'https://instagram.com/evolutioninvestmentlife',
    linkedin: 'https://linkedin.com/company/evolutioninvestmentlife',
  },
  disclaimer: 'La información presentada en este sitio es de carácter general y no constituye por sí misma una recomendación financiera personalizada.',
};

export const solutionsData: Solution[] = [
  {
    id: 'seguros-vida',
    title: 'Seguros de Vida',
    subtitle: 'Protección para vos y para quienes dependen de vos.',
    description: 'Estructuración de coberturas patrimoniales y familiares para resguardar la continuidad de los planes de vida frente a contingencias o imprevistos.',
    features: [
      'Respaldo económico familiar inmediato',
      'Coberturas adaptables al momento biológico y patrimonial',
      'Protección de ingresos y continuidad de proyectos',
    ],
    forWhom: 'Familias, profesionales independientes y sostenedores de hogar.',
  },
  {
    id: 'seguros-retiro',
    title: 'Seguros de Retiro',
    subtitle: 'Planificación para construir tranquilidad a largo plazo.',
    description: 'Herramientas de capitalización programada orientadas a garantizar independencia financiera y estabilidad en la etapa de retiro.',
    features: [
      'Ahorro sistemático con rendimiento compuesto',
      'Flexibilidad de aportes y plazos según tus metas',
      'Beneficios fiscales y protección ante volatilidad',
    ],
    forWhom: 'Personas que buscan previsibilidad y bienestar sostenido para su futuro.',
  },
  {
    id: 'inversiones',
    title: 'Inversiones',
    subtitle: 'Alternativas orientadas a tus objetivos y horizonte financiero.',
    description: 'Vehículos de inversión estructurados para optimizar el rendimiento del capital respetando tu tolerancia al riesgo y plazo de tiempo.',
    features: [
      'Diversificación inteligente de cartera',
      'Estrategias locales e internacionales',
      'Monitoreo periódico y ajuste por contexto económico',
    ],
    forWhom: 'Ahorristas e inversores que desean proteger y hacer crecer su patrimonio.',
  },
  {
    id: 'seguros-patrimoniales',
    title: 'Seguros Patrimoniales',
    subtitle: 'Protección para los bienes que construiste.',
    description: 'Coberturas integrales diseñadas para salvaguardar activos tangibles, inmuebles, vehículos y patrimonios construidos con esfuerzo y dedicación.',
    features: [
      'Resguardo ante siniestros, daños y responsabilidad civil',
      'Evaluación técnica de valor asegurable',
      'Gestión ágil de siniestros con asistencia personalizada',
    ],
    forWhom: 'Propietarios, titulares patrimoniales y profesionales.',
  },
  {
    id: 'art',
    title: 'ART',
    subtitle: 'Soluciones para acompañar y proteger a empresas y equipos de trabajo.',
    description: 'Gestión integral de riesgos del trabajo, prevención de siniestralidad laboral y cumplimiento normativo para organizaciones.',
    features: [
      'Cobertura médico-asistencial integral ante accidentes laborales',
      'Programas de prevención y capacitación en higiene y seguridad',
      'Asesoramiento continuo y optimización de costos de alícuota',
    ],
    forWhom: 'Pequeñas, medianas y grandes empresas que cuidan a su capital humano.',
  },
];

export const processSteps = [
  {
    number: '01',
    name: 'CONOCER',
    description: 'Entendemos tu situación actual, tus prioridades, tu estructura patrimonial y tus proyectos de vida.',
  },
  {
    number: '02',
    name: 'PLANIFICAR',
    description: 'Diseñamos una estrategia financiera y aseguradora a medida con herramientas eficientes.',
  },
  {
    number: '03',
    name: 'ACOMPAÑAR',
    description: 'Estamos a tu lado en cada cambio de etapa vital, ajustando la planificación a tus nuevos desafíos.',
  },
  {
    number: '04',
    name: 'EVOLUCIONAR',
    description: 'Construimos estabilidad y progreso sostenido a largo plazo con métricas claras y tranquilidad.',
  },
];
