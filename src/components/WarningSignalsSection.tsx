import React, { useState } from 'react';
import { AlertCircle, Search, CheckSquare, Square, MessageCircle, Sparkles, BookOpen, HeartCrack, TrendingDown, Brain, BookX, Clock } from 'lucide-react';
import { ProfessionalInfo, WarningSignal } from '../types';
import { warningSignalsData } from '../data/copyContent';

interface WarningSignalsSectionProps {
  info: ProfessionalInfo;
}

export const WarningSignalsSection: React.FC<WarningSignalsSectionProps> = ({ info }) => {
  const [selectedSignals, setSelectedSignals] = useState<string[]>([]);

  const toggleSignal = (id: string) => {
    setSelectedSignals((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getCategoryIcon = (category: WarningSignal['category']) => {
    switch (category) {
      case 'leitura':
        return <BookOpen className="w-5 h-5 text-[#7E8C69]" />;
      case 'atencao':
        return <Brain className="w-5 h-5 text-[#7E8C69]" />;
      case 'emocional':
        return <HeartCrack className="w-5 h-5 text-[#8C6D5E]" />;
      case 'rotina':
        return <TrendingDown className="w-5 h-5 text-[#8C6D5E]" />;
      default:
        return <AlertCircle className="w-5 h-5 text-[#7E8C69]" />;
    }
  };

  const cleanPhone = info.whatsappNumber.replace(/\D/g, '');
  const selectedTitles = warningSignalsData
    .filter((s) => selectedSignals.includes(s.id))
    .map((s) => `• ${s.title}`)
    .join('\n');

  const customWhatsAppMsg = encodeURIComponent(
    `Olá, ${info.name}! Fiz o teste de sinais no seu site e identifiquei os seguintes pontos no meu filho(a):\n\n${selectedTitles}\n\nGostaria de entender se é o momento de agendar uma avaliação.`
  );

  const whatsappUrl = `https://wa.me/${cleanPhone || '5511999999999'}?text=${customWhatsAppMsg}`;

  return (
    <section id="sinais-de-alerta" className="py-20 md:py-28 bg-[#F2EFE9] border-b border-[#E5E0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8D5CC]/60 text-[#8C6D5E] border border-[#D9C4BA] text-xs font-bold uppercase tracking-wider shadow-2xs">
            <AlertCircle className="w-3.5 h-3.5 text-[#8C6D5E]" />
            <span>Foco no Bem-Estar da Criança</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D2D2D] leading-tight">
            Quando procurar uma psicopedagoga?
          </h2>

          <p className="text-xl sm:text-2xl font-serif italic text-[#8C6D5E] mt-1">
            Sinais de que seu filho pode precisar de apoio
          </p>

          <div className="pt-2 space-y-3 text-[#5C5C5C] text-base sm:text-lg leading-relaxed">
            <p>
              Seu filho não é preguiçoso e não está agindo "de propósito". Muitas vezes, a resistência aos estudos é apenas a forma que a criança encontrou de expressar que algo está difícil demais para enfrentar sozinha.
            </p>
            <p className="text-sm sm:text-base text-[#737373]">
              Observe os comportamentos abaixo. O acompanhamento precoce evita que pequenas travas se transformem em grandes frustrações no futuro.
            </p>
          </div>
        </div>

        {/* 6 Full Warning Signals Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {warningSignalsData.map((signal) => {
            const isSelected = selectedSignals.includes(signal.id);

            return (
              <div
                key={signal.id}
                id={`card-${signal.id}`}
                onClick={() => toggleSignal(signal.id)}
                className={`cursor-pointer rounded-[32px] p-7 transition-all duration-200 flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-[#E8D5CC]/40 border-[#8C6D5E] shadow-sm ring-2 ring-[#8C6D5E]/30'
                    : 'bg-white border-[#EEEAE3] hover:border-[#D9C4BA] hover:shadow-2xs'
                }`}
              >
                <div>
                  {/* Top Bar: Icon + Category Badge + Checkbox */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="p-3 rounded-2xl bg-[#F2EFE9] border border-[#E5E0D5]">
                      {getCategoryIcon(signal.category)}
                    </div>
                    <div className="flex items-center gap-2">
                      {signal.ageRange && (
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#5C5C5C] bg-[#F2EFE9] px-3 py-1 rounded-full border border-[#E5E0D5]">
                          {signal.ageRange}
                        </span>
                      )}
                      <button
                        type="button"
                        className="text-[#8C6D5E] focus:outline-hidden p-1"
                        aria-label="Selecionar sinal"
                      >
                        {isSelected ? (
                          <CheckSquare className="w-5 h-5 text-[#8C6D5E] fill-[#E8D5CC]" />
                        ) : (
                          <Square className="w-5 h-5 text-[#D9C4BA] hover:text-[#8C6D5E]" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif font-bold text-[#2D2D2D] text-lg sm:text-xl mb-3 leading-snug">
                    {signal.title}
                  </h3>

                  {/* Full Description */}
                  <p className="text-[#5C5C5C] text-sm leading-relaxed mb-6">
                    {signal.description}
                  </p>
                </div>

                {/* SEO Search Intent Tag */}
                <div className="pt-4 border-t border-[#EEEAE3] flex items-center justify-between text-xs text-[#737373]">
                  <div className="flex items-center gap-1.5 truncate">
                    <Search className="w-3.5 h-3.5 text-[#8C6D5E] shrink-0" />
                    <span className="truncate italic">"{signal.searchKeyword}"</span>
                  </div>
                  <span className={`text-[11px] font-bold uppercase tracking-wider ${isSelected ? 'text-[#8C6D5E]' : 'text-[#8E8E8E]'}`}>
                    {isSelected ? 'Identificado' : 'Clique p/ marcar'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Helper Banner for Parents */}
        <div className="mt-12 max-w-4xl mx-auto rounded-[36px] bg-white p-8 sm:p-10 border border-[#E5E0D5] shadow-2xs text-center">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
            <div className="space-y-1 max-w-xl">
              <h4 className="font-serif font-bold text-[#2D2D2D] text-lg sm:text-xl flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#7E8C69] shrink-0" />
                <span>
                  {selectedSignals.length === 0
                    ? 'Identificou algum destes comportamentos no seu filho?'
                    : `${selectedSignals.length} sinal(is) de alerta selecionado(s)`}
                </span>
              </h4>
              <p className="text-[#5C5C5C] text-sm leading-relaxed">
                {selectedSignals.length === 0
                  ? 'Você pode marcar os cards acima que refletem os desafios observados em casa ou na escola para tirar dúvidas diretamente comigo.'
                  : 'Clique no botão ao lado para enviar a lista dos sintomas marcados e conversarmos com carinho sobre as melhores opções.'}
              </p>
            </div>

            {selectedSignals.length > 0 ? (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#8C6D5E] hover:bg-[#785C4E] text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Falar sobre estes sinais</span>
              </a>
            ) : (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#7E8C69] hover:bg-[#6B7858] text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Tirar Dúvidas no WhatsApp</span>
              </a>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
