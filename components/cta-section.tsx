"use client";

import { Download, Github, Linkedin, Mail, MessageCircleMore } from "lucide-react";
import { motion } from "@/components/motion-wrapper";
import { externalLinks, isExternalHref, siteConfig } from "@/data/site";

const contactLinks = [
  {
    label: "WhatsApp",
    href: externalLinks.whatsapp,
    icon: MessageCircleMore,
  },
  {
    label: "LinkedIn",
    href: externalLinks.linkedin,
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: externalLinks.github,
    icon: Github,
  },
  {
    label: "Email",
    href: externalLinks.email,
    icon: Mail,
  },
  {
    label: "Baixar CV",
    href: externalLinks.cv,
    icon: Download,
  },
] as const;

export function CtaSection() {
  return (
    <section className="hud-panel overflow-hidden p-5 sm:p-6 xl:p-7">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.08),transparent_24%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.1),transparent_28%)]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]"
      >
        <div className="content-shield space-y-4">
          <p className="panel-label">CALL TO ACTION</p>
          <h2 className="section-title max-w-3xl text-3xl font-semibold text-white sm:text-4xl">
            Disponivel para produtos ambiciosos, operacao real e entrega de alto nivel.
          </h2>
          <p className="body-copy max-w-3xl text-base">
            {siteConfig.name} trabalha na intersecao entre interface vendavel, arquitetura confiavel e automacao
            aplicada. Se o objetivo e contratar alguem que entrega com criterio tecnico e visao de produto, a
            conversa comeca aqui.
          </p>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="hud-chip hud-indicator">
              <p className="panel-label text-[0.56rem]">FOCO</p>
              <p className="data-copy mt-2 text-sm text-white">FULL STACK + IA</p>
            </div>
            <div className="hud-chip hud-indicator">
              <p className="panel-label text-[0.56rem]">ENTREGA</p>
              <p className="data-copy mt-2 text-sm text-white">MVP A PRODUCAO</p>
            </div>
            <div className="hud-chip hud-indicator">
              <p className="panel-label text-[0.56rem]">STATUS</p>
              <p className="critical-copy mt-2 text-sm text-white">{siteConfig.availability}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-3">
          {contactLinks.map((link) => {
            const Icon = link.icon;
            const isExternal = isExternalHref(link.href);

            return (
              <a
                key={link.label}
                href={link.href || "#"}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer noopener" : undefined}
                className="hud-chip inline-flex items-center justify-between gap-3 px-5 py-4 text-slate-100 transition hover:-translate-y-0.5 hover:border-cyan-300/24"
              >
                <span className="critical-copy font-medium">{link.label}</span>
                <Icon size={18} className="shrink-0 text-cyan-200" />
              </a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
