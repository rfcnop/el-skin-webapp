import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import tema from './styles/theme';
import { configureStore } from '@reduxjs/toolkit';
import searchSliceReducer from './store/slices/searchSlice';
import cartSliceReducer from './store/slices/cartSlice';

export function criaMockDeStore() {
  return configureStore({
    reducer: {
      search: searchSliceReducer,
      cart: cartSliceReducer
    }
  });
}

export function renderComTema(ui: React.ReactNode) {
  render(
    <ThemeProvider theme={tema}>
      { ui }
    </ThemeProvider>
  );
}