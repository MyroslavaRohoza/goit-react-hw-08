import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
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
