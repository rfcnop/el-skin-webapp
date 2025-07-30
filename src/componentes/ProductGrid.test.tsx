import ProductGrid from './ProductGrid';
import { render, screen } from '@testing-library/react';
import { ProdutosContextProvider } from '../contexts/ProdutosContext';
import { SearchContextProvider } from '../contexts/SearchContext';
import { CarrinhoContextProvider } from '../contexts/CarrinhoContext';

const doisProdutos = [
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

jest.mock('../services/BackEnd', () => ({
  ...(jest.requireActual('../services/BackEnd')),
  getProdutos: async () => doisProdutos
}));

test('"ProductShowcase" deve renderizar dois produtos', async () => {
  render(
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

test('"ProductShowcase" deve renderizar somente o produto que menciona UVA', async () => {
  render(
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

test('"ProductShowcase" deve ser renderizado sem produtos, pois nenhum contém magma', async () => {
  render(
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