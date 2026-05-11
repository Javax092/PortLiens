import { siteConfig } from "@/data/site";

const cvContent = `
# ${siteConfig.name}

Cargo-alvo: ${siteConfig.title}
Local: ${siteConfig.location}
Status: ${siteConfig.availability}

## Resumo
Profissional focado em sistemas web, IA aplicada, automacao e produtos digitais com leitura de negocio.

## Competencias
- Next.js, React, TypeScript
- Node.js, APIs, Prisma, PostgreSQL
- OpenAI, automacoes e fluxos operacionais
- Arquitetura de produto, UX funcional e entregas de ponta a ponta

## Portfolio
- Evolua AI: sistema pessoal com tracking, IA e acompanhamento de metas
- RL Burger SaaS: operacao para restaurantes com pedidos, painel e automacao
- Promorar Conectado: portal comunitario com comunicacao centralizada
- BotoEdu: base modular para produto educacional com IA

## Contato
- Email: ${siteConfig.contact.email}
- GitHub: ${siteConfig.contact.github}
- LinkedIn: ${siteConfig.contact.linkedin}
`.trim();

export function GET() {
  return new Response(cvContent, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Content-Disposition": 'attachment; filename="ryan-lima-cv.md"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
