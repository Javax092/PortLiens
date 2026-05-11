"use client";

import { motion, useReducedMotion } from "@/components/motion-wrapper";
import { projects, type ProjectNode } from "@/data/site";

type RadarSystemProps = {
  projects?: ProjectNode[];
  activeId?: string;
  hoveredId?: string | null;
  onSelect?: (projectId: string) => void;
  compact?: boolean;
  className?: string;
};

export function RadarSystem({
  projects: inputProjects = projects,
  activeId = projects[0]?.id ?? "",
  hoveredId = null,
  onSelect,
  compact = false,
  className = "",
}: RadarSystemProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={`radar-shell relative ${compact ? "h-40 w-40 sm:h-48 sm:w-48" : "h-[260px] w-[260px] sm:h-[320px] sm:w-[320px]"} ${className}`}
    >
      <div className="radar-ring inset-0" />
      <div className="radar-ring inset-[16%]" />
      <div className="radar-ring inset-[32%]" />
      <div className="radar-cross-x" />
      <div className="radar-cross-y" />
      <motion.div
        className="radar-sweep"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 7.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      {inputProjects.map((project) => {
        const active = project.id === activeId || project.id === hoveredId;

        return (
          <button
            key={project.id}
            type="button"
            aria-label={`Focus ${project.name}`}
            onClick={() => onSelect?.(project.id)}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${project.x}%`, top: `${project.y}%` }}
          >
            <motion.span
              className={`radar-blip ${active ? "radar-blip-active" : ""}`}
              animate={
                reduceMotion
                  ? undefined
                  : {
                      scale: active ? [1, 1.5, 1] : [0.9, 1.15, 0.9],
                      opacity: active ? [0.6, 1, 0.6] : [0.35, 0.8, 0.35],
                    }
              }
              transition={{ duration: active ? 1.2 : 2.2, repeat: Number.POSITIVE_INFINITY }}
            />
          </button>
        );
      })}
    </div>
  );
}
