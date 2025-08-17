import { render, screen } from '@testing-library/react';
import Header from './Header';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import tema from '../styles/theme';
import { Provider } from 'react-redux';
import { criaMockDeStore } from '../test-utils';

const mockItensCarrinho = [{id: 1, quantidade: 1}];

jest.mock('../hooks/useCart', () => ({
  useCart: () => ({
    itensCarrinho: mockItensCarrinho
  }),
}));

const mockDoisProdutos = [
  {
    id: 1,
    name: 'Creme Hidratante Facial',
    description: 'Creme nutritivo para hidratação profunda da pele do rosto, com extrato de aloe vera.',
    price: 45.99,
    image: '/assets/prod1.jpg',
    tags: [
      'face',
      'hydration'
    ]
  },
  {
    id: 2,
    name: 'Protetor Solar SPF 50',
    description: 'Protetor solar de alta proteção contra raios UVA/UVB, resistente à água.',
    price: 89.90,
    image: '/assets/prod2.jpg',
    tags: [
      'protection',
      'sun'
    ]
  }];

/*jest.mock('../store/api/apiSlice.ts', () => ({
  useGetCarouselItemsQuery: () => ({ data: mockCarousel, isLoading: false, error: null }),
  useGetProductsQuery: () => ({ data: mockDoisProdutos, isLoading: false, error: null })
}));*/

jest.mock('../hooks/useProducts.ts', () => ({
  default: () => ({ products: mockDoisProdutos }),
  __esModule: true
}));

function renderComProvedores() {
  const mockStore = criaMockDeStore();
  render(<Header />, { // ou poderia ter botado Router e Provider direto no primeiro argumento
    wrapper: ({children}) => (
      <ThemeProvider theme={tema}>
        <Provider store={mockStore}>
          { children }
        </Provider>
      </ThemeProvider>)
  });
}

test('O texto digitado na barra de pesquisa deve ser estar lá.', () => {
  renderComProvedores();
  const inputPesquisa = screen.getByTestId('input_pesquisa');
  userEvent.click(inputPesquisa);
  userEvent.keyboard('UVA');
  expect(inputPesquisa).toHaveValue('UVA');
});

test('Deve abrir o carrinho quando clicar na sacola e fechá-lo quando clicar novamente.', () => {
  renderComProvedores();

  const botaoCarrinho = screen.getByTestId('botao_sacola');
  userEvent.click(botaoCarrinho);
  const divOverlay = screen.getByTestId('div_carrinho_modal_overlay');
  expect(divOverlay.style.display).toBe('unset');

  userEvent.click(botaoCarrinho);
  expect(divOverlay.style.display).not.toBe('unset');
});

test('Mostrar a quantidade de itens no carrinho ao lado do botão que o abre', () => {
  renderComProvedores();

  const spanQuantidadeCarrinho = screen.getByTestId('span_texto_quantidade_carrinho');
  expect(spanQuantidadeCarrinho.innerHTML).toBe('1');
});