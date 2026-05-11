"use client";

import { useMemo, useState } from "react";
import {
  Activity,
  Cpu,
  Crosshair,
  MessageCircleMore,
  Orbit,
  Radio,
  Waves,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "@/components/motion-wrapper";
import { AICore } from "@/components/ai-core";
import { AlienSignal } from "@/components/alien-signal";
import { BootSequence } from "@/components/boot-sequence";
import { CinematicOverlay } from "@/components/cinematic-overlay";
import { ContactMissionGame } from "@/components/contact-mission-game";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { HudPanel } from "@/components/hud-panel";
import { InteractiveTerminal } from "@/components/interactive-terminal";
import { Navbar } from "@/components/navbar";
import { OrbitalSystem } from "@/components/orbital-system";
import { ProjectModulePanel } from "@/components/project-module-panel";
import { ProjectsSection } from "@/components/projects-section";
import { RadarSystem } from "@/components/radar-system";
import { SpaceBackground } from "@/components/space-background";
import {
  audienceModes,
  externalLinks,
  hudDeck,
  projects,
  siteConfig,
  systemStatus,
  topStatus,
  type AudienceMode,
} from "@/data/site";

export default function Page() {
  const [bootComplete, setBootComplete] = useState(false);
  const [activeProjectId, setActiveProjectId] = useState(projects[0]?.id ?? "");
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  const [panelOpen, setPanelOpen] = useState(false);
  const [audienceMode, setAudienceMode] = useState<AudienceMode>("recruiter");
  const reduceMotion = useReducedMotion();

  const activeProject = useMemo(
    () => projects.find((project) => project.id === activeProjectId) ?? null,
    [activeProjectId],
  );

  const openProjectPanel = (projectId: string) => {
    setActiveProjectId(projectId);
    setPanelOpen(true);
  };

  return (
    <>
      <AnimatePresence>
        {!bootComplete && (
          <BootSequence onComplete={() => setBootComplete(true)} />
        )}
      </AnimatePresence>

      <main className="relative min-h-screen overflow-hidden bg-[#02030a] text-slate-100">
        <SpaceBackground />
        <CinematicOverlay />
        <Navbar />

        <div className="relative z-10 mx-auto flex w-full max-w-[1520px] flex-col gap-4 px-3 pb-10 pt-24 sm:px-5 sm:pt-28">
          <section
            id="core"
            className="hud-panel overflow-hidden px-4 py-5 sm:px-6 sm:py-6 xl:px-8"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_38%,rgba(34,211,238,0.08),transparent_28%),radial-gradient(circle_at_30%_18%,rgba(90,89,255,0.1),transparent_24%)]" />

            <motion.div
              className="relative grid gap-6 xl:grid-cols-[320px_minmax(0,1fr)_320px]"
              initial={
                reduceMotion ? undefined : { opacity: 0, y: 30, scale: 0.985 }
              }
              animate={
                bootComplete ? { opacity: 1, y: 0, scale: 1 } : undefined
              }
              transition={{
                delay: reduceMotion ? 0.05 : 0.16,
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              <div className="grid content-start gap-4">
                <HudPanel
                  label="SETOR RL-04"
                  value={siteConfig.name.toUpperCase()}
                  detail={siteConfig.role.toUpperCase()}
                  className="min-h-[160px]"
                >
                  <div className="mt-4 grid gap-2">
                    <div className="flex items-center justify-between border-b border-white/6 pb-2">
                      <span className="panel-label text-[0.58rem]">
                        ESPECIALIDADE
                      </span>
                      <span className="font-mono text-sm tracking-[0.12em] text-white">
                        IA • AUTOMAÇÃO • SISTEMAS
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/6 pb-2">
                      <span className="panel-label text-[0.58rem]">
                        ENTREGA
                      </span>
                      <span className="font-mono text-sm tracking-[0.12em] text-white">
                        PRODUTOS • SAAS • ARQUITETURA
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="panel-label text-[0.58rem]">SINAL</span>
                      <span className="font-mono text-sm tracking-[0.18em] text-white">
                        ESTAVEL
                      </span>
                    </div>
                  </div>
                </HudPanel>

                <HudPanel label="STATUS" value="COORDENADAS">
                  <div className="mt-4 grid gap-2">
                    {systemStatus.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between border-b border-white/6 pb-2"
                      >
                        <span className="panel-label text-[0.58rem]">
                          {item.label}
                        </span>
                        <span className="font-mono text-sm tracking-[0.18em] text-white">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </HudPanel>
              </div>

              <div className="relative">
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  {topStatus.map((item) => (
                    <div key={item.label} className="hud-chip min-w-[132px]">
                      <p className="panel-label text-[0.58rem]">{item.label}</p>
                      <p className="mt-1 text-sm tracking-[0.18em] text-white">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                <AICore />

                <div className="mt-3 grid gap-3 md:grid-cols-3">
                  {[
                    { label: "TELEMETRIA", value: "24/7", icon: Activity },
                    { label: "LATENCIA", value: "12MS", icon: Radio },
                    { label: "ORBITA", value: "TRAVADA", icon: Crosshair },
                  ].map((item) => (
                    <div key={item.label} className="hud-chip hud-indicator">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="panel-label text-[0.56rem]">
                            {item.label}
                          </p>
                          <p className="mt-2 text-sm tracking-[0.2em] text-white">
                            {item.value}
                          </p>
                        </div>
                        <item.icon size={15} className="text-cyan-100/80" />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="reading-surface mt-4 rounded-[1.5rem] p-3 sm:p-4">
                  <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                    <div className="content-shield max-w-2xl">
                      <p className="panel-label">MODO DE LEITURA</p>
                      <h2 className="section-title mt-2 text-xl font-semibold sm:text-2xl">
                        Atmosfera cinematografica, leitura de produto.
                      </h2>
                      <p className="body-copy mt-2 max-w-xl text-sm sm:text-base">
                        A mesma interface muda o enquadramento da analise: engenharia,
                        operacao, valor percebido e decisao comercial.
                      </p>
                    </div>

                    <div className="grid gap-2 sm:grid-cols-2">
                      {audienceModes.map((mode) => {
                        const active = audienceMode === mode.id;

                        return (
                          <button
                            key={mode.id}
                            type="button"
                            onClick={() => setAudienceMode(mode.id)}
                            className={`rounded-[1.1rem] border px-4 py-3 text-left transition ${
                              active
                                ? "border-cyan-300/34 bg-cyan-400/12 text-white shadow-[0_10px_35px_rgba(6,182,212,0.08)]"
                                : "border-white/10 bg-black/20 text-slate-300 hover:border-cyan-300/16 hover:text-white"
                            }`}
                          >
                            <p className="panel-label text-[0.54rem]">
                              {mode.label}
                            </p>
                            <p className="critical-copy mt-2 text-sm">
                              {mode.title}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3 xl:grid-cols-[minmax(0,1fr)_320px]">
                    <div className="reading-surface rounded-[1.2rem] p-4">
                      <p className="panel-label">
                        {
                          audienceModes.find((mode) => mode.id === audienceMode)
                            ?.readingLabel
                        }
                      </p>
                      <p className="critical-copy mt-3 text-sm sm:text-[0.98rem]">
                        {
                          audienceModes.find((mode) => mode.id === audienceMode)
                            ?.description
                        }
                      </p>
                    </div>

                    <div className="grid gap-2">
                      {audienceModes
                        .find((mode) => mode.id === audienceMode)
                        ?.focus.map((item) => (
                          <div key={item} className="hud-chip">
                            <p className="panel-label text-[0.54rem]">FOCO</p>
                            <p className="data-copy mt-2 text-sm text-white">
                              {item}
                            </p>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>

                <div className="mt-2 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  {hudDeck.map((item, index) => (
                    <motion.div
                      key={item.code}
                      className="hud-panel-small"
                      initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
                      animate={bootComplete ? { opacity: 1, y: 0 } : undefined}
                      transition={{
                        delay: 0.35 + index * 0.08,
                        duration: 0.45,
                      }}
                      whileHover={
                        reduceMotion ? undefined : { y: -5, scale: 1.01 }
                      }
                    >
                      <p className="panel-label">{item.code}</p>
                      <p className="data-copy mt-3 text-sm font-semibold text-white">
                        {item.title}
                      </p>
                      <p className="critical-copy mt-2 text-sm leading-6">
                        {item.detail}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="grid content-start gap-4">
                <HudPanel label="RASTRO EXTERNO" value="SINAL DESCONHECIDO">
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center gap-3 text-cyan-100">
                      <Radio size={14} />
                      <span className="font-mono text-xs uppercase tracking-[0.24em]">
                        RASTRO ESTAVEL
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-cyan-100">
                      <Crosshair size={14} />
                      <span className="font-mono text-xs uppercase tracking-[0.24em]">
                        ORIGEM NAO MAPEADA
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-cyan-100">
                      <Waves size={14} />
                      <span className="font-mono text-xs uppercase tracking-[0.24em]">
                        TRAVA 7.83 THZ
                      </span>
                    </div>
                  </div>
                </HudPanel>

                <HudPanel label="CABINE" value="RADAR ORBITAL">
                  <div className="mt-4 flex justify-center">
                    <RadarSystem
                      projects={projects}
                      activeId={activeProjectId}
                      hoveredId={hoveredProjectId}
                      onSelect={openProjectPanel}
                    />
                  </div>
                </HudPanel>
              </div>
            </motion.div>
          </section>

          <div className="grid gap-4 xl:grid-cols-[minmax(0,1.3fr)_420px]">
            <OrbitalSystem
              projects={projects}
              activeId={activeProjectId}
              hoveredId={hoveredProjectId}
              onHover={setHoveredProjectId}
              onSelect={openProjectPanel}
            />

            <div className="grid gap-4">
              <HudPanel label="MISSAO" value="PILHA OPERACIONAL">
                <div className="mt-4 grid gap-3">
                  <div className="hud-chip">
                    <div className="flex items-center gap-3">
                      <Cpu size={14} className="text-cyan-200" />
                      <span className="font-mono text-xs uppercase tracking-[0.24em] text-white">
                        CONSTRUIR SISTEMAS REAIS
                      </span>
                    </div>
                  </div>
                  <div className="hud-chip">
                    <div className="flex items-center gap-3">
                      <Orbit size={14} className="text-cyan-200" />
                      <span className="font-mono text-xs uppercase tracking-[0.24em] text-white">
                        AUTOMATIZAR OPERACOES
                      </span>
                    </div>
                  </div>
                  <div className="hud-chip">
                    <div className="flex items-center gap-3">
                      <Radio size={14} className="text-cyan-200" />
                      <span className="font-mono text-xs uppercase tracking-[0.24em] text-white">
                        TRANSFORMAR IDEIAS EM PRODUTOS
                      </span>
                    </div>
                  </div>
                </div>
              </HudPanel>

              <InteractiveTerminal />
            </div>
          </div>

          <ProjectsSection
            audienceMode={audienceMode}
            onOpenProject={openProjectPanel}
          />

          <div className="grid gap-4 xl:grid-cols-[minmax(0,1.15fr)_360px]">
            <AlienSignal />
          </div>

          <ContactMissionGame />

          <CtaSection />
        </div>

        <ProjectModulePanel
          project={activeProject}
          open={panelOpen}
          onClose={() => setPanelOpen(false)}
        />
      </main>

      <a
        href={externalLinks.whatsapp}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-4 right-4 z-[60] inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-400/15 px-4 py-3 text-sm font-medium text-emerald-100 shadow-[0_18px_50px_rgba(0,0,0,0.38)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-emerald-400/20 sm:bottom-5 sm:right-5"
      >
        <MessageCircleMore size={18} />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>

      <Footer />
    </>
  );
}
