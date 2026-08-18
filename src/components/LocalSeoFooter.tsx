import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Heart, Globe, Search, Calendar, ExternalLink } from 'lucide-react';
import { ProfessionalInfo } from '../types';
import { SandraAvatar } from './SandraAvatar';

interface LocalSeoFooterProps {
  info: ProfessionalInfo;
  onOpenDossier: () => void;
}

export const LocalSeoFooter: React.FC<LocalSeoFooterProps> = ({ info, onOpenDossier }) => {
  const cleanPhone = info.whatsappNumber.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${cleanPhone || '5511999999999'}?text=${encodeURIComponent(`Olá, ${info.name}! Gostaria de agendar uma consulta presencial na Clínica Hope Brasil.`)}`;
  const appointmentUrl = info.appointmentUrl || 'https://clinicahopebrasil.com.br/sandra-regina-moraes-dos-santos';

  return (
    <footer id="localizacao" className="bg-[#FDFBF7] text-[#5C5C5C] pt-16 pb-12 border-t border-[#EEEAE3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Closing Card (Natural Tones Callout with Direct Hope Clinic Schedule Button) */}
        <div className="bg-[#F2EFE9] text-[#2D2D2D] rounded-[40px] p-8 md:p-12 border border-[#E5E0D5] mb-14 text-center max-w-4xl mx-auto space-y-5 shadow-sm">
          <div className="flex justify-center">
            <SandraAvatar size="md" customSrc={info.photoUrl} />
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
            O primeiro passo para transformar o futuro escolar e emocional do seu filho começa com uma conversa.
          </h3>

          <p className="text-[#5C5C5C] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Você não precisa carregar essa angústia sozinho(a). Agende seu atendimento diretamente na plataforma da Clínica Hope Brasil.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              id="footer-cta-agenda-hope"
              href={appointmentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#7E8C69] hover:bg-[#6B7858] text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md transition-transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar na Clínica Hope Brasil</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              id="footer-cta-whatsapp"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-[#FAF7F2] text-[#3D3D3D] border border-[#E5E0D5] font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-2xs"
            >
              <MessageCircle className="w-4 h-4 text-[#7E8C69]" />
              <span>Dúvidas no WhatsApp</span>
            </a>
          </div>
        </div>

        {/* SEO Local & Clinic Details Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#EEEAE3] text-sm text-left">
          
          {/* Col 1: Identity & Registration */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <SandraAvatar size="xs" customSrc={info.photoUrl} />
              <div>
                <h4 className="font-serif text-base font-bold text-[#2D2D2D] leading-tight">
                  {info.name}
                </h4>
                <p className="text-[#7E8C69] text-[11px] font-semibold">
                  Psicopedagoga Clínica
                </p>
              </div>
            </div>
            <p className="text-xs text-[#5C5C5C] leading-relaxed">
              Atendimento psicológico infantil e desenvolvimento da aprendizagem na <strong>{info.clinicName || 'Clínica Hope Brasil'}</strong>.
            </p>
          </div>

          {/* Col 2: SEO Local Google Meu Negócio & Hope Clinic Anchor */}
          <div className="space-y-3">
            <h4 className="font-bold text-[#2D2D2D] flex items-center gap-2 text-xs uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-[#7E8C69]" />
              <span>Local de Atendimento</span>
            </h4>
            <p className="text-xs text-[#5C5C5C] leading-relaxed">
              Atendimentos presenciais e teleconsulta através da <strong>{info.clinicName || 'Clínica Hope Brasil'}</strong>.
            </p>
            <div className="p-3.5 rounded-2xl bg-[#F2EFE9] border border-[#E5E0D5] text-xs text-[#5C5C5C] space-y-1">
              <span className="font-semibold text-[#2D2D2D] block">Página de Agendamento Oficial:</span>
              <a
                href={appointmentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7E8C69] hover:text-[#5B664B] hover:underline block truncate text-[11px]"
              >
                {appointmentUrl}
              </a>
            </div>
          </div>

          {/* Col 3: Hours & Formats */}
          <div className="space-y-3">
            <h4 className="font-bold text-[#2D2D2D] flex items-center gap-2 text-xs uppercase tracking-wider">
              <Clock className="w-4 h-4 text-[#7E8C69]" />
              <span>Horários e Sessões</span>
            </h4>
            <ul className="text-xs text-[#5C5C5C] space-y-1.5">
              <li className="flex justify-between">
                <span>Segunda a Sexta:</span>
                <span className="text-[#2D2D2D]">Conforme agenda Hope</span>
              </li>
              <li className="text-[11px] text-[#7E8C69] pt-1">
                * Agendamento online e confirmação rápida diretamente na Clínica Hope.
              </li>
            </ul>
          </div>

          {/* Col 4: SEO Terms & Quick Copy Dossier */}
          <div className="space-y-3">
            <h4 className="font-bold text-[#2D2D2D] flex items-center gap-2 text-xs uppercase tracking-wider">
              <Search className="w-4 h-4 text-[#7E8C69]" />
              <span>Palavras-Chave de Busca</span>
            </h4>
            <div className="flex flex-wrap gap-1.5">
              <span className="text-[10px] px-2.5 py-1 rounded-full bg-[#F2EFE9] text-[#5C5C5C] border border-[#E5E0D5]">Psicopedagoga Sandra Regina</span>
              <span className="text-[10px] px-2.5 py-1 rounded-full bg-[#F2EFE9] text-[#5C5C5C] border border-[#E5E0D5]">Clínica Hope Brasil</span>
              <span className="text-[10px] px-2.5 py-1 rounded-full bg-[#F2EFE9] text-[#5C5C5C] border border-[#E5E0D5]">Psicologia Infantil</span>
              <span className="text-[10px] px-2.5 py-1 rounded-full bg-[#F2EFE9] text-[#5C5C5C] border border-[#E5E0D5]">Dificuldades Escolares</span>
            </div>
            <button
              onClick={onOpenDossier}
              className="mt-2 w-full text-xs font-semibold py-2.5 px-3 rounded-full bg-[#F2EFE9] hover:bg-[#EAE5DC] text-[#7E8C69] border border-[#E5E0D5] flex items-center justify-center gap-1.5 transition-colors uppercase tracking-wider"
            >
              <span>Ver Dossiê de SEO & Copy</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E8A82]">
          <div>
            <p className="font-serif italic">
              {info.name} • {info.clinicName || 'Clínica Hope Brasil'} © {new Date().getFullYear()}. Todos os direitos reservados.
            </p>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <a
              href={appointmentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#5B664B] underline text-[#7E8C69]"
            >
              Perfil na Clínica Hope
            </a>
            <span>•</span>
            <span>Sigilo Profissional e Ética Clínica</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
