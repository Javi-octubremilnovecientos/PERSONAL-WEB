import React from 'react';
import SectionHeader from './SectionHeader';

export default function Projects() {
  return (
    <section className="space-y-6">
      <SectionHeader id="001" title="PROJECTS" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-terminal-black dark:bg-surface-bright brutalist-border">
        {/* Project 1 */}
        <div className="bg-surface-bright dark:bg-terminal-black flex flex-col">
          <div className="flex justify-between items-center p-2 brutalist-border-b bg-terminal-black/5 dark:bg-surface-bright/10 font-code-sm uppercase">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-infrastructure-orange"></div>
              <span>SYS.UI_LIBRARY</span>
            </div>
            <span>PROD</span>
          </div>
          <div className="p-4 flex-grow flex flex-col gap-4">
            <div className="w-full h-48 bg-terminal-black brutalist-border relative overflow-hidden group">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtZ5iQDgSP3g5rCEqSCbSTM07jJ8DQcFgdfQQ8513CrxgqmpDm7KBLdfrimJe7ahsRg2RGwsrRC3doJc1nL2wxybS8-EWGfwqKIRFCr401lnePG597V7-qPdJnFkIfV-LJU162LUUgOflfmAiBx7ccurUuOdhBdrJ21I-xFCovfXzwWlCf0OsPvjKXbuQTE4SzAnD1oPVYz4J-2N4zrRMSDAj8K2LN23PDi9yDW-i4gKkg_MOZINPabNdPfpN_fFd4UPOArJkc0w" 
                alt="UI Library" 
                className="w-full h-full object-cover grayscale opacity-60 mix-blend-luminosity group-hover:opacity-100 transition-opacity"
              />
            </div>
            <p className="font-code-sm text-terminal-black/80 dark:text-surface-bright/80">
              A comprehensive React UI library built for internal tooling. Features strict design tokens and zero-runtime CSS-in-JS.
            </p>
            <div className="flex gap-2 mt-auto flex-wrap">
              <span className="px-2 py-1 brutalist-border font-label-caps">React</span>
              <span className="px-2 py-1 brutalist-border font-label-caps">TypeScript</span>
              <span className="px-2 py-1 brutalist-border font-label-caps">Vanilla Extract</span>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-surface-bright dark:bg-terminal-black flex flex-col">
          <div className="flex justify-between items-center p-2 brutalist-border-b bg-terminal-black/5 dark:bg-surface-bright/10 font-code-sm uppercase">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-terminal-black dark:bg-surface-bright"></div>
              <span>DATA.VIZ_DASH</span>
            </div>
            <span>BETA</span>
          </div>
          <div className="p-4 flex-grow flex flex-col gap-4">
            <div className="w-full h-48 bg-terminal-black brutalist-border relative overflow-hidden group">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBn6AGG2RxuAqyUOtiHfB4arsvyiyzEY9fcBo8ojasDjXR71BmBNwl4N4JUeq8gKY22sleHDZlbMu2Sv4abiVnhlXoMwJq5X4dTNd-YaoR5Oeeu7chZwmvoBH_-TFdHIt96BPmMZvU8FZEjdk_qTWfRRvVImZWuTYdxm22ytTs2nZ8RDG4ri-YHLFcsNn4SMs3KSWF3WpgqMOd2Ub5eQ0H02QPZPjUffmsFJ-Y2dDWKdjnQp_ToMXcy2BLMK_qh5c5EcV9P5sDGzQ" 
                alt="Dashboard" 
                className="w-full h-full object-cover grayscale opacity-60 mix-blend-luminosity group-hover:opacity-100 transition-opacity"
              />
            </div>
            <p className="font-code-sm text-terminal-black/80 dark:text-surface-bright/80">
              Real-time telemetry dashboard rendering millions of data points using WebGL and optimized Canvas APIs.
            </p>
            <div className="flex gap-2 mt-auto flex-wrap">
              <span className="px-2 py-1 brutalist-border font-label-caps">Vue 3</span>
              <span className="px-2 py-1 brutalist-border font-label-caps">WebGL</span>
              <span className="px-2 py-1 brutalist-border font-label-caps">D3.js</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
