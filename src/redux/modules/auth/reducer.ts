import { createSlice } from "@reduxjs/toolkit";
export interface AuthData {
  email: string;
  password: string;
  loading: boolean;
  error: string | null;
}
const initialState: AuthData = {
  email: "",
  password: "",
  loading: false,
  error: null,
};
export const auth = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.loading = true;
      console.log("gggg");
    },
    loading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    success: (state) => {
      state.loading = false;
    },
  },
});
export const { login, loading, setError, success } = auth.actions;
export default auth.reducer;
