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
      const produto = state.find((item) => item.productId === novoProduto.productId);
      if (!produto) {
        novoProduto.quantidade = 1;
        state.push(novoProduto);
      }
      else
        produto.quantidade++;
    },
    removeProduto: (state, action: PayloadAction<number>) => {
      const produtoId = action.payload;
      const produtoIndex = state.findIndex((item) => item.productId === produtoId);
      if (produtoIndex !== -1)
        state.splice(produtoIndex, 1);
    },
    updateQuantidade: (state, action: PayloadAction<UpdateQuantidadeType>) => {
      const { produtoId: id, quantidade } = action.payload;
      const produto = state.find((item) => item.productId === id);
      if (produto)
        produto.quantidade = quantidade;
    }
  }
});

export const { addProduto, removeProduto, updateQuantidade} = cartSlice.actions;

export default cartSlice;