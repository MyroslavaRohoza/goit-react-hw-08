import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const instance = axios.create({
  baseURL: "https://connections-api.goit.global",
});

export function setToken(token) {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export function removeToken() {
  instance.defaults.headers.common.Authorization = "";
}

export const register = createAsyncThunk(
  "auth/register",
  async (registerFormData, thunkAPI) => {
    try {
      const { data } = await instance.post("/users/signup", registerFormData);
      console.log(data);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (logInFormData, thunkAPI) => {
    try {
      const { data } = await instance.post("/users/login", logInFormData);
      console.log(data);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      setToken(token);
      const { data } = await instance.get("/users/current");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await instance.post("/users/logout");
    removeToken();
    return;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
