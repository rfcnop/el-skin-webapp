import { screen } from '@testing-library/react';
import ProductCard from './ProductCard';
import IProduct from '../types/IProduct';
import { CarrinhoContextProvider } from '../contexts/CartContext';
import userEvent from '@testing-library/user-event';
import { renderComTema } from '../test-utils';

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
    <CarrinhoContextProvider>
      <ProductCard product={produto} />
    </CarrinhoContextProvider>);
  expect(screen.getByText(produto.name)).toBeInTheDocument();
});

test('Todas as tags de "ProductCard" devem ser renderizadas', () => {
  renderComTema(
    <CarrinhoContextProvider>
      <ProductCard product={produto} />
    </CarrinhoContextProvider>);
  for (const tag of produto.tags)
    expect(screen.getByText(tag)).toBeInTheDocument();
});

test('Deve renderizar tag desconhecida com fundo preto', () => {
  const produtoComTagDesconhecida = {...produto, tags: [...produto.tags, 'toe']};
  renderComTema(
    <CarrinhoContextProvider>
      <ProductCard product={produtoComTagDesconhecida} />
    </CarrinhoContextProvider>);
  expect(screen.getByText('toe').style.backgroundColor).toBe('rgb(0, 0, 0)');
});

test('Deve adicionar produto ao carrinho quando o botão for clicado', () => {
  const addProduct = jest.fn();
  renderComTema(
    <CarrinhoContextProvider value={{addProduct}}>
      <ProductCard product={produto} />
    </CarrinhoContextProvider>);
    
  const botaoComprar = screen.getByTestId('botao_comprar');
  userEvent.click(botaoComprar);
  expect(addProduct).toBeCalledWith(produto.id);
  expect(addProduct).toBeCalledTimes(1);
});