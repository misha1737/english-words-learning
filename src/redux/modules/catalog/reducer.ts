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
  openTopicModal: boolean;
  blocks: Blocks[];
}
const initialState: Catalog = {
  loading: true,
  error: null,
  openTopicModal: false,
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
    addNewTopic: (state, action) => {
      state.loading = true;
    },
    toOpenTopicModal: (state, action) => {
      state.openTopicModal = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setBlocks: (state, action) => {
      state.blocks = action.payload;
    },
  },
});
export const {
  getCatalog,
  loading,
  setError,
  setBlocks,
  toOpenTopicModal,
  addNewTopic,
} = catalog.actions;
export default catalog.reducer;
