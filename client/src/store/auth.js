import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
  },
  reducers: {
    getUser: (state) => {
      state.user = {name: 'Rochak'};
      state.isAuthenticated = true;
    },
  },
});

export const {getUser} = authSlice.actions;

export default authSlice.reducer;
