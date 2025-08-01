import { render, screen } from '@testing-library/react';
import Carousel from './Carousel';
import userEvent from '@testing-library/user-event';

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

jest.mock('../services/backEnd', () => ({
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

test('Deve carregar os três itens do carrossel.', async () => {
  render(<Carousel />);
  const itensCarrossel = await screen.findAllByTestId('div_item_carousel');
  expect(itensCarrossel).toHaveLength(3);
});

test('Deve mover o carrossel ao apertar o botão ">".', async () => {
  render(<Carousel />);
  const divWrapperCarousel = await screen.findByTestId('div_wrapper_carousel');
  const posicaoAnterior = divWrapperCarousel.scrollLeft;
  const botaoProximo = await screen.findByTestId('botao_carousel_proximo');
  userEvent.click(botaoProximo);
  const posicaoPosterior = divWrapperCarousel.scrollLeft;
  expect(posicaoAnterior).not.toBe(posicaoPosterior);
});

test('Deve mover o carrossel com a passagem do tempo.', async () => {
  render(<Carousel />);
  const divWrapperCarousel = await screen.findByTestId('div_wrapper_carousel');
  const posicaoAnterior = divWrapperCarousel.scrollLeft;
  await new Promise(resolve => setTimeout(resolve, 3500));
  const posicaoPosterior = divWrapperCarousel.scrollLeft;
  expect(posicaoAnterior).not.toBe(posicaoPosterior);
});