import { motion } from "@/components/motion-wrapper";
import { floatingPanels } from "@/data/site";

const orbitClasses = {
  "left-top": "left-0 top-10 md:left-6 md:top-12",
  "right-top": "right-0 top-4 md:right-2 md:top-10",
  "left-bottom": "bottom-20 left-2 md:bottom-16 md:left-10",
  "right-bottom": "bottom-12 right-0 md:bottom-14 md:right-8",
} as const;

export function FloatingPanels() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden md:block">
      {floatingPanels.map((panel, index) => (
        <motion.div
          key={panel.title}
          className={`pointer-events-auto absolute w-56 ${orbitClasses[panel.orbit]}`}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: [0, -10, 0] }}
          transition={{
            opacity: { duration: 0.8, delay: 0.2 + index * 0.1 },
            y: { repeat: Number.POSITIVE_INFINITY, duration: 6 + index, ease: "easeInOut" },
          }}
        >
          <div className="panel-module p-4">
            <p className="panel-label">{panel.title}</p>
            <p className="mt-3 text-sm font-semibold tracking-[0.18em] text-white">{panel.value}</p>
            <p className="mt-2 font-mono text-xs text-cyan-100/70">{panel.detail}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
