import { createSlice } from "@reduxjs/toolkit";
import { Key } from "readline";
export interface Blocks {
  id: string;
  name: string;
  count: Number;
}
export interface Catalog {
  loading: boolean;
  error: string | null;
  blocks: Blocks[];
}
const initialState: Catalog = {
  loading: true,
  error: null,
  blocks: [],
};
export const catalog = createSlice({
  name: "Catalog",
  initialState,
  reducers: {
    getCatalog: (state) => {
      state.loading = true;
    },
    loading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setBlocks: (state, action) => {
      state.blocks = action.payload;
    },
  },
});
export const { getCatalog, loading, setError, setBlocks } = catalog.actions;
export default catalog.reducer;
