import { RadarSystem } from "@/components/radar-system";
import { motion } from "@/components/motion-wrapper";
import { signalGlyphs } from "@/data/site";

export function SignalSection() {
  return (
    <section
      id="signal"
      className="glass-panel relative grid gap-5 overflow-hidden p-4 md:p-6 xl:grid-cols-[340px_minmax(0,1fr)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(95,255,218,0.08),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(151,71,255,0.12),transparent_28%)]" />
      <div className="panel-module flex min-h-[340px] flex-col items-center justify-center gap-5 p-6">
        <p className="panel-label">UNKNOWN SIGNAL DETECTED</p>
        <RadarSystem compact />
        <div className="grid w-full gap-2">
          <div className="micro-panel px-3 py-2 text-center">
            <p className="panel-label">COORDINATES</p>
            <p className="mt-1 font-mono text-sm text-cyan-100">09.17.44 / A-12</p>
          </div>
          <div className="micro-panel px-3 py-2 text-center">
            <p className="panel-label">FREQUENCY</p>
            <p className="mt-1 font-mono text-sm text-cyan-100">OSCILLATING</p>
          </div>
        </div>
      </div>

      <div className="panel-module p-5">
        <p className="panel-label">ALIEN TRACE</p>
        <h3 className="mt-3 text-2xl font-semibold text-white">Encrypted Transmission Layer</h3>

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {signalGlyphs.map((glyph, index) => (
            <div key={glyph} className="micro-panel p-3">
              <p className="font-mono text-xs tracking-[0.24em] text-cyan-100/70">
                SEGMENT {index + 1}
              </p>
              <p className="mt-3 text-lg tracking-[0.22em] text-white">{glyph}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {Array.from({ length: 3 }, (_, index) => (
            <div key={index} className="rounded-[1.4rem] border border-cyan-400/10 bg-cyan-400/5 p-4">
              <p className="panel-label">WAVE {index + 1}</p>
              <div className="mt-4 flex h-20 items-end gap-1">
                {Array.from({ length: 14 }, (_, barIndex) => (
                  <motion.span
                    key={barIndex}
                    className="signal-bar"
                    animate={{ height: [16, 48 + ((barIndex + index) % 4) * 10, 14] }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 1.8 + barIndex * 0.04,
                      delay: barIndex * 0.05,
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
