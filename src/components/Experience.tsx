import React from 'react';
import SectionHeader from './SectionHeader';

export default function Experience() {
  return (
    <section className="space-y-6">
      <SectionHeader id="003" title="EXECUTION_LOG" />
      
      <div className="brutalist-border bg-surface-bright dark:bg-terminal-black p-4 md:p-8 relative">
        {/* Vertical Line */}
        <div className="absolute left-[27px] md:left-[43px] top-8 bottom-8 w-px bg-terminal-black dark:bg-surface-bright hidden sm:block"></div>
        
        <div className="space-y-12">
          {/* Role 1 */}
          <div className="flex gap-4 md:gap-8 relative z-10">
            <div className="w-6 h-6 mt-1 flex-shrink-0 bg-surface-bright dark:bg-terminal-black brutalist-border flex items-center justify-center hidden sm:flex">
              <div className="w-2 h-2 bg-infrastructure-orange"></div>
            </div>
            <div className="flex-grow border-b border-dashed border-terminal-black/30 dark:border-surface-bright/30 pb-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2 gap-2">
                <h3 className="font-headline-md font-bold uppercase">Senior Frontend Engineer</h3>
                <span className="font-code-sm text-terminal-black/80 dark:text-surface-bright/80 bg-terminal-black/5 dark:bg-surface-bright/10 px-2 py-1 brutalist-border inline-block self-start">2021 - PRESENT</span>
              </div>
              <div className="font-code-sm uppercase mb-4 text-terminal-black/80 dark:text-surface-bright/80">TECH_CORP.INC // REMOTE</div>
              <p className="font-body-md text-terminal-black/80 dark:text-surface-bright/80">
                Architected the core frontend infrastructure for a suite of enterprise data management tools. Reduced initial load time by 40% through aggressive code-splitting and asset optimization. Led migration from legacy SPA to a modern micro-frontend architecture.
              </p>
            </div>
          </div>

          {/* Role 2 */}
          <div className="flex gap-4 md:gap-8 relative z-10">
            <div className="w-6 h-6 mt-1 flex-shrink-0 bg-surface-bright dark:bg-terminal-black brutalist-border flex items-center justify-center hidden sm:flex">
              <div className="w-2 h-2 bg-terminal-black dark:bg-surface-bright"></div>
            </div>
            <div className="flex-grow border-b border-dashed border-terminal-black/30 dark:border-surface-bright/30 pb-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2 gap-2">
                <h3 className="font-headline-md font-bold uppercase">UI Developer</h3>
                <span className="font-code-sm text-terminal-black/80 dark:text-surface-bright/80 bg-terminal-black/5 dark:bg-surface-bright/10 px-2 py-1 brutalist-border inline-block self-start">2018 - 2021</span>
              </div>
              <div className="font-code-sm uppercase mb-4 text-terminal-black/80 dark:text-surface-bright/80">STARTUP_SYSTEMS // ONSITE</div>
              <p className="font-body-md text-terminal-black/80 dark:text-surface-bright/80">
                Developed responsive web applications using React and Redux. Built an internal component library adopted by 3 distinct product teams, ensuring brand consistency and accelerating feature delivery.
              </p>
            </div>
          </div>

          {/* Role 3 */}
          <div className="flex gap-4 md:gap-8 relative z-10">
            <div className="w-6 h-6 mt-1 flex-shrink-0 bg-surface-bright dark:bg-terminal-black brutalist-border flex items-center justify-center hidden sm:flex">
              <div className="w-2 h-2 bg-terminal-black dark:bg-surface-bright"></div>
            </div>
            <div className="flex-grow">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2 gap-2">
                <h3 className="font-headline-md font-bold uppercase">Frontend Intern</h3>
                <span className="font-code-sm text-terminal-black/80 dark:text-surface-bright/80 bg-terminal-black/5 dark:bg-surface-bright/10 px-2 py-1 brutalist-border inline-block self-start">2017 - 2018</span>
              </div>
              <div className="font-code-sm uppercase mb-4 text-terminal-black/80 dark:text-surface-bright/80">AGENCY.IO // HYBRID</div>
              <p className="font-body-md text-terminal-black/80 dark:text-surface-bright/80">
                Assisted in the development of client websites using HTML, CSS, and Vanilla JavaScript. Implemented automated testing for critical UI flows.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
