import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";

export const reducers = combineReducers({ user: userSlice });
