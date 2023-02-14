import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";

export const userSlice = createSlice({
  name: "user",

  initialState: {
    isLogin: false,
    loginUser: {
      user_email: "",
      user_nickname: "",
    },
  },

  reducers: {
    login: (state, action) =>
      produce(state, (draft) => {
        draft.loginUser = action.payload;
        draft.isLogin = true;
      }),

    logout: (state, action) =>
      produce(state, (draft) => {
        draft.loginUser = { user_email: "", user_nickname: "" };
        draft.isLogin = false;
      }),

    signup: (state, action) =>
      produce(state, (draft) => {
        draft.loginUser = action.payload;
        draft.isLogin = false;
      }),
  },
});

export const { login, logout, signup } = userSlice.actions;
export const selectIsLogin = (state: any) => state.user.isLogin;
export const selectLoginUser = (state: any) => state.user.loginUser;
export const selectSignupUser = (state: any) => state.user.loginUser.user_email;

export default userSlice.reducer;
