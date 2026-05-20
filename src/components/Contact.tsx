import SectionHeader from './SectionHeader';
import { useTranslation } from '../hooks/useTranslation';

export default function Contact() {
  const t = useTranslation();

  return (
    <section className="space-y-12">
      <SectionHeader id="005" title={t.contact.sectionTitle} />

      <div className="brutalist-border bg-surface-bright dark:bg-terminal-black p-8 text-center space-y-6">
        <h2 className="font-headline-lg font-bold uppercase">{t.contact.heading}</h2>
        <p className="max-w-2xl mx-auto font-code-sm text-terminal-black/80 dark:text-surface-bright/80">
          {t.contact.description}
        </p>

        <div className="flex flex-col sm:flex-row justify-around sm:px-48 gap-6 sm:gap-8 font-code-sm text-terminal-black/80 dark:text-surface-bright/80">
          <a href="tel:+34678864690" className="flex items-center justify-center gap-2 text-lg hover:text-infrastructure-orange transition-colors">
            <span className="w-1.5 h-1.5 bg-infrastructure-orange inline-block "></span>
            +34 678 86 46 90
          </a>
          <a href="mailto:javier.lombar2@gmail.com" className="flex items-center justify-center gap-2 hover:text-infrastructure-orange transition-colors text-lg">
            <span className="w-1.5 h-1.5 bg-infrastructure-orange inline-block"></span>
            javier.lombar2@gmail.com
          </a>
          <span className="flex items-center justify-center gap-2 text-lg">
            <span className="w-1.5 h-1.5 bg-infrastructure-orange inline-block "></span>
            {t.contact.location}
          </span>
        </div>

        <a
          href="/javier-lombardia-cv.pdf"
          download="Javier-Lombardia-CV.pdf"
          type="application/pdf"
          className="w-fit mx-auto flex items-center gap-2 bg-terminal-black text-surface-bright dark:bg-surface-bright dark:text-terminal-black brutalist-border px-6 py-3 font-label-caps uppercase hover:bg-infrastructure-orange dark:hover:bg-infrastructure-orange transition-colors active:translate-y-0.5 cursor-pointer"
        >
          <span className="w-2 h-2 bg-infrastructure-orange block border  dark:border-terminal-black border-surface-bright"></span>
          {t.contact.downloadCv}
        </a>
      </div>
    </section>
  );
}
