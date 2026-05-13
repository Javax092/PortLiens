"use client";

import { ArrowUpRight, BriefcaseBusiness, FolderOpenDot, Github, Wrench } from "lucide-react";
import { motion } from "@/components/motion-wrapper";
import { projects, type AudienceMode } from "@/data/site";

const statusClasses: Record<string, string> = {
  "EM PRODUCAO": "border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
  "EM DESENVOLVIMENTO": "border-amber-400/20 bg-amber-400/10 text-amber-200",
  ONLINE: "border-cyan-400/20 bg-cyan-400/10 text-cyan-100",
  PROTOTIPO: "border-violet-400/20 bg-violet-400/10 text-violet-200",
};

type ProjectsSectionProps = {
  audienceMode: AudienceMode;
  onOpenProject: (projectId: string) => void;
};

export function ProjectsSection({ audienceMode, onOpenProject }: ProjectsSectionProps) {
  return (
    <section id="projects" className="hud-panel overflow-hidden p-4 sm:p-6 xl:p-7">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.08),transparent_30%)]" />

      <div className="relative space-y-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="content-shield max-w-3xl">
            <div className="flex items-center gap-2 text-cyan-200">
              <FolderOpenDot size={16} />
              <p className="panel-label">PROVAS DE EXECUCAO</p>
            </div>
            <h2 className="section-title mt-3 text-2xl font-semibold text-white sm:text-3xl">
              Sistemas com problema claro, operacao real e deploy visivel.
            </h2>
            <p className="body-copy mt-3 max-w-2xl text-sm sm:text-base">
              {audienceMode === "recruiter"
                ? "Leitura orientada para arquitetura, ownership e consistencia de manutencao."
                : "Leitura orientada para impacto, automacao e experiencia pronta para uso."}
            </p>
          </div>

          <div className="hud-chip max-w-full lg:max-w-[360px]">
            <p className="panel-label">FILTRO ATIVO</p>
            <p className="data-copy mt-2 text-sm text-white">
              {audienceMode === "recruiter" ? "MODO RECRUTADOR" : "MODO CLIENTE"}
            </p>
          </div>
        </div>

        <div className="grid gap-4 xl:grid-cols-2">
          {projects.map((project, index) => {
            const modeSummary =
              audienceMode === "recruiter" ? project.recruiterSummary : project.clientSummary;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="reading-surface project-card relative overflow-hidden rounded-[1.35rem] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.4)] sm:rounded-[1.5rem] sm:p-5"
              >
                <div className="project-card-grid" />

                <div className="relative">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="content-shield min-w-0">
                      <div className="mb-3 flex flex-wrap gap-2">
                        <span className="tech-label">problema</span>
                        <span className="tech-label">stack</span>
                        <span className="tech-label">deploy</span>
                      </div>
                      <span
                        className={`inline-flex rounded-full border px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.24em] ${
                          statusClasses[project.status]
                        }`}
                      >
                        {project.status}
                      </span>
                      <h3 className="section-title mt-4 text-[1.35rem] font-semibold leading-tight text-white sm:text-[1.9rem]">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm text-cyan-100/84 sm:text-[0.96rem]">{project.category}</p>
                    </div>

                    <button
                      type="button"
                      onClick={() => onOpenProject(project.id)}
                      className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-2xl border border-cyan-300/14 bg-cyan-400/[0.08] p-3 text-cyan-100 transition hover:-translate-y-0.5 hover:bg-cyan-400/[0.12]"
                      aria-label={`Abrir detalhes de ${project.title}`}
                    >
                      <ArrowUpRight size={20} />
                    </button>
                  </div>

                  <div className="mt-5 grid gap-3 lg:grid-cols-2">
                    <div className="hud-chip">
                      <div className="flex items-center gap-2 text-cyan-100">
                        <BriefcaseBusiness size={14} />
                        <p className="panel-label text-[0.56rem]">PROBLEMA RESOLVIDO</p>
                      </div>
                      <p className="critical-copy mt-3 text-sm sm:text-[0.97rem]">{project.problem}</p>
                    </div>

                    <div className="hud-chip">
                      <div className="flex items-center gap-2 text-cyan-100">
                        <Wrench size={14} />
                        <p className="panel-label text-[0.56rem]">IMPACTO</p>
                      </div>
                      <p className="critical-copy mt-3 text-sm sm:text-[0.97rem]">{project.impact}</p>
                    </div>
                  </div>

                  <div className="reading-surface mt-4 rounded-[1.25rem] p-4">
                    <p className="panel-label text-[0.56rem]">
                      {audienceMode === "recruiter" ? "LEITURA PARA RECRUTADOR" : "LEITURA PARA CLIENTE"}
                    </p>
                    <p className="critical-copy mt-3 text-sm sm:text-[0.97rem]">{modeSummary}</p>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    <div className="hud-chip hud-indicator">
                      <p className="panel-label text-[0.56rem]">STATUS</p>
                      <p className="data-copy mt-2 text-sm text-white">{project.status}</p>
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

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <button
                      type="button"
                      onClick={() => onOpenProject(project.id)}
                      className="hud-button min-h-12 justify-center sm:flex-1"
                    >
                      Ver caso completo
                    </button>

                    {project.links.map((link) => {
                      const isGithub = link.label.toLowerCase().includes("github");

                      return (
                        <a
                          key={link.label}
                          href={link.href}
                          target={link.external ? "_blank" : undefined}
                          rel={link.external ? "noreferrer noopener" : undefined}
                          className="hud-button hud-button-secondary min-h-12 justify-center sm:flex-1"
                        >
                          {isGithub ? <Github size={16} /> : <ArrowUpRight size={16} />}
                          <span>{link.label}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
