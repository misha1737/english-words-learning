import { createSlice } from "@reduxjs/toolkit";
export type UserDataType = {
  token: string;
  userId: string;
};
export type UserType = {
  loading: boolean;
  userData: UserDataType | null;
};
const initialState: UserType = {
  loading: true,
  userData: null,
};
let userData = localStorage.getItem("userData");
if (userData) {
  initialState.userData = JSON.parse(userData);
}
export const user = createSlice({
  name: "User",
  initialState,
  reducers: {
    loading: (state, action) => {
      state.loading = action.payload;
    },
    setUserData: (state, action) => {
      localStorage.setItem("userData", JSON.stringify(action.payload));
      state.userData = action.payload;
      state.loading = false;
    },
  },
});
export const { setUserData, loading } = user.actions;
export default user.reducer;
