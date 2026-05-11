"use client";

import { motion } from "@/components/motion-wrapper";
import { Orbit } from "lucide-react";
import { stackCategories } from "@/data/site";

export function StackSection() {
  return (
    <section id="stack" className="section-shell">
      <div className="relative space-y-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <div className="eyebrow">
              <Orbit size={14} />
              Stack Técnica
            </div>
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              Ferramentas que sustentam produtos rápidos, sólidos e publicáveis.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-slate-400">
            Escolho stack com foco em velocidade de construção, manutenibilidade e deploy
            simples. O objetivo não é só escrever código, é entregar sistema funcional.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {stackCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="premium-card group p-5"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.1)]">
                  <Icon size={20} />
                </div>
                <h3 className="font-display text-2xl text-white">{category.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{category.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.tech.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
