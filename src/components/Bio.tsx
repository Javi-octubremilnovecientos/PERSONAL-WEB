import { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";
import portrait from "../assets/portrait.webp";
import {ReactIcon} from "../assets/Icons/ReactIcon.tsx"
import { TypeIcon } from "../assets/Icons/TypeIcon.tsx";
import { TailwindIcon } from "../assets/Icons/TailwindIcon.tsx";
import { PostSQLIcon } from "../assets/Icons/PostSQLIcon.tsx";
import { ClaudeIcon } from "../assets/Icons/ClaudeIcon.tsx";
import { VitestIcon } from "../assets/Icons/VitestIcon.tsx";
import { useTranslation } from "../hooks/useTranslation";

export const Bio = () => {
  const t = useTranslation();

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
      <SectionHeader id="001" title={t.bio.sectionTitle} />

      <div className="brutalist-border grid grid-cols-1 lg:grid-cols-2 bg-terminal-black dark:bg-surface-bright gap-px">
        {/* LEFT PANEL — ISOMETRIC RENDER */}
        <div className="relative bg-paper-off-white dark:bg-terminal-black overflow-hidden ">
          <div className="flex justify-between items-center px-4 md:px-6 py-3  brutalist-border-b font-label-caps text-terminal-black/80 dark:text-surface-bright/80">
            <span>{t.bio.renderLabel}</span>
            <span className="text-infrastructure-orange">{t.bio.liveLabel}</span>
          </div>

          <div className="aspect-square  flex justify-self-center p-6 ">
            <img src={portrait} alt="Javier Lombardero" />
          </div>

          <div className="flex justify-between items-center  px-4 md:px-6 py-3 brutalist-border-t font-label-caps text-terminal-black/60 dark:text-surface-bright/60">
            <span>CAM: -45DEG / ISO</span>
            <span>RES: 2048X2048</span>
          </div>
          {/* LEFT-BOTTOM PANEL — EDUCATION */}
          <div className="flex-col justify-between items-center  px-4 md:px-6 py-3 brutalist-border-t  text-terminal-black/80 dark:text-surface-bright/80 font-body-md ">
            <h4 className="mb-1 ">{t.bio.educationTitle}</h4> <br />
            <p className="font-semibold underline leading-5 mb-2">
              {t.bio.mastersDegree} <br />
              {t.bio.mastersInstitution}
            </p>
            <p className="leading-5">
              {t.bio.mastersDescription}
            </p>{" "}
            <br />
            <p className="underline leading-6 mb-2 font-semibold ">
              {t.bio.wpCourse} <br />
              {t.bio.wpInstitution}
            </p>
            <p className="leading-5">
              {t.bio.wpDescription}
            </p>
          </div>
        </div>

        {/* RIGHT PANEL — MANIFEST */}
        <div className="dark:bg-terminal-black bg-paper-off-white  dark:text-surface-bright text-terminal-black flex flex-col">
          <div className="flex justify-between items-center px-4 md:px-6 py-3 border-b border-surface-bright/30 dark:border-terminal-black/30 font-label-caps text-terminal-black/70 dark:text-surface-bright">
            <span>{t.bio.manifestTitle}</span>
            <span>V3.1.0</span>
          </div>

          <div className="px-4 md:px-8 py-8 md:py-10 space-y-6 grow">
            <h3 className="font-headline-lg md:font-display-lg-mobile uppercase leading-[1.05]">
              <span>{t.bio.engineeredFor} </span>
              <span className="text-infrastructure-orange">
                {t.bio.optimInterfaces}
              </span>
            </h3>

            <div className="space-y-4 font-body-md text-terminal-black/80   dark:text-surface-bright/80">
              <p>{t.bio.bioP1}</p>
              <p>{t.bio.bioP2}</p>
              <br />
            </div>

            <div className="border-t border-surface-bright/30 dark:border-terminal-black/30 pt-4 flex items-center gap-3 font-label-caps">
              <span className="w-2 h-2 bg-infrastructure-orange shrink-0"></span>
              <span className=" text-terminal-black/70  dark:text-surface-bright/70">
                {t.bio.uptimeLabel}
              </span>
              <span className="text-infrastructure-orange tracking-wider">
                {uptime}
              </span>
            </div>
          </div>
       <h4 className="mb-3 ml-5 md:ml-8 text-terminal-black/70 font-label-caps" >MAIN_SKILLS.md</h4>
          {/* METRICS 2x2 */}
          <div className="grid grid-cols-2 border-t border-terminal-black/30 dark:border-surface-bright/30 bg-surface-bright/20 dark:bg-terminal-black/10 gap-px">
            <div className="bg-paper-off-white dark:bg-terminal-black px-4 md:px-6 py-5 min-h-18 border-b border-r">
              <div className="font-code-sm uppercase  text-terminal-black/60 dark:text-paper-off-white mb-2 ">
              REACT_ECOSYSTEM
              </div>
               <ReactIcon/>
            </div>
            <div className="bg-paper-off-white dark:bg-terminal-black px-4 md:px-6 py-5 min-h-18 border-b border-r">
              <div className="font-code-sm uppercase  text-terminal-black/60 dark:text-paper-off-white mb-2 ">
               Typescript
              </div>
               <TypeIcon/>
            </div>
            <div className="bg-paper-off-white dark:bg-terminal-black px-4 md:px-6 py-5 min-h-18 border-b border-r">
              <div className="font-code-sm uppercase  text-terminal-black/60 dark:text-paper-off-white mb-2 ">
               Tailwind CSS
              </div>
               <TailwindIcon/>
            </div>
            <div className="bg-paper-off-white dark:bg-terminal-black px-4 md:px-6 py-5 min-h-18 border-b border-r">
              <div className="font-code-sm uppercase  text-terminal-black/60 dark:text-paper-off-white mb-2 ">
               PostSQL
              </div>
               <PostSQLIcon/>
            </div>
            <div className="bg-paper-off-white dark:bg-terminal-black px-4 md:px-6 py-5 min-h-18 border-b border-r">
              <div className="font-code-sm uppercase  text-terminal-black/60 dark:text-paper-off-white mb-2 ">
              Claude_Code
              </div>
               <ClaudeIcon/>
            </div>
            <div className="bg-paper-off-white dark:bg-terminal-black px-4 md:px-6 py-5 min-h-18 border-b border-r">
              <div className="font-code-sm uppercase  text-terminal-black/60 dark:text-paper-off-white mb-2 ">
               Vitest
              </div>
               <VitestIcon/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
