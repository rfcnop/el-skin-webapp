import { useEffect, useRef } from 'react';
import { useCart } from './useCart';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store';

const produtoId = 1;

test('Deve adicionar um produto que ainda não está no carrinho.', () => {
  function ComponenteTesteUseCart() {
    const { itensCarrinho, addProduct } = useCart();
    
    useEffect(() => {
      addProduct(produtoId);
    }, [addProduct]);

    return (<div data-testid='div_teste'>
      { itensCarrinho.length }
    </div>);
  }

  render(
    <Provider store={store}>
      <ComponenteTesteUseCart />
    </Provider>);
  const divTeste = screen.getByTestId('div_teste');
  expect(divTeste.innerHTML).toBe('1');
});

test('Deve adicionar um produto que já está no carrinho (sua quantidade deve aumentar).', () => {
  function ComponenteTesteUseCart() {
    const { itensCarrinho, addProduct } = useCart();
    const quantidadeInicial = useRef(0);  
    
    useEffect(() => {
      addProduct(produtoId);
      if (itensCarrinho[0])
        quantidadeInicial.current = itensCarrinho[0].quantidade;
      addProduct(produtoId);
    }, [addProduct]); // eslint-disable-line react-hooks/exhaustive-deps

    return (<>
      <div data-testid='div_teste_anterior'>
        { quantidadeInicial.current }
      </div>
      <div data-testid='div_teste_posterior'>
        { itensCarrinho[0]?.quantidade }
      </div>
    </>);
  }

  render(
    <Provider store={store}>
      <ComponenteTesteUseCart />
    </Provider>);
  const divTesteAnterior = screen.getByTestId('div_teste_anterior');
  const divTestePosterior = screen.getByTestId('div_teste_posterior');
  expect(parseInt(divTesteAnterior.innerHTML)).toBeLessThan(parseInt(divTestePosterior.innerHTML));
});

test('Deve aumentar para 2 a quantidade de um produto.', () => {
  function ComponenteTesteUseCart() {
    const { itensCarrinho, addProduct, updateQuantidade } = useCart();

    useEffect(() => {
      addProduct(produtoId);
      updateQuantidade(produtoId, 2);
    }, [addProduct, updateQuantidade]);
   
    return (<div data-testid='div_teste'>
      { itensCarrinho[0]?.quantidade }
    </div>);
  }

  render(
    <Provider store={store}>
      <ComponenteTesteUseCart />
    </Provider>);
  const divTeste = screen.getByTestId('div_teste');
  expect(divTeste.innerHTML).toBe('2');
});

test('Deve remover um produto do carrinho.', () => {
  function ComponenteTesteUseCart() {
    const { itensCarrinho, addProduct, removeProduct } = useCart();

    useEffect(() => {
      addProduct(produtoId);
      removeProduct(produtoId);
    }, [addProduct, removeProduct]);

    return (<div data-testid='div_teste'>
      { itensCarrinho.length }
    </div>);
  }

  render(
    <Provider store={store}>
      <ComponenteTesteUseCart />
    </Provider>);
  const divTeste = screen.getByTestId('div_teste');
  expect(divTeste.innerHTML).toBe('0');
});

test('Deve alterar a quantidade do produto para 0 (ou seja, deve removê-lo do carrinho).', () => {
  function ComponenteTesteUseCart() {
    const { itensCarrinho, addProduct, updateQuantidade } = useCart();

    useEffect(() => {
      addProduct(produtoId);
      updateQuantidade(produtoId, 0);
    }, [addProduct, updateQuantidade]);

    return (<div data-testid='div_teste'>
      { itensCarrinho.length }
    </div>);
  }

  render(
    <Provider store={store}>
      <ComponenteTesteUseCart />
    </Provider>);
  const divTeste = screen.getByTestId('div_teste');
  expect(divTeste.innerHTML).toBe('0');
});