import { createSlice } from "@reduxjs/toolkit";
import { Key } from "readline";
export interface Words {
  id: string;
  word: string;
  learned: boolean;
  translate: string;
}
export interface Topic {
  loading: boolean;
  error: string | null;
  words: Words[];
}
const initialState: Topic = {
  loading: true,
  error: null,
  words: [],
};
export const topic = createSlice({
  name: "Topic",
  initialState,
  reducers: {
    getTopic: (state, action) => {
      console.log("*");
      state.loading = true;
    },
    loading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setWords: (state, action) => {
      state.words = action.payload;
    },
  },
});
export const { getTopic, loading, setError, setWords } = topic.actions;
export default topic.reducer;
