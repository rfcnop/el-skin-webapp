import { useState, createContext, useContext, useMemo, useCallback } from 'react';
import IItemCarrinho from '../types/IItemCarrinho';

interface CarrinhoContextType {
  itensCarrinho: IItemCarrinho[],
    addProduct: (produtoId: number) => void,
    removeProduct: (produtoId: number) => void,
    updateQuantidade: (produtoId: number, quantidade: number) => void
}

const CarrinhoContext = createContext<CarrinhoContextType | undefined>(undefined);
CarrinhoContext.displayName = 'Carrinho Context';

export function CarrinhoContextProvider({ children }: React.PropsWithChildren) {
  const [itensCarrinho, setItensCarrinho] = useState<IItemCarrinho[]>([]);

  const addProduct = useCallback(function (produtoId: number) {
    const itemJaPresente = itensCarrinho.find(item => item.id === produtoId);
    if (!itemJaPresente)
      setItensCarrinho(itensCarrinhoAnterior => [...itensCarrinhoAnterior, { id: produtoId, quantidade: 1 }]);
    else {
      itemJaPresente.quantidade++;
      setItensCarrinho(itensCarrinhoAnterior => [...itensCarrinhoAnterior]);
    }
  }, [itensCarrinho]);

  const removeProduct = useCallback(function (produtoId: number) {
    setItensCarrinho(itensCarrinhoAnterior => itensCarrinhoAnterior.filter(item => item.id !== produtoId));
  }, []);

  const updateQuantidade = useCallback(function (produtoId: number, quantidade: number) {
    if (!quantidade)
      removeProduct(produtoId);
    else
      setItensCarrinho(
        itensCarrinho => itensCarrinho.map(
          item => item.id === produtoId ? {...item, quantidade} : item
        )
      );
  }, [removeProduct]);

  const contextValue = useMemo(
    () => ({ itensCarrinho, addProduct, removeProduct, updateQuantidade })
    , [itensCarrinho, addProduct, removeProduct, updateQuantidade]
  );

  return (<CarrinhoContext value={contextValue}>
    { children }
  </CarrinhoContext>);
}

export function useCarrinhoContext() {
  const context = useContext(CarrinhoContext);
  if (!context)
    throw new Error('useCarrinhoContext deve ser usado dentro de <CarrinhoContextProvider>');
  return context; // não pode ser undefined, devido ao type narrowing
} 