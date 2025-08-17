import ProductGrid from './ProductGrid';
import { screen } from '@testing-library/react';
import { criaMockDeStore, renderComTema } from '../test-utils';
import { Provider } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

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

/*jest.mock('../services/productService', () => ({
  //...(jest.requireActual('../services/productService')),
  getProdutos: async () => mockDoisProdutos
}));
jest.mock('../store/api/apiSlice.ts', () => ({
  useGetProductsQuery: () => ({ data: mockDoisProdutos, isLoading: false, error: null })
}));*/

function criarMockStoreComSearch(search: string) {
  return configureStore({
    reducer: {
      search: createSlice({
        name: 'search',
        initialState: search,
        reducers: { }
      }).reducer
    }
  });
}

test('"ProductGrid" deve renderizar dois produtos', async () => {
  const mockStore = criaMockDeStore();
  renderComTema(
    <Provider store={mockStore}>
      <ProductGrid products={mockDoisProdutos} />
    </Provider>);
  const divsComprar = await screen.findAllByText('Comprar');
  expect(divsComprar).toHaveLength(2);
});

test('"ProductGrid" deve renderizar somente o produto que menciona UVA', async () => {
  const storeUVA = criarMockStoreComSearch('UVA');
  renderComTema(
    <Provider store={storeUVA}>
      <ProductGrid products={mockDoisProdutos} />
    </Provider>);
  const divsComprar = await screen.findAllByText('Comprar');
  expect(divsComprar).toHaveLength(1);
});

test('"ProductGrid" deve ser renderizado sem produtos, pois nenhum contém magma', async () => {
  const storeMagma = criarMockStoreComSearch('magma');
  renderComTema(
    <Provider store={storeMagma}>
      <ProductGrid products={mockDoisProdutos} />
    </Provider>);
  const divNenhumProdutoEncontrado = await screen.findByText('Nenhum produto atende aos critérios de busca');
  expect(divNenhumProdutoEncontrado).toBeInTheDocument();
});