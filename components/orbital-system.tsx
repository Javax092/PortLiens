"use client";

import { motion, useReducedMotion } from "@/components/motion-wrapper";
import type { ProjectNode } from "@/data/site";

type OrbitalSystemProps = {
  projects: ProjectNode[];
  activeId: string;
  hoveredId: string | null;
  onHover: (projectId: string | null) => void;
  onSelect: (projectId: string) => void;
};

export function OrbitalSystem({
  projects,
  activeId,
  hoveredId,
  onHover,
  onSelect,
}: OrbitalSystemProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section id="orbit" className="hud-panel relative overflow-hidden p-4 sm:p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.08),transparent_42%)]" />
      <div className="orbital-depth-map absolute inset-0" />
      <div className="relative flex h-full flex-col gap-5 sm:gap-6">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="panel-label">SISTEMA ORBITAL</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-[0.18em] text-white sm:text-3xl">
              MODULOS DE PROJETO
            </h3>
          </div>
          <p className="max-w-md font-mono text-xs uppercase tracking-[0.22em] text-slate-400">
            TOQUE EM UM SATELITE PARA ABRIR O MODULO OPERACIONAL
          </p>
        </div>

        <div className="grid gap-4 md:hidden">
          {projects.map((project) => {
            const active = project.id === activeId;

            return (
              <button
                key={project.id}
                type="button"
                onClick={() => onSelect(project.id)}
                className={`reading-surface rounded-[1.3rem] p-4 text-left transition ${
                  active ? "border-cyan-300/18 bg-cyan-400/[0.06]" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="panel-label text-[0.54rem]">{project.status}</p>
                    <h4 className="mt-2 text-base font-semibold tracking-[0.12em] text-white">
                      {project.name}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {project.short}
                    </p>
                  </div>
                  <span className="tech-label shrink-0">{project.category}</span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="relative hidden min-h-[420px] flex-1 overflow-hidden rounded-[1.8rem] border border-cyan-300/10 bg-black/15 md:block">
          <div className="orbital-sweep-line" />
          <div className="orbital-center" />
          <div className="orbital-ring ring-one" />
          <div className="orbital-ring ring-two" />
          <div className="orbital-ring ring-three" />

          <motion.div
            className="orbital-ufo"
            animate={reduceMotion ? undefined : { x: [-12, 10, -12], y: [0, -10, 0] }}
            transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />

          {projects.map((project, index) => {
            const active = project.id === activeId;
            const hovered = project.id === hoveredId;

            return (
              <motion.button
                key={project.id}
                type="button"
                className={`orbital-node ${active ? "orbital-node-active" : ""} ${hovered ? "orbital-node-hover" : ""}`}
                style={{ left: `${project.x}%`, top: `${project.y}%` }}
                onMouseEnter={() => onHover(project.id)}
                onMouseLeave={() => onHover(null)}
                onFocus={() => onHover(project.id)}
                onBlur={() => onHover(null)}
                onClick={() => onSelect(project.id)}
                initial={reduceMotion ? undefined : { opacity: 0, scale: 0.9 }}
                animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.45 }}
                whileHover={reduceMotion ? undefined : { scale: 1.05, y: -4 }}
              >
                <span className="orbital-node-core" />
                <span className="orbital-node-pulse" />
                <span className="orbital-node-beam" />
                <span className="orbital-node-label">{project.name}</span>
                <span className="orbital-node-status">{project.status}</span>
              </motion.button>
            );
          })}

          <div className="orbital-legend">
            <p className="panel-label">ORBITAS ATIVAS</p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {projects.map((project) => (
                <button
                  key={project.id}
                  type="button"
                  onMouseEnter={() => onHover(project.id)}
                  onMouseLeave={() => onHover(null)}
                  onClick={() => onSelect(project.id)}
                  className={`hud-chip text-left transition ${
                    activeId === project.id ? "border-cyan-300/22 bg-cyan-400/12" : ""
                  }`}
                >
                  <p className="panel-label text-[0.54rem]">{project.status}</p>
                  <p className="mt-1 text-sm tracking-[0.16em] text-white">{project.name}</p>
                  <p className="mt-1 text-[0.68rem] uppercase tracking-[0.18em] text-slate-400">
                    {project.category}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
