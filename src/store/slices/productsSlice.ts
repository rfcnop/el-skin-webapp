import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IProduct from '../../types/IProduct';

const productsSlice = createSlice({
  name: 'products',
  initialState: Array<IProduct>(),
  reducers: {
    setProducts: (state, action: PayloadAction<IProduct[]>) => action.payload
  }
});

export const { setProducts } = productsSlice.actions;

export default productsSlice;