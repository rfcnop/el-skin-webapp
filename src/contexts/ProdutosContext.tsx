import { useState, createContext, useContext, useMemo } from 'react';
import IProduct from '../types/IProduct';

interface ProductsContextType {
  products: IProduct[],
  setProducts: (products: IProduct[]) => void
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

//export function ProdutosContextProvider({ children }: React.PropsWithChildren) { // a versão abaixo é mais segura, aceita menos coisas
export function ProdutosContextProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<IProduct[]>([]);

  const contextValue = useMemo(
    () => ({ products, setProducts })
    , [products]
  );

  return (<ProductsContext value={contextValue}>
    { children }
  </ProductsContext>);
}

export function useProductsContext() {
  const context = useContext(ProductsContext);
  if (!context)
    throw new Error('useProductsContext deve ser usado dentro de <ProdutosContextProvider>');
  return context;
}