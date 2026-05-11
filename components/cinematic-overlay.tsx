export function CinematicOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
      <div className="depth-fog absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(2,6,23,0.12),transparent_30%),linear-gradient(180deg,rgba(2,6,23,0.12),transparent_28%,transparent_72%,rgba(2,6,23,0.18))]" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/75 to-transparent" />
      <div className="absolute left-4 top-4 h-14 w-14 border-l border-t border-cyan-300/22" />
      <div className="absolute right-4 top-4 h-14 w-14 border-r border-t border-cyan-300/22" />
      <div className="absolute bottom-4 left-4 h-14 w-14 border-b border-l border-cyan-300/22" />
      <div className="absolute bottom-4 right-4 h-14 w-14 border-b border-r border-cyan-300/22" />
    </div>
  );
}
