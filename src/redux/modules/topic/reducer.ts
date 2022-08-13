import { createSlice } from "@reduxjs/toolkit";
import { Key } from "readline";
export type Words = {
  id: string;
  word: string;
  learned: boolean;
  translate: string;
};
export type Topic = {
  loading: boolean;
  error: string | null;
  openWordModal: boolean;
  words: Words[];
};
const initialState: Topic = {
  loading: true,
  error: null,
  openWordModal: false,
  words: [],
};
export const topic = createSlice({
  name: "Topic",
  initialState,
  reducers: {
    getTopic: (state, action) => {
      state.loading = true;
    },
    addNewWord: (state, action) => {
      state.loading = true;
    },
    loading: (state, action) => {
      state.loading = action.payload;
    },

    toOpenWordModal: (state, action) => {
      state.openWordModal = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setWords: (state, action) => {
      state.words = action.payload;
    },
  },
});
export const {
  getTopic,
  loading,
  toOpenWordModal,
  setError,
  setWords,
  addNewWord,
} = topic.actions;
export default topic.reducer;
