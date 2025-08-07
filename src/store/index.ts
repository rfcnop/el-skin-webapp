import { configureStore } from '@reduxjs/toolkit';
import searchSliceReducer from './slices/searchSlice';
import cartSliceReducer from './slices/cartSlice';

const store = configureStore({
  reducer: {
    search: searchSliceReducer,
    cart: cartSliceReducer
  }
});

export default store;

export type StoreState = ReturnType<typeof store.getState>;