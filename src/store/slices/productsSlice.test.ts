import productsSlice, { setProducts } from './productsSlice';

const mockProduto1 =
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

const mockProduto2 =
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
  };

test('Deve alterar os produtos', () => {
  const produtosInicio = productsSlice.reducer(undefined, setProducts([mockProduto1]));
  expect(produtosInicio).toHaveLength(1);
  expect(produtosInicio[0]).toHaveProperty('id', 1);

  const produtosFinal = productsSlice.reducer(produtosInicio, setProducts([mockProduto2]));
  expect(produtosFinal).toHaveLength(1);
  expect(produtosFinal[0]).toHaveProperty('id', 2);

});