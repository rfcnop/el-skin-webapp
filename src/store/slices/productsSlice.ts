import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import IProduct from '../../types/IProduct';
import productService from '../../services/productService';

export interface ProductsState {
  produtos: IProduct[],
  loading: boolean,
  error: string | null,
  loadingById: boolean,
  errorLoadingById: string | null
}

const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => await productService.getProdutos()
);

const fetchProductById = createAsyncThunk(
  'products/fetchProductsById',
  async (id: number) => await productService.getProdutoById(id)
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    produtos: [],
    loading: false,
    error: null,
    loadingById: false,
    errorLoadingById: null
  } as ProductsState,
  reducers: {

  },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<IProduct[]>) => {
        state.loading = false;
        state.produtos = action.payload;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Erro (fetchProducts.rejected)';
      })
      .addCase(fetchProductById.pending, state => {
        state.loadingById = true;
        state.errorLoadingById = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action: PayloadAction<IProduct>) => {
        state.loadingById = false;
        const produto = state.produtos.find(item => item.id === action.payload.id);
        if (!produto)
          state.produtos.push(action.payload);
        else
          Object.assign(produto, action.payload);
        state.errorLoadingById = null;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loadingById = false;
        state.errorLoadingById = action.error.message || 'Erro (fetchProductById.rejected)';
      });
  }
});

export { fetchProducts, fetchProductById };

export default productsSlice.reducer;