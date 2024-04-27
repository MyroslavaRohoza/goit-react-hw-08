import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});

export function setToken(token) {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export function removeToken() {
  instance.defaults.headers.common.Authorization = '';
}

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
});

export const authReducer = authSlice.reducer;
