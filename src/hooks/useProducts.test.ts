import { act } from 'react';
import { renderHook } from '@testing-library/react';
import { criaMockDeStore, criaProviderWrapper } from '../test-utils';
import useProducts from './useProducts';

const mockProduto =
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
  };

jest.mock('../services/productService', () => ({
  //...(jest.requireActual('../services/productService')),
  getProdutoById: async (id: number) => {
    if (id === 1)
      return mockProduto;
    return Promise.reject('Erro. Não há produto com esse número.');
  },
  getProdutos: async () => {
    return Promise.reject('Erro ao buscar produtos.');
  }
}));

test(`Deve buscar o produto de id = ${mockProduto.id}`, async () => {
  const wrapper = criaProviderWrapper(criaMockDeStore());
  const { result } = renderHook(() => useProducts(), { wrapper });

  await act(async () => await result.current.loadProductById(mockProduto.id));

  expect(result.current.produtos).toHaveLength(1);
  expect(result.current.produtos[0]).toEqual(mockProduto);
});

test('Deve buscar por id um produto que já recebeu e não deve duplicá-lo.', async () => {
  const wrapper = criaProviderWrapper(criaMockDeStore());
  const { result } = renderHook(() => useProducts(), { wrapper });

  await act(async () => await result.current.loadProductById(mockProduto.id));
  expect(result.current.produtos).toHaveLength(1);

  await act(async () => await result.current.loadProductById(mockProduto.id));
  expect(result.current.produtos).toHaveLength(1);
  expect(result.current.produtos[0]).toEqual(mockProduto);
});

test('Deve buscar por id um produto inexistente.', async () => {
  const wrapper = criaProviderWrapper(criaMockDeStore());
  const { result } = renderHook(() => useProducts(), { wrapper });

  const idProdutoInexistente = 9;
  await act(async () => await result.current.loadProductById(idProdutoInexistente));

  expect(result.current.produtos).toHaveLength(0);
  expect(result.current.errorLoadingById).not.toBeNull();
});

test('Não deve encontrar o produto buscado por id, pois não foi carregado do back end.', () => {
  const wrapper = criaProviderWrapper(criaMockDeStore());
  const { result } = renderHook(() => useProducts(), { wrapper });

  const produto = result.current.getProductById(1);

  expect(produto).toBeUndefined();
});

test('Deve buscar a lista de produtos, mas não os receberá.', async () => {
  const wrapper = criaProviderWrapper(criaMockDeStore());
  const { result } = renderHook(() => useProducts(), { wrapper });

  await act(async () => await result.current.loadProducts());

  expect(result.current.produtos).toHaveLength(0);
  expect(result.current.error).not.toBeNull();
});