export type Language = 'en' | 'es';
export type LanguageState = { lang: Language };
type LanguageAction = { type: 'TOGGLE_LANGUAGE' } | { type: 'SET_LANGUAGE'; payload: Language };

const initialState: LanguageState = { lang: 'en' };

export function languageReducer(state = initialState, action: LanguageAction): LanguageState {
  switch (action.type) {
    case 'TOGGLE_LANGUAGE':
      return { lang: state.lang === 'en' ? 'es' : 'en' };
    case 'SET_LANGUAGE':
      return { lang: action.payload };
    default:
      return state;
  }
}

export const toggleLanguage = (): LanguageAction => ({ type: 'TOGGLE_LANGUAGE' });
export const setLanguage = (lang: Language): LanguageAction => ({ type: 'SET_LANGUAGE', payload: lang });
