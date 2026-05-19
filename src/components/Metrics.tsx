import React from 'react';
import SectionHeader from './SectionHeader';

export default function Metrics() {
  const metrics = [
    { title: 'REACT_ECOSYSTEM', value: '99%', label: 'PROFICIENCY' },
    { title: 'TYPESCRIPT', value: '95%', label: 'TYPE_SAFETY' },
    { title: 'TAILWIND_CSS', value: '85%', label: 'SCALABILITY' },
    { title: 'SUPABASE + PostSQL', value: '60%', label: 'BACKEND' },
    { title: 'ZUSTAND', value: '99%', label: 'STATE_MANAGING' },
    { title: 'RTK_QUERY', value: '79%', label: 'STATE_MANAGING' },
    { title: 'TANSTACK-query', value: '99%', label: 'API_CACHING_MANAGING' },
    { title: 'CLAUDE_ECOSYSTEM', value: '76%', label: 'AI_ASSIST_WORKFLOWS' },
  ];

  return (
    <section className="space-y-12">
      <SectionHeader id="003" title="SKILLS" />
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-terminal-black dark:bg-surface-bright brutalist-border">
        {metrics.map((metric, i) => (
          <div key={i} className="bg-surface-bright dark:bg-terminal-black p-4 flex flex-col gap-2 relative">
            <div className="font-code-sm uppercase text-terminal-black/80 dark:text-surface-bright/80 flex justify-between">
              <span>{metric.title}</span>
              <div className="w-1.5 h-1.5 bg-infrastructure-orange mt-1"></div>
            </div>
            <div className="font-headline-lg font-bold">
              {metric.value}
            </div>
            <div className="font-code-sm text-terminal-black/80 dark:text-surface-bright/80">
              {metric.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
