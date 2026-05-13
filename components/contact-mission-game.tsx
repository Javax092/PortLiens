"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  Download,
  FileText,
  Github,
  Linkedin,
  Lock,
  Mail,
  MessageCircleMore,
  Radar,
  Shield,
  Signal,
  Wifi,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "@/components/motion-wrapper";
import {
  contactMissionChannels,
  externalLinks,
  isExternalHref,
  type ContactMissionChannel,
} from "@/data/site";

type MissionStatus =
  | "AGUARDANDO CANAL"
  | "ESTABILIZANDO SINAL"
  | "CANAL DESBLOQUEADO"
  | "COMUNICACAO ESTABELECIDA"
  | "MISSAO COMPLETA";

const nodePositions: Record<ContactMissionChannel["id"], string> = {
  whatsapp: "left-[10%] top-[18%]",
  email: "right-[11%] top-[16%]",
  github: "left-[18%] bottom-[16%]",
  linkedin: "right-[18%] bottom-[14%]",
  cv: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
};

const nodeIcons = {
  whatsapp: MessageCircleMore,
  email: Mail,
  github: Github,
  linkedin: Linkedin,
  cv: FileText,
} satisfies Record<ContactMissionChannel["id"], typeof MessageCircleMore>;

const technicalStatuses: Array<{
  label: string;
  value: string;
  icon: LucideIcon;
}> = [
  { label: "SINAL", value: "ESTAVEL", icon: Wifi },
  { label: "CRIPTOGRAFIA", value: "ATIVA", icon: Lock },
  { label: "CANAL", value: "SEGURO", icon: Shield },
  { label: "COMUNICACAO", value: "PRONTA", icon: ArrowUpRight },
];

export function ContactMissionGame() {
  const reduceMotion = useReducedMotion();
  const [selectedChannel, setSelectedChannel] = useState<ContactMissionChannel["id"]>(
    contactMissionChannels[0].id,
  );
  const [signalProgress, setSignalProgress] = useState(0);
  const [unlockedChannels, setUnlockedChannels] = useState<ContactMissionChannel["id"][]>([]);
  const [missionStatus, setMissionStatus] = useState<MissionStatus>("AGUARDANDO CANAL");

  const activeChannel = useMemo(
    () =>
      contactMissionChannels.find((channel) => channel.id === selectedChannel) ??
      contactMissionChannels[0],
    [selectedChannel],
  );

  const isActiveUnlocked = unlockedChannels.includes(activeChannel.id);
  const allChannelsUnlocked = unlockedChannels.length === contactMissionChannels.length;

  useEffect(() => {
    if (!activeChannel) {
      return;
    }

    if (unlockedChannels.includes(activeChannel.id)) {
      setSignalProgress(100);
      setMissionStatus(
        allChannelsUnlocked
          ? "MISSAO COMPLETA"
          : unlockedChannels.length >= 3
            ? "COMUNICACAO ESTABELECIDA"
            : "CANAL DESBLOQUEADO",
      );
      return;
    }

    setSignalProgress(0);
    setMissionStatus("ESTABILIZANDO SINAL");

    const interval = window.setInterval(() => {
      setSignalProgress((current) => {
        const nextProgress = Math.min(current + 5, 100);

        if (nextProgress >= 100) {
          window.clearInterval(interval);
          setUnlockedChannels((currentChannels) => {
            if (currentChannels.includes(activeChannel.id)) {
              return currentChannels;
            }

            const nextChannels = [...currentChannels, activeChannel.id];
            const isMissionComplete = nextChannels.length === contactMissionChannels.length;

            setMissionStatus(
              isMissionComplete
                ? "MISSAO COMPLETA"
                : nextChannels.length >= 3
                  ? "COMUNICACAO ESTABELECIDA"
                  : "CANAL DESBLOQUEADO",
            );

            return nextChannels;
          });
        }

        return nextProgress;
      });
    }, 55);

    return () => window.clearInterval(interval);
  }, [activeChannel, allChannelsUnlocked, unlockedChannels]);

  return (
    <section id="contato" className="hud-panel relative overflow-hidden p-4 sm:p-6 xl:p-7">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(34,211,238,0.12),transparent_24%),radial-gradient(circle_at_82%_68%,rgba(59,130,246,0.12),transparent_28%),linear-gradient(180deg,rgba(7,15,28,0),rgba(2,6,23,0.4))]" />
      <motion.div
        className="pointer-events-none absolute inset-y-0 left-[-35%] hidden w-[38%] bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.12),transparent)] md:block"
        animate={reduceMotion ? undefined : { x: ["0%", "360%"] }}
        transition={{ duration: 3.8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      <div className="relative">
        <div className="flex flex-col gap-3 border-b border-white/8 pb-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="content-shield max-w-2xl">
            <p className="panel-label">MISSAO: ABRIR COMUNICACAO</p>
            <h3 className="section-title mt-2 text-2xl font-semibold text-white sm:text-3xl">
              MISSAO: ABRIR COMUNICACAO
            </h3>
            <p className="body-copy mt-3 text-sm sm:text-base">
              Selecione um canal, estabilize o sinal e inicie contato.
            </p>
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            <div className="hud-chip min-w-0">
              <p className="panel-label text-[0.56rem]">CANAIS DESBLOQUEADOS</p>
              <p className="mt-2 font-mono text-sm tracking-[0.2em] text-white">
                {unlockedChannels.length}/5
              </p>
            </div>
            <div className="hud-chip min-w-0">
              <p className="panel-label text-[0.56rem]">STATUS DA MISSAO</p>
              <p className="mt-2 font-mono text-sm tracking-[0.2em] text-cyan-100">
                {missionStatus}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-4 xl:grid-cols-[minmax(0,1.2fr)_360px]">
          <div className="grid gap-3 md:hidden">
            {contactMissionChannels.map((channel) => {
              const Icon = nodeIcons[channel.id];
              const unlocked = unlockedChannels.includes(channel.id);
              const selected = selectedChannel === channel.id;

              return (
                <a
                  key={channel.id}
                  href={channel.href}
                  target={isExternalHref(channel.href) ? "_blank" : undefined}
                  rel={isExternalHref(channel.href) ? "noreferrer noopener" : undefined}
                  onClick={() => setSelectedChannel(channel.id)}
                  className={`reading-surface flex min-h-14 items-center justify-between gap-3 rounded-[1.2rem] px-4 py-3 ${
                    selected ? "border-cyan-300/28 bg-cyan-300/10" : ""
                  }`}
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cyan-300/20 bg-slate-950/80">
                      <Icon size={18} />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-xs uppercase tracking-[0.22em] text-white">
                        {channel.label}
                      </span>
                      <span className="mt-1 block break-all text-xs text-slate-400">
                        {channel.value}
                      </span>
                    </span>
                  </span>
                  <span className="tech-label shrink-0">
                    {unlocked ? "online" : "direto"}
                  </span>
                </a>
              );
            })}
          </div>

          <div className="reading-surface rounded-[1.7rem] p-4 sm:p-5">
            <div className="grid gap-4 lg:grid-cols-[minmax(0,1.15fr)_320px]">
              <div className="rounded-[1.4rem] border border-cyan-300/10 bg-black/20 p-3 sm:p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="panel-label">MAPA DE TRANSMISSAO</p>
                  <div className="tech-label gap-2">
                    <Radar size={12} />
                    <span>HUD GRID</span>
                  </div>
                </div>

                <div className="mt-4 hidden min-h-[360px] rounded-[1.5rem] border border-cyan-300/10 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_34%),linear-gradient(180deg,rgba(4,9,19,0.96),rgba(2,6,17,0.9))] p-4 md:block">
                  <div className="relative h-full overflow-hidden rounded-[1.25rem] border border-white/6 bg-[linear-gradient(180deg,rgba(3,7,18,0.78),rgba(3,7,18,0.54))]">
                    <div className="absolute inset-[12%] rounded-full border border-cyan-300/10" />
                    <div className="absolute inset-[24%] rounded-full border border-cyan-300/10" />
                    <div className="absolute inset-[36%] rounded-full border border-cyan-300/10" />
                    <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-cyan-300/10" />
                    <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-cyan-300/10" />

                    <motion.div
                      className="absolute inset-[8%] rounded-full border border-cyan-300/20"
                      animate={reduceMotion ? undefined : { scale: [0.94, 1.02, 0.94], opacity: [0.4, 0.9, 0.4] }}
                      transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    />

                    <svg
                      viewBox="0 0 100 100"
                      className="absolute inset-0 h-full w-full text-cyan-300/18"
                      aria-hidden="true"
                    >
                      <path d="M18 25 L50 50 L82 22" fill="none" stroke="currentColor" strokeWidth="1.2" />
                      <path d="M18 75 L50 50 L82 76" fill="none" stroke="currentColor" strokeWidth="1.2" />
                    </svg>

                    <motion.div
                      className="absolute inset-y-0 left-1/2 w-[2px] origin-bottom bg-gradient-to-t from-cyan-300/0 via-cyan-300/40 to-cyan-300/0"
                      animate={reduceMotion ? undefined : { rotate: [0, 360] }}
                      transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    />

                    {contactMissionChannels.map((channel) => {
                      const Icon = nodeIcons[channel.id];
                      const isSelected = selectedChannel === channel.id;
                      const isUnlocked = unlockedChannels.includes(channel.id);

                      return (
                        <motion.button
                          key={channel.id}
                          type="button"
                          onClick={() => setSelectedChannel(channel.id)}
                          className={`absolute ${nodePositions[channel.id]} flex h-20 w-20 items-center justify-center rounded-full border text-cyan-50 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 ${
                            isSelected
                              ? "border-cyan-200/60 bg-cyan-300/18 shadow-[0_0_35px_rgba(34,211,238,0.24)]"
                              : "border-cyan-300/20 bg-slate-950/80 hover:border-cyan-200/40"
                          }`}
                          whileTap={reduceMotion ? undefined : { scale: 0.96 }}
                          animate={
                            reduceMotion
                              ? undefined
                              : {
                                  scale: isSelected ? [1, 1.06, 1] : [1, 1.02, 1],
                                  boxShadow: isUnlocked
                                    ? [
                                        "0 0 0 rgba(34,211,238,0.12)",
                                        "0 0 26px rgba(34,211,238,0.28)",
                                        "0 0 0 rgba(34,211,238,0.12)",
                                      ]
                                    : undefined,
                                }
                          }
                          transition={{
                            duration: isSelected ? 1.8 : 2.4,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                          aria-pressed={isSelected}
                          aria-label={`Selecionar canal ${channel.label}`}
                        >
                          <span className="absolute inset-2 rounded-full border border-cyan-200/15" />
                          <span className="absolute -bottom-8 left-1/2 w-max -translate-x-1/2 font-mono text-[0.64rem] uppercase tracking-[0.3em] text-cyan-100">
                            {channel.label}
                          </span>
                          <Icon size={22} />
                          {isUnlocked ? (
                            <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.7)]" />
                          ) : null}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-4 hidden gap-3 md:hidden sm:grid-cols-2">
                  {contactMissionChannels.map((channel) => {
                    const Icon = nodeIcons[channel.id];
                    const isSelected = selectedChannel === channel.id;
                    const isUnlocked = unlockedChannels.includes(channel.id);

                    return (
                      <button
                        key={channel.id}
                        type="button"
                        onClick={() => setSelectedChannel(channel.id)}
                        className={`hud-chip flex items-center justify-between gap-3 border transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 ${
                          isSelected
                            ? "border-cyan-300/40 bg-cyan-300/12 text-white"
                            : "border-white/10 bg-black/20 text-slate-200"
                        }`}
                        aria-pressed={isSelected}
                      >
                        <span className="flex items-center gap-3">
                          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/20 bg-slate-950/80">
                            <Icon size={18} />
                          </span>
                          <span className="font-mono text-xs uppercase tracking-[0.24em]">
                            {channel.label}
                          </span>
                        </span>
                        <span
                          className={`h-2.5 w-2.5 rounded-full ${
                            isUnlocked ? "bg-emerald-300" : "bg-cyan-300/40"
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid gap-3">
                <div className="hud-chip overflow-hidden p-0">
                  <div className="relative px-4 py-4">
                    <motion.div
                      className="pointer-events-none absolute inset-y-0 left-[-25%] hidden w-[24%] bg-[linear-gradient(90deg,transparent,rgba(125,211,252,0.14),transparent)] md:block"
                      animate={reduceMotion ? undefined : { x: ["0%", "520%"] }}
                      transition={{ duration: 2.6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    />
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="panel-label text-[0.56rem]">CANAL ATIVO</p>
                        <p className="mt-2 text-lg font-semibold tracking-[0.12em] text-white">
                          {activeChannel.label.toUpperCase()}
                        </p>
                      </div>
                      <div className="tech-label gap-2">
                        <Signal size={12} />
                        <span>{activeChannel.protocol}</span>
                      </div>
                    </div>
                    <p className="mt-3 break-all font-mono text-xs uppercase tracking-[0.18em] text-slate-300 sm:tracking-[0.22em]">
                      {activeChannel.value}
                    </p>
                  </div>
                </div>

                <div className="hud-chip">
                  <div className="flex items-center justify-between gap-3">
                    <p className="panel-label text-[0.56rem]">ESTABILIZANDO SINAL</p>
                    <span className="font-mono text-sm tracking-[0.18em] text-cyan-100">
                      {signalProgress}%
                    </span>
                  </div>
                  <div className="mt-3 h-2.5 overflow-hidden rounded-full border border-cyan-300/14 bg-slate-950/90">
                    <motion.div
                      className="h-full rounded-full bg-[linear-gradient(90deg,rgba(34,211,238,0.55),rgba(125,211,252,0.95))]"
                      initial={{ width: "0%" }}
                      animate={{ width: `${signalProgress}%` }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                    />
                  </div>
                  <p className="mt-3 font-mono text-xs uppercase tracking-[0.24em] text-slate-400">
                    {isActiveUnlocked ? "CANAL DESBLOQUEADO" : "CALIBRANDO MATRIZ DE SINAL"}
                  </p>
                </div>

                <div className="grid gap-2 sm:grid-cols-2">
                  {technicalStatuses.map(({ label, value, icon: Icon }) => (
                    <div key={label} className="hud-chip">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="panel-label text-[0.54rem]">{label}</p>
                          <p className="mt-2 font-mono text-xs uppercase tracking-[0.24em] text-white">
                            {value}
                          </p>
                        </div>
                        <Icon size={14} className="text-cyan-100" />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="reading-surface rounded-[1.35rem] p-4">
                  <p className="panel-label text-[0.56rem]">PAINEL TATICO</p>
                  <p className="critical-copy mt-3 text-sm">
                    {missionStatus === "MISSAO COMPLETA"
                      ? "Todos os canais de comunicacao foram liberados."
                      : missionStatus === "COMUNICACAO ESTABELECIDA"
                        ? "Comunicacao estabelecida. O cockpit liberou contato prioritario."
                        : isActiveUnlocked
                          ? "Canal desbloqueado. A transmissao esta pronta para ser aberta."
                          : "Selecione um modulo orbital e aguarde a estabilizacao completa do sinal."}
                  </p>

                  <div className="mt-4 flex flex-col gap-3">
                    <a
                      href={activeChannel.href}
                      target={isExternalHref(activeChannel.href) ? "_blank" : undefined}
                      rel={isExternalHref(activeChannel.href) ? "noreferrer noopener" : undefined}
                      aria-disabled={!isActiveUnlocked}
                      className={`hud-button min-h-12 justify-center ${!isActiveUnlocked ? "pointer-events-none opacity-45" : ""}`}
                    >
                      {activeChannel.id === "cv" ? <Download size={16} /> : <ArrowUpRight size={16} />}
                      <span>{activeChannel.actionLabel}</span>
                    </a>

                    {allChannelsUnlocked ? (
                      <a
                        href={externalLinks.whatsapp}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="hud-button hud-button-secondary min-h-12 justify-center"
                      >
                        <MessageCircleMore size={16} />
                        <span>INICIAR CONTATO PRINCIPAL</span>
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-3">
            <div className="hud-chip">
              <p className="panel-label text-[0.56rem]">LOG DE CANAIS</p>
              <div className="mt-3 grid gap-2">
                {contactMissionChannels.map((channel) => {
                  const unlocked = unlockedChannels.includes(channel.id);

                  return (
                    <div
                      key={channel.id}
                      className={`flex items-center justify-between rounded-[1rem] border px-3 py-3 ${
                        unlocked
                          ? "border-emerald-300/16 bg-emerald-300/6"
                          : selectedChannel === channel.id
                            ? "border-cyan-300/18 bg-cyan-300/8"
                            : "border-white/6 bg-white/[0.02]"
                      }`}
                    >
                      <div>
                        <p className="font-mono text-xs uppercase tracking-[0.24em] text-white">
                          {channel.label}
                        </p>
                        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">
                          {channel.status}
                        </p>
                      </div>
                      <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-cyan-100">
                        {unlocked ? "ONLINE" : selectedChannel === channel.id ? "SYNC" : "LOCK"}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="hud-chip">
              <p className="panel-label text-[0.56rem]">OBJETIVO</p>
              <p className="critical-copy mt-3 text-sm">
                Desbloqueie tres ou mais canais para atingir o estado
                <span className="text-cyan-100"> COMUNICACAO ESTABELECIDA</span>.
              </p>
              <p className="mt-3 font-mono text-xs uppercase tracking-[0.22em] text-slate-400">
                PRIORIDADE: WHATSAPP, EMAIL, LINKEDIN
              </p>
            </div>

            <div className="hud-chip">
              <p className="panel-label text-[0.56rem]">STATUS FINAL</p>
              <p className="mt-3 text-sm text-slate-200">
                {allChannelsUnlocked ? "MISSAO COMPLETA" : missionStatus}
              </p>
              {allChannelsUnlocked ? (
                <p className="mt-2 text-sm text-slate-400">
                  Todos os canais de comunicacao foram liberados.
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
