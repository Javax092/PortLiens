import {
  Activity,
  Bot,
  Gauge,
  Layers3,
  Rocket,
  ScanSearch,
  ShieldCheck,
  Workflow,
} from "lucide-react";

export const siteConfig = {
  name: "Ryan Lima",
  brand: "RYAN SYSTEMS",
  shortBrand: "RS",
  role: "Engenheiro de Sistemas",
  title: "Engenheiro de Sistemas, IA e Automacao",
  headline:
    "Portfolio sci-fi com foco em produtos reais, automacoes e sistemas prontos para operacao.",
  description:
    "RLTech projeta e entrega produtos digitais, automações e sistemas web com foco em clareza tecnica, confiança profissional e resultado de negocio.",
  location: "Brasil",
  availability: "Disponivel para vagas e projetos selecionados",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ogImagePath: "/opengraph-image",
  cvPath: "/cv",
  seo: {
    title: "Ryan Lima | Engenheiro de Sistemas, IA e Automacao",
    description:
      "Portfolio profissional -.- Ryan Lima  -.- com projetos em SaaS, IA, automacao e arquitetura de sistemas. Experiencia focada em  entrega real.",
    keywords: [
      "Ryan Lima",
      "Cientista de dados",
      "desenvolvedor full stack",
      "automação",
      "IA aplicada",
      "SaaS",
    ],
  },
  contact: {
    email: "ryanlmxxv@gmail.com",
    github: "https://github.com/Javax092",
    linkedin: "https://www.linkedin.com/in/ryanlima-dev",
    whatsappNumber: "92985475419",
    whatsappMessage:
      "Ola Ryan, vi seu portfolio e quero conversar sobre uma oportunidade de trabalho/projeto.",
  },
} as const;

const encodedWhatsAppMessage = encodeURIComponent(
  siteConfig.contact.whatsappMessage,
);

export const externalLinks = {
  github: siteConfig.contact.github,
  linkedin: siteConfig.contact.linkedin,
  email: `mailto:${siteConfig.contact.email}`,
  whatsapp: siteConfig.contact.whatsappNumber
    ? `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodedWhatsAppMessage}`
    : `https://wa.me/?text=${encodedWhatsAppMessage}`,
  cv: siteConfig.cvPath,
} as const;

export type ContactChannel = {
  label: string;
  value: string;
  href: string;
};

export type ContactMissionChannel = ContactChannel & {
  id: "whatsapp" | "email" | "github" | "linkedin" | "cv";
  actionLabel: string;
  protocol: string;
  status: string;
};

export function isExternalHref(href?: string) {
  return typeof href === "string" && (
    href.startsWith("http") ||
    href.startsWith("mailto:")
  );
}

export const contactChannels: readonly ContactChannel[] = [
  {
    label: "ryanlmxxv@gmail.com",
    value: siteConfig.contact.email,
    href: externalLinks.email,
  },
  {
    label: "GITHUB",
    value: "github.com/Javax092",
    href: externalLinks.github,
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/ryanlima-dev",
    href: externalLinks.linkedin,
  },
  {
    label: "WHATSAPP",
    value: siteConfig.contact.whatsappNumber || "mensagem pronta",
    href: externalLinks.whatsapp,
  },
  { label: "CV", value: "download imediato", href: externalLinks.cv },
] as const;

export const contactMissionChannels: readonly ContactMissionChannel[] = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: "92985475419",
    href: "https://wa.me/5592985475419?text=Ol%C3%A1%20Ryan%2C%20vi%20seu%20portf%C3%B3lio%20e%20quero%20conversar%20sobre%20um%20projeto.",
    actionLabel: "ABRIR WHATSAPP",
    protocol: "Q-COMM 5A",
    status: "LINK DIRETO",
  },
  {
    id: "email",
    label: "Email",
    value: "ryanlmxxv@gmail.com",
    href: "mailto:ryanlmxxv@gmail.com?subject=Contato%20pelo%20portf%C3%B3lio&body=Ol%C3%A1%20Ryan%2C%20vi%20seu%20portf%C3%B3lio%20e%20quero%20conversar.",
    actionLabel: "ENVIAR EMAIL",
    protocol: "SMTP ORBITAL",
    status: "MENSAGEM PREPARADA",
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/Javax092",
    href: "https://github.com/Javax092",
    actionLabel: "ACESSAR GITHUB",
    protocol: "REPO GATE",
    status: "CODIGO ABERTO",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/ryanlima-dev",
    href: "https://www.linkedin.com/in/ryanlima-dev",
    actionLabel: "ACESSAR LINKEDIN",
    protocol: "CAREER LINK",
    status: "REDE PROFISSIONAL",
  },
  {
    id: "cv",
    label: "CV",
    value: "Download imediato",
    href: "/cv-ryan-lima.pdf",
    actionLabel: "BAIXAR CV",
    protocol: "DOSSIE PDF",
    status: "ARQUIVO PRONTO",
  },
] as const;

export const audienceModes = [
  {
    id: "recruiter",
    label: "Modo Recrutador",
    title: "Leitura direta para maturidade tecnica, arquitetura e execucao.",
    readingLabel: "ANALISE DE SISTEMA",
    description:
      "Arquitetura consistente, entrega ponta a ponta e sistemas desenhados para operacao real.",
    focus: [
      "Arquitetura de sistemas",
      "Ownership de produto",
      "Deploy e manutencao",
      "Velocidade com criterio",
    ],
  },
  {
    id: "client",
    label: "Modo Cliente",
    title: "Leitura comercial para impacto percebido, operacao e produto.",
    readingLabel: "FOCO DE EXECUCAO",
    description:
      "Produtos construidos para operacao real, automacao inteligente e experiencia fluida.",
    focus: [
      "Reducao de atrito",
      "Automacao aplicada",
      "Deploy utilizavel",
      "Experiencia premium",
    ],
  },
] as const;

export type AudienceMode = (typeof audienceModes)[number]["id"];

export const bootSequence = [
  "INICIALIZANDO CENTRAL RYAN...",
  "CARREGANDO NUCLEO DE IA...",
  "SINCRONIZANDO MODULOS ORBITAIS...",
  "SINAL DESCONHECIDO DETECTADO...",
  "ACESSO AUTORIZADO...",
] as const;

export const navItems = [
  { id: "core", href: "#core", label: "CENTRAL" },
  { id: "orbit", href: "#orbit", label: "MODULOS" },
  { id: "projects", href: "#projects", label: "PROVAS" },
  { id: "terminal", href: "#terminal", label: "TERMINAL" },
  { id: "contato", href: "#contato", label: "CONTATO" },
] as const;

export const topStatus = [
  { label: "FUNCAO", value: "ENGENHEIRO DE SISTEMAS" },
  { label: "NUCLEO", value: "IA E AUTOMACAO" },
  { label: "MODO", value: "OPERACAO DE PRODUTO" },
  { label: "STATUS", value: "ONLINE" },
] as const;

export const systemStatus = [
  { label: "SETOR", value: "07-RL" },
  { label: "BASE", value: "RL-04" },
  { label: "LATENCIA", value: "12MS" },
  { label: "ORBITA", value: "ESTAVEL" },
] as const;

export const coreMetrics = [
  { label: "UPTIME", value: "99.98%" },
  { label: "LATENCIA", value: "12MS" },
  { label: "SINAL", value: "ESTAVEL" },
  { label: "AMEACA", value: "BAIXA" },
] as const;

export const hudDeck = [
  {
    code: "OPS-01",
    title: "ARQUITETURA",
    detail: "Backends, interfaces e fluxos prontos para uso continuo.",
  },
  {
    code: "OPS-02",
    title: "AUTOMAÇÃO",
    detail: "Rotinas, integrações e cortes reais de friccao operacional.",
  },
  {
    code: "OPS-03",
    title: "PRODUTO",
    detail: "Experiencias claras, decisoes objetivas e entrega vendavel.",
  },
  {
    code: "OPS-04",
    title: "IA",
    detail: "Copilotos, tracking e contexto acionavel em producao.",
  },
] as const;

export type ProjectNodeStatus =
  | "EM DESENVOLVIMENTO"
  | "EM PRODUCAO"
  | "ONLINE"
  | "PROTOTIPO";

export type ProjectLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type ProjectNode = {
  id: string;
  name: string;
  title: string;
  category: string;
  short: string;
  status: ProjectNodeStatus;
  x: number;
  y: number;
  orbit: number;
  stack: string[];
  description: string;
  problem: string;
  impact: string;
  recruiterSummary: string;
  clientSummary: string;
  activity: string;
  mode: string;
  deploy: string;
  uptime: string;
  intelligence: string;
  tracking: string;
  indicators: {
    label: string;
    value: string;
    level: number;
  }[];
  logs: string[];
  links: ProjectLink[];
  liveUrl: string;
  githubUrl: string;
  href: string;
  github: string;
};

export const projects: ProjectNode[] = [
  {
    id: "evolua-ai",
    name: "EVOLUA AI",
    title: "EVOLUA AI",
    category: "SISTEMA OPERACIONAL PESSOAL",
    short: "Operacao pessoal com metas, telemetria e decisao assistida por IA.",
    status: "EM DESENVOLVIMENTO",
    x: 28,
    y: 18,
    orbit: 1,
    stack: ["Next.js", "TypeScript", "OpenAI", "Prisma", "PostgreSQL"],
    description:
      "Sistema pessoal com telemetria de habitos, rotina assistida e leitura continua de evolucao.",
    problem:
      "Unificar metas, habitos e reflexoes em um sistema utilizavel, sem dispersao operacional.",
    impact:
      "Centraliza sinais de evolucao, reduz ruído e cria base real para acompanhamento assistido.",
    recruiterSummary:
      "Produto stateful com modelagem consistente, IA integrada e continuidade operacional.",
    clientSummary:
      "Transforma rotina difusa em sistema claro, recorrente e pronto para operacao diaria.",
    activity: "ALTA",
    mode: "LABORATORIO OPERACIONAL",
    deploy: "PIPELINE PRIVADO",
    uptime: "92.4%",
    intelligence: "IA ATIVA",
    tracking: "TRACKING OPERACIONAL",
    indicators: [
      { label: "ATIVIDADE", value: "87%", level: 87 },
      { label: "IA ATIVA", value: "96%", level: 96 },
      { label: "TRACKING", value: "91%", level: 91 },
    ],
    logs: [
      "[OK] CORE ONLINE",
      "[SYNC] DIARIO CONECTADO",
      "[DEPLOY] PIPELINE READY",
    ],
    links: [
      {
        label: "Solicitar demo",
        href: `${externalLinks.email}?subject=Acesso%20Evolua%20AI`,
        external: true,
      },
      { label: "GitHub", href: externalLinks.github, external: true },
    ],
    liveUrl: `${externalLinks.email}?subject=Acesso%20Evolua%20AI`,
    githubUrl: externalLinks.github,
    href: `${externalLinks.email}?subject=Acesso%20Evolua%20AI`,
    github: externalLinks.github,
  },
  {
    id: "rl-burger-saas",
    name: "RL BURGER SAAS",
    title: "RL BURGER SAAS",
    category: "AUTOMACAO PARA RESTAURANTES",
    short:
      "Camada operacional para pedidos, upsell e administracao sem gargalo manual.",
    status: "EM PRODUCAO",
    x: 74,
    y: 26,
    orbit: 2,
    stack: ["Next.js", "Node.js", "Prisma", "PostgreSQL", "WhatsApp API"],
    description:
      "Infraestrutura de atendimento para pedidos, automacoes comerciais e gestao diaria.",
    problem:
      "Eliminar lentidao no atendimento, perda de pedidos e dependencia de processo manual.",
    impact:
      "Centraliza a operacao, aumenta previsibilidade e libera margem para upsell em pico.",
    recruiterSummary:
      "Produto conectado ao negocio, com integrações reais e manutencao de sistema em producao.",
    clientSummary:
      "Sistema orientado a receita, produtividade e atendimento sem atrito.",
    activity: "OPERACAO CONTINUA",
    mode: "SAAS OPERACIONAL",
    deploy: "VERCEL + BACKEND CLOUD",
    uptime: "99.2%",
    intelligence: "AUTOMACAO ATIVA",
    tracking: "PEDIDOS ONLINE",
    indicators: [
      { label: "PEDIDOS", value: "94%", level: 94 },
      { label: "AUTOMACAO", value: "97%", level: 97 },
      { label: "PAINEL", value: "89%", level: 89 },
    ],
    logs: [
      "[OK] CORE ONLINE",
      "[SYNC] DATABASE CONNECTED",
      "[DEPLOY] PAINEL OPERACIONAL",
    ],
    links: [
      {
        label: "Ver perfil profissional",
        href: externalLinks.linkedin,
        external: true,
      },
      { label: "GitHub", href: externalLinks.github, external: true },
    ],
    liveUrl: externalLinks.linkedin,
    githubUrl: externalLinks.github,
    href: externalLinks.linkedin,
    github: externalLinks.github,
  },
  {
    id: "promorar-conectado",
    name: "PROMORAR CONECTADO",
    title: "PROMORAR CONECTADO",
    category: "PORTAL COMUNITARIO",
    short: "Infraestrutura comunitaria para comunicacao, demandas e operacao local.",
    status: "ONLINE",
    x: 69,
    y: 72,
    orbit: 3,
    stack: ["Next.js", "Tailwind", "Prisma", "PostgreSQL"],
    description:
      "Portal comunitario para centralizar comunicacao, demandas e relacionamento operacional.",
    problem:
      "Reduzir comunicacao dispersa, atraso de resposta e perda de contexto entre moradores e administracao.",
    impact:
      "Concentra fluxos recorrentes em um canal claro e melhora a experiencia digital da comunidade.",
    recruiterSummary:
      "Organiza dominio, experiencia e backend para operacao recorrente com clareza estrutural.",
    clientSummary:
      "Canal digital unificado para reduzir ruído, aumentar transparencia e simplificar operacao.",
    activity: "USO PUBLICO",
    mode: "PORTAL DIGITAL",
    deploy: "WEB PUBLICA",
    uptime: "98.7%",
    intelligence: "COMUNICACAO INTELIGENTE",
    tracking: "FLUXO COMUNITARIO",
    indicators: [
      { label: "ENGAJAMENTO", value: "82%", level: 82 },
      { label: "AVISOS", value: "93%", level: 93 },
      { label: "OPERACAO", value: "88%", level: 88 },
    ],
    logs: [
      "[OK] CORE ONLINE",
      "[SYNC] AVISOS INDEXADOS",
      "[DEPLOY] PORTAL DISPONIVEL",
    ],
    links: [
      {
        label: "Ver perfil profissional",
        href: externalLinks.linkedin,
        external: true,
      },
      { label: "GitHub", href: externalLinks.github, external: true },
    ],
    liveUrl: externalLinks.linkedin,
    githubUrl: externalLinks.github,
    href: externalLinks.linkedin,
    github: externalLinks.github,
  },
  {
    id: "botoedu",
    name: "BOTOEDU",
    title: "BOTOEDU",
    category: "PLATAFORMA EDUCACIONAL IA",
    short: "Base educacional com backend modular, autenticacao e IA reaproveitavel.",
    status: "PROTOTIPO",
    x: 22,
    y: 78,
    orbit: 2,
    stack: ["FastAPI", "TypeScript", "JWT", "PostgreSQL", "OpenAI"],
    description:
      "Fundacao educacional com servicos desacoplados, autenticacao e modulos de IA escalaveis.",
    problem:
      "Construir uma base flexivel para produto educacional sem travar crescimento futuro.",
    impact:
      "Valida arquitetura modular e acelera evolucao de novas features e integracoes.",
    recruiterSummary:
      "Mostra desenho de servicos, backend modular e integracao funcional entre web e IA.",
    clientSummary:
      "Estrutura produto complexo desde a base para evitar retrabalho quando a operacao escala.",
    activity: "ITERACAO TECNICA",
    mode: "PROVA DE ARQUITETURA",
    deploy: "AMBIENTE DE TESTE",
    uptime: "76.8%",
    intelligence: "COPILOTO EDUCACIONAL",
    tracking: "SERVICOS MODULARES",
    indicators: [
      { label: "BACKEND", value: "79%", level: 79 },
      { label: "IA", value: "71%", level: 71 },
      { label: "ESCALA", value: "74%", level: 74 },
    ],
    logs: [
      "[OK] CORE ONLINE",
      "[SYNC] AUTH SERVICE READY",
      "[DEPLOY] PIPELINE READY",
    ],
    links: [
      {
        label: "Solicitar acesso",
        href: `${externalLinks.email}?subject=Acesso%20BotoEdu`,
        external: true,
      },
      { label: "GitHub", href: externalLinks.github, external: true },
    ],
    liveUrl: `${externalLinks.email}?subject=Acesso%20BotoEdu`,
    githubUrl: externalLinks.github,
    href: `${externalLinks.email}?subject=Acesso%20BotoEdu`,
    github: externalLinks.github,
  },
];

export const terminalIntro = [
  "TERMINAL RYAN SYSTEMS PRONTO",
  "DIGITE `HELP` PARA LISTAR OS MODULOS ATIVOS",
] as const;

export const terminalCommandMap = {
  help: [
    "COMANDOS DISPONIVEIS",
    "help       :: listar comandos",
    "systems    :: mostrar sistemas ativos",
    "projects   :: listar modulos ativos",
    "mission    :: objetivo operacional",
    "signal     :: traduzir sinal",
    "deploy     :: executar sequencia de deploy",
    "contact    :: abrir canais de contato",
    "hire       :: iniciar conversa comercial",
    "clear      :: limpar terminal",
  ],
  systems: [
    "SISTEMAS ATIVOS",
    "NUCLEO DE IA ..... ONLINE",
    "RADAR ORBITAL .... RASTREAMENTO ESTAVEL",
    "MALHA DE PRODUTO . SINCRONIZADA",
    "GRID DE DEPLOY ... PRONTO",
  ],
  projects: [
    "MODULOS ATIVOS",
    "EVOLUA AI ........ SISTEMA OPERACIONAL PESSOAL",
    "RL BURGER SAAS ... AUTOMACAO PARA RESTAURANTES",
    "PROMORAR ......... PORTAL COMUNITARIO",
    "BOTOEDU .......... PLATAFORMA EDUCACIONAL IA",
  ],
  mission: [
    "MISSAO",
    "Construir sistemas reais.",
    "Automatizar operacoes.",
    "Transformar ideias em produtos.",
  ],
  signal: [
    "SINAL PARCIALMENTE TRADUZIDO",
    "O futuro pertence aos construtores.",
  ],
  deploy: [
    "INICIANDO DEPLOY...",
    "SINCRONIZANDO MODULOS...",
    "VALIDANDO SERVICOS...",
    "PIPELINE ESTAVEL...",
    "DEPLOY FINALIZADO.",
  ],
  contact: [
    "CANAIS DE CONTATO",
    `EMAIL :: ${siteConfig.contact.email}`,
    "GITHUB :: github.com/ryanlima-dev",
    "LINKEDIN :: linkedin.com/in/ryanlima-dev",
    "WHATSAPP :: mensagem pronta configurada",
  ],
  hire: [
    "CANAL DE CONTRATACAO ABERTO",
    "RECRUTAMENTO :: vagas CLT/PJ, full stack, IA e automacao",
    "CLIENTES :: landing pages, sistemas, MVPs e automacoes operacionais",
    `EMAIL :: ${siteConfig.contact.email}`,
    "LINKEDIN :: linkedin.com/in/ryanlima-dev",
    "WHATSAPP :: use o botao fixo para iniciar a conversa",
  ],
  clear: [],
} as const;

export const missionNodes = projects.map((project, index) => ({
  id: project.id,
  title: project.title,
  code: `NODE-0${index + 1}`,
  status: project.status,
  x: project.x,
  y: project.y,
  energy: 64 + index * 9,
  accent: (["cyan", "amber", "emerald", "violet"] as const)[index % 4],
  description: project.description,
  stack: project.stack,
  links: {
    live: project.liveUrl,
    repo: project.githubUrl,
  },
}));

export const principles = [
  "PENSAMENTO SISTEMICO",
  "EXECUCAO ORIENTADA A IA",
  "QUALIDADE DE PRODUTO PREMIUM",
  "CICLOS DE DEPLOY RAPIDOS",
] as const;

export const metrics = [
  { value: "4", label: "MODULOS DE PROJETO" },
  { value: "99.98%", label: "ESTABILIDADE DO NUCLEO" },
  { value: "24/7", label: "PRONTIDAO DE DEPLOY" },
  { value: "BAIXA", label: "AMEACA DE SINAL" },
] as const;

export const floatingPanels = [
  {
    title: "NUCLEO DE IA",
    value: "ATIVO",
    detail: "CAMPO NEURAL ESTAVEL",
    orbit: "left-top",
  },
  {
    title: "GRID DE DEPLOY",
    value: "PRONTO",
    detail: "ROTA OPERACIONAL LIMPA",
    orbit: "right-top",
  },
  {
    title: "REDE SENSORIAL",
    value: "RASTREANDO",
    detail: "MODULOS SINCRONIZADOS",
    orbit: "left-bottom",
  },
  {
    title: "SINAL",
    value: "DESCONHECIDO",
    detail: "ORIGEM NAO MAPEADA",
    orbit: "right-bottom",
  },
] as const;

export const signalGlyphs = [
  "∆ 07-RL",
  "Ξ 7.83 THz",
  "⊕ NUCLEO IA",
  "RASTRO VAZIO",
  "CONTINUE CONSTRUINDO",
] as const;

export const stackCategories = [
  {
    title: "Frontend",
    description: "Interfaces rapidas, tipadas e responsivas.",
    icon: Layers3,
    tech: ["Next.js", "React", "TypeScript", "Tailwind"],
  },
  {
    title: "Backend",
    description: "APIs, servicos e fluxos modulares.",
    icon: Gauge,
    tech: ["Node.js", "Express", "FastAPI", "Prisma"],
  },
  {
    title: "Sistemas IA",
    description: "Agentes, prompts e automacoes orientadas a uso real.",
    icon: Bot,
    tech: ["OpenAI", "Agents", "RAG", "Workflows"],
  },
  {
    title: "Deploy",
    description: "Entrega continua com foco em operacao confiavel.",
    icon: Rocket,
    tech: ["Vercel", "Railway", "Docker", "GitHub"],
  },
] as const;

export const processSteps = [
  {
    title: "Mapear",
    description: "Entender contexto, gargalos e objetivos reais do produto.",
  },
  {
    title: "Construir",
    description:
      "Implementar a camada critica com clareza tecnica e foco em uso.",
  },
  {
    title: "Automatizar",
    description: "Reduzir trabalho manual e estabilizar a operacao.",
  },
  {
    title: "Publicar",
    description: "Colocar no ar, medir e evoluir com velocidade.",
  },
] as const;

export const differentials = [
  {
    title: "Arquitetura de Sistemas",
    description:
      "Produto, backend e experiencia pensados como uma unica operacao.",
    icon: ShieldCheck,
  },
  {
    title: "Execucao com Ritmo",
    description:
      "Entrega rapida sem perder coerencia tecnica nem qualidade visual.",
    icon: Activity,
  },
  {
    title: "Pesquisa Aplicada",
    description:
      "Investigar, sintetizar e transformar contexto em implementacao util.",
    icon: ScanSearch,
  },
  {
    title: "Pensamento Operacional",
    description: "Automacao, manutencao e escala consideradas desde o inicio.",
    icon: Workflow,
  },
] as const;
