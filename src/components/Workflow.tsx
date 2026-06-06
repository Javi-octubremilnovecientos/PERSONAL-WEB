import SectionHeader from './SectionHeader';
import { useTranslation } from '../hooks/useTranslation';

export default function Worflow() {
  const t = useTranslation();

  return (
    <section className="space-y-12">
      <SectionHeader id="004" title={t.workflow.sectionTitle} />
   <h4>THIS SECTION IS ON DEVELOP..🛠️🚧</h4>

      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-terminal-black dark:bg-surface-bright brutalist-border">
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
      </div> */}
    </section>
  );
}
