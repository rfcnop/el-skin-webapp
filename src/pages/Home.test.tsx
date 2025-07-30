import { render, screen } from '@testing-library/react';
import Home from './Home';
import { ProdutosContextProvider } from '../contexts/ProdutosContext';
import { SearchContextProvider } from '../contexts/SearchContext';

test('Tela "Home" deve ser renderizada', () => {
  render(
    <ProdutosContextProvider>
      <SearchContextProvider>
        <Home />
      </SearchContextProvider>
    </ProdutosContextProvider>);
  expect(screen.getByTestId('main_home')).toBeInTheDocument();
});