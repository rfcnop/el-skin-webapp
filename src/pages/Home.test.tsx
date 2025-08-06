import { screen } from '@testing-library/react';
import Home from './Home';
import { ProdutosContextProvider } from '../contexts/ProdutosContext';
import { SearchContextProvider } from '../contexts/SearchContext';
import { renderComTema } from '../test-utils';

test('Tela "Home" deve ser renderizada', () => {
  renderComTema(
    <ProdutosContextProvider>
      <SearchContextProvider>
        <Home />
      </SearchContextProvider>
    </ProdutosContextProvider>);
  expect(screen.getByTestId('main_home')).toBeInTheDocument();
});