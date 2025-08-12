import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './slices/searchSlice';
import cartSlice from './slices/cartSlice';
import apiSlice from './api/apiSlice';

const store = configureStore({
  reducer: {
    [searchSlice.reducerPath]: searchSlice.reducer,
    [cartSlice.reducerPath]: cartSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleWare =>
    getDefaultMiddleWare().concat(apiSlice.middleware)
});

export default store;

export type StoreDispatch = typeof store.dispatch;
export type StoreState = ReturnType<typeof store.getState>;