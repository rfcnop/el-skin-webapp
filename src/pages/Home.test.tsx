import { screen } from '@testing-library/react';
import Home from './Home';
import { ProdutosContextProvider } from '../contexts/ProdutosContext';
import { SearchContextProvider } from '../contexts/SearchContext';
import { renderComTema } from '../test-utils';
import { act } from 'react';
import { CarrinhoContextProvider } from '../contexts/CartContext';

const mockCarousel = [
  {
    id: 1,
    subtitle: 'confira nossa linha',
    title: 'corporal',
    description: 'com benefícios além da hidratação',
    backgroundImage: '/assets/img1.png'
  },
  {
    id: 2,
    subtitle: 'toda linha',
    title: 'anti-age',
    description: 'use o cupom ANTIAGE15',
    backgroundImage: '/assets/img2.png'
  },
  {
    id: 3,
    subtitle: '',
    title: 'kits incríveis',
    description: 'até 50% OFF',
    backgroundImage: '/assets/img3.png'
  }
];

jest.mock('../services/backEnds', () => ({
  //...(jest.requireActual('../services/backEnd')),
  default: {
    async get(url: string) {
      if (url === 'carousel')
        return { data: mockCarousel };
      else
        return { data: 'sem dados :)' };
    },
  },
  __esModule: true
}));

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

test('Tela "Home" deve ser renderizada', async () => {
  await act(async () => await renderComTema(
    <ProdutosContextProvider>
      <SearchContextProvider>
        <CarrinhoContextProvider>
          <Home />
        </CarrinhoContextProvider>
      </SearchContextProvider>
    </ProdutosContextProvider>));
  expect(screen.getByTestId('main_home')).toBeInTheDocument();
});