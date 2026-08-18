import { ProfessionalInfo, SeoKeyword, WarningSignal, ServiceItem } from '../types';
import sandraHeroPhoto from '../../sandra-hero.webp';

export const defaultProfessionalInfo: ProfessionalInfo = {
  name: 'Sandra Regina Moraes dos Santos',
  title: 'Psicopedagoga e Especialista em Desenvolvimento Infantil & Aprendizagem',
  registrationNumber: 'Psicopedagogia Clínica • Clínica Hope',
  city: 'São Paulo',
  neighborhood: 'Clínica Hope',
  whatsappNumber: '5511999999999',
  experienceYears: '10+',
  specialization: 'Psicologia Infantil, Alfabetização, TDAH, Dislexia e Dificuldades de Aprendizagem',
  officeAddress: 'Atendimento na Clínica Hope Brasil',
  clinicName: 'Clínica Hope Brasil',
  appointmentUrl: 'https://clinicahopebrasil.com.br/sandra-regina-moraes-dos-santos',
  photoUrl: sandraHeroPhoto,
};

export const seoKeywordsList: SeoKeyword[] = [
  {
    term: 'Psicopedagoga Sandra Regina Moraes dos Santos',
    searchIntent: 'Busca por Nome da Profissional / Marca Pessoal',
    usageLocation: 'Título H1, Meta Title, Rodapé, Bio',
    importance: 'Alta',
  },
  {
    term: 'Psicopedagoga infantil Clínica Hope Brasil',
    searchIntent: 'Local / Comercial (Pais buscando agendamento na Clínica Hope)',
    usageLocation: 'Header, Botões de Agendamento, Rodapé',
    importance: 'Alta',
  },
  {
    term: 'Dificuldade de aprendizagem infantil',
    searchIntent: 'Informativo / Meio de Funil (Pais preocupados com o desempenho)',
    usageLocation: 'Seção Sinais de Alerta, Artigos, Subtítulos',
    importance: 'Alta',
  },
  {
    term: 'Avaliação psicopedagógica e psicológica infantil',
    searchIntent: 'Comercial (Pais buscando saber o que a criança tem)',
    usageLocation: 'Seção de Serviços, Título H2',
    importance: 'Alta',
  },
  {
    term: 'Criança não consegue se concentrar nas tarefas',
    searchIntent: 'Dor específica (Busca longa cauda no Google)',
    usageLocation: 'Sinais de Alerta, FAQ',
    importance: 'Estratégica',
  },
  {
    term: 'Dificuldade para ler e escrever alfabetização',
    searchIntent: 'Dor específica de fase escolar',
    usageLocation: 'Sinais de Alerta, Descrição dos Serviços',
    importance: 'Alta',
  },
  {
    term: 'Orientação para pais e escola TDAH / Dislexia',
    searchIntent: 'Suporte multiprofissional e parceria escolar',
    usageLocation: 'Serviço 3 e Rodapé',
    importance: 'Média',
  },
];

export const warningSignalsData: WarningSignal[] = [
  {
    id: 'sinal-alfabetizacao',
    title: 'Dificuldade persistente na leitura e escrita',
    description: 'A criança troca letras com frequência, tem lentidão para juntar sílabas ou demonstra desânimo profundo na fase de alfabetização.',
    searchKeyword: 'dificuldade na alfabetização sintomas',
    category: 'leitura',
    ageRange: '5 a 8 anos',
  },
  {
    id: 'sinal-atencao',
    title: 'Desatenção, esquecimentos e dispersão constante',
    description: 'Parece estar sempre no "mundo da lua", perde materiais com facilidade e precisa de lembretes constantes para terminar uma instrução simples.',
    searchKeyword: 'criança desatenta o que pode ser',
    category: 'atencao',
    ageRange: 'Todas as idades',
  },
  {
    id: 'sinal-frustracao',
    title: 'Choro, birra ou frustração na hora do dever de casa',
    description: 'A hora de estudar vira uma batalha diária. A criança se acha "incapaz", diz que odeia a escola ou resiste a fazer as tarefas.',
    searchKeyword: 'criança chora para fazer tarefa escolar',
    category: 'emocional',
    ageRange: '6 a 12 anos',
  },
  {
    id: 'sinal-desempenho',
    title: 'Queda nas notas mesmo estudando bastante',
    description: 'Você estuda junto, a criança entende na hora, mas no dia da prova parece ter esquecido tudo. O resultado não condiz com o esforço.',
    searchKeyword: 'notas baixas criança esforçada',
    category: 'rotina',
    ageRange: 'Ensino Fundamental',
  },
  {
    id: 'sinal-recusa',
    title: 'Recusa escolar e queixas frequentes de dor antes da aula',
    description: 'Dores de barriga ou de cabeça sem causa médica, insegurança excessiva e desculpas frequentes para não ir ao colégio.',
    searchKeyword: 'recusa escolar insegurança infantil',
    category: 'emocional',
    ageRange: 'Todas as idades',
  },
  {
    id: 'sinal-organizacao',
    title: 'Desorganização com cadernos, tempo e rotina',
    description: 'Cadernos incompletos, matéria atrasada, perda de prazos de trabalhos e dificuldade para gerenciar a rotina de estudos.',
    searchKeyword: 'desorganização escolar infantil',
    category: 'rotina',
    ageRange: 'Fundamental I e II',
  },
];

export const servicesData: ServiceItem[] = [
  {
    id: 'avaliacao',
    title: 'Avaliação do Desenvolvimento & Aprendizagem',
    badge: '1ª Etapa Essencial',
    shortExplanation: 'Investigação aprofundada para entender como seu filho aprende, sente e onde estão os bloqueios cognitivos ou emocionais.',
    howItHelps: 'Através de instrumentos científicos, recursos lúdicos e escuta clínica atenta, mapeamos as habilidades e fragilidades. Entregamos um parecer detalhado e um plano de ação claro para os pais e a escola.',
    targetAudience: 'Para crianças e adolescentes com dificuldades escolares, queixas de desatenção, suspeitas de TDAH, Dislexia ou ansiedade de desempenho.',
    processSteps: [
      'Entrevista inicial detalhada com os pais (Anamnese clínica)',
      'Sessões avaliativas lúdicas e testes específicos com a criança',
      'Contato com a escola para alinhamento pedagógico e comportamental',
      'Sessão de Devolutiva com entrega de Laudo/Parecer e orientações práticas',
    ],
    seoTerms: ['avaliação psicológica infantil', 'diagnóstico dificuldade escolar', 'laudo psicopedagógico'],
  },
  {
    id: 'intervencao',
    title: 'Intervenção Clínica & Acompanhamento',
    badge: 'Tratamento & Evolução',
    shortExplanation: 'Atendimento individualizado com estratégias práticas e acolhedoras para destravar o aprendizado e fortalecer as emoções.',
    howItHelps: 'Trabalhamos raciocínio, foco, autorregulação, leitura e autonomia. A criança recupera a autoestima, percebe suas qualidades e volta a ter segurança em seu potencial.',
    targetAudience: 'Para quem necessita de suporte contínuo para superar entraves escolares e emocionais.',
    processSteps: [
      'Plano de intervenção 100% individualizado para as necessidades da criança',
      'Uso de jogos estruturados, neurociência e estímulos prazerosos',
      'Desenvolvimento de métodos de estudo e autonomia infantil',
      'Acompanhamento contínuo do progresso e ganhos de confiança',
    ],
    seoTerms: ['intervenção psicopedagógica', 'psicologia infantil', 'terapia de aprendizagem'],
  },
  {
    id: 'orientacao',
    title: 'Orientação para Pais e Suporte Escolar',
    badge: 'Parceria de Sucesso',
    shortExplanation: 'Construção de uma ponte segura entre a rotina familiar de casa, o consultório e a sala de aula.',
    howItHelps: 'Orientamos os pais sobre como lidar com as tarefas e frustrações sem desgaste e auxiliamos os professores com estratégias de acolhimento e manejo.',
    targetAudience: 'Para famílias que buscam harmonia na rotina de estudos e escolas que prezam por práticas inclusivas eficientes.',
    processSteps: [
      'Orientações práticas para organização da rotina e lição de casa em família',
      'Visitas e alinhamentos com a coordenação e professores do colégio',
      'Sugestões de adaptação pedagógica para alunos com necessidades específicas',
      'Mediação tranquila e colaborativa entre família e ambiente escolar',
    ],
    seoTerms: ['orientação de pais', 'suporte escolar infantil', 'como ajudar meu filho nos estudos'],
  },
];
