"use client";

import { motion } from "@/components/motion-wrapper";
import { ArrowRight, CheckCircle2, Github, MessageCircle } from "lucide-react";
import { AlienSignal } from "@/components/alien-signal";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

export function Hero() {
  const terminalLogs = [
    "> scanning sector 07-RL",
    "> alien signal detected",
    "> AI systems synchronized",
    "> portfolio command ready",
  ];

  const statusCards = [
    { label: "Signal", value: "LOCKED" },
    { label: "System", value: "STABLE" },
    { label: "AI Core", value: "ACTIVE" },
    { label: "Transmission", value: "CLEAN" },
  ];

  return (
    <section
      id="inicio"
      className="relative grid min-h-[calc(100vh-7.5rem)] items-center gap-7 pb-4 pt-4 sm:gap-9 sm:pt-6 lg:grid-cols-[1.05fr_0.95fr] lg:pb-8 lg:pt-8"
    >
      <div className="pointer-events-none absolute left-[45%] top-10 hidden h-72 w-72 rounded-full border border-cyan-300/10 bg-[radial-gradient(circle,rgba(148,163,184,0.12)_0%,rgba(56,189,248,0.08)_20%,rgba(10,15,28,0)_64%)] blur-[1px] lg:block" />
      <div className="space-y-6 sm:space-y-7 lg:space-y-9">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-[linear-gradient(180deg,rgba(52,211,153,0.14),rgba(52,211,153,0.08))] px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-emerald-100 shadow-[0_0_30px_rgba(52,211,153,0.08)]"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.85)]" />
          Deep Space Node Online
        </motion.div>

        <div className="space-y-5 sm:space-y-6">
          <motion.p
            custom={0.1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-mono text-[0.72rem] uppercase tracking-[0.42em] text-cyan-300/80 sm:text-sm"
          >
            Full Stack Developer • AI Systems • Automation
          </motion.p>
          <motion.h1
            custom={0.18}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-3xl font-display text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-[5.35rem] lg:leading-[0.96]"
          >
            Ryan Lima
          </motion.h1>
          <motion.p
            custom={0.24}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-2xl text-lg leading-8 text-slate-100 sm:text-[1.28rem] sm:leading-9"
          >
            Construo sistemas web, automações e produtos digitais com IA com estética de
            produto premium, base sólida e operação pronta para escalar.
          </motion.p>
          <motion.p
            custom={0.3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
          >
            Eu projeto, desenvolvo e entrego sistemas digitais com foco em performance,
            automação, IA e experiência profissional.
          </motion.p>
        </div>

        <motion.div
          custom={0.38}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <a
            href="#projetos"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-cyan-200/20 bg-gradient-to-r from-sky-400 via-cyan-300 to-cyan-200 px-6 py-3.5 font-medium text-slate-950 shadow-[0_20px_50px_rgba(34,211,238,0.22)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110"
          >
            Ver Projetos
            <ArrowRight size={18} />
          </a>
          <a
            href="#contato"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3.5 font-medium text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/20 hover:bg-white/10"
          >
            Falar Comigo
            <MessageCircle size={18} />
          </a>
        </motion.div>

        <motion.div
          custom={0.46}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-wrap items-center gap-3 text-sm text-slate-300 sm:gap-4"
        >
          <div className="flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.04] px-3 py-2">
            <CheckCircle2 size={16} className="text-cyan-300" />
            Produtos reais e operações enxutas
          </div>
          <div className="flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.04] px-3 py-2">
            <Github size={16} className="text-cyan-300" />
            Stack moderna e entrega pronta para deploy
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.16 }}
        className="glass-panel subtle-grid relative overflow-hidden p-3.5 shadow-glow sm:p-5"
      >
        <div className="scan-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.1),transparent_20%)]" />
        <div className="absolute right-3 top-5 hidden h-12 w-20 opacity-70 sm:block" style={{ animation: "float-orbit 6.8s ease-in-out infinite" }}>
          <div className="ufo-glow absolute left-1/2 top-5 h-2.5 w-12 -translate-x-1/2 rounded-full border border-cyan-300/20 bg-[linear-gradient(180deg,rgba(148,163,184,0.5),rgba(30,41,59,0.95))]" />
          <div className="absolute left-1/2 top-2 h-4 w-7 -translate-x-1/2 rounded-full border border-cyan-200/15 bg-[linear-gradient(180deg,rgba(186,230,253,0.22),rgba(14,116,144,0.08))]" />
          <div className="absolute left-1/2 top-7 h-5 w-8 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-md" />
        </div>
        <div className="relative space-y-4 sm:space-y-5">
          <div className="space-panel p-4 sm:p-5">
            <div className="scan-overlay opacity-45" />
            <div className="relative flex items-center justify-between gap-4">
              <div>
                <p className="tech-label">Orbital Console</p>
                <h2 className="mt-2 font-display text-2xl font-semibold text-white">
                  Ryan Systems
                </h2>
              </div>
              <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 font-mono text-xs text-cyan-200">
                SIGNAL LOCKED
              </div>
            </div>
            <p className="relative mt-4 max-w-sm text-sm leading-6 text-slate-300">
              Cockpit operacional com rastreio orbital, sistemas estáveis e presença
              alienígena discreta.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-[1.05fr_0.95fr]">
            <div className="space-panel relative min-h-[260px] p-4 sm:p-5">
              <div className="scan-overlay opacity-40" />
              <div className="relative h-full">
                <p className="tech-label">Orbital Radar</p>
                <div className="relative mx-auto mt-5 aspect-square w-full max-w-[220px] rounded-full border border-cyan-300/12 bg-[radial-gradient(circle,rgba(8,15,34,0.95)_30%,rgba(6,12,27,0.88)_70%)] sm:max-w-[240px]">
                  <div className="orbital-ring" />
                  <div className="orbital-ring inset-[22%]" />
                  <div className="orbital-ring inset-[34%]" />
                  <div className="absolute inset-0 rounded-full border border-cyan-300/8" />
                  <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-cyan-300/10" />
                  <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-cyan-300/10" />
                  <div className="radar-sweep" />
                  <span className="absolute left-[63%] top-[32%] h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.65)]" />
                  <span className="absolute left-[38%] top-[58%] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.5)]" />
                  <div className="absolute bottom-[17%] left-[18%] h-7 w-10 rotate-[18deg] rounded-full border border-white/8 bg-white/[0.03]" />
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {statusCards.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.25 + index * 0.08 }}
                      whileHover={{ y: -4 }}
                      className="space-panel p-3"
                    >
                      <p className="tech-label">{item.label}</p>
                      <p className="mt-2 font-display text-base text-white">{item.value}</p>
                      <div className="panel-micro">
                        <span />
                        <span className="opacity-60" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <AlienSignal />

              <div className="terminal-scanlines overflow-hidden rounded-[1.6rem] border border-cyan-400/12 bg-slate-950/92 shadow-[0_24px_80px_rgba(2,6,23,0.48)]">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-rose-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-400" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-slate-500">
                    deep-space.log
                  </p>
                </div>
                <div className="space-y-3 px-4 py-5 font-mono text-sm text-slate-100 sm:px-5 sm:py-6">
                  {terminalLogs.map((log, index) => (
                    <motion.p
                      key={log}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.45 + index * 0.15, duration: 0.4 }}
                    >
                      {log}
                    </motion.p>
                  ))}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1.2, repeat: Number.POSITIVE_INFINITY }}
                    className="h-4 w-2 rounded-sm bg-cyan-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
