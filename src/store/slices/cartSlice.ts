import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IItemCarrinho from '../../types/IItemCarrinho';

interface UpdateQuantidadeType {
  produtoId: number,
  quantidade: number
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: Array<IItemCarrinho>(),
  reducers: {
    addProduto: (state, action: PayloadAction<IItemCarrinho>) => {
      const novoProduto = action.payload;
      const produto = state.findIndex((item) => item.productId === novoProduto.productId);
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
    },
    removeProduto: (state, action: PayloadAction<number>) => {
      const produtoId = action.payload;
      return state.filter((item) => item.productId !== produtoId); 
    },
    updateQuantidade: (state, action: PayloadAction<UpdateQuantidadeType>) => {
      const { produtoId: id, quantidade } = action.payload;
      return state.map((item) =>
        item.productId === id ? { ...item, quantidade } : item
      );
    }
  }
});

export const { addProduto, removeProduto, updateQuantidade } = cartSlice.actions;

export default cartSlice.reducer;