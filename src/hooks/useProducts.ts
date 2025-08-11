import { useDispatch, useSelector } from 'react-redux';
import { StoreDispatch, StoreState } from '../store';
import { fetchProductById, fetchProducts, ProductsState } from '../store/slices/productsSlice';
import { useCallback } from 'react';

export default function useProducts() {
  const dispatch = useDispatch<StoreDispatch>();
  const { produtos, loading, error, loadingById, errorLoadingById } = useSelector<StoreState, ProductsState>(estado => estado.products);

  const loadProducts = useCallback(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const loadProductById = useCallback((id: number) => {
    dispatch(fetchProductById(id));
  }, [dispatch]);

  const getProductById = useCallback(
    (id: number) => produtos.find(item => item.id === id)
    , [produtos]);

  const filteredProducts = useCallback((busca: string) => {
    if (!busca)
      return produtos;
    else {
      const lowerCaseSearch = busca.toLowerCase();
      return produtos.filter(
        produto => produto.name.toLowerCase().includes(lowerCaseSearch) ||
          produto.description.toLowerCase().includes(lowerCaseSearch) ||
          produto.tags.some(tag => tag.toLowerCase().includes(lowerCaseSearch)));
    }
  } ,[produtos]);

  return {
    produtos,
    loading,
    error,
    loadingById,
    errorLoadingById,
    loadProducts,
    loadProductById,
    getProductById,
    filteredProducts
  };
}