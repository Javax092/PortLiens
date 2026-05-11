"use client";

import { motion } from "@/components/motion-wrapper";
import { Workflow } from "lucide-react";
import { processSteps } from "@/data/site";

export function ProcessSection() {
  return (
    <section id="processo" className="section-shell">
      <div className="relative space-y-8">
        <div className="space-y-3">
          <div className="eyebrow">
            <Workflow size={14} />
            Processo de Trabalho
          </div>
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Método orientado a clareza, velocidade e entrega utilizável.
          </h2>
        </div>

        <div className="relative space-y-4 pl-5 before:absolute before:left-[11px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-cyan-300/80 before:via-cyan-300/20 before:to-transparent sm:space-y-5">
          {processSteps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="premium-card relative p-5"
            >
              <div className="absolute -left-5 top-6 flex h-6 w-6 items-center justify-center rounded-full border border-cyan-300/30 bg-slate-950 text-[10px] font-mono text-cyan-200">
                {index + 1}
              </div>
              <h3 className="font-display text-2xl text-white">{step.title}</h3>
              <p className="mt-3 max-w-3xl text-base leading-7 text-slate-400">
                {step.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
