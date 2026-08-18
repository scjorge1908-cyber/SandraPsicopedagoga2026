export interface ProfessionalInfo {
  name: string;
  title: string;
  registrationNumber: string; // Ex: CRP / ABPp
  city: string;
  neighborhood: string;
  whatsappNumber: string;
  experienceYears: string;
  specialization: string;
  officeAddress: string;
  clinicName: string;
  appointmentUrl: string;
  photoUrl?: string;
}

export interface SeoKeyword {
  term: string;
  searchIntent: string;
  usageLocation: string;
  importance: 'Alta' | 'Média' | 'Estratégica';
}

export interface WarningSignal {
  id: string;
  title: string;
  description: string;
  searchKeyword: string;
  category: 'leitura' | 'atencao' | 'emocional' | 'rotina';
  ageRange?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  shortExplanation: string;
  howItHelps: string;
  targetAudience: string;
  processSteps: string[];
  seoTerms: string[];
}
