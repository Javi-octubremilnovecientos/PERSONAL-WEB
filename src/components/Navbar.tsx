import React from 'react';
import { CommandLineIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, toggleTheme } from '../store';

export default function Navbar() {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.theme.mode);

  return (
    <header className="fixed top-0 left-0 w-full z-50 grid grid-cols-2 sm:grid-cols-3 items-center px-4 md:px-12 h-20 bg-surface-bright/80 dark:bg-terminal-black/80  brutalist-border-b">
      <div className="hidden sm:block"></div>
      <div className="flex items-center justify-start sm:justify-center gap-2">
        <CommandLineIcon className="hidden lg:block w-6 h-6 text-terminal-black dark:text-surface-bright" />
        <h1 className="text-nowrap sm:font-headline-md uppercase tracking-tighter text-terminal-black dark:text-surface-bright">
          JAVIER.LOMBARDERO // V2.0
        </h1>
      </div>
      <div className="flex justify-end">
      <button
        onClick={() => dispatch(toggleTheme())}
        className="p-2 brutalist-border hover:bg-surface-container dark:hover:bg-surface-bright/10 active:translate-x-[2px] active:translate-y-[2px] transition-all cursor-pointer"
        aria-label="Toggle theme"
      >
        {mode === 'dark' ? (
          <SunIcon className="w-5 h-5 text-surface-bright" />
        ) : (
          <MoonIcon className="w-5 h-5 text-terminal-black" />
        )}
      </button>
      </div>
    </header>
  );
}
