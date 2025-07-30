import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { SearchContextProvider } from '../contexts/SearchContext';
import Header from './Header';
import userEvent from '@testing-library/user-event';

const mockItensCarrinho = [{id: 1, quantidade: 1}];

jest.mock('../contexts/CartContext', () => ({
  useCarrinhoContext: () => ({
    itensCarrinho: mockItensCarrinho
  }),
}));

const mockProducts = [
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
  }];

jest.mock('../contexts/ProdutosContext', () => ({
  useProductsContext: () => ({
    products: mockProducts
  })
}));

function renderComProvedores() {
  render(<Header />, { // ou poderia ter botado Router e Provider direto no primeiro argumento
    wrapper: ({children}) => (<BrowserRouter future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
      <SearchContextProvider>
        { children }
      </SearchContextProvider>
    </BrowserRouter>)
  });
}

test('O texto digitado na barra de pesquisa deve ser estar lá.', () => {
  renderComProvedores();
  const inputPesquisa = screen.getByTestId('input_pesquisa');
  userEvent.click(inputPesquisa);
  userEvent.keyboard('UVA');
  expect(inputPesquisa).toHaveValue('UVA');
});

test('Deve ir para o URI da âncora para os resultados quando o botão da pesquisa for clicado.', () => {
  renderComProvedores();

  Object.defineProperty(window, 'location', {
    value: { replace: jest.fn() }
  });

  const inputPesquisa = screen.getByTestId('input_pesquisa');
  userEvent.click(inputPesquisa);
  userEvent.keyboard('UVA');
  const botaoBusca = screen.getByTestId('botao_lupa');
  userEvent.click(botaoBusca);

  expect(window.location.replace).toHaveBeenCalledWith('#resultado_da_busca');
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