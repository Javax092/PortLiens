export function HolographicGrid() {
  return (
    <>
      <div className="absolute inset-0 opacity-25 [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]">
        <div className="h-full w-full bg-[linear-gradient(rgba(155,232,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(155,232,255,0.08)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>
      <div className="absolute inset-x-0 top-[18%] h-px bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent" />
      <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-400/15 to-transparent" />
    </>
  );
}
