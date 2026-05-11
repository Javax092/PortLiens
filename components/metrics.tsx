"use client";

import { motion } from "@/components/motion-wrapper";
import { metrics } from "@/data/site";

export function Metrics() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {metrics.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
          className="premium-card group p-5 sm:p-6"
        >
          <div className="mb-5 h-px w-full bg-gradient-to-r from-cyan-300/30 via-white/10 to-transparent" />
          <p className="font-display text-3xl font-semibold text-white sm:text-[2.1rem]">
            {item.value}
          </p>
          <p className="mt-2 max-w-[16rem] text-sm leading-6 text-slate-400">{item.label}</p>
        </motion.div>
      ))}
    </section>
  );
}
