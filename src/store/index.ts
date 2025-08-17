import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './slices/searchSlice';
import cartSlice from './slices/cartSlice';
import productsSlice from './slices/productsSlice';

const store = configureStore({
  reducer: {
    [searchSlice.reducerPath]: searchSlice.reducer,
    [cartSlice.reducerPath]: cartSlice.reducer,
    [productsSlice.reducerPath]: productsSlice.reducer,
  }});

export default store;

export type StoreDispatch = typeof store.dispatch;
export type StoreState = ReturnType<typeof store.getState>;