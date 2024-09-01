import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resetEmail: null,
  role: localStorage.getItem("role") ? localStorage.getItem("role") : null,
  accessToken: localStorage.getItem("accessToken")
    ? localStorage.getItem("accessToken")
    : null,
  refreshToken: localStorage.getItem("refreshToken")
    ? localStorage.getItem("refreshToken")
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setResetEmail(state, value) {
      state.resetEmail = value.payload;
    },
    setAccessToken(state, value) {
      state.accessToken = value.payload;
    },
    setRefreshToken(state, value) {
      state.refreshToken = value.payload;
    },
    setRole(state, value) {
      state.role = value.payload;
    },
  },
});

export const { setRefreshToken, setAccessToken, setResetEmail, setRole } =
  authSlice.actions;

export default authSlice.reducer;
