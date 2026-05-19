import { legacy_createStore as createStore, combineReducers } from 'redux';
import { themeReducer } from './themeSlice';
import { languageReducer } from './languageSlice';

export { toggleTheme, setTheme } from './themeSlice';
export type { ThemeMode, ThemeState } from './themeSlice';
export { toggleLanguage, setLanguage } from './languageSlice';
export type { Language, LanguageState } from './languageSlice';

const rootReducer = combineReducers({
  theme: themeReducer,
  language: languageReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
