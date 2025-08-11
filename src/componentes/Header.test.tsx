import { BrowserRouter } from 'react-router-dom';
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

function renderComProvedores() {
  const mockStore = criaMockDeStore();
  render(<Header />, { // ou poderia ter botado Router e Provider direto no primeiro argumento
    wrapper: ({children}) => (
      <ThemeProvider theme={tema}>
        <BrowserRouter future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
          <Provider store={mockStore}>
            { children }
          </Provider>
        </BrowserRouter>
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