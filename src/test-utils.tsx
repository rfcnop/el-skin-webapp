import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import tema from './styles/theme';
import { configureStore } from '@reduxjs/toolkit';
import searchSliceReducer from './store/slices/searchSlice';
import cartSliceReducer from './store/slices/cartSlice';
import productsSliceReducer from './store/slices/productsSlice';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

export function criaMockDeStore() {
  return configureStore({
    reducer: {
      search: searchSliceReducer,
      cart: cartSliceReducer,
      products: productsSliceReducer
    }
  });
}

export const criaProviderWrapper = (store: ReturnType<typeof criaMockDeStore>) => {
  const wrapper = ({ children }: { children: ReactNode }) =>
    (
      <Provider store={store}>
        {children}
      </Provider>
    );
  wrapper.displayName = 'Wrapper de <Provider store={?}>';
  return wrapper;
};

export function renderComTema(ui: React.ReactNode) {
  render(
    <ThemeProvider theme={tema}>
      { ui }
    </ThemeProvider>
  );
}