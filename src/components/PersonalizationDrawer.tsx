import React, { useRef } from 'react';
import { X, Check, RefreshCw, User, MapPin, Phone, Award, Building, Sparkles, Image, Link2, Upload } from 'lucide-react';
import { ProfessionalInfo } from '../types';
import { SandraAvatar } from './SandraAvatar';

interface PersonalizationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  info: ProfessionalInfo;
  onUpdateInfo: (info: ProfessionalInfo) => void;
  onResetDefault: () => void;
}

export const PersonalizationDrawer: React.FC<PersonalizationDrawerProps> = ({
  isOpen,
  onClose,
  info,
  onUpdateInfo,
  onResetDefault,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleChange = (field: keyof ProfessionalInfo, value: string) => {
    onUpdateInfo({
      ...info,
      [field]: value,
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          handleChange('photoUrl', reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#2D2D2D]/60 backdrop-blur-xs flex justify-end">
      <div className="bg-[#FDFBF7] w-full max-w-md h-full flex flex-col shadow-2xl border-l border-[#E5E0D5] animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#EEEAE3] flex items-center justify-between bg-[#F2EFE9]">
          <div className="flex items-center gap-2.5">
            <SandraAvatar size="xs" customSrc={info.photoUrl} />
            <div>
              <h2 className="font-serif text-base font-bold text-[#2D2D2D]">
                Dados de {info.name}
              </h2>
              <p className="text-xs text-[#5C5C5C]">
                Atualizações instantâneas no site.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#5C5C5C] hover:text-[#2D2D2D] hover:bg-[#EAE5DC] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4 text-xs text-left">
          
          {/* Photo Preview & Custom Upload */}
          <div className="p-4 rounded-3xl bg-white border border-[#E5E0D5] space-y-3">
            <label className="font-bold text-[#3D3D3D] flex items-center gap-1.5">
              <Image className="w-3.5 h-3.5 text-[#7E8C69]" />
              <span>Foto de Perfil / Logo</span>
            </label>

            <div className="flex items-center gap-4">
              <SandraAvatar size="lg" customSrc={info.photoUrl} />
              <div className="space-y-2 flex-1">
                <p className="text-[11px] text-[#5C5C5C]">
                  Recorte circular focado no rosto de Sandra Regina.
                </p>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  accept="image/*"
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F2EFE9] hover:bg-[#EAE5DC] text-[#3D3D3D] border border-[#E5E0D5] font-semibold text-[11px] transition-colors"
                >
                  <Upload className="w-3 h-3 text-[#7E8C69]" />
                  <span>Trocar Foto do Perfil</span>
                </button>
              </div>
            </div>
          </div>

          {/* Appointment URL (Clínica Hope) */}
          <div className="space-y-1.5">
            <label className="font-bold text-[#3D3D3D] flex items-center gap-1.5">
              <Link2 className="w-3.5 h-3.5 text-[#7E8C69]" />
              <span>Link da Agenda (Clínica Hope)</span>
            </label>
            <input
              type="text"
              value={info.appointmentUrl}
              onChange={(e) => handleChange('appointmentUrl', e.target.value)}
              placeholder="https://clinicahopebrasil.com.br/sandra-regina-moraes-dos-santos"
              className="w-full px-3.5 py-2.5 rounded-2xl border border-[#E5E0D5] bg-white focus:outline-hidden focus:ring-2 focus:ring-[#7E8C69] text-[#2D2D2D] text-xs font-mono"
            />
          </div>

          {/* Name */}
          <div className="space-y-1.5">
            <label className="font-bold text-[#3D3D3D] flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#7E8C69]" />
              <span>Nome Completo</span>
            </label>
            <input
              type="text"
              value={info.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="Sandra Regina Moraes dos Santos"
              className="w-full px-3.5 py-2.5 rounded-2xl border border-[#E5E0D5] bg-white focus:outline-hidden focus:ring-2 focus:ring-[#7E8C69] text-[#2D2D2D] text-xs"
            />
          </div>

          {/* Title */}
          <div className="space-y-1.5">
            <label className="font-bold text-[#3D3D3D] flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-[#7E8C69]" />
              <span>Título Profissional</span>
            </label>
            <input
              type="text"
              value={info.title}
              onChange={(e) => handleChange('title', e.target.value)}
              placeholder="Psicopedagoga Clínica e Especialista em Desenvolvimento Infantil"
              className="w-full px-3.5 py-2.5 rounded-2xl border border-[#E5E0D5] bg-white focus:outline-hidden focus:ring-2 focus:ring-[#7E8C69] text-[#2D2D2D] text-xs"
            />
          </div>

          {/* Clinic Name */}
          <div className="space-y-1.5">
            <label className="font-bold text-[#3D3D3D] flex items-center gap-1.5">
              <Building className="w-3.5 h-3.5 text-[#7E8C69]" />
              <span>Clínica de Atendimento</span>
            </label>
            <input
              type="text"
              value={info.clinicName}
              onChange={(e) => handleChange('clinicName', e.target.value)}
              placeholder="Clínica Hope Brasil"
              className="w-full px-3.5 py-2.5 rounded-2xl border border-[#E5E0D5] bg-white focus:outline-hidden focus:ring-2 focus:ring-[#7E8C69] text-[#2D2D2D] text-xs"
            />
          </div>

          {/* WhatsApp Phone */}
          <div className="space-y-1.5">
            <label className="font-bold text-[#3D3D3D] flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#7E8C69]" />
              <span>WhatsApp de Atendimento</span>
            </label>
            <input
              type="text"
              value={info.whatsappNumber}
              onChange={(e) => handleChange('whatsappNumber', e.target.value)}
              placeholder="5511999999999"
              className="w-full px-3.5 py-2.5 rounded-2xl border border-[#E5E0D5] bg-white focus:outline-hidden focus:ring-2 focus:ring-[#7E8C69] text-[#2D2D2D] text-xs"
            />
          </div>

          {/* Reset button */}
          <div className="pt-2">
            <button
              onClick={onResetDefault}
              className="inline-flex items-center gap-1.5 text-[#8E8E8E] hover:text-[#2D2D2D] text-[11px] font-medium underline"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Restaurar dados padrão de Sandra Regina</span>
            </button>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#EEEAE3] bg-[#F2EFE9] flex items-center justify-between">
          <span className="text-[11px] text-[#737373]">Salvo automaticamente.</span>
          <button
            onClick={onClose}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#7E8C69] hover:bg-[#6B7858] text-white font-bold text-xs uppercase tracking-wider transition-colors"
          >
            <Check className="w-4 h-4" />
            <span>Aplicar</span>
          </button>
        </div>

      </div>
    </div>
  );
};
