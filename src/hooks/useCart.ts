import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../store';
import { addProduto, removeProduto, updateQuantidade as updateQuantidadeAction } from '../store/slices/cartSlice';
import IItemCarrinho from '../types/IItemCarrinho';

export function useCart() {
  const itensCarrinho = useSelector<StoreState, IItemCarrinho[]>(estado => estado.cart);
  const dispatch = useDispatch();

  const addProduct = useCallback(function (produtoId: number) {
    dispatch(addProduto({productId: produtoId, quantidade: 1 }));
  }, [dispatch]);

  const removeProduct = useCallback(function (produtoId: number) {
    dispatch(removeProduto(produtoId));
  }, [dispatch]);

  const updateQuantidade = useCallback(function (produtoId: number, quantidade: number) {
    if (quantidade)
      dispatch(updateQuantidadeAction({produtoId, quantidade}));
    else
      removeProduct(produtoId);
  }, [dispatch, removeProduct]);

  return {
    itensCarrinho,
    addProduct,
    removeProduct,
    updateQuantidade
  };
}