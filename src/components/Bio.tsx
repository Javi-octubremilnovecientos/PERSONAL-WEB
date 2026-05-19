import React, { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";
import portrait from "../assets/portrait.webp";

export const Bio = () => {
  const metrics = [
    { label: "PROJECTS_SHIPPED", value: "15+" },
    { label: "YEARS_EXP", value: "3" },
    { label: "COMPONENTS_BUILT", value: "1.2K" },
    { label: "AVG_LCP", value: "0.9s" },
  ];

  const calculateUptime = () => {
    const start = new Date("2023-09-01T00:00:00").getTime();
    const diff = Date.now() - start;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    const pad = (n: number) => n.toString().padStart(2, "0");
    return `${days}d ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;
  };

  const [uptime, setUptime] = useState(calculateUptime);

  useEffect(() => {
    const id = setInterval(() => setUptime(calculateUptime()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="space-y-12">
      <SectionHeader id="001" title="BIO" />

      <div className="brutalist-border grid grid-cols-1 lg:grid-cols-2 bg-terminal-black dark:bg-surface-bright gap-px">
        {/* LEFT PANEL — ISOMETRIC RENDER */}
        <div className="relative bg-paper-off-white dark:bg-terminal-black overflow-hidden">
          <div className="flex justify-between items-center px-4 md:px-6 py-3 brutalist-border-b font-label-caps text-terminal-black/80 dark:text-surface-bright/80">
            <span>RENDER: WORKSTATION.OBJ</span>
            <span className="text-infrastructure-orange">LIVE</span>
          </div>

          <div className="aspect-square w-full flex items-center justify-center p-6 md:p-10">
            <img src={portrait} alt="Javier Lombardero" />
          </div>

          <div className="flex justify-between items-center px-4 md:px-6 py-3 brutalist-border-t font-label-caps text-terminal-black/60 dark:text-surface-bright/60">
            <span>CAM: -45DEG / ISO</span>
            <span>RES: 2048X2048</span>
          </div>
        </div>

        {/* RIGHT PANEL — MANIFEST */}
        <div className="dark:bg-terminal-black bg-paper-off-white  dark:text-surface-bright text-terminal-black flex flex-col">
          <div className="flex justify-between items-center px-4 md:px-6 py-3 border-b border-surface-bright/30 dark:border-terminal-black/30 font-label-caps text-terminal-black/70 dark:text-surface-bright">
            <span>MANIFEST.MD</span>
            <span>V3.1.0</span>
          </div>

          <div className="px-4 md:px-8 py-8 md:py-10 space-y-6 grow">
            <h3 className="font-headline-lg md:font-display-lg-mobile uppercase leading-[1.05]">
              <span>ENGINEERED FOR </span>
              <span className="text-infrastructure-orange">
                OPTIM INTERFACES
              </span>
            </h3>

            <div className="space-y-4 font-body-md text-terminal-black/80   dark:text-surface-bright/80">
              <p>
               Front-end developer specializing in high-performance, accessible, and scalable web interfaces. I architect robust UI systems with a focus on determinism and zero-latency experiences — combining technical precision with a genuine passion for rich, innovative design.
              </p>
              <p>
              Beyond the code, I'm a collaborative problem-solver who communicates clearly, adapts to fast-moving teams, and maintains a high bar for quality at every stage. I integrate AI-assisted development workflows — particularly Claude Code — to define agents, skills, and development contexts through a Spec-Driven approach.
             </p>
             <br />
             <h4 className="mb-1">EDUCATION:</h4>
              <p className="underline leading-6 mb-2">
               Master's Degree in Web Development & UX/UI Design <br/>
                C.E.I. - 2023
              </p>
              <p className="leading-5">
              Core front-end development fundamentals: HTML, CSS, JavaScript, React, and working knowledge of Figma.</p>
               <p className="underline leading-6 ">
               Wordpress fundamentals <br/>
              C.E.I. - 2023
              </p></div>
           

            <div className="border-t border-surface-bright/30 dark:border-terminal-black/30 pt-4 flex items-center gap-3 font-label-caps">
              <span className="w-2 h-2 bg-infrastructure-orange shrink-0"></span>
              <span className=" text-terminal-black/70  dark:text-surface-bright/70">
                UPTIME:
              </span>
              <span className="text-infrastructure-orange tracking-wider">
                {uptime}
              </span>
            </div>
          </div>

          {/* METRICS 2x2 */}
          <div className="grid grid-cols-2 border-t border-terminal-black/30 dark:border-surface-bright/30 bg-surface-bright/20 dark:bg-terminal-black/10 gap-px">
            {metrics.map((m, i) => (
              <div
                key={i}
                className={` bg-paper-off-white dark:bg-terminal-black px-4 md:px-6 py-5 ${
                  i % 2 === 0
                    ? "border-r border-terminal-black dark:border-paper-off-white/30"
                    : ""
                } ${i < 2 ? "border-b border-terminal-black dark:border-paper-off-white/30" : ""}`}
              >
                <div className="font-code-sm uppercase text-terminal-black/60 dark:text-paper-off-white mb-2">
                  {m.label}
                </div>
                <div className="font-headline-lg font-bold">{m.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
