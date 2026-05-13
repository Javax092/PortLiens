"use client";

import { useEffect } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "@/components/motion-wrapper";
import type { ProjectNode } from "@/data/site";

type ProjectModulePanelProps = {
  project: ProjectNode | null;
  open: boolean;
  onClose: () => void;
};

export function ProjectModulePanel({ project, open, onClose }: ProjectModulePanelProps) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose, open]);

  return (
    <AnimatePresence>
      {open && project ? (
        <>
          <motion.button
            type="button"
            aria-label="Fechar modulo do projeto"
            onClick={onClose}
            className="fixed inset-0 z-[70] bg-black/45 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.aside
            className="fixed inset-x-3 bottom-3 top-20 z-[80] flex w-auto flex-col overflow-y-auto rounded-[1.5rem] border border-cyan-300/12 bg-[#06101f]/96 p-4 shadow-[0_20px_100px_rgba(0,0,0,0.64)] backdrop-blur-xl sm:inset-y-4 sm:right-4 sm:left-auto sm:w-[min(92vw,470px)] sm:rounded-[1.8rem] sm:p-6"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 48 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="panel-label">MODULO OPERACIONAL</p>
                <h3 className="section-title mt-3 text-2xl font-semibold text-white">
                  {project.name}
                </h3>
                <p className="mt-3 font-mono text-xs uppercase tracking-[0.22em] text-cyan-100/78">
                  STATUS :: {project.status}
                </p>
              </div>
              <button type="button" onClick={onClose} className="hud-close-button">
                <X size={16} />
              </button>
            </div>

            <div className="reading-surface mt-4 rounded-[1.4rem] p-4">
              <p className="panel-label">CATEGORIA</p>
              <p className="data-copy mt-2 text-sm text-white">{project.category}</p>
              <p className="critical-copy mt-3 text-sm sm:text-[0.97rem]">{project.short}</p>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="hud-chip">
                <p className="panel-label text-[0.58rem]">STACK</p>
                <p className="critical-copy mt-2 break-words text-sm">{project.stack.join(" / ")}</p>
              </div>
              <div className="hud-chip">
                <p className="panel-label text-[0.58rem]">ATIVIDADE</p>
                <p className="data-copy mt-2 text-sm text-white">{project.activity}</p>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="hud-chip hud-indicator">
                <p className="panel-label text-[0.56rem]">MODO</p>
                <p className="data-copy mt-2 text-sm text-white">{project.mode}</p>
              </div>
              <div className="hud-chip hud-indicator">
                <p className="panel-label text-[0.56rem]">DEPLOY</p>
                <p className="data-copy mt-2 text-sm text-white">{project.deploy}</p>
              </div>
              <div className="hud-chip hud-indicator">
                <p className="panel-label text-[0.56rem]">UPTIME</p>
                <p className="data-copy mt-2 text-sm text-white">{project.uptime}</p>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="hud-chip">
                <p className="panel-label text-[0.58rem]">STATUS</p>
                <p className="data-copy mt-2 text-sm text-white">{project.status}</p>
              </div>
              <div className="hud-chip">
                <p className="panel-label text-[0.58rem]">IA</p>
                <p className="data-copy mt-2 text-sm text-white">{project.intelligence}</p>
              </div>
            </div>

            <div className="reading-surface mt-5 rounded-[1.4rem] p-4">
              <p className="panel-label">DESCRICAO</p>
              <p className="critical-copy mt-3 text-sm sm:text-[0.97rem]">{project.description}</p>
            </div>

            <div className="mt-5 grid gap-3">
              <div className="reading-surface rounded-[1.4rem] p-4">
                <p className="panel-label">PROBLEMA RESOLVIDO</p>
                <p className="critical-copy mt-3 text-sm sm:text-[0.97rem]">{project.problem}</p>
              </div>

              <div className="reading-surface rounded-[1.4rem] border border-emerald-300/10 bg-emerald-950/10 p-4">
                <p className="panel-label text-emerald-200/70">IMPACTO</p>
                <p className="critical-copy mt-3 text-sm text-slate-100 sm:text-[0.97rem]">{project.impact}</p>
              </div>
            </div>

            <div className="mt-5 rounded-[1.4rem] border border-cyan-300/10 bg-black/20 p-4">
              <div className="mb-4 flex items-center justify-between gap-3">
                <p className="panel-label">INDICADORES</p>
                <p className="font-mono text-[0.64rem] uppercase tracking-[0.22em] text-cyan-100/72">
                  {project.tracking}
                </p>
              </div>
              <div className="space-y-3">
                {project.indicators.map((indicator) => (
                  <div key={indicator.label}>
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <p className="panel-label text-[0.54rem]">{indicator.label}</p>
                      <p className="font-mono text-xs tracking-[0.14em] text-white">{indicator.value}</p>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full border border-cyan-300/10 bg-cyan-950/20">
                      <div
                        className="h-full rounded-full bg-[linear-gradient(90deg,rgba(34,211,238,0.9),rgba(110,231,183,0.9))]"
                        style={{ width: `${indicator.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-[1.4rem] border border-emerald-300/10 bg-emerald-950/10 p-4">
              <p className="panel-label text-emerald-200/70">LOGS DO MODULO</p>
              <div className="mt-3 space-y-2 font-mono text-xs uppercase tracking-[0.18em] text-emerald-100/88 sm:tracking-[0.22em]">
                {project.logs.map((log) => (
                  <p key={log} className="break-words">
                    {log}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-auto grid gap-3 pt-6">
              <div className="grid gap-3 sm:grid-cols-2">
                <a href={project.liveUrl} className="hud-button flex-1 justify-center" target="_blank" rel="noreferrer noopener">
                  <ExternalLink size={16} />
                  <span>Abrir Modulo</span>
                </a>
                <a
                  href={project.githubUrl}
                  className="hud-button hud-button-secondary flex-1 justify-center"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
              </div>

              <div className="grid gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noreferrer noopener" : undefined}
                    className="hud-chip flex items-center justify-between gap-3 text-sm text-slate-100"
                  >
                    <span className="panel-label text-[0.52rem]">LINK</span>
                    <span className="truncate text-right text-white">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}
