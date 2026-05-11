"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "@/components/motion-wrapper";

export function AlienSignal() {
  const [decoded, setDecoded] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <section id="signal" className="hud-panel relative overflow-hidden p-5 sm:p-6">
      <div className="signal-noise absolute inset-0 opacity-40" />
      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center">
        <div className="relative flex min-h-[220px] flex-1 items-center justify-center overflow-hidden rounded-[1.6rem] border border-emerald-300/10 bg-black/20">
          <div className="signal-rings">
            <span />
            <span />
            <span />
          </div>
          <div className="alien-fog" />

          <motion.div
            className="alien-avatar"
            animate={reduceMotion ? undefined : { y: [-2, 3, -2], opacity: [0.7, 0.88, 0.7] }}
            transition={{ duration: 7.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <svg viewBox="0 0 160 180" className="h-32 w-28 text-emerald-200 opacity-85 sm:h-36 sm:w-32">
              <defs>
                <linearGradient id="alienGlow" x1="0%" x2="100%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(144,255,225,0.72)" />
                  <stop offset="100%" stopColor="rgba(64,240,255,0.42)" />
                </linearGradient>
              </defs>
              <path
                d="M80 20c-28 0-52 29-52 66 0 44 23 74 52 74s52-30 52-74C132 49 108 20 80 20Z"
                fill="rgba(8,18,20,0.82)"
                stroke="url(#alienGlow)"
                strokeWidth="1.5"
              />
              <motion.ellipse
                cx="58"
                cy="84"
                rx="16"
                ry="10"
                fill="rgba(153,255,226,0.62)"
                animate={reduceMotion ? undefined : { scaleY: [1, 0.2, 1] }}
                transition={{ duration: 4.6, repeat: Number.POSITIVE_INFINITY, times: [0, 0.05, 0.1] }}
                style={{ transformOrigin: "58px 84px" }}
              />
              <motion.ellipse
                cx="102"
                cy="84"
                rx="16"
                ry="10"
                fill="rgba(153,255,226,0.62)"
                animate={reduceMotion ? undefined : { scaleY: [1, 0.2, 1] }}
                transition={{
                  duration: 4.6,
                  repeat: Number.POSITIVE_INFINITY,
                  times: [0, 0.05, 0.1],
                  delay: 0.08,
                }}
                style={{ transformOrigin: "102px 84px" }}
              />
              <path
                d="M64 121c9 6 23 6 32 0"
                fill="none"
                stroke="rgba(120,255,225,0.42)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>

          <div className="signal-bars">
            {[0.42, 0.68, 0.92, 0.66, 0.48].map((value, index) => (
              <motion.span
                key={index}
                style={{ height: `${value * 100}%` }}
                animate={reduceMotion ? undefined : { scaleY: [0.7, 1, 0.72] }}
                transition={{
                  duration: 1.7,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: index * 0.12,
                }}
              />
            ))}
          </div>
        </div>

        <div className="flex-1">
          <p className="panel-label text-emerald-200/80">SINAL DESCONHECIDO</p>
          <div className="mt-4 space-y-2">
            <h3 className={`signal-glitch text-2xl font-semibold tracking-[0.18em] text-white sm:text-3xl`}>
              {decoded ? "RASTRO PARCIALMENTE DECODIFICADO" : "RASTRO DESCONHECIDO"}
            </h3>
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-slate-400">
              ORIGEM: NAO MAPEADA
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="hud-chip">
              <p className="panel-label text-[0.58rem]">FREQUENCIA</p>
              <p className="mt-1 font-mono text-sm tracking-[0.18em] text-cyan-100">7.83 THz</p>
            </div>
            <div className="hud-chip">
              <p className="panel-label text-[0.58rem]">NIVEL DE AMEACA</p>
              <p className="mt-1 font-mono text-sm tracking-[0.18em] text-emerald-200">MINIMO</p>
            </div>
          </div>

          <div className="mt-6 rounded-[1.2rem] border border-cyan-300/10 bg-white/[0.03] p-4">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-slate-400">
              MENSAGEM
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-200 sm:text-base">
              {decoded
                ? "O futuro pertence aos construtores."
                : "Portadora criptografada em observacao passiva."}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setDecoded((current) => !current)}
            className="hud-button mt-6"
          >
            {decoded ? "Ocultar Decodificacao" : "Decodificar Rastro"}
          </button>
        </div>
      </div>
    </section>
  );
}
