import { BrowserRouter } from 'react-router-dom';
import { screen } from '@testing-library/react';
import CarrinhoModal from './CarrinhoModal';
import { ProdutosContextProvider } from '../contexts/ProdutosContext';
import userEvent from '@testing-library/user-event';
import { renderComTema } from '../test-utils';
import store from '../store';
import { Provider } from 'react-redux';

function renderComProvedores() {
  return renderComTema(
    <BrowserRouter future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
      <ProdutosContextProvider>
        <Provider store={store}>
          <CarrinhoModal />
        </Provider>
      </ProdutosContextProvider>
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