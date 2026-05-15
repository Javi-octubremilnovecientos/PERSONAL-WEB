import React from 'react';

interface Props {
  id: string;
  title: string;
}

export default function SectionHeader({ id, title }: Props) {
  return (
    <div className="flex items-center gap-4 font-label-caps text-terminal-black/80 dark:text-surface-bright/80 uppercase">
      <span className="text-infrastructure-orange">//</span>
      <span>SECTION: {title}</span>
      <div className="flex-grow border-t border-dashed border-terminal-black/30 dark:border-surface-bright/30"></div>
      <span>{id}</span>
    </div>
  );
}
