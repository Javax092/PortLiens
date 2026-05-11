import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="px-3 pb-8 sm:px-5">
      <div className="mx-auto flex max-w-[1520px] flex-col gap-3 rounded-[1.4rem] border border-cyan-300/10 bg-slate-950/45 px-4 py-5 text-sm text-slate-400 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
        <p>
          {siteConfig.name} © 2026
        </p>
        <p className="text-slate-500">{siteConfig.title}</p>
      </div>
    </footer>
  );
}
