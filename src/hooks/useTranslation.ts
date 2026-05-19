import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { translations, Translations } from '../i18n';

export function useTranslation(): Translations {
  const lang = useSelector((state: RootState) => state.language.lang);
  return translations[lang];
}
