import { screen } from '@testing-library/react';
import Home from './page';
import { renderComTema } from '../test-utils';
import { Provider } from 'react-redux';
import { criaMockDeStore } from '../test-utils';
import { act } from 'react';

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

/*jest.mock('../services/backEnd', () => ({
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
}));*/

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
  useGetCarouselItemsQuery: () => ({ data: mockCarousel, isLoading: false, error: null }),
  useGetProductsQuery: () => ({ data: mockDoisProdutos, isLoading: false, error: null })
}));*/

global.fetch = (url) => Promise.resolve({
  json: () =>
  {
    if (url.toString().endsWith('products/'))
      return Promise.resolve(mockDoisProdutos);
    else if (url.toString().endsWith('carousel/'))
      return Promise.resolve(mockCarousel);
    else
      return Promise.resolve('Requisição para URL desconhecida');
  }
} as Response);

test('Tela "Home" deve ser renderizada', async () => {
  const mockStore = criaMockDeStore();

  await act(async () => await renderComTema(
    <Provider store={mockStore}>
      { await Home() }
    </Provider>));
  expect(await screen.findByTestId('main_home')).toBeInTheDocument();
});