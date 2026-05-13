"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, ChevronRight, Send } from "lucide-react";
import { motion, useReducedMotion } from "@/components/motion-wrapper";
import { terminalCommandMap, terminalIntro } from "@/data/site";

type TerminalLine = {
  id: string;
  text: string;
  isCommand?: boolean;
};

const introQueue = [
  "AUTENTICANDO OPERADOR...",
  "VINCULANDO INTERFACE DA CENTRAL...",
  ...terminalIntro,
];

export function InteractiveTerminal() {
  const reduceMotion = useReducedMotion();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [input, setInput] = useState("");
  const [bootTime, setBootTime] = useState("SINCRONIZANDO");
  const [collapsed, setCollapsed] = useState(true);
  const [lines, setLines] = useState<TerminalLine[]>([
    { id: "boot", text: "ryan@systems:~$ boot", isCommand: true },
  ]);

  useEffect(() => {
    let cancelled = false;

    introQueue.forEach((text, index) => {
      window.setTimeout(() => {
        if (cancelled) {
          return;
        }

        setLines((current) => [...current, { id: `intro-${index}`, text }]);
      }, reduceMotion ? index * 40 : index * 220);
    });

    return () => {
      cancelled = true;
    };
  }, [reduceMotion]);

  useEffect(() => {
    const container = scrollRef.current;

    if (!container) {
      return;
    }

    container.scrollTop = container.scrollHeight;
  }, [lines]);

  useEffect(() => {
    const formatted = new Date().toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    setBootTime(formatted);
  }, []);

  const commandNames = useMemo(() => Object.keys(terminalCommandMap), []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const command = input.trim().toLowerCase();

    if (!command) {
      return;
    }

    if (command === "clear") {
      setLines([{ id: `clear-${Date.now()}`, text: "ryan@systems:~$ clear", isCommand: true }]);
      setInput("");
      return;
    }

    const output = terminalCommandMap[command as keyof typeof terminalCommandMap] ?? [
      "COMANDO DESCONHECIDO",
      "USE `HELP`",
    ];

    const nextLines: TerminalLine[] = [
      { id: `cmd-${Date.now()}`, text: `ryan@systems:~$ ${command}`, isCommand: true },
      ...output.map((text, index) => ({
        id: `out-${command}-${Date.now()}-${index}`,
        text,
      })),
    ];

    setLines((current) => [...current.slice(-18), ...nextLines]);
    setInput("");
  };

  return (
    <section id="terminal" className="hud-panel p-4 sm:p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="panel-label">TERMINAL INTERATIVO</p>
          <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">Deck de Comando</h3>
          <p className="mt-2 max-w-md text-sm leading-6 text-slate-300 md:hidden">
            Versao compacta no mobile para leitura rapida e uso direto.
          </p>
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <span className="status-dot" />
          <p className="panel-label">ENTRADA AO VIVO</p>
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <div className="hud-chip hud-indicator">
          <p className="panel-label text-[0.56rem]">SESSAO</p>
          <p className="mt-2 text-sm tracking-[0.18em] text-white">RS-07</p>
        </div>
        <div className="hud-chip hud-indicator">
          <p className="panel-label text-[0.56rem]">BOOT</p>
          <p className="mt-2 text-sm tracking-[0.18em] text-white">{bootTime}</p>
        </div>
        <div className="hud-chip hud-indicator">
          <p className="panel-label text-[0.56rem]">MODO</p>
          <p className="mt-2 text-sm tracking-[0.18em] text-white">SHELL OPERACIONAL</p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setCollapsed((current) => !current)}
        className="mt-4 flex min-h-12 w-full items-center justify-between rounded-[1.15rem] border border-cyan-300/12 bg-cyan-400/[0.06] px-4 py-3 text-left text-white transition md:hidden"
        aria-expanded={!collapsed}
        aria-controls="terminal-body"
      >
        <div>
          <p className="panel-label text-[0.54rem]">MODO MOBILE</p>
          <p className="mt-1 text-sm tracking-[0.16em] text-white">
            {collapsed ? "Abrir terminal compacto" : "Fechar terminal"}
          </p>
        </div>
        <ChevronDown
          size={18}
          className={`transition ${collapsed ? "" : "rotate-180"}`}
        />
      </button>

      <div
        id="terminal-body"
        className={`${collapsed ? "hidden md:block" : "block"} mt-4`}
      >
      <div ref={scrollRef} className="terminal-shell h-[280px] overflow-y-auto rounded-[1.35rem] p-3.5 sm:h-[390px] sm:rounded-[1.5rem] sm:p-5">
        <div className="terminal-header">
          <div className="flex items-center gap-2">
            <span className="terminal-led bg-[#ff6b6b]" />
            <span className="terminal-led bg-[#ffd166]" />
            <span className="terminal-led bg-[#62d26f]" />
          </div>
          <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-slate-500">
            shell://ryan-systems/deck
          </div>
        </div>
        <div className="space-y-2 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-cyan-100 sm:text-sm sm:tracking-[0.22em]">
          {lines.map((line, index) => (
            <motion.p
              key={line.id}
              initial={reduceMotion ? undefined : { opacity: 0, y: 8 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.24, delay: reduceMotion ? 0 : index * 0.01 }}
              className={`terminal-line ${line.isCommand ? "text-white" : "text-cyan-100/88"}`}
            >
              {line.isCommand ? <ChevronRight size={12} className="mt-[0.1rem] shrink-0 text-cyan-300/90" /> : null}
              {line.text}
            </motion.p>
          ))}
          <div className="flex items-center gap-2 text-cyan-200">
            <span>ryan@systems:~$</span>
            <span className="terminal-caret" />
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-4 flex gap-3">
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder={`help | hire | ${commandNames.slice(1, 3).join(" | ")}`}
          className="min-w-0 flex-1 rounded-[1.1rem] border border-cyan-300/12 bg-black/20 px-4 py-3 font-mono text-sm uppercase tracking-[0.14em] text-white outline-none transition focus:border-cyan-300/40 focus:bg-cyan-950/20"
        />
        <button type="submit" className="hud-button min-h-12 min-w-[56px] justify-center px-0">
          <Send size={16} />
        </button>
      </form>
      </div>
    </section>
  );
}
