import React, { useState } from 'react';
import { X, Copy, Check, FileText, Search, MessageSquare, MapPin, Globe } from 'lucide-react';
import { ProfessionalInfo } from '../types';
import { seoKeywordsList } from '../data/copyContent';

interface CopywriterDossierModalProps {
  isOpen: boolean;
  onClose: () => void;
  info: ProfessionalInfo;
}

export const CopywriterDossierModal: React.FC<CopywriterDossierModalProps> = ({
  isOpen,
  onClose,
  info,
}) => {
  const [activeTab, setActiveTab] = useState<'completo' | 'seo' | 'whatsapp'>('completo');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const fullCopyText = `# CONTEÚDO ESTRATÉGICO DE COPYWRITING & SEO PARA SITE DE PSICOPEDAGOGIA
Profissional: ${info.name}
Título: ${info.title}
Registro: ${info.registrationNumber}
Local de Atendimento: ${info.neighborhood}, ${info.city}
WhatsApp: ${info.whatsappNumber}

---

## 1. HOME (SEÇÃO PRINCIPAL)
- Título Principal (H1 - Focado em Transformação):
"Transformando o desafio de aprender em conquistas reais."

- Subtítulo (O que faço e para quem):
"Apoio psicopedagógico especializado para crianças e adolescentes. Um olhar acolhedor para florescer o potencial único do seu filho.
Um espaço seguro para investigar, intervir e transformar a relação do seu filho com a escola e com a própria inteligência."

- Chamada para Ação (Botão Principal / CTA WhatsApp):
[ BOTÃO: Agendar Conversa via WhatsApp ]

- Reafirmações de Confiança (Micro-copy):
✓ Atendimento individualizado e sem pressões
✓ Parceria direta com a família e a escola
✓ Ambiente lúdico e acolhedor em ${info.neighborhood}, ${info.city}

---

## 2. SEÇÃO: SINAIS DE ALERTA (FOCO EM ATRAÇÃO & SEO)
- Título da Seção (H2):
"Quando procurar uma psicopedagoga? Sinais de que seu filho pode precisar de apoio"

- Introdução Empática:
"Seu filho não é preguiçoso e não está agindo de propósito. Muitas vezes, a resistência aos estudos é apenas a forma que a criança encontrou de expressar que algo está difícil demais para enfrentar sozinha.
Fique atento aos comportamentos abaixo. A intervenção precoce evita que pequenas travas se tornem grandes frustrações no futuro."

- Lista de Sintomas e Palavras-Chave de Busca dos Pais:
1. Dificuldade persistente na leitura e escrita
   A criança troca letras com frequência, tem lentidão para juntar sílabas ou demonstra desânimo profundo na fase de alfabetização.
   [Busca Google: "dificuldade na alfabetização sintomas"]

2. Desatenção, esquecimentos e dispersão constante
   Parece estar sempre no mundo da lua, perde materiais escolares com facilidade e precisa de lembretes constantes para terminar uma tarefa simples.
   [Busca Google: "criança desatenta o que pode ser"]

3. Choro, birra ou frustração na hora do dever de casa
   A hora de estudar vira uma batalha diária. A criança se acha incapaz, diz que odeia a escola ou resiste a fazer as lições.
   [Busca Google: "criança chora para fazer tarefa escolar"]

4. Queda nas notas mesmo estudando bastante
   Você estuda junto com seu filho, ele entende na hora, mas na prova esquece o conteúdo. O resultado não reflete todo o esforço dedicado.
   [Busca Google: "notas baixas criança esforçada"]

5. Recusa escolar e queixas frequentes de dor antes da aula
   Dores de barriga ou cabeça sem causa médica, insegurança excessiva e desculpas frequentes para faltar às aulas.
   [Busca Google: "recusa escolar insegurança infantil"]

6. Desorganização com cadernos, tempo e rotina
   Cadernos incompletos, matéria atrasada, perda de prazos de trabalhos e dificuldade em planejar o tempo de estudo.
   [Busca Google: "desorganização escolar infantil"]

---

## 3. SEÇÃO: MEUS SERVIÇOS
- Título da Seção (H2):
"Como posso ajudar seu filho a destravar o aprendizado"

- Serviço 1: Avaliação Psicopedagógica
  • O que é: Investigação aprofundada para entender como seu filho aprende e onde estão os bloqueios cognitivos ou emocionais.
  • Como ajuda: Através de testes científicos, jogos e escuta atenta, mapeamos as habilidades e fragilidades. Entregamos um laudo detalhado e um plano de ação claro para os pais e a escola.

- Serviço 2: Intervenção Psicopedagógica
  • O que é: Atendimento semanal individualizado com jogos e estratégias práticas para destravar o aprendizado.
  • Como ajuda: Trabalhamos raciocínio, foco, memória, leitura e autonomia. A criança recupera a autoestima, percebe que é inteligente e volta a ter prazer em aprender.

- Serviço 3: Orientação para Pais e Escolas
  • O que é: Construção de uma ponte segura entre a rotina de casa, o consultório e a sala de aula.
  • Como ajuda: Orientamos os pais sobre como ajudar nas tarefas sem brigas e auxiliamos a equipe escolar na adaptação de atividades e provas para alunos com necessidades específicas.

---

## 4. SEÇÃO: QUEM SOU (BIOGRAFIA ESTRUTURADA)
- Título (H2):
"Acredito que nenhuma criança deve se sentir incapaz diante de um caderno."

- Roteiro Biográfico com Frases de Conexão:
"Olá! Sou ${info.name}, psicopedagoga apaixonada por desvendar a forma única como cada mente humana processa o mundo e constrói o conhecimento.

Ao longo da minha trajetória de ${info.experienceYears} anos de atendimento em ${info.city}, percebi que por trás de uma nota baixa ou de uma recusa para fazer a lição, quase sempre existe uma criança angustiada que só precisa ser ouvida e compreendida em suas singularidades.

Minha missão é construir um olhar sem julgamentos. No meu consultório em ${info.neighborhood}, a criança encontra um espaço lúdico onde o erro não é punido, mas sim o primeiro passo para uma nova descoberta.

Trabalho em constante parceria com os pais e a equipe pedagógica do colégio, porque o verdadeiro desenvolvimento acontece quando escola, família e terapeuta caminham na mesma direção."

---

## 5. SEÇÃO: RODAPÉ & SEO LOCAL
- Texto de Fechamento:
"O primeiro passo para transformar o futuro escolar do seu filho começa com uma conversa. Você não precisa carregar essa angústia sozinho(a). Vamos juntos descobrir o potencial infinito do seu filho."

- Estrutura para Google Meu Negócio & SEO Local:
• Nome da Empresa no Google: ${info.name} - Psicopedagoga Clínica em ${info.neighborhood}, ${info.city}
• Categoria Principal: Psicopedagogo / Clínica de Psicopedagogia
• Descrição Comercial: "Atendimento psicopedagógico especializado para crianças e adolescentes com dificuldades de aprendizagem, alfabetização, TDAH e Dislexia em ${info.neighborhood}, ${info.city}."
• Endereço: ${info.officeAddress}
• Horário: Segunda a Sexta, das 08h às 19h | Sábados sob agendamento prévio.
`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#2D2D2D]/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
      <div className="bg-[#FDFBF7] rounded-[40px] max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-[#E5E0D5] overflow-hidden">
        
        {/* Modal Top Header */}
        <div className="px-6 py-5 border-b border-[#EEEAE3] flex items-center justify-between bg-[#F2EFE9]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#7E8C69] text-white flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-lg font-bold text-[#2D2D2D]">
                Dossiê Completo de Copywriting & SEO
              </h2>
              <p className="text-xs text-[#5C5C5C]">
                Textos otimizados para atrair pais e ranquear no Google.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => copyToClipboard(fullCopyText, 'full-copy')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#7E8C69] hover:bg-[#6B7858] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-2xs"
            >
              {copiedKey === 'full-copy' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copiedKey === 'full-copy' ? 'Copiado!' : 'Copiar Tudo'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#5C5C5C] hover:text-[#2D2D2D] hover:bg-[#EAE5DC] transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Tabs */}
        <div className="flex items-center gap-2 px-6 py-2.5 bg-[#FDFBF7] border-b border-[#EEEAE3] overflow-x-auto text-xs font-semibold">
          <button
            onClick={() => setActiveTab('completo')}
            className={`px-4 py-2 rounded-full transition-colors flex items-center gap-1.5 ${
              activeTab === 'completo'
                ? 'bg-[#7E8C69] text-white shadow-2xs'
                : 'text-[#5C5C5C] hover:text-[#2D2D2D] bg-[#F2EFE9]'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Texto Formatado</span>
          </button>

          <button
            onClick={() => setActiveTab('seo')}
            className={`px-4 py-2 rounded-full transition-colors flex items-center gap-1.5 ${
              activeTab === 'seo'
                ? 'bg-[#7E8C69] text-white shadow-2xs'
                : 'text-[#5C5C5C] hover:text-[#2D2D2D] bg-[#F2EFE9]'
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            <span>Estratégia SEO</span>
          </button>

          <button
            onClick={() => setActiveTab('whatsapp')}
            className={`px-4 py-2 rounded-full transition-colors flex items-center gap-1.5 ${
              activeTab === 'whatsapp'
                ? 'bg-[#7E8C69] text-white shadow-2xs'
                : 'text-[#5C5C5C] hover:text-[#2D2D2D] bg-[#F2EFE9]'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Scripts WhatsApp</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 text-sm text-[#3D3D3D] space-y-6">
          
          {activeTab === 'completo' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#F2EFE9] border border-[#E5E0D5] flex items-center justify-between text-xs text-[#5C5C5C]">
                <span>
                  💡 <strong>Dica de Uso:</strong> Este texto está pronto para ser colado no Word, WordPress, Wix ou enviado ao seu programador.
                </span>
                <button
                  onClick={() => copyToClipboard(fullCopyText, 'full-copy')}
                  className="shrink-0 ml-3 underline font-bold text-[#7E8C69]"
                >
                  Copiar Markdown
                </button>
              </div>

              <pre className="p-5 rounded-3xl bg-[#2D2D2D] text-[#D5D0C7] font-mono text-xs overflow-x-auto whitespace-pre-wrap leading-relaxed">
                {fullCopyText}
              </pre>
            </div>
          )}

          {activeTab === 'seo' && (
            <div className="space-y-6 text-left">
              
              {/* Meta Tags Box */}
              <div className="rounded-3xl bg-[#F2EFE9] border border-[#E5E0D5] p-5 space-y-3">
                <h3 className="font-bold text-[#2D2D2D] text-xs uppercase tracking-wider flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#7E8C69]" />
                  <span>Meta Tags para Head do Site (WordPress/Yoast/Wix)</span>
                </h3>

                <div className="space-y-2 text-xs">
                  <div>
                    <span className="font-bold text-[#5C5C5C] block mb-0.5">Meta Title (60 caracteres):</span>
                    <div className="p-2.5 rounded-xl bg-white border border-[#E5E0D5] font-mono flex items-center justify-between">
                      <span>Psicopedagoga em {info.city} | {info.name}</span>
                      <button
                        onClick={() => copyToClipboard(`Psicopedagoga em ${info.city} | ${info.name}`, 'meta-title')}
                        className="text-[#7E8C69] font-bold"
                      >
                        {copiedKey === 'meta-title' ? 'Copiado!' : 'Copiar'}
                      </button>
                    </div>
                  </div>

                  <div>
                    <span className="font-bold text-[#5C5C5C] block mb-0.5">Meta Description (150-160 caracteres):</span>
                    <div className="p-2.5 rounded-xl bg-white border border-[#E5E0D5] font-mono flex items-center justify-between">
                      <span>Atendimento psicopedagógico especializado para crianças com dificuldades de aprendizagem, alfabetização e TDAH em {info.neighborhood}, {info.city}. Agende uma conversa!</span>
                      <button
                        onClick={() => copyToClipboard(`Atendimento psicopedagógico especializado para crianças com dificuldades de aprendizagem, alfabetização e TDAH em ${info.neighborhood}, ${info.city}. Agende uma conversa!`, 'meta-desc')}
                        className="text-[#7E8C69] font-bold ml-2 shrink-0"
                      >
                        {copiedKey === 'meta-desc' ? 'Copiado!' : 'Copiar'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Keywords Table */}
              <div className="rounded-3xl border border-[#EEEAE3] overflow-hidden bg-white">
                <div className="bg-[#F2EFE9] px-4 py-3 font-bold text-xs uppercase tracking-wider text-[#5C5C5C]">
                  Palavras-Chave de Busca dos Pais
                </div>
                <div className="divide-y divide-[#EEEAE3] text-xs">
                  {seoKeywordsList.map((kw, i) => (
                    <div key={i} className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="font-bold text-[#2D2D2D] block">{kw.term.replace('[Cidade/Bairro]', `${info.city}/${info.neighborhood}`)}</span>
                        <span className="text-[#737373] text-[11px]">{kw.searchIntent}</span>
                      </div>
                      <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full bg-[#F2EFE9] text-[#7E8C69] border border-[#E5E0D5] self-start sm:self-auto">
                        {kw.importance}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {activeTab === 'whatsapp' && (
            <div className="space-y-4 text-left">
              <div className="p-5 rounded-3xl bg-[#F2EFE9] border border-[#E5E0D5] space-y-2">
                <h4 className="font-bold text-[#2D2D2D] text-xs uppercase tracking-wider">
                  Script de Resposta Rápida no WhatsApp
                </h4>
                <div className="p-3 bg-white rounded-2xl border border-[#E5E0D5] text-xs font-mono text-[#3D3D3D] whitespace-pre-wrap">
{`Olá! Que alegria receber sua mensagem. Sou a ${info.name}, psicopedagoga. 🌿

Entendo perfeitamente como essas dificuldades na escola trazem angústia para a família. Cada criança tem um ritmo único de aprender e meu trabalho é exatamente descobrir as potencialidades do seu filho(a) com muito acolhimento.

Me conte: qual a idade do seu filho(a) e qual a principal queixa que vocês têm percebido em casa ou na escola hoje?`}
                </div>
                <button
                  onClick={() => copyToClipboard(`Olá! Que alegria receber sua mensagem. Sou a ${info.name}, psicopedagoga. 🌿\n\nEntendo perfeitamente como essas dificuldades na escola trazem angústia para a família. Cada criança tem um ritmo único de aprender e meu trabalho é exatamente descobrir as potencialidades do seu filho(a) com muito acolhimento.\n\nMe conte: qual a idade do seu filho(a) e qual a principal queixa que vocês têm percebido em casa ou na escola hoje?`, 'script-1')}
                  className="text-xs font-bold text-[#7E8C69] flex items-center gap-1 hover:underline"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedKey === 'script-1' ? 'Copiado!' : 'Copiar Script'}</span>
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#F2EFE9] border-t border-[#EEEAE3] flex items-center justify-between text-xs text-[#5C5C5C]">
          <span>Natural Tones Theme • Copywriting para Saúde & Educação</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#2D2D2D] text-white font-semibold hover:bg-black transition-colors"
          >
            Fechar
          </button>
        </div>

      </div>
    </div>
  );
};
