import { createContext, useContext } from 'react';
import IItemCarrinho from '../types/IItemCarrinho';
import { useCart } from '../hooks/useCart';

interface CarrinhoContextType {
  itensCarrinho: IItemCarrinho[],
  addProduct: (produtoId: number) => void,
  removeProduct: (produtoId: number) => void,
  updateQuantidade: (produtoId: number, quantidade: number) => void
}

const CarrinhoContext = createContext<CarrinhoContextType | undefined>(undefined);
CarrinhoContext.displayName = 'Carrinho Context';

export function CarrinhoContextProvider({ children, value }: {children: React.ReactNode, value?: Partial<CarrinhoContextType>}) {
  const carrinho = useCart();

  return (<CarrinhoContext value={{...carrinho, ...value}}>
    {children}
  </CarrinhoContext>);
}

export function useCarrinhoContext() {
  const context = useContext(CarrinhoContext);
  if (!context)
    throw new Error('useCarrinhoContext deve ser usado dentro de <CarrinhoContextProvider>');
  return context; // não pode ser undefined, devido ao type narrowing
}