import productService from './productService';

const mockProdutos = [
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

jest.mock('../services/backEnd', () => ({
  //...(jest.requireActual('../services/backEnd')),
  default: {
    async get(url: string) {
      if (url === 'products')
        return { data: mockProdutos };
      else {
        if (url.startsWith('products/')) {
          const index = parseInt(url.split('/')[1]) - 1;
          if (isNaN(index) || index < 0 || index >= mockProdutos.length)
            return { data: 'id inválido' };
          return { data: mockProdutos[index] };
        }
        else
          return { data: 'sem dados :)' };
      }
    },
  },
  __esModule: true
}));

test('Deve retornar 2 produtos.', async () => {
  const produtos = await productService.getProdutos();
  expect(produtos).toHaveLength(2);
});

test('Deve retornar o protetor solar (id === 2).', async () => {
  const produto = await productService.getProdutoById(2);
  expect(produto.name).toBe('Protetor Solar SPF 50');
});