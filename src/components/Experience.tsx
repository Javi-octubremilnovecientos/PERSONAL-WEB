import SectionHeader from './SectionHeader';
import { useTranslation } from '../hooks/useTranslation';

export default function Experience() {
  const t = useTranslation();

  return (
    <section className="space-y-12">
      <SectionHeader id="004" title={t.experience.sectionTitle} />

      <div className="brutalist-border bg-surface-bright dark:bg-terminal-black p-4 md:p-8 relative">
        {/* Vertical Line */}
        <div className="absolute left-6.75 md:left-10.75 top-8 bottom-8 w-px bg-terminal-black dark:bg-surface-bright hidden sm:block"></div>

        <div className="space-y-12">
          {/* Role 1 */}
          <div className="flex gap-4 md:gap-8 relative z-10">
            <div className="w-6 h-6 mt-1 shrink-0 bg-surface-bright dark:bg-terminal-black brutalist-border flex items-center justify-center sm:flex">
              <div className="w-2 h-2 bg-terminal-black"></div>
            </div>
            <div className="grow border-b border-dashed border-terminal-black/30 dark:border-surface-bright/30 pb-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2 gap-2">
                <h3 className="font-headline-md font-bold uppercase">{t.experience.role1Title}</h3>
                <span className="font-code-sm text-terminal-black/80 dark:text-surface-bright/80 bg-terminal-black/5 dark:bg-surface-bright/10 px-2 py-1 brutalist-border inline-block self-start">{t.experience.role1Date}</span>
              </div>
              <div className="font-code-sm uppercase mb-4 text-terminal-black/80 dark:text-surface-bright/80">DXC TECHNOLOGY</div>
              <p className="font-body-md text-terminal-black/80 dark:text-surface-bright/80">
                {t.experience.role1Description}
              </p>
            </div>
          </div>

          {/* Role 2 */}
          <div className="flex gap-4 md:gap-8 relative z-10">
            <div className="w-6 h-6 mt-1 shrink-0 bg-surface-bright dark:bg-terminal-black brutalist-border flex items-center justify-center sm:flex">
              <div className="w-2 h-2 bg-terminal-black dark:bg-surface-bright"></div>
            </div>
            <div className="grow border-b border-dashed border-terminal-black/30 dark:border-surface-bright/30 pb-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2 gap-2">
                <h3 className="font-headline-md font-bold uppercase">{t.experience.role2Title}</h3>
                <span className="font-code-sm text-terminal-black/80 dark:text-surface-bright/80 bg-terminal-black/5 dark:bg-surface-bright/10 px-2 py-1 brutalist-border inline-block self-start">{t.experience.role2Date}</span>
              </div>
              <div className="font-code-sm uppercase mb-4 text-terminal-black/80 dark:text-surface-bright/80">DIGITAL KUBIC</div>
              <p className="font-body-md text-terminal-black/80 dark:text-surface-bright/80">
                {t.experience.role2Description}
              </p>
            </div>
          </div>

          {/* Role 3 */}
          <div className="flex gap-4 md:gap-8 relative z-10">
            <div className="w-6 h-6 mt-1 shrink-0 bg-surface-bright dark:bg-terminal-black brutalist-border flex items-center justify-center  sm:flex">
              <div className="w-2 h-2 bg-terminal-black dark:bg-surface-bright"></div>
            </div>
            <div className="grow">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2 gap-2">
                <h3 className="font-headline-md font-bold uppercase">{t.experience.role3Title}</h3>
                <span className="font-code-sm text-terminal-black/80 dark:text-surface-bright/80 bg-terminal-black/5 dark:bg-surface-bright/10 px-2 py-1 brutalist-border inline-block self-start">{t.experience.role3Date}</span>
              </div>
              <div className="font-code-sm uppercase mb-4 text-terminal-black/80 dark:text-surface-bright/80">FREELANCER</div>
              <p className="font-body-md text-terminal-black/80 dark:text-surface-bright/80">
                {t.experience.role3Description}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
