"use client";

import { motion, useReducedMotion } from "@/components/motion-wrapper";
import { coreMetrics } from "@/data/site";

export function AICore() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto flex w-full max-w-[780px] items-center justify-center py-5 sm:py-16">
      <div className="ai-core-orbit orbit-one hidden sm:block" />
      <div className="ai-core-orbit orbit-two hidden sm:block" />
      <div className="ai-core-orbit orbit-three" />

      <motion.div
        className="relative z-10 flex h-40 w-40 items-center justify-center rounded-full sm:h-64 sm:w-64"
        animate={
          reduceMotion
            ? undefined
            : {
                y: [-4, 4, -4],
                scale: [1, 1.02, 1],
                filter: ["brightness(1)", "brightness(1.15)", "brightness(1)"],
              }
        }
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <div className="ai-core-shell">
          <div className="ai-core-surface" />
          <div className="ai-core-pulse" />
          <div className="ai-core-grid" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="panel-label">RYAN SYSTEMS</p>
              <h2 className="mt-3 text-xl font-semibold tracking-[0.22em] text-white sm:text-3xl sm:tracking-[0.3em]">
                NUCLEO DE IA
              </h2>
              <p className="mt-3 font-mono text-[0.64rem] uppercase tracking-[0.22em] text-cyan-100/72 sm:text-[0.72rem] sm:tracking-[0.28em]">
                SINAL ESTAVEL
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-1/2 grid w-full max-w-[620px] -translate-x-1/2 gap-2 px-1 sm:grid-cols-4 sm:px-2">
        {coreMetrics.map((item) => (
          <div key={item.label} className="hud-chip">
            <p className="panel-label text-[0.58rem]">{item.label}</p>
            <p className="mt-1 font-mono text-sm tracking-[0.18em] text-white">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
