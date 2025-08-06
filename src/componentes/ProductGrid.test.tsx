import ProductGrid from './ProductGrid';
import { screen } from '@testing-library/react';
import { ProdutosContextProvider } from '../contexts/ProdutosContext';
import { SearchContextProvider } from '../contexts/SearchContext';
import { CarrinhoContextProvider } from '../contexts/CartContext';
import { renderComTema } from '../test-utils';

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

jest.mock('../services/productService', () => ({
  //...(jest.requireActual('../services/productService')),
  getProdutos: async () => mockDoisProdutos
}));

test('"ProductGrid" deve renderizar dois produtos', async () => {
  renderComTema(
    <ProdutosContextProvider>
      <SearchContextProvider>
        <CarrinhoContextProvider>
          <ProductGrid />
        </CarrinhoContextProvider>
      </SearchContextProvider>
    </ProdutosContextProvider>);
  const divsComprar = await screen.findAllByText('Comprar');
  expect(divsComprar).toHaveLength(2);
});

test('"ProductGrid" deve renderizar somente o produto que menciona UVA', async () => {
  renderComTema(
    <ProdutosContextProvider>
      <SearchContextProvider value={{search: 'UVA'}}>
        <CarrinhoContextProvider>
          <ProductGrid />
        </CarrinhoContextProvider>
      </SearchContextProvider>
    </ProdutosContextProvider>);
  const divsComprar = await screen.findAllByText('Comprar');
  expect(divsComprar).toHaveLength(1);
});

test('"ProductGrid" deve ser renderizado sem produtos, pois nenhum contém magma', async () => {
  renderComTema(
    <ProdutosContextProvider>
      <SearchContextProvider value={{search: 'magma'}}>
        <CarrinhoContextProvider>
          <ProductGrid />
        </CarrinhoContextProvider>
      </SearchContextProvider>
    </ProdutosContextProvider>);
  const divNenhumProdutoEncontrado = await screen.findByText('Nenhum produto atende aos critérios de busca');
  expect(divNenhumProdutoEncontrado).toBeInTheDocument();
});