"use client";

import { motion } from "@/components/motion-wrapper";
import { Cpu, ScanSearch } from "lucide-react";
import { principles } from "@/data/site";

export function About() {
  return (
    <section id="sobre" className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="section-shell"
      >
        <div className="relative space-y-6">
          <div className="eyebrow">
            <ScanSearch size={14} />
            Sobre Mim
          </div>
          <div className="space-y-4">
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              Engenharia, produto e execução em um mesmo sistema.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Sou desenvolvedor full stack focado em criar produtos digitais completos:
              front-end, back-end, banco de dados, integrações, automações e experiências
              modernas. Meu diferencial é unir visão de produto, tecnologia e execução
              rápida.
            </p>
            <p className="max-w-2xl text-base leading-8 text-slate-400">
              Trabalho com mentalidade operacional: entender o contexto, desenhar a base
              técnica certa, entregar uma interface forte e publicar algo utilizável de
              verdade.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.1 }}
        className="section-shell"
      >
        <div className="relative space-y-6">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl border border-violet-400/20 bg-violet-400/10 p-3 text-violet-200 shadow-[0_0_30px_rgba(167,139,250,0.12)]">
              <Cpu size={20} />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-slate-400">
                Operating Principles
              </p>
              <h3 className="mt-1 font-display text-2xl text-white">Core Runtime</h3>
            </div>
          </div>
          <div className="space-y-3">
            {principles.map((principle, index) => (
              <motion.div
                key={principle}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="premium-card flex items-center justify-between px-4 py-4"
              >
                <span className="text-slate-200">{principle}</span>
                <span className="font-mono text-xs text-cyan-300">
                  0{index + 1}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
