"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "@/components/motion-wrapper";
import { navItems, siteConfig } from "@/data/site";

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>(navItems[0].id);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.2, 0.45, 0.7] },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 py-3 sm:px-5 sm:py-4">
      <nav className="mx-auto flex max-w-[1520px] items-center justify-between gap-3 rounded-[1.25rem] border border-cyan-300/10 bg-slate-950/70 px-3 py-2.5 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:rounded-[1.4rem] sm:px-4 sm:py-3">
        <a href="#core" className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[0.95rem] border border-cyan-300/16 bg-cyan-400/10 font-mono text-sm tracking-[0.2em] text-cyan-100 sm:h-11 sm:w-11">
            {siteConfig.shortBrand}
          </div>
          <div className="min-w-0">
            <p className="panel-label truncate">{siteConfig.brand}</p>
            <p className="mt-1 truncate text-[0.68rem] font-medium tracking-[0.18em] text-white sm:text-sm sm:tracking-[0.2em]">
              CENTRAL PROFISSIONAL
            </p>
          </div>
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[1rem] border border-white/10 bg-white/5 text-slate-100 md:hidden"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const active = item.id === activeSection;

            return (
              <a
                key={item.id}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-sm tracking-[0.18em] transition ${
                  active ? "text-white" : "text-slate-400 hover:text-slate-100"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full border border-cyan-300/16 bg-cyan-400/10"
                    transition={{ type: "spring", stiffness: 340, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </div>
      </nav>

      {menuOpen && (
        <div
          id="mobile-nav"
          className="mx-auto mt-3 max-w-[1520px] rounded-[1.25rem] border border-cyan-300/10 bg-slate-950/92 p-3 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`min-h-12 rounded-[1rem] px-4 py-3 text-sm tracking-[0.18em] ${
                  activeSection === item.id
                    ? "bg-cyan-400/10 text-cyan-100"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
