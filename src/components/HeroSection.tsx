import React from 'react';
import { Calendar, MessageCircle, ShieldCheck, HeartHandshake, Smile, ArrowDown, Sparkles, ExternalLink, MapPin } from 'lucide-react';
import { ProfessionalInfo } from '../types';
import { SandraAvatar } from './SandraAvatar';

interface HeroSectionProps {
  info: ProfessionalInfo;
  onOpenChecklist: () => void;
  onOpenPersonalize: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  info,
  onOpenChecklist,
}) => {
  const cleanPhone = info.whatsappNumber.replace(/\D/g, '');
  const msg = encodeURIComponent(
    `Olá, ${info.name}! Gostaria de agendar um atendimento na Clínica Hope.`
  );
  const whatsappUrl = `https://wa.me/${cleanPhone || '5511999999999'}?text=${msg}`;
  const appointmentUrl = info.appointmentUrl || 'https://clinicahopebrasil.com.br/sandra-regina-moraes-dos-santos';

  return (
    <section id="home" className="relative pt-12 pb-16 md:pt-16 md:pb-24 bg-[#FDFBF7] border-b border-[#EEEAE3] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">

          {/* Text Column */}
          <div className="text-center md:text-left order-2 md:order-1">

            {/* Trust Category Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F2EFE9] border border-[#E5E0D5] text-[#5B664B] text-xs font-bold uppercase tracking-wider mb-6 shadow-2xs">
              <MapPin className="w-3.5 h-3.5 text-[#7E8C69]" />
              <span>Atendimento na {info.clinicName || 'Clínica Hope Brasil'}</span>
            </div>

            {/* Main Headline (Transformation H1) */}
            <h1 className="font-serif text-3xl sm:text-5xl md:text-5xl lg:text-6xl text-[#2D2D2D] leading-[1.15] tracking-tight mb-6">
              Aprender não precisa ser motivo de <span className="italic text-[#7E8C69]">sofrimento ou brigas</span> em casa.
            </h1>

            {/* Subtitle */}
            <div className="space-y-3 text-base sm:text-xl text-[#5C5C5C] leading-relaxed mb-10 font-normal">
              <p>
                Ajudo crianças e adolescentes a superarem as dificuldades escolares e emocionais, recuperando a autoconfiança e a alegria pelo aprendizado.
              </p>
              <p className="text-sm sm:text-base text-[#737373]">
                Um espaço seguro e acolhedor para investigar, intervir e transformar a relação do seu filho com a escola e com a própria inteligência.
              </p>
            </div>

            {/* Primary and Secondary CTAs (Targeted to Clínica Hope Agenda) */}
            <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4">
              {/* Main Direct Agenda Button */}
              <a
                id="hero-cta-agenda-hope"
                href={appointmentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#7E8C69] hover:bg-[#6B7858] text-white font-bold text-sm tracking-wider uppercase transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5" />
                <span>Agendar na Clínica Hope</span>
                <ExternalLink className="w-4 h-4 opacity-80" />
              </a>

              {/* Secondary WhatsApp CTA */}
              <a
                id="hero-cta-whatsapp"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-[#FAF7F2] border border-[#E5E0D5] text-[#3D3D3D] font-semibold text-sm tracking-wide transition-all shadow-2xs hover:border-[#7E8C69]"
              >
                <MessageCircle className="w-4 h-4 text-[#7E8C69]" />
                <span>Dúvidas no WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Photo Column: Sandra Regina's real portrait, large, soft-edged, no circular crop */}
          <div className="order-1 md:order-2 flex flex-col items-center">
            <div className="relative">
              <SandraAvatar size="hero" customSrc={info.photoUrl} />
              <div className="mt-4 mx-auto w-fit bg-white px-4 py-1.5 rounded-full border border-[#E5E0D5] shadow-xs text-xs font-bold text-[#7E8C69] flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#7E8C69]" />
                <span>{info.name}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Micro Reassurance Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto pt-8 mt-12 border-t border-[#EEEAE3] text-xs sm:text-sm text-[#5C5C5C]">
          <div className="flex items-center justify-center gap-2 bg-[#F2EFE9] py-3 px-4 rounded-2xl border border-[#E5E0D5]">
            <ShieldCheck className="w-4 h-4 text-[#7E8C69] shrink-0" />
            <span>Atendimento humanizado com a Psicopedagoga Sandra Regina</span>
          </div>

          <div className="flex items-center justify-center gap-2 bg-[#F2EFE9] py-3 px-4 rounded-2xl border border-[#E5E0D5]">
            <HeartHandshake className="w-4 h-4 text-[#8C6D5E] shrink-0" />
            <span>Agenda integrada com a Clínica Hope Brasil</span>
          </div>

          <div className="flex items-center justify-center gap-2 bg-[#F2EFE9] py-3 px-4 rounded-2xl border border-[#E5E0D5]">
            <Smile className="w-4 h-4 text-[#7E8C69] shrink-0" />
            <span>Ambiente lúdico e acolhedor para a família</span>
          </div>
        </div>

      </div>
    </section>
  );
};
