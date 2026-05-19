import { useTranslation } from '../hooks/useTranslation';

interface Props {
  id: string;
  title: string;
}

export default function SectionHeader({ id, title }: Props) {
  const t = useTranslation();

  return (
    <div className="flex items-center gap-4 font-label-caps text-terminal-black/80 dark:text-surface-bright/80 uppercase">
      <span className="text-infrastructure-orange">//</span>
      <span>{t.sectionHeader.prefix}: {title}</span>
      <div className="grow border-t border-dashed border-terminal-black/30 dark:border-surface-bright/30"></div>
      <span>{id}</span>
    </div>
  );
}
