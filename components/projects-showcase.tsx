"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { ProjectsSection } from "@/components/projects-section";
import { projects, type AudienceMode } from "@/data/site";

const ProjectModulePanel = dynamic(
  () => import("@/components/project-module-panel").then((mod) => mod.ProjectModulePanel),
  { ssr: false },
);

type ProjectsShowcaseProps = {
  audienceMode: AudienceMode;
};

export function ProjectsShowcase({ audienceMode }: ProjectsShowcaseProps) {
  const [activeProjectId, setActiveProjectId] = useState(projects[0]?.id ?? "");
  const [panelOpen, setPanelOpen] = useState(false);

  const activeProject = useMemo(
    () => projects.find((project) => project.id === activeProjectId) ?? null,
    [activeProjectId],
  );

  const openProjectPanel = (projectId: string) => {
    setActiveProjectId(projectId);
    setPanelOpen(true);
  };

  return (
    <>
      <ProjectsSection audienceMode={audienceMode} onOpenProject={openProjectPanel} />
      {panelOpen ? (
        <ProjectModulePanel
          project={activeProject}
          open={panelOpen}
          onClose={() => setPanelOpen(false)}
        />
      ) : null}
    </>
  );
}
