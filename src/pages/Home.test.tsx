import { screen } from '@testing-library/react';
import Home from './Home';
import { ProdutosContextProvider } from '../contexts/ProdutosContext';
import { renderComTema } from '../test-utils';
import { Provider } from 'react-redux';
import store from '../store';

test('Tela "Home" deve ser renderizada', () => {
  renderComTema(
    <ProdutosContextProvider>
      <Provider store={store}>
        <Home />
      </Provider>
    </ProdutosContextProvider>);
  expect(screen.getByTestId('main_home')).toBeInTheDocument();
});