"use client";

import { motion } from "@/components/motion-wrapper";
import { Binary } from "lucide-react";
import { differentials } from "@/data/site";

export function Differentials() {
  return (
    <section className="section-shell">
      <div className="relative space-y-8">
        <div className="space-y-3">
          <div className="eyebrow">
            <Binary size={14} />
            Diferenciais
          </div>
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            O que orienta a qualidade final da entrega.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="premium-card p-5"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.1)]">
                  <Icon size={20} />
                </div>
                <h3 className="font-display text-2xl text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
