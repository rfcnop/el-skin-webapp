import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../store/slices/productsSlice';
import { StoreState } from '../store';
import IProduct from '../types/IProduct';

export default function useProducts() {
  const dispatch = useDispatch();
  const products = useSelector<StoreState, IProduct[]>(estado => estado.products);

  return {
    products,
    setProducts: (products: IProduct[]) => dispatch(setProducts(products))
  };
}