import { screen } from '@testing-library/react';
import ProductCard from './ProductCard';
import IProduct from '../types/IProduct';
import userEvent from '@testing-library/user-event';
import { renderComTema } from '../test-utils';
import { Provider } from 'react-redux';
import store from '../store';
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import IItemCarrinho from '../types/IItemCarrinho';

const produto: IProduct = {
  id: 1,
  name: 'Creme Hidratante Facial',
  description: 'Creme nutritivo para hidratação profunda da pele do rosto, com extrato de aloe vera.',
  price: 45.99,
  image: '/assets/prod1.jpg',
  tags: [
    'protection',
    'face',
    'hydration',
    'sun',
    'cleansing',
    'anti-aging',
    'lips',
    'exfoliation',
    'toning',
    'body'
  ]
};

test('"ProductCard" deve ser renderizada', () => {
  renderComTema(
    <Provider store={store}>
      <ProductCard product={produto} />
    </Provider>);
  expect(screen.getByText(produto.name)).toBeInTheDocument();
});

test('Todas as tags de "ProductCard" devem ser renderizadas', () => {
  renderComTema(
    <Provider store={store}>
      <ProductCard product={produto} />
    </Provider>);
  for (const tag of produto.tags)
    expect(screen.getByText(tag)).toBeInTheDocument();
});

test('Deve renderizar tag desconhecida com fundo preto', () => {
  const produtoComTagDesconhecida = {...produto, tags: [...produto.tags, 'toe']};
  renderComTema(
    <Provider store={store}>
      <ProductCard product={produtoComTagDesconhecida} />
    </Provider>);
  expect(screen.getByText('toe').style.backgroundColor).toBe('rgb(0, 0, 0)');
});

test('Deve adicionar produto ao carrinho quando o botão for clicado', () => {
  const addProduct = jest.fn();
  const storeAddProduto = configureStore({
    reducer: {
      cart: createSlice({
        name: 'cart',
        initialState: [],
        reducers: {
          addProduto: (state, action: PayloadAction<IItemCarrinho>) => addProduct(action.payload.productId)
        }
      }).reducer
    }
  });

  renderComTema(
    <Provider store={storeAddProduto}>
      <ProductCard product={produto} />
    </Provider>);
    
  const botaoComprar = screen.getByTestId('botao_comprar');
  userEvent.click(botaoComprar);
  expect(addProduct).toBeCalledWith(produto.id);
  expect(addProduct).toBeCalledTimes(1);
});