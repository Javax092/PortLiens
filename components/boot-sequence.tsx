"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "@/components/motion-wrapper";
import { bootSequence } from "@/data/site";

type BootSequenceProps = {
  onComplete: () => void;
};

export function BootSequence({ onComplete }: BootSequenceProps) {
  const reduceMotion = useReducedMotion();
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(max-width: 639px)").matches) {
      onComplete();
      return;
    }
  }, [onComplete]);

  useEffect(() => {
    if (lineIndex >= bootSequence.length) {
      const timer = window.setTimeout(onComplete, reduceMotion ? 180 : 900);
      return () => window.clearTimeout(timer);
    }

    const currentLine = bootSequence[lineIndex];

    if (charIndex < currentLine.length) {
      const timer = window.setTimeout(
        () => setCharIndex((value) => value + 1),
        reduceMotion ? 12 : 28,
      );
      return () => window.clearTimeout(timer);
    }

    const timer = window.setTimeout(() => {
      setLineIndex((value) => value + 1);
      setCharIndex(0);
    }, reduceMotion ? 70 : 260);

    return () => window.clearTimeout(timer);
  }, [charIndex, lineIndex, onComplete, reduceMotion]);

  const renderedLines = bootSequence.slice(0, lineIndex);
  const activeLine = lineIndex < bootSequence.length ? bootSequence[lineIndex] : "";
  const progress = Math.min(
    ((lineIndex + charIndex / Math.max(activeLine.length, 1)) / bootSequence.length) * 100,
    100,
  );

  return (
    <motion.div
      className="fixed inset-0 z-[120] flex items-center justify-center overflow-hidden bg-[#01030a]"
      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.03, filter: "blur(8px)" }}
      transition={{ duration: reduceMotion ? 0.22 : 0.85, ease: "easeInOut" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_80%_15%,rgba(90,66,255,0.14),transparent_24%),linear-gradient(180deg,#01030a_0%,#020616_48%,#01030a_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(90,189,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(90,189,255,0.05)_1px,transparent_1px)] bg-[size:36px_36px] opacity-35" />
      <div className="scanlines absolute inset-0 opacity-30" />

      <div className="hud-panel relative w-[min(92vw,760px)] p-6 sm:p-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="panel-label">SEQUENCIA DE INICIALIZACAO</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[0.18em] text-white sm:text-3xl">
              RYAN SYSTEMS
            </h2>
          </div>
          <p className="panel-label text-right">SETOR 07-RL</p>
        </div>

        <div className="mt-8 space-y-3 font-mono text-xs uppercase tracking-[0.28em] text-cyan-100 sm:text-sm">
          {renderedLines.map((line) => (
            <div key={line} className="flex items-center gap-3">
              <span className="text-cyan-300">/</span>
              <span>{line}</span>
            </div>
          ))}

          {lineIndex < bootSequence.length && (
            <div className="flex items-center gap-3 text-white">
              <span className="text-cyan-300">/</span>
              <span>{activeLine.slice(0, charIndex)}</span>
              <span className="terminal-caret" />
            </div>
          )}
        </div>

        <div className="mt-8">
          <div className="h-2 overflow-hidden rounded-full border border-cyan-400/15 bg-cyan-950/30">
            <motion.div
              className="h-full rounded-full bg-[linear-gradient(90deg,rgba(34,211,238,1),rgba(87,177,255,0.9),rgba(90,255,205,0.9))]"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.18, ease: "linear" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
