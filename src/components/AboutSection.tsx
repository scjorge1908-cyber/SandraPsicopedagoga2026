import React from 'react';
import { Heart, GraduationCap, Award, CheckCircle2, Settings, Calendar, ExternalLink, MapPin } from 'lucide-react';
import { ProfessionalInfo } from '../types';
import { SandraAvatar } from './SandraAvatar';

interface AboutSectionProps {
  info: ProfessionalInfo;
  onOpenPersonalize: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ info, onOpenPersonalize }) => {
  const appointmentUrl = info.appointmentUrl || 'https://clinicahopebrasil.com.br/sandra-regina-moraes-dos-santos';

  return (
    <section id="quem-sou" className="py-20 md:py-28 bg-[#F2EFE9] border-b border-[#E5E0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Profile Card with Sandra Regina Portrait */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              
              <div className="rounded-[40px] bg-white p-8 sm:p-10 border border-[#EEEAE3] shadow-sm space-y-6 text-left">
                
                <div className="flex items-center gap-4">
                  <SandraAvatar size="xl" customSrc={info.photoUrl} className="shadow-xs" />
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2D2D2D] leading-tight">
                      {info.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#7E8C69] mt-1">
                      {info.title}
                    </p>
                    <p className="text-[11px] text-[#8E8E8E] font-mono mt-0.5 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#7E8C69]" />
                      <span>{info.clinicName || 'Clínica Hope Brasil'}</span>
                    </p>
                  </div>
                </div>

                {/* Professional Highlights list */}
                <div className="space-y-3.5 pt-5 border-t border-[#EEEAE3] text-xs sm:text-sm text-[#3D3D3D]">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-[#7E8C69] shrink-0 mt-0.5" />
                    <span><strong>Formação:</strong> Psicologia Clínica e Especialista em Desenvolvimento Infantil & Psicopedagogia</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-[#7E8C69] shrink-0 mt-0.5" />
                    <span><strong>Atuação:</strong> Atendimento especializado na {info.clinicName || 'Clínica Hope Brasil'}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#8C6D5E] shrink-0 mt-0.5" />
                    <span><strong>Foco:</strong> Avaliação do desenvolvimento, dificuldades de aprendizagem, TDAH, Dislexia e suporte emocional</span>
                  </div>
                </div>

                {/* Quote block */}
                <div className="p-5 rounded-3xl bg-[#F2EFE9] border border-[#E5E0D5]">
                  <p className="text-xs sm:text-sm font-serif italic text-[#7E8C69] leading-relaxed">
                    "Acredito que cada criança aprende e se desenvolve em seu próprio tempo, basta oferecermos o estímulo correto, o respeito e o acolhimento necessário."
                  </p>
                </div>

                {/* Direct Agenda on Hope Button */}
                <a
                  href={appointmentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#7E8C69] hover:bg-[#6B7858] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-xs"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Ver Minha Agenda na Clínica Hope</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {/* Quick Edit Helper Button */}
                <button
                  onClick={onOpenPersonalize}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#F2EFE9] hover:bg-[#EAE5DC] text-[#5C5C5C] font-semibold text-xs transition-colors border border-[#E5E0D5]"
                >
                  <Settings className="w-3.5 h-3.5 text-[#7E8C69]" />
                  <span>Personalizar Dados ou Foto</span>
                </button>

              </div>

            </div>
          </div>

          {/* Right Column: Empathetic Copywriting Bio */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8D5CC]/60 text-[#8C6D5E] border border-[#D9C4BA] text-xs font-bold uppercase tracking-wider shadow-2xs">
              <Heart className="w-3.5 h-3.5 text-[#8C6D5E]" />
              <span>Acolhimento & Propósito</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D2D2D] leading-tight">
              Acredito que nenhuma criança deve se sentir incapaz diante dos seus desafios.
            </h2>

            {/* Complete Bio Copy for Sandra Regina */}
            <div className="space-y-4 text-[#5C5C5C] text-base leading-relaxed font-normal">
              <p>
                Olá! Sou a <strong>{info.name}</strong>, psicopedagoga e especialista em desenvolvimento infantil, apaixonada por desvendar a forma única como cada mente humana processa o mundo, sente e constrói o conhecimento.
              </p>

              <p>
                No meu trabalho na <strong>{info.clinicName || 'Clínica Hope Brasil'}</strong>, percebi que por trás de uma dificuldade escolar, desatenção ou angústia na hora dos estudos, quase sempre existe uma criança que só precisa ser ouvida, compreendida e estimulada em suas singularidades.
              </p>

              <p>
                Minha missão é construir um ambiente livre de rótulos. O consultório é um espaço lúdico e seguro onde o erro não é motivo de punição ou vergonha, mas sim o primeiro passo para uma nova conquista.
              </p>

              <p>
                Trabalho em constante alinhamento com a família e a equipe escolar, porque o verdadeiro desenvolvimento acontece quando pais, escola e profissional caminham com o mesmo propósito de amor e evolução.
              </p>
            </div>

            {/* Core Values Pillars */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm text-[#2D2D2D] font-medium">
              <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-[#EEEAE3] shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-[#7E8C69] shrink-0" />
                <span>Escuta empática e acolhimento para os pais</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-[#EEEAE3] shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-[#7E8C69] shrink-0" />
                <span>Estratégias baseadas em Neurociência e Psicologia</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-[#EEEAE3] shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-[#7E8C69] shrink-0" />
                <span>Recursos lúdicos e avaliação personalizada</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-[#EEEAE3] shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-[#7E8C69] shrink-0" />
                <span>Respeito ao tempo e ritmo único de cada um</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
