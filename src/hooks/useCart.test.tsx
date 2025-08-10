import { act } from 'react';
import { useCart } from './useCart';
import { renderHook } from '@testing-library/react';

const produtoId = 1;

test('Deve adicionar um produto que ainda não está no carrinho.', () => {
  const { result } = renderHook(() => useCart());

  const itemPreexistenteComOId = result.current.itensCarrinho.find(item => item.productId === produtoId);
  expect(itemPreexistenteComOId).toBeUndefined();

  act(() => result.current.addProduct(produtoId));

  const itemAdicionado = result.current.itensCarrinho.find(item => item.productId === produtoId);
  expect(itemAdicionado?.productId).toBe(produtoId);
  expect(itemAdicionado?.quantidade).toBe(1);
  expect(result.current.itensCarrinho).toHaveLength(1);
});

test('Deve adicionar um produto que já está no carrinho (sua quantidade deve aumentar).', () => {
  const { result } = renderHook(() => useCart());

  act(() => result.current.addProduct(produtoId));
  const itemPreexistenteComOId = result.current.itensCarrinho.find(item => item.productId === produtoId);
  const quantidadeAnterior = itemPreexistenteComOId?.quantidade;

  // colocando outro produto no carrinho, para aumentar a complexidade do teste
  const outroProdutoId = 2;
  act(() => result.current.addProduct(outroProdutoId));

  act(() => result.current.addProduct(produtoId));
  const itemAdicionado = result.current.itensCarrinho.find(item => item.productId === produtoId);
  const quantidadePosterior = itemAdicionado?.quantidade;
  
  expect(quantidadeAnterior === undefined ? -1 : quantidadeAnterior + 1).toBe(quantidadePosterior);
});

test('Deve aumentar para 5 a quantidade de um produto.', () => {
  const { result } = renderHook(() => useCart());

  act(() => result.current.addProduct(produtoId));
  const itemPreexistenteComOId = result.current.itensCarrinho.find(item => item.productId === produtoId);
  const quantidadeAnterior = itemPreexistenteComOId?.quantidade;
  expect(quantidadeAnterior).toBe(1);

  act(() => result.current.updateQuantidade(produtoId, 5));
  const itemAlterado = result.current.itensCarrinho.find(item => item.productId === produtoId);
  const quantidadePosterior = itemAlterado?.quantidade;
  expect(quantidadePosterior).toBe(5);
});

test('Deve remover um produto do carrinho.', () => {
  const { result } = renderHook(() => useCart());

  act(() => result.current.addProduct(produtoId));
  const itemPreexistenteComOId = result.current.itensCarrinho.find(item => item.productId === produtoId);
  const quantidadeAnterior = itemPreexistenteComOId?.quantidade;
  expect(quantidadeAnterior).toBe(1);

  act(() => result.current.removeProduct(produtoId));
  const item = result.current.itensCarrinho.find(item => item.productId === produtoId);
  expect(item).toBeUndefined();
});

test('Deve alterar a quantidade do produto para 0 (ou seja, deve removê-lo do carrinho).', () => {
  const { result } = renderHook(() => useCart());

  act(() => result.current.addProduct(produtoId));
  const itemPreexistenteComOId = result.current.itensCarrinho.find(item => item.productId === produtoId);
  const quantidadeAnterior = itemPreexistenteComOId?.quantidade;
  expect(quantidadeAnterior).toBe(1);

  act(() => result.current.updateQuantidade(produtoId, 0));
  const item = result.current.itensCarrinho.find(item => item.productId === produtoId);
  expect(item).toBeUndefined();
});