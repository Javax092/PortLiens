"use client";

import { motion } from "@/components/motion-wrapper";
import { Bot, Radar, Rocket, Wrench } from "lucide-react";

const missionCards = [
  {
    title: "Build Systems",
    description: "Arquitetura, interfaces e backend integrados para produtos utilizáveis.",
    icon: Wrench,
  },
  {
    title: "Automate Operations",
    description: "Fluxos, agentes e integrações que reduzem operação manual.",
    icon: Bot,
  },
  {
    title: "Deploy Products",
    description: "Publicação com base estável, pronta para rodar em produção.",
    icon: Rocket,
  },
  {
    title: "Decode Problems",
    description: "Análise de contexto, clareza técnica e execução sem ruído.",
    icon: Radar,
  },
] as const;

export function MissionControl() {
  return (
    <section className="section-shell">
      <div className="relative space-y-8">
        <div className="space-y-3">
          <div className="eyebrow">Mission Control</div>
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Minha missão é construir sistemas digitais que parecem simples para o usuário,
            mas operam com engenharia, automação e inteligência por trás.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {missionCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="space-panel group p-4 sm:p-5"
              >
                <div className="scan-overlay opacity-50" />
                <div className="relative">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.12)]">
                      <Icon size={20} />
                    </div>
                    <span className="tech-label">module 0{index + 1}</span>
                  </div>
                  <h3 className="font-display text-2xl text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{card.description}</p>
                  <div className="mt-5 flex items-center justify-between text-xs uppercase tracking-[0.24em] text-slate-500">
                    <span>Command Ready</span>
                    <span className="text-emerald-200/70">active</span>
                  </div>
                  <div className="panel-micro">
                    <span />
                    <span className="opacity-60" />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
