import React, { useState } from 'react';
import { X, CheckSquare, Square, MessageCircle, Sparkles, Heart } from 'lucide-react';
import { ProfessionalInfo } from '../types';
import { warningSignalsData } from '../data/copyContent';

interface SymptomChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
  info: ProfessionalInfo;
}

export const SymptomChecklistModal: React.FC<SymptomChecklistModalProps> = ({
  isOpen,
  onClose,
  info,
}) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [childAge, setChildAge] = useState('');

  if (!isOpen) return null;

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const cleanPhone = info.whatsappNumber.replace(/\D/g, '');
  const selectedItems = warningSignalsData.filter((item) => selected.includes(item.id));
  const signalsSummary = selectedItems.map((i) => `• ${i.title}`).join('\n');

  const messageText = `Olá, ${info.name}! Fiz o teste de sinais no seu site para meu filho(a)${childAge ? ` de ${childAge}` : ''}.\n\nIdentifiquei os seguintes sinais:\n${signalsSummary || '• Gostaria de uma orientação geral sobre o desenvolvimento escolar.'}\n\nGostaria de entender se é o momento de fazer uma Avaliação Psicopedagógica.`;

  const whatsappUrl = `https://wa.me/${cleanPhone || '5511999999999'}?text=${encodeURIComponent(messageText)}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#2D2D2D]/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
      <div className="bg-[#FDFBF7] rounded-[40px] max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-[#E5E0D5] overflow-hidden text-left">
        
        {/* Header */}
        <div className="p-6 border-b border-[#EEEAE3] bg-[#F2EFE9] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#8C6D5E] text-white flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-lg font-bold text-[#2D2D2D]">
                Guia de Sinais de Alerta
              </h2>
              <p className="text-xs text-[#5C5C5C]">
                Selecione o que você tem observado no dia a dia do seu filho.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#5C5C5C] hover:text-[#2D2D2D] hover:bg-[#EAE5DC]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-5 text-xs text-[#3D3D3D]">
          
          {/* Child age helper */}
          <div className="p-3.5 rounded-2xl bg-white border border-[#EEEAE3] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="font-semibold text-[#2D2D2D]">Qual a idade ou ano escolar do seu filho?</span>
            <input
              type="text"
              value={childAge}
              onChange={(e) => setChildAge(e.target.value)}
              placeholder="Ex: 7 anos / 2º ano"
              className="px-3.5 py-1.5 rounded-full bg-[#F2EFE9] border border-[#E5E0D5] text-[#2D2D2D] text-xs focus:ring-1 focus:ring-[#7E8C69] focus:outline-hidden"
            />
          </div>

          {/* Checklist */}
          <div className="space-y-2.5">
            <label className="font-bold text-[#2D2D2D] text-xs block uppercase tracking-wider">
              Marque os comportamentos observados:
            </label>

            {warningSignalsData.map((item) => {
              const isChecked = selected.includes(item.id);
              return (
                <div
                  key={item.id}
                  onClick={() => toggle(item.id)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${
                    isChecked
                      ? 'bg-[#E8D5CC]/40 border-[#8C6D5E] text-[#2D2D2D]'
                      : 'bg-white border-[#EEEAE3] hover:border-[#D9C4BA] text-[#5C5C5C]'
                  }`}
                >
                  <button type="button" className="mt-0.5 text-[#8C6D5E] shrink-0">
                    {isChecked ? <CheckSquare className="w-4 h-4 fill-[#E8D5CC]" /> : <Square className="w-4 h-4 text-[#D9C4BA]" />}
                  </button>
                  <div>
                    <span className="font-bold block text-xs mb-0.5 text-[#2D2D2D]">{item.title}</span>
                    <span className="text-[11px] text-[#5C5C5C] block leading-relaxed">{item.description}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Supportive note */}
          <div className="p-3.5 rounded-2xl bg-[#F2EFE9] border border-[#E5E0D5] flex items-start gap-2.5 text-[11px] text-[#5C5C5C]">
            <Heart className="w-4 h-4 text-[#7E8C69] shrink-0 mt-0.5" />
            <span>
              <strong>Lembrete acolhedor:</strong> Este questionário não é um diagnóstico fechado. Ele serve como ponto de partida para compreendermos a melhor forma de acolher o seu filho.
            </span>
          </div>

        </div>

        {/* Footer CTA */}
        <div className="p-5 bg-[#F2EFE9] border-t border-[#EEEAE3] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-[#5C5C5C]">
            {selected.length} sinal(is) selecionado(s)
          </span>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#7E8C69] hover:bg-[#6B7858] text-white font-bold text-xs uppercase tracking-wider shadow-xs transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Enviar Sinais via WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
};
