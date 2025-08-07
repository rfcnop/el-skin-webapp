import { screen } from '@testing-library/react';
import CarrinhoModalItem from './CarrinhoModalItem';
import IProduct from '../types/IProduct';
import IItemCarrinho from '../types/IItemCarrinho';
import userEvent from '@testing-library/user-event';
import { ProdutosContextProvider } from '../contexts/ProdutosContext';
import { renderComTema } from '../test-utils';
import { Provider } from 'react-redux';
import store from '../store';

const produto: IProduct = {
  id: 1,
  name: 'Creme Hidratante Facial',
  description: 'Creme nutritivo para hidratação profunda da pele do rosto, com extrato de aloe vera.',
  price: 45.99,
  image: '/assets/prod1.jpg',
  tags: [
    'protection',
    'face',
  ]
};

const mockItemCarrinho: IItemCarrinho = {
  productId: 1,
  quantidade: 2
};

const mockUpdateQuantidade = jest.fn();

const mockRemoveProduct = jest.fn();

jest.mock('../hooks/useCart', () => ({
  ...jest.requireActual('../hooks/useCart'),
  useCart: () => ({
    itensCarrinho: mockItemCarrinho,
    updateQuantidade: mockUpdateQuantidade,
    removeProduct: mockRemoveProduct
  })
}));

function renderComProvedoresEProps() {
  renderComTema(
    <ProdutosContextProvider>
      <Provider store={store}>
        <CarrinhoModalItem produto={produto} itemCarrinho={mockItemCarrinho} />
      </Provider>
    </ProdutosContextProvider>
  );
}

test('Deve chamar a função updateQuantidade para aumentar em 1 a quantidade do produto no carrinho', () => {
  renderComProvedoresEProps();

  const botaoMais = screen.getByTestId('botao_quantidade_item_carrinho_modal_mais');
  userEvent.click(botaoMais);

  expect(mockUpdateQuantidade).toHaveBeenCalledTimes(1);
  expect(mockUpdateQuantidade).toHaveBeenCalledWith(mockItemCarrinho.productId, mockItemCarrinho.quantidade + 1);
});

test('Deve chamar a função updateQuantidade para diminuir em 1 a quantidade do produto no carrinho', () => {
  renderComProvedoresEProps();

  const botaoMais = screen.getByTestId('botao_quantidade_item_carrinho_modal_menos');
  userEvent.click(botaoMais);

  expect(mockUpdateQuantidade).toHaveBeenCalledTimes(1);
  expect(mockUpdateQuantidade).toHaveBeenCalledWith(mockItemCarrinho.productId, mockItemCarrinho.quantidade - 1);
});

test('Deve chamar a função removeProduct para remover o produto do carrinho', () => {
  renderComProvedoresEProps();

  const botaoRemover = screen.getByTestId('botao_item_remover_carrinho_modal');
  userEvent.click(botaoRemover);

  expect(mockRemoveProduct).toHaveBeenCalledTimes(1);
  expect(mockRemoveProduct).toHaveBeenCalledWith(mockItemCarrinho.productId);
});
