import { createSlice } from "@reduxjs/toolkit";

export interface UserData {
  email: string;
  password: string;
}

const initialState: UserData = {
  email: "",
  password: "",
};

export const auth = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const { login } = auth.actions;

export default auth.reducer;
