export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface Solution {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  forWhom: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience?: string;
  bio?: string;
  initials: string;
  photoUrl?: string; // Prepared for future real photos
}

export interface SiteConfig {
  company: {
    name: string;
    tagline: string;
    subtagline: string;
    philosophyQuote: string;
    philosophySubtitle: string;
    experienceYears: number;
    consultantsCount: number;
    director: {
      name: string;
      role: string;
      experience: string;
      initials: string;
      bio: string;
    };
    coordinators: Array<{
      name: string;
      role: string;
      initials: string;
    }>;
  };
  contact: {
    phone: string;
    phoneDisplay: string;
    whatsapp: string; // e.g. "54911..."
    whatsappDisplay: string;
    email: string;
    address: string;
    instagram: string;
    linkedin: string;
  };
  disclaimer: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}
