import React from "react";
import SectionHeader from "./SectionHeader";

import WageImage from "../assets/wage_vantage.webp";
import eachtech from "../assets/each-tech.webp";

export default function Projects() {
  return (
    <section className="space-y-12">
      <SectionHeader id="002" title="PROJECTS" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-terminal-black dark:bg-surface-bright brutalist-border">
        {/* Project 1 */}
        <div className="bg-surface-bright dark:bg-terminal-black flex flex-col">
          <div className="flex justify-between items-center p-2 brutalist-border-b bg-terminal-black/5 dark:bg-surface-bright/10 font-code-sm uppercase">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-infrastructure-orange"></div>
              <span>WAGE.VANTAGE.INFO</span>
            </div>
            <span>BETA</span>
          </div>
          <div className="p-4 grow flex flex-col gap-4">
            <div className="w-full h-48 bg-terminal-black brutalist-border relative overflow-hidden group">
              <img
                src={WageImage}
                alt="UI Library"
                className="w-full h-full object-cover grayscale opacity-60 mix-blend-luminosity group-hover:opacity-100 transition-opacity"
              />
            </div>
            <p className="font-code-sm text-terminal-black/80 dark:text-surface-bright/80">
              A dynamic and intuitive SaaS app that offers fresh and useful
              salary statistical data for U.E. professionals. Compare, analyze
              and evaluate your earnings and career possibilites as a
              professional worker in the european job market.
            </p>
            <div className="flex gap-2 mt-auto flex-wrap">
              <span className="px-2 py-1 brutalist-border font-label-caps">
                React
              </span>
              <span className="px-2 py-1 brutalist-border font-label-caps">
                TypeScript
              </span>
              <span className="px-2 py-1 brutalist-border font-label-caps">
                PostgreSQL
              </span>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-surface-bright dark:bg-terminal-black flex flex-col">
          <div className="flex justify-between items-center p-2 brutalist-border-b bg-terminal-black/5 dark:bg-surface-bright/10 font-code-sm uppercase">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-terminal-black dark:bg-surface-bright"></div>
              <span>EACH_ONE.TECH_ONE</span>
            </div>
            <span>PROD</span>
          </div>
          <div className="p-4 grow flex flex-col gap-4">
            <div className="w-full h-48 bg-terminal-black brutalist-border relative overflow-hidden group">
              <img
                src={eachtech}
                alt="Dashboard"
                className="w-full h-full object-cover grayscale opacity-60 mix-blend-luminosity group-hover:opacity-100 transition-opacity"
              />
            </div>
            <p className="font-code-sm text-terminal-black/80 dark:text-surface-bright/80">
             Tech  moves fast. Stay on top of the latest news and updates, one story at a time. Don't get left behind and visit Each One Tech One news web.
            </p>
            <div className="flex gap-2 mt-auto flex-wrap">
              <span className="px-2 py-1 brutalist-border font-label-caps">
                REACT
              </span>
              <span className="px-2 py-1 brutalist-border font-label-caps">
                TANSTACK
              </span>
              <span className="px-2 py-1 brutalist-border font-label-caps">
                TYPESCRIPT
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
