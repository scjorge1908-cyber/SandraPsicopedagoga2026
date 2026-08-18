import React, { useState } from 'react';
import { Calendar, MessageCircle, FileText, Settings, Menu, X, ExternalLink } from 'lucide-react';
import { ProfessionalInfo } from '../types';
import { SandraAvatar } from './SandraAvatar';

interface HeaderProps {
  info: ProfessionalInfo;
  onOpenDossier: () => void;
  onOpenPersonalize: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  info,
  onOpenDossier,
  onOpenPersonalize,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cleanPhone = info.whatsappNumber.replace(/\D/g, '');
  const defaultMsg = encodeURIComponent(
    `Olá, ${info.name}! Gostaria de informações sobre o atendimento psicopedagógico na Clínica Hope.`
  );
  const whatsappUrl = `https://wa.me/${cleanPhone || '5511999999999'}?text=${defaultMsg}`;
  const appointmentUrl = info.appointmentUrl || 'https://clinicahopebrasil.com.br/sandra-regina-moraes-dos-santos';

  return (
    <header id="main-header" className="sticky top-0 z-40 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#EEEAE3] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo with Sandra Regina's Portrait Logo */}
          <a href="#home" className="flex items-center gap-3.5 group text-left">
            <SandraAvatar size="sm" customSrc={info.photoUrl} className="group-hover:scale-105 transition-transform" />
            <div>
              <span className="block font-serif text-base sm:text-lg font-bold text-[#2D2D2D] tracking-tight leading-tight">
                {info.name}
              </span>
              <span className="block text-[11px] sm:text-xs font-semibold text-[#7E8C69] tracking-wide">
                Psicopedagoga Clínica • {info.clinicName || 'Clínica Hope Brasil'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-7 text-xs uppercase tracking-widest font-semibold text-[#5C5C5C]">
            <a href="#home" className="hover:text-[#7E8C69] transition-colors border-b-2 border-transparent hover:border-[#7E8C69] pb-0.5">Início</a>
            <a href="#sinais-de-alerta" className="hover:text-[#8C6D5E] transition-colors border-b-2 border-transparent hover:border-[#8C6D5E] pb-0.5">Sinais de Alerta</a>
            <a href="#servicos" className="hover:text-[#7E8C69] transition-colors border-b-2 border-transparent hover:border-[#7E8C69] pb-0.5">Atendimentos</a>
            <a href="#quem-sou" className="hover:text-[#7E8C69] transition-colors border-b-2 border-transparent hover:border-[#7E8C69] pb-0.5">Sobre Sandra</a>
            <a href="#localizacao" className="hover:text-[#7E8C69] transition-colors border-b-2 border-transparent hover:border-[#7E8C69] pb-0.5">Clínica Hope</a>
          </nav>

          {/* Action Tools & Hope Clinic Agenda Button */}
          <div className="hidden xl:flex items-center gap-3">
            <button
              id="btn-open-personalize"
              onClick={onOpenPersonalize}
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#F2EFE9] text-[#5C5C5C] border border-[#E5E0D5] hover:bg-[#EAE5DC] hover:text-[#8C6D5E] transition-colors"
              title="Personalizar dados ou foto"
              aria-label="Personalizar dados ou foto"
            >
              <Settings className="w-4 h-4" />
            </button>

            {/* Direct Agenda Button for Clínica Hope */}
            <a
              id="btn-header-agenda-hope"
              href={appointmentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full bg-[#7E8C69] hover:bg-[#6B7858] text-white shadow-sm transition-all hover:shadow hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar na Clínica Hope</span>
              <ExternalLink className="w-3 h-3 opacity-80" />
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex xl:hidden items-center gap-2">
            <a
              href={appointmentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#7E8C69] text-white"
              title="Agendar na Clínica Hope"
            >
              <Calendar className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-[#3D3D3D] hover:bg-[#F2EFE9]"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FDFBF7] border-b border-[#EEEAE3] px-4 pt-3 pb-5 space-y-3">
          <div className="flex flex-col space-y-2 text-sm font-medium text-[#3D3D3D]">
            <a 
              href="#home" 
              onClick={() => setMobileMenuOpen(false)} 
              className="px-3 py-2 rounded-2xl hover:bg-[#F2EFE9]"
            >
              Início
            </a>
            <a 
              href="#sinais-de-alerta" 
              onClick={() => setMobileMenuOpen(false)} 
              className="px-3 py-2 rounded-2xl hover:bg-[#F2EFE9]"
            >
              Sinais de Alerta
            </a>
            <a 
              href="#servicos" 
              onClick={() => setMobileMenuOpen(false)} 
              className="px-3 py-2 rounded-2xl hover:bg-[#F2EFE9]"
            >
              Atendimentos
            </a>
            <a 
              href="#quem-sou" 
              onClick={() => setMobileMenuOpen(false)} 
              className="px-3 py-2 rounded-2xl hover:bg-[#F2EFE9]"
            >
              Sobre Sandra Regina
            </a>
            <a 
              href="#localizacao" 
              onClick={() => setMobileMenuOpen(false)} 
              className="px-3 py-2 rounded-2xl hover:bg-[#F2EFE9]"
            >
              Clínica Hope & Contato
            </a>
          </div>

          <div className="pt-2 border-t border-[#EEEAE3] flex flex-col gap-2">
            <a
              href={appointmentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-wider rounded-full bg-[#7E8C69] text-white shadow-xs"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar na Clínica Hope</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold rounded-full bg-[#F2EFE9] text-[#3D3D3D] border border-[#E5E0D5]"
            >
              <MessageCircle className="w-4 h-4 text-[#7E8C69]" />
              <span>Falar no WhatsApp</span>
            </a>

            <div className="flex gap-2 pt-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPersonalize();
                }}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 text-[11px] font-semibold rounded-full bg-[#E8D5CC]/40 text-[#8C6D5E] border border-[#D9C4BA]"
              >
                <Settings className="w-3.5 h-3.5" />
                <span>Personalizar</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDossier();
                }}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 text-[11px] font-semibold rounded-full bg-[#F2EFE9] text-[#3D3D3D] border border-[#E5E0D5]"
              >
                <FileText className="w-3.5 h-3.5 text-[#7E8C69]" />
                <span>Dossiê Copy</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
