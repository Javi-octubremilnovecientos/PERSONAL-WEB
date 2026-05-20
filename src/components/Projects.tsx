import { useState, useCallback } from "react";
import SectionHeader from "./SectionHeader";
import { ProjectCard } from "./ProjectCard";
import { useTranslation } from "../hooks/useTranslation";

import WageImage from "../assets/wage_vantage.webp";
import eachtech from "../assets/each-tech.webp";
import roof from "../assets/tejados.png";
import brb from "../assets/Brb.png";

export default function Projects() {
  const t = useTranslation();
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleActivate = useCallback((id: string | null) => {
    setActiveId(id);
  }, []);

  const PROJECTS = [
    {
      id: "wage",
      title: "WAGE.VANTAGE.INFO",
      status: "BETA",
      dotClass: "bg-infrastructure-orange",
      image: WageImage,
      alt: "Wage Vantage UI",
      liveUrl: "https://www.wagevantage.info/",
      repoUrl: "https://github.com/Porfolio-Javier-Lombardero/WAGE-VANTAGE-APP",
      description: t.projects.wageDescription,
      tags: ["React", "TypeScript", "PostgreSQL"],
    },
    {
      id: "eachtech",
      title: "EACH_ONE.TECH_ONE",
      status: "PROD",
      dotClass: "bg-terminal-black dark:bg-surface-bright",
      image: eachtech,
      alt: "Each One Tech One",
      liveUrl: "https://each-one-tech-one.com/",
      repoUrl: "https://github.com/Porfolio-Javier-Lombardero/each-one-tech-one",
      description: t.projects.eachtechDescription,
      tags: ["REACT", "TANSTACK", "TYPESCRIPT"],
    },
    {
      id: "tejados",
      title: "TEJADOS_Madrid.",
      status: "PROD",
      dotClass: "bg-terminal-black dark:bg-surface-bright",
      image: roof,
      alt: "Tejados Madrid",
      liveUrl: "https://www.tejadosyterrazasmadrid.com/",
      repoUrl: "https://github.com/Porfolio-Javier-Lombardero/tejados-y-terrazas-madrid",
      description: t.projects.tejadosDescription,
      tags: ["JAVASCRIPT", "BOOTSTRAP.5", "SCSS"],
    },
    {
      id: "braber",
      title: "BRABER.STUDIO",
      status: "PROD",
      dotClass: "bg-terminal-black dark:bg-surface-bright",
      image: brb,
      alt: "Braber Studio",
      liveUrl: "https://braber.pro/",
      repoUrl: "",
      description: t.projects.braberDescription,
      tags: ["CSS3", "WORDPRESS"],
    },
  ];

  return (
    <section className="space-y-12">
      <SectionHeader id="002" title={t.projects.sectionTitle} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-terminal-black dark:bg-surface-bright brutalist-border">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.id}
            {...project}
            activeId={activeId}
            onActivate={handleActivate}
          />
        ))}
      </div>
    </section>
  );
}
