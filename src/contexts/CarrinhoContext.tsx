import { createContext, useContext, useMemo, useCallback, useReducer } from 'react';
import IItemCarrinho from '../types/IItemCarrinho';

interface CarrinhoContextType {
  itensCarrinho: IItemCarrinho[],
  addProduct: (produtoId: number) => void,
  removeProduct: (produtoId: number) => void,
  updateQuantidade: (produtoId: number, quantidade: number) => void
}

interface UpdateQuantidadeType {
  produtoId: number,
  quantidade: number
}

export const ADD_PRODUTO = 'ADD_PRODUTO';
export const REMOVE_PRODUTO = 'REMOVE_PRODUTO';
export const UPDATE_QUANTIDADE = 'UPDATE_QUANTIDADE';

// Essa função e as constantes do switch foram fornecidas pelo professor no Trello
export const carrinhoReducer = (state: IItemCarrinho[], action : {type: string, payload: IItemCarrinho | number | UpdateQuantidadeType}) => {
  switch (action.type) {
  case ADD_PRODUTO: {
    const novoProduto = action.payload as IItemCarrinho;
    const produto = state.findIndex((item) => item.id === novoProduto.id);
    if (produto === -1) {
      novoProduto.quantidade = 1;
      return [...state, novoProduto];
    } else {
      return state.map((item, index) =>
        index === produto
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      );
    }
  }
  case REMOVE_PRODUTO: {
    const produtoId = action.payload;
    return state.filter((item) => item.id !== produtoId);
  }
  case UPDATE_QUANTIDADE: {
    const { produtoId: id, quantidade } = action.payload as UpdateQuantidadeType;
    return state.map((item) =>
      item.id === id ? { ...item, quantidade } : item
    );
  }
  default:
    return state;
  }
};

const CarrinhoContext = createContext<CarrinhoContextType | undefined>(undefined);
CarrinhoContext.displayName = 'Carrinho Context';

export function CarrinhoContextProvider({ children }: React.PropsWithChildren) {
  const [itensCarrinho, dispatchCarrinho] = useReducer(carrinhoReducer, []);

  const addProduct = useCallback(function (produtoId: number) {
    dispatchCarrinho({ type: ADD_PRODUTO, payload: {id: produtoId, quantidade: 1 }});
  }, []);

  const removeProduct = useCallback(function (produtoId: number) {
    dispatchCarrinho({ type: REMOVE_PRODUTO, payload: produtoId});
  }, []);

  const updateQuantidade = useCallback(function (produtoId: number, quantidade: number) {
    if (quantidade)
      dispatchCarrinho({ type: UPDATE_QUANTIDADE, payload: { produtoId, quantidade }});
    else
      removeProduct(produtoId);
  }, [removeProduct]);

  const contextValue = useMemo(
    () => ({ itensCarrinho, addProduct, removeProduct, updateQuantidade })
    , [itensCarrinho, addProduct, removeProduct, updateQuantidade]
  );

  return (<CarrinhoContext value={contextValue}>
    {children}
  </CarrinhoContext>);
}

export function useCarrinhoContext() {
  const context = useContext(CarrinhoContext);
  if (!context)
    throw new Error('useCarrinhoContext deve ser usado dentro de <CarrinhoContextProvider>');
  return context; // não pode ser undefined, devido ao type narrowing
}