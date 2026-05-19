export type ThemeMode = 'dark' | 'light';
export type ThemeState = { mode: ThemeMode };
export type ThemeAction = { type: 'TOGGLE_THEME' } | { type: 'SET_THEME'; payload: ThemeMode };

const initialState: ThemeState = { mode: 'light' };

export function themeReducer(state = initialState, action: ThemeAction): ThemeState {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { mode: state.mode === 'dark' ? 'light' : 'dark' };
    case 'SET_THEME':
      return { mode: action.payload };
    default:
      return state;
  }
}

export const toggleTheme = (): ThemeAction => ({ type: 'TOGGLE_THEME' });
export const setTheme = (mode: ThemeMode): ThemeAction => ({ type: 'SET_THEME', payload: mode });
