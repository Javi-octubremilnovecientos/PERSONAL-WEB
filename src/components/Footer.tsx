import { useTranslation } from '../hooks/useTranslation';

export default function Footer() {
  const t = useTranslation();

  return (
    <footer className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-8 gap-4 bg-surface-bright dark:bg-terminal-black border-t-2 border-terminal-black dark:border-surface-bright w-full mt-20 mb-16 md:mb-0">
      <div className="font-label-caps text-infrastructure-orange">
        JAVIER.LOMBARDERO
      </div>

      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {['GITHUB', 'LINKEDIN', 'STACK_OVERFLOW', 'RESUME'].map((link) => (
          <a
            key={link}
            href="#"
            className="font-code-sm uppercase tracking-widest text-terminal-black/60 dark:text-surface-bright/60 hover:text-infrastructure-orange dark:hover:text-infrastructure-orange underline decoration-[1.5px] cursor-crosshair transition-colors"
          >
            {link}
          </a>
        ))}
      </div>

      <div className="font-code-sm uppercase tracking-widest text-terminal-black dark:text-surface-bright">
        {t.footer.copyright}
      </div>
    </footer>
  );
}
