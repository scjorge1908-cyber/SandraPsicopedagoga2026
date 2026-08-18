import React from 'react';
import { Compass, Sparkles, Users, FileCheck2, Check, Calendar, MessageCircle, ExternalLink } from 'lucide-react';
import { ProfessionalInfo } from '../types';
import { servicesData } from '../data/copyContent';

interface ServicesSectionProps {
  info: ProfessionalInfo;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ info }) => {
  const cleanPhone = info.whatsappNumber.replace(/\D/g, '');
  const appointmentUrl = info.appointmentUrl || 'https://clinicahopebrasil.com.br/sandra-regina-moraes-dos-santos';

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'avaliacao':
        return <Compass className="w-6 h-6 text-[#7E8C69]" />;
      case 'intervencao':
        return <Sparkles className="w-6 h-6 text-[#7E8C69]" />;
      case 'orientacao':
        return <Users className="w-6 h-6 text-[#8C6D5E]" />;
      default:
        return <FileCheck2 className="w-6 h-6 text-[#7E8C69]" />;
    }
  };

  return (
    <section id="servicos" className="py-20 md:py-28 bg-[#FDFBF7] border-b border-[#EEEAE3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F2EFE9] text-[#7E8C69] border border-[#E5E0D5] text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Compass className="w-3.5 h-3.5 text-[#7E8C69]" />
            <span>Abordagem Individualizada</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D2D2D] leading-tight">
            Como posso ajudar seu filho a destravar o aprendizado
          </h2>

          <p className="text-[#5C5C5C] text-base sm:text-lg leading-relaxed">
            Cada criança tem seu próprio ritmo e potencial. Conheça as etapas do trabalho psicopedagógico pensado para devolver a segurança e a alegria de ir para a escola.
          </p>
        </div>

        {/* 3 Detailed Full Service Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {servicesData.map((service) => {
            const serviceMsg = encodeURIComponent(
              `Olá, ${info.name}! Gostaria de saber mais sobre o serviço de ${service.title} para meu filho(a).`
            );
            const serviceWhatsappUrl = `https://wa.me/${cleanPhone || '5511999999999'}?text=${serviceMsg}`;

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="rounded-[36px] border border-[#EEEAE3] bg-white p-8 sm:p-9 flex flex-col justify-between hover:border-[#E5E0D5] hover:shadow-md transition-all text-left shadow-2xs"
              >
                <div className="space-y-6">
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="p-3.5 rounded-2xl bg-[#F2EFE9] border border-[#E5E0D5]">
                      {getServiceIcon(service.id)}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#7E8C69] bg-[#F2EFE9] px-4 py-1.5 rounded-full border border-[#E5E0D5]">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug">
                    {service.title}
                  </h3>

                  {/* O que é: */}
                  <div className="space-y-1.5">
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#8E8E8E]">
                      O que é:
                    </h4>
                    <p className="text-[#3D3D3D] text-sm leading-relaxed font-medium">
                      {service.shortExplanation}
                    </p>
                  </div>

                  {/* Como ajuda: */}
                  <div className="space-y-1.5">
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#8E8E8E]">
                      Como ajuda seu filho:
                    </h4>
                    <p className="text-[#5C5C5C] text-sm leading-relaxed">
                      {service.howItHelps}
                    </p>
                  </div>

                  {/* Para quem é: */}
                  <div className="space-y-1.5 bg-[#F2EFE9] p-4 rounded-2xl border border-[#E5E0D5]">
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#5B664B]">
                      Para quem é indicado:
                    </h4>
                    <p className="text-[#5C5C5C] text-xs leading-relaxed">
                      {service.targetAudience}
                    </p>
                  </div>

                  {/* Etapas do Processo (Exibidas abertamente) */}
                  <div className="pt-2">
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#8E8E8E] mb-3">
                      Etapas do Processo:
                    </h4>
                    <ul className="space-y-2.5 text-xs text-[#5C5C5C]">
                      {service.processSteps.map((step, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#7E8C69] shrink-0 mt-0.5" />
                          <span className="leading-snug">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Service Bottom CTAs: Agenda Hope and WhatsApp */}
                <div className="pt-8 mt-6 border-t border-[#EEEAE3] space-y-2.5">
                  <a
                    href={appointmentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-full bg-[#7E8C69] hover:bg-[#6B7858] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-xs"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Agendar na Clínica Hope</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={serviceWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-full bg-[#F2EFE9] hover:bg-[#EAE5DC] text-[#3D3D3D] text-xs font-semibold tracking-wide transition-all border border-[#E5E0D5]"
                  >
                    <MessageCircle className="w-4 h-4 text-[#7E8C69]" />
                    <span>Tirar dúvidas sobre este atendimento</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Advisory banner */}
        <div className="mt-16 max-w-4xl mx-auto p-8 sm:p-10 rounded-[36px] bg-[#F2EFE9] border border-[#E5E0D5] flex flex-col md:flex-row items-center justify-between gap-6 text-left shadow-2xs">
          <div className="space-y-1.5 max-w-xl">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#2D2D2D]">
              Não sabe por qual atendimento começar?
            </h4>
            <p className="text-[#5C5C5C] text-sm leading-relaxed">
              Não se preocupe. Em nossa primeira consulta na Clínica Hope, ouvirei com carinho as queixas da família e da escola para indicar o caminho mais acolhedor para o seu filho.
            </p>
          </div>
          <a
            href={appointmentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#7E8C69] hover:bg-[#6B7858] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md transition-transform hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4" />
            <span>Agendar na Clínica Hope</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
