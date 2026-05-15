import React from 'react';
import { HomeIcon, CommandLineIcon, ChartBarIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-between items-center bg-surface-bright dark:bg-terminal-black border-t-2 border-terminal-black dark:border-surface-bright pb-safe">
      <a href="#" className="flex-1 flex flex-col items-center justify-center py-2 bg-infrastructure-orange text-terminal-black border-r border-terminal-black dark:border-surface-bright">
        <HomeIcon className="w-6 h-6 mb-1" />
        <span className="font-label-caps uppercase text-[10px]">ROOT</span>
      </a>
      <a href="#" className="flex-1 flex flex-col items-center justify-center py-2 hover:bg-terminal-black/5 dark:hover:bg-surface-bright/10 transition-colors border-r border-terminal-black dark:border-surface-bright">
        <CommandLineIcon className="w-6 h-6 mb-1" />
        <span className="font-label-caps uppercase text-[10px]">CODE</span>
      </a>
      <a href="#" className="flex-1 flex flex-col items-center justify-center py-2 hover:bg-terminal-black/5 dark:hover:bg-surface-bright/10 transition-colors border-r border-terminal-black dark:border-surface-bright">
        <ChartBarIcon className="w-6 h-6 mb-1" />
        <span className="font-label-caps uppercase text-[10px]">PATH</span>
      </a>
      <a href="#" className="flex-1 flex flex-col items-center justify-center py-2 hover:bg-terminal-black/5 dark:hover:bg-surface-bright/10 transition-colors">
        <EnvelopeIcon className="w-6 h-6 mb-1" />
        <span className="font-label-caps uppercase text-[10px]">PING</span>
      </a>
    </nav>
  );
}
