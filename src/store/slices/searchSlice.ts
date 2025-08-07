import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = '';

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => action.payload,
    clearSearch: () => initialState
  }
});

export const { setSearch, clearSearch } = searchSlice.actions;

export default searchSlice.reducer;