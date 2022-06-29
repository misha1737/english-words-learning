import { createSlice } from "@reduxjs/toolkit";

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
    },
    loading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { login, loading, setError } = auth.actions;

export default auth.reducer;
