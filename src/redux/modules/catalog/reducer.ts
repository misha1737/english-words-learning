import { createSlice } from "@reduxjs/toolkit";
export interface Blocks {
  id: String;
  name: String;
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
    getCatalog: () => {
      console.log("!!!!");
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
