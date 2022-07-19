import { createSlice } from "@reduxjs/toolkit";
import { browserHistory } from "./../../history";
export interface UserData {
  email: string;
  password: string;
  loading: boolean;
  error: string | null;
}
const initialState: UserData = {
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
      browserHistory.push("/catalog");
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
