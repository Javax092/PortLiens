"use client";

import { ExternalLink, Github } from "lucide-react";
import { motion } from "@/components/motion-wrapper";
import { missionNodes } from "@/data/site";

export type MissionNode = (typeof missionNodes)[number];

type OrbitalMapProps = {
  activeMissionId: MissionNode["id"];
  onSelect: (id: MissionNode["id"]) => void;
};

const accentMap = {
  cyan: "var(--accent-cyan)",
  amber: "var(--accent-amber)",
  emerald: "var(--accent-emerald)",
  violet: "var(--accent-violet)",
} as const;

export function OrbitalMap({ activeMissionId, onSelect }: OrbitalMapProps) {
  const activeMission =
    missionNodes.find((mission) => mission.id === activeMissionId) ?? missionNodes[0];

  return (
    <section
      id="map"
      className="glass-panel relative grid min-h-[720px] gap-5 overflow-hidden p-4 md:p-6 xl:grid-cols-[minmax(0,1fr)_360px]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(34,211,238,0.08),transparent_28%),radial-gradient(circle_at_75%_65%,rgba(151,71,255,0.1),transparent_28%)]" />
      <div className="relative overflow-hidden rounded-[1.6rem] border border-cyan-400/10 bg-black/20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(143,244,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(143,244,255,0.06)_1px,transparent_1px)] bg-[size:42px_42px]" />
        <div className="absolute inset-[8%] rounded-full border border-cyan-400/10" />
        <div className="absolute inset-[18%] rounded-full border border-cyan-400/10" />
        <div className="absolute inset-[32%] rounded-full border border-cyan-400/10" />

        <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
          {missionNodes.map((mission, index) => {
            const next = missionNodes[(index + 1) % missionNodes.length];
            return (
              <line
                key={`${mission.id}-${next.id}`}
                x1={`${mission.x}%`}
                y1={`${mission.y}%`}
                x2={`${next.x}%`}
                y2={`${next.y}%`}
                stroke="rgba(125,211,252,0.14)"
                strokeDasharray="8 10"
              />
            );
          })}
        </svg>

        {missionNodes.map((mission, index) => {
          const active = mission.id === activeMissionId;

          return (
            <motion.button
              key={mission.id}
              type="button"
              className="mission-node"
              style={{ left: `${mission.x}%`, top: `${mission.y}%` }}
              onClick={() => onSelect(mission.id)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: active ? 1.05 : 1 }}
              transition={{ delay: 0.18 + index * 0.1, duration: 0.5 }}
            >
              <span
                className={`mission-node-ring ${active ? "mission-node-ring-active" : ""}`}
                style={{ boxShadow: `0 0 24px ${accentMap[mission.accent]}` }}
              />
              <span
                className="mission-node-core"
                style={{
                  background: accentMap[mission.accent],
                  boxShadow: `0 0 24px ${accentMap[mission.accent]}`,
                }}
              />
              <span className="mission-node-copy">
                <span className="panel-label">{mission.code}</span>
                <span className="mt-1 block text-sm font-semibold text-white">{mission.title}</span>
              </span>
            </motion.button>
          );
        })}

        <div className="absolute bottom-4 left-4 right-4 grid gap-2 md:grid-cols-3">
          <div className="micro-panel px-3 py-2">
            <p className="panel-label">ORBITAL MAP</p>
            <p className="mt-1 text-sm text-cyan-100">PROJECT NODES</p>
          </div>
          <div className="micro-panel px-3 py-2">
            <p className="panel-label">INTERACTION</p>
            <p className="mt-1 text-sm text-cyan-100">SELECT A TRANSMISSION</p>
          </div>
          <div className="micro-panel px-3 py-2">
            <p className="panel-label">STATE</p>
            <p className="mt-1 text-sm text-cyan-100">HUD LINKED</p>
          </div>
        </div>
      </div>

      <aside className="relative">
        <div className="panel-module h-full min-h-[420px] p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="panel-label">{activeMission.code}</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{activeMission.title}</h3>
            </div>
            <span className="rounded-full border border-cyan-400/20 px-3 py-1 font-mono text-xs tracking-[0.25em] text-cyan-200">
              {activeMission.status}
            </span>
          </div>

          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
            {activeMission.description}
          </p>

          <div className="mt-6">
            <div className="flex items-center justify-between">
              <p className="panel-label">ENERGY OUTPUT</p>
              <p className="font-mono text-xs text-cyan-100">{activeMission.energy}%</p>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-cyan-950/60">
              <motion.div
                className="h-full rounded-full bg-[linear-gradient(90deg,rgba(34,211,238,0.95),rgba(151,71,255,0.95))]"
                animate={{ width: `${activeMission.energy}%` }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {activeMission.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs tracking-[0.18em] text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-6 grid gap-3">
            <a
              href={activeMission.links.live}
              target="_blank"
              rel="noreferrer noopener"
              className="module-link"
            >
              <span>OPEN CHANNEL</span>
              <ExternalLink size={16} />
            </a>
            <a
              href={activeMission.links.repo}
              target="_blank"
              rel="noreferrer noopener"
              className="module-link"
            >
              <span>VIEW REPOSITORY</span>
              <Github size={16} />
            </a>
          </div>

          <div className="mt-8 rounded-[1.4rem] border border-cyan-400/10 bg-cyan-400/5 p-4">
            <p className="panel-label">HOLOGRAPHIC FEED</p>
            <div className="mt-4 grid grid-cols-6 gap-2">
              {Array.from({ length: 24 }, (_, index) => (
                <motion.span
                  key={index}
                  className="h-8 rounded-full bg-cyan-300/15"
                  animate={{ opacity: [0.18, 0.78, 0.18], scaleY: [0.85, 1.05, 0.85] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 2.8,
                    delay: index * 0.05,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
}
