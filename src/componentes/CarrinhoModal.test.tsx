import { BrowserRouter } from 'react-router-dom';
import { screen } from '@testing-library/react';
import CarrinhoModal from './CarrinhoModal';
import userEvent from '@testing-library/user-event';
import { criaMockDeStore, renderComTema } from '../test-utils';
import { Provider } from 'react-redux';

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

jest.mock('../store/api/apiSlice.ts', () => ({
  useGetProductsQuery: () => ({ data: mockDoisProdutos, isLoading: false, error: null })
}));

function renderComProvedores() {
  const mockStore = criaMockDeStore();
  return renderComTema(
    <BrowserRouter future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
      <Provider store={mockStore}>
        <CarrinhoModal />
      </Provider>
    </BrowserRouter>);
}

test('Deve fechar o carrinho modal usando a tecla ESC', () => {
  renderComProvedores();
  const divOverlay = screen.getByTestId('div_carrinho_modal_overlay');
  divOverlay.style.display = 'unset';
  
  divOverlay.focus();
  userEvent.keyboard('{Escape}');
  expect(divOverlay.style.display).not.toBe('unset');
});

test('Deve fechar o carrinho modal clicando no overlay', () => {
  renderComProvedores();

  const divOverlay = screen.getByTestId('div_carrinho_modal_overlay');
  divOverlay.style.display = 'unset';

  userEvent.click(divOverlay);
  expect(divOverlay.style.display).not.toBe('unset');
});

test('O carrinho modal deve ser fechado clicando no botao de fechar', () => {
  renderComProvedores();

  const divOverlay = screen.getByTestId('div_carrinho_modal_overlay');
  divOverlay.style.display = 'unset';

  const botaoFechar = screen.getByTestId('botao_fechar_carrinho');
  userEvent.click(botaoFechar);
  expect(divOverlay.style.display).not.toBe('unset');
});