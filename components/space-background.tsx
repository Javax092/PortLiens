"use client";

import { useEffect, useMemo, useRef } from "react";
import { useReducedMotion } from "@/components/motion-wrapper";

const farStars = Array.from({ length: 80 }, (_, index) => ({
  id: `far-${index}`,
  left: `${(index * 19) % 100}%`,
  top: `${(index * 37) % 100}%`,
  size: `${index % 2 === 0 ? 1 : 2}px`,
  delay: `${(index % 8) * 0.5}s`,
  duration: `${4 + (index % 5)}s`,
}));

const midStars = Array.from({ length: 46 }, (_, index) => ({
  id: `mid-${index}`,
  left: `${(index * 23 + 11) % 100}%`,
  top: `${(index * 17 + 29) % 100}%`,
  size: `${(index % 3) + 1}px`,
  delay: `${(index % 6) * 0.6}s`,
  duration: `${5 + (index % 4)}s`,
}));

const dust = Array.from({ length: 18 }, (_, index) => ({
  id: `dust-${index}`,
  left: `${(index * 27 + 7) % 100}%`,
  top: `${(index * 21 + 12) % 100}%`,
  width: `${48 + (index % 4) * 18}px`,
  height: `${10 + (index % 3) * 4}px`,
  delay: `${index * 0.18}s`,
}));

const microDust = Array.from({ length: 30 }, (_, index) => ({
  id: `micro-${index}`,
  left: `${(index * 13 + 9) % 100}%`,
  top: `${(index * 29 + 17) % 100}%`,
  size: `${10 + (index % 4) * 6}px`,
  delay: `${index * 0.14}s`,
}));

const asteroids = [
  { left: "12%", top: "60%", size: 18, duration: 34, delay: 0 },
  { left: "82%", top: "38%", size: 12, duration: 28, delay: 2 },
  { left: "68%", top: "78%", size: 14, duration: 31, delay: 1.2 },
];

const shootingStars = [
  { left: "14%", top: "18%", delay: "2s", duration: "14s" },
  { left: "72%", top: "22%", delay: "8s", duration: "18s" },
  { left: "58%", top: "12%", delay: "13s", duration: "20s" },
];

const satellites = [
  { left: "18%", top: "30%", delay: "0s", duration: "28s", size: 18 },
  { left: "78%", top: "64%", delay: "7s", duration: "32s", size: 14 },
];

const energyPulses = [
  { left: "24%", top: "42%", delay: "1s", duration: "10s", size: 180 },
  { left: "74%", top: "54%", delay: "5s", duration: "13s", size: 220 },
];

export function SpaceBackground() {
  const reduceMotion = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const mobileLite = useMemo(
    () => ({
      far: farStars.slice(0, 28),
      mid: midStars.slice(0, 16),
      dust: dust.slice(0, 8),
      microDust: microDust.slice(0, 10),
      asteroids: asteroids.slice(0, 1),
      shootingStars: shootingStars.slice(0, 1),
      satellites: satellites.slice(0, 1),
      energyPulses: energyPulses.slice(0, 1),
    }),
    [],
  );

  useEffect(() => {
    const root = rootRef.current;

    if (!root || reduceMotion) {
      return;
    }

    let frame = 0;

    const updatePointer = (event: MouseEvent) => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      frame = window.requestAnimationFrame(() => {
        const x = (event.clientX / window.innerWidth - 0.5) * 2;
        const y = (event.clientY / window.innerHeight - 0.5) * 2;

        root.style.setProperty("--pointer-x", `${x}`);
        root.style.setProperty("--pointer-y", `${y}`);
      });
    };

    window.addEventListener("mousemove", updatePointer);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("mousemove", updatePointer);
    };
  }, [reduceMotion]);

  const starLayers = useMemo(() => [farStars, midStars], []);

  return (
    <div
      ref={rootRef}
      className="space-scene absolute inset-0 overflow-hidden"
      style={
        {
          "--pointer-x": "0",
          "--pointer-y": "0",
        } as React.CSSProperties
      }
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#02030a_0%,#040816_48%,#010208_100%)]" />
      <div className="space-glow-reactive absolute inset-0" />
      <div className="space-nebula nebula-a" />
      <div className="space-nebula nebula-b" />
      <div className="space-nebula nebula-c" />
      <div className="space-nebula nebula-d" />
      <div className="space-nebula nebula-e" />
      <div className="space-nebula nebula-f" />
      <div className="planet-shadow space-parallax layer-planet" />

      <div className="space-parallax layer-deep absolute inset-0 hidden sm:block">
        {starLayers[0].map((star) => (
          <span
            key={star.id}
            className="star-particle"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
          />
        ))}
      </div>

      <div className="space-parallax layer-deep absolute inset-0 sm:hidden">
        {mobileLite.far.map((star) => (
          <span
            key={star.id}
            className="star-particle"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
          />
        ))}
      </div>

      <div className="space-parallax layer-mid absolute inset-0 hidden sm:block">
        {starLayers[1].map((star) => (
          <span
            key={star.id}
            className="star-particle star-bright"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
          />
        ))}
      </div>

      <div className="space-parallax layer-mid absolute inset-0 sm:hidden">
        {mobileLite.mid.map((star) => (
          <span
            key={star.id}
            className="star-particle star-bright"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
          />
        ))}
      </div>

      <div className="space-parallax layer-mid absolute inset-0 hidden sm:block">
        {(reduceMotion ? [] : shootingStars).map((item) => (
          <span
            key={`${item.left}-${item.top}`}
            className="shooting-star"
            style={{
              left: item.left,
              top: item.top,
              animationDelay: item.delay,
              animationDuration: item.duration,
            }}
          />
        ))}
      </div>

      <div className="space-parallax layer-mid absolute inset-0 sm:hidden">
        {(reduceMotion ? [] : mobileLite.shootingStars).map((item) => (
          <span
            key={`${item.left}-${item.top}`}
            className="shooting-star"
            style={{
              left: item.left,
              top: item.top,
              animationDelay: item.delay,
              animationDuration: item.duration,
            }}
          />
        ))}
      </div>

      <div className="planet-primary space-parallax layer-planet" />
      <div className="planet-rim space-parallax layer-planet" />
      <div className="planet-atmosphere space-parallax layer-planet" />
      <div className="planet-haze space-parallax layer-mid" />
      <div className="moon-secondary space-parallax layer-mid" />
      <div className="space-distortion space-parallax layer-mid" />

      <div className="space-parallax layer-foreground absolute inset-0 hidden sm:block">
        {energyPulses.map((item) => (
          <span
            key={`${item.left}-${item.top}`}
            className="energy-pulse"
            style={{
              left: item.left,
              top: item.top,
              width: `${item.size}px`,
              height: `${item.size}px`,
              animationDelay: item.delay,
              animationDuration: item.duration,
            }}
          />
        ))}

        {dust.map((item) => (
          <span
            key={item.id}
            className="space-dust"
            style={{
              left: item.left,
              top: item.top,
              width: item.width,
              height: item.height,
              animationDelay: item.delay,
            }}
          />
        ))}

        {microDust.map((item) => (
          <span
            key={item.id}
            className="space-dust micro"
            style={{
              left: item.left,
              top: item.top,
              width: item.size,
              height: "2px",
              animationDelay: item.delay,
            }}
          />
        ))}

        {asteroids.map((asteroid) => (
          <span
            key={`${asteroid.left}-${asteroid.top}`}
            className="space-asteroid"
            style={
              {
                left: asteroid.left,
                top: asteroid.top,
                width: `${asteroid.size}px`,
                height: `${asteroid.size}px`,
                animationDuration: `${asteroid.duration}s`,
                animationDelay: `${asteroid.delay}s`,
              } as React.CSSProperties
            }
          />
        ))}

        {satellites.map((satellite) => (
          <span
            key={`${satellite.left}-${satellite.top}`}
            className="space-satellite"
            style={
              {
                left: satellite.left,
                top: satellite.top,
                width: `${satellite.size}px`,
                height: `${satellite.size / 2}px`,
                animationDuration: `${satellite.duration}s`,
                animationDelay: satellite.delay,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div className="space-parallax layer-foreground absolute inset-0 sm:hidden">
        {mobileLite.energyPulses.map((item) => (
          <span
            key={`${item.left}-${item.top}`}
            className="energy-pulse"
            style={{
              left: item.left,
              top: item.top,
              width: `${item.size}px`,
              height: `${item.size}px`,
              animationDelay: item.delay,
              animationDuration: item.duration,
            }}
          />
        ))}

        {mobileLite.dust.map((item) => (
          <span
            key={item.id}
            className="space-dust"
            style={{
              left: item.left,
              top: item.top,
              width: item.width,
              height: item.height,
              animationDelay: item.delay,
            }}
          />
        ))}

        {mobileLite.microDust.map((item) => (
          <span
            key={item.id}
            className="space-dust micro"
            style={{
              left: item.left,
              top: item.top,
              width: item.size,
              height: "2px",
              animationDelay: item.delay,
            }}
          />
        ))}

        {mobileLite.asteroids.map((asteroid) => (
          <span
            key={`${asteroid.left}-${asteroid.top}`}
            className="space-asteroid"
            style={
              {
                left: asteroid.left,
                top: asteroid.top,
                width: `${asteroid.size}px`,
                height: `${asteroid.size}px`,
                animationDuration: `${asteroid.duration}s`,
                animationDelay: `${asteroid.delay}s`,
              } as React.CSSProperties
            }
          />
        ))}

        {mobileLite.satellites.map((satellite) => (
          <span
            key={`${satellite.left}-${satellite.top}`}
            className="space-satellite"
            style={
              {
                left: satellite.left,
                top: satellite.top,
                width: `${satellite.size}px`,
                height: `${satellite.size / 2}px`,
                animationDuration: `${satellite.duration}s`,
                animationDelay: satellite.delay,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div className="scanlines absolute inset-0 opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_28%,transparent_0,transparent_22%,rgba(2,6,23,0.18)_38%,rgba(2,6,23,0.34)_66%,rgba(2,6,23,0.52)_100%)]" />
      <div className="space-vignette absolute inset-0" />
    </div>
  );
}
