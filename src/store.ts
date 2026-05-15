import { configureStore, createSlice } from '@reduxjs/toolkit';

const getInitialTheme = (): 'dark' | 'light' => {
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'dark';
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    mode: getInitialTheme(),
  },
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'dark' ? 'light' : 'dark';
     
    },
    setTheme: (state, action) => {
      state.mode = action.payload;
    }
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
