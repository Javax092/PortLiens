import { ReactNode } from "react";

type HudPanelProps = {
  label: string;
  value: string;
  detail?: string;
  children?: ReactNode;
  className?: string;
};

export function HudPanel({ label, value, detail, children, className = "" }: HudPanelProps) {
  return (
    <div className={`hud-panel p-4 ${className}`}>
      <p className="panel-label">{label}</p>
      <p className="mt-3 text-base font-semibold tracking-[0.2em] text-white sm:text-lg">{value}</p>
      {detail ? <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p> : null}
      {children}
    </div>
  );
}
