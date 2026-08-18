import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { WarningSignalsSection } from './components/WarningSignalsSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { LocalSeoFooter } from './components/LocalSeoFooter';
import { CopywriterDossierModal } from './components/CopywriterDossierModal';
import { PersonalizationDrawer } from './components/PersonalizationDrawer';
import { SymptomChecklistModal } from './components/SymptomChecklistModal';
import { defaultProfessionalInfo } from './data/copyContent';
import { ProfessionalInfo } from './types';
import { MessageCircle, Sparkles, ArrowUp, Calendar, ExternalLink } from 'lucide-react';

export default function App() {
  const [info, setInfo] = useState<ProfessionalInfo>(() => {
    try {
      const saved = localStorage.getItem('psico_professional_info');
      if (saved) {
        const parsed = JSON.parse(saved);
        // Older saved sessions may carry an empty photoUrl from before the real
        // portrait was uploaded; always fall back to the current default photo
        // whenever the saved value is blank, instead of letting an empty
        // string permanently override it.
        const photoUrl = parsed.photoUrl && parsed.photoUrl.trim() !== '' ? parsed.photoUrl : defaultProfessionalInfo.photoUrl;
        // If parsed was from the template stage with placeholders, update to Sandra Regina
        if (parsed.name === '[Seu Nome Completo]' || !parsed.appointmentUrl) {
          return { ...defaultProfessionalInfo, ...parsed, name: 'Sandra Regina Moraes dos Santos', appointmentUrl: 'https://clinicahopebrasil.com.br/sandra-regina-moraes-dos-santos', clinicName: 'Clínica Hope Brasil', photoUrl };
        }
        return { ...defaultProfessionalInfo, ...parsed, photoUrl };
      }
    } catch {
      // ignore
    }
    return defaultProfessionalInfo;
  });

  const [isDossierOpen, setIsDossierOpen] = useState(false);
  const [isPersonalizeOpen, setIsPersonalizeOpen] = useState(false);
  const [isChecklistOpen, setIsChecklistOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('psico_professional_info', JSON.stringify(info));
    } catch {
      // ignore
    }
  }, [info]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleResetDefault = () => {
    setInfo(defaultProfessionalInfo);
  };

  const cleanPhone = info.whatsappNumber.replace(/\D/g, '');
  const floatingWhatsAppUrl = `https://wa.me/${cleanPhone || '5511999999999'}?text=${encodeURIComponent(`Olá, ${info.name}! Gostaria de informações sobre o atendimento psicopedagógico na Clínica Hope.`)}`;
  const appointmentUrl = info.appointmentUrl || 'https://clinicahopebrasil.com.br/sandra-regina-moraes-dos-santos';

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#3D3D3D] font-sans selection:bg-[#E8D5CC] selection:text-[#8C6D5E]">
      
      {/* Top Banner with Direct Hope Clinic Agenda Link */}
      <aside aria-label="Aviso de Agendamento Online" className="bg-[#F2EFE9] text-[#5C5C5C] text-[11px] sm:text-xs py-2 px-4 text-center font-medium flex items-center justify-center gap-2 border-b border-[#E5E0D5]">
        <Sparkles className="w-3.5 h-3.5 text-[#7E8C69] shrink-0" />
        <span>
          <strong>{info.name}:</strong> Atendimentos na <strong>{info.clinicName || 'Clínica Hope Brasil'}</strong>.
        </span>
        <a
          href={appointmentUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 underline font-bold text-[#7E8C69] hover:text-[#5B664B] transition-colors inline-flex items-center gap-1"
        >
          <span>Agendar Consulta Online</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </aside>

      {/* Main Header */}
      <Header
        info={info}
        onOpenDossier={() => setIsDossierOpen(true)}
        onOpenPersonalize={() => setIsPersonalizeOpen(true)}
        activeSection="home"
      />

      {/* Main Sections */}
      <main>
        {/* 1. HOME (Seção Principal com Foto e Botão Hope) */}
        <HeroSection
          info={info}
          onOpenChecklist={() => setIsChecklistOpen(true)}
          onOpenPersonalize={() => setIsPersonalizeOpen(true)}
        />

        {/* 2. SINAIS DE ALERTA (Foco em Atração & SEO) */}
        <WarningSignalsSection info={info} />

        {/* 3. MEUS SERVIÇOS (Avaliação, Intervenção, Orientação) */}
        <ServicesSection info={info} />

        {/* 4. QUEM SOU (Biografia de Sandra Regina com Foto) */}
        <AboutSection
          info={info}
          onOpenPersonalize={() => setIsPersonalizeOpen(true)}
        />

        {/* 5. RODAPÉ E SEO LOCAL (Google Meu Negócio, Clínica Hope) */}
        <LocalSeoFooter
          info={info}
          onOpenDossier={() => setIsDossierOpen(true)}
        />
      </main>

      {/* Floating Fast-Access Dock */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 rounded-full bg-white text-[#3D3D3D] shadow-md border border-[#E5E0D5] flex items-center justify-center hover:bg-[#F2EFE9] transition-all hover:scale-105"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* Floating Hope Agenda Direct CTA */}
        <a
          id="floating-hope-btn"
          href={appointmentUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 lg:gap-2.5 px-4 lg:px-6 py-3 lg:py-3.5 rounded-full bg-[#7E8C69] hover:bg-[#6B7858] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all hover:scale-105"
          aria-label="Agendar na Clínica Hope"
        >
          <Calendar className="w-4 h-4" />
          <span className="hidden sm:inline">Agendar na Clínica Hope</span>
          <ExternalLink className="w-3.5 h-3.5 hidden sm:inline" />
        </a>
      </div>

      {/* Modals & Drawers */}
      <CopywriterDossierModal
        isOpen={isDossierOpen}
        onClose={() => setIsDossierOpen(false)}
        info={info}
      />

      <PersonalizationDrawer
        isOpen={isPersonalizeOpen}
        onClose={() => setIsPersonalizeOpen(false)}
        info={info}
        onUpdateInfo={setInfo}
        onResetDefault={handleResetDefault}
      />

      <SymptomChecklistModal
        isOpen={isChecklistOpen}
        onClose={() => setIsChecklistOpen(false)}
        info={info}
      />

    </div>
  );
}
