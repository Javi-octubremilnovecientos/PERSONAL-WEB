import React from 'react';

export default function Hero() {
  return (
    <section className="text-center space-y-8 h-screen overflow-hidden">
      <h2
        className="font-display-lg-mobile md:font-display-lg uppercase tracking-widest relative inline-block mx-auto flex justify-center text-transparent bg-clip-text"
        style={{
          backgroundImage: 'radial-gradient(circle, var(--text-color) 1px, transparent 1px)',
          backgroundSize: '3px 3px',
          filter: 'drop-shadow(rgba(0, 0, 0, 0.1) 1px 1px 0px)'
        }}
        aria-label="FRONT.END.DEV"
      >
        front.end.dev
      </h2>

      <div className="flex justify-center items-center py-12 relative max-w-2xl mx-auto">
        <div className="flex justify-between items-center w-full absolute top-1/2 left-0 -translate-y-1/2 z-0 px-12">
          <div className="h-px border-t border-dashed border-terminal-black/30 dark:border-surface-bright/30 w-1/3"></div>
          <div className="h-px border-t border-dashed border-terminal-black/30 dark:border-surface-bright/30 w-1/3"></div>
        </div>

        <div className="flex flex-col gap-4 z-10 mr-4 md:mr-12 bg-surface-bright p-2 brutalist-border text-terminal-black dark:text-surface-bright dark:bg-terminal-black">
          <div className="px-4 py-1 font-label-caps" style={{cursor:"pointer"}}>BIO</div>
          <div className="px-4 py-1 font-label-caps" style={{cursor:"pointer"}}>PROJECTS</div>
          <div className="px-4 py-1 font-label-caps" style={{cursor:"pointer"}}>SKILLS</div>
        </div>

        <div className="z-10 w-16 h-16 brutalist-border flex items-center justify-center bg-surface-bright dark:bg-terminal-black text-terminal-black dark:text-surface-bright relative">
          <div className="w-2 h-2 bg-infrastructure-orange absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <span className="text-2xl font-bold text-terminal-black dark:text-surface-bright">*</span>
        </div>

        <div className="flex flex-col gap-4 z-10 ml-4 md:ml-12 bg-surface-bright p-2 brutalist-border text-terminal-black dark:text-surface-bright dark:bg-terminal-black">
          <div className="px-4 py-1 font-label-caps" style={{cursor:"pointer"}}>WORKFLOW</div>
          <div className="px-4 py-1 font-label-caps" style={{cursor:"pointer"}}>CV</div>
          <div className="px-4 py-1 font-label-caps" style={{cursor:"pointer"}}>CONTACT</div>
        </div>
      </div>


    </section>
  );
}
