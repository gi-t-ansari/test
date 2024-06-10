/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  type: null,
  isAuthenticated: false,
  //   permission: null,
  // userList: [],
  // loginError: false,
  // loading: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      //   state.permission = PERMISSION;
      // state.isAuthenticated = user?.status;
      // state.loginError = false;
      // state.isAuthenticated = true;
    },
    setMe: (state, action) => {
      state.user = {
        ...state.user,
        userId: action.payload.me.user,
      };
      state.isAuthenticated = true;
      //   state.permission = action.payload.me.PERMISSION;
      state.token = action.payload.me.token;
    },
    logoutUser: (state) => {
      // state.loading = true;
    },
    updateProfile: (state, action) => {},
    updateProfilePicture: (state, action) => {},
    changePassword: (state) => {},
    resetPassword: (state) => {},
    updateProfileSuccess: (state, action) => {
      state.user = {
        userId: action.payload.me,
      };
    },
    logoutUserSuccess: (state) => {
      // state.loading = false;
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const {
  loginUser,
  updateProfile,
  resetPassword,
  changePassword,
  updateProfileSuccess,
  updateProfilePicture,
  setMe,
  logoutUser,
  logoutUserSuccess,
} = userSlice.actions;

export const userSelector = (state) => state.user;
// export const tokenSelector = (state) => state.user.token;
export const isAuthenticated = (state) => state.user.isAuthenticated;
// export const getPermissionData = (state) => state.user.permission;
// export const userList = (state) => state.user.userList;

export default userSlice.reducer;
