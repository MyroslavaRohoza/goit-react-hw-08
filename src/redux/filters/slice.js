import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initialState";

const filtersSlice = createSlice({
  name: "filter",
  initialState: initialState.filters,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;