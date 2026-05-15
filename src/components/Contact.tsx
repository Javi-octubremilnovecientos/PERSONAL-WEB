import React from 'react';
import SectionHeader from './SectionHeader';

export default function Contact() {
  return (
    <section className="space-y-6">
      <SectionHeader id="004" title="INIT_CONNECTION" />
      
      <div className="brutalist-border bg-surface-bright dark:bg-terminal-black p-8 text-center space-y-6">
        <h2 className="font-headline-lg font-bold uppercase">AVAILABLE FOR DEPLOYMENT</h2>
        <p className="max-w-2xl mx-auto font-code-sm text-terminal-black/80 dark:text-surface-bright/80">
          Currently accepting opportunities for senior frontend roles focusing on infrastructure, developer tooling, or high-performance applications.
        </p>
        
        <button className="mx-auto flex items-center gap-2 bg-terminal-black text-surface-bright dark:bg-surface-bright dark:text-terminal-black brutalist-border px-6 py-3 font-label-caps uppercase hover:bg-infrastructure-orange dark:hover:bg-infrastructure-orange transition-colors active:translate-y-0.5 cursor-pointer">
          <span className="w-2 h-2 bg-infrastructure-orange block border border-transparent dark:border-terminal-black border-surface-bright"></span>
          DOWNLOAD CV (PDF)
        </button>
      </div>
    </section>
  );
}
