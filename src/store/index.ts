import { configureStore } from '@reduxjs/toolkit';
import searchSliceReducer from './slices/searchSlice';
import cartSliceReducer from './slices/cartSlice';
import productsSliceReducer from './slices/productsSlice';

const store = configureStore({
  reducer: {
    search: searchSliceReducer,
    cart: cartSliceReducer,
    products: productsSliceReducer
  }
});

export default store;

export type StoreDispatch = typeof store.dispatch;
export type StoreState = ReturnType<typeof store.getState>;