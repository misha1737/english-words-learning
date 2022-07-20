import { createSlice } from "@reduxjs/toolkit";
export type UserDataType = {};
export type UserType = {
  loading: boolean;
  userData: UserDataType | null;
};
const initialState: UserType = {
  loading: true,
  userData: null,
};
export const user = createSlice({
  name: "User",
  initialState,
  reducers: {
    loading: (state, action) => {
      state.loading = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
      state.loading = false;
    },
  },
});
export const { setUserData, loading } = user.actions;
export default user.reducer;
