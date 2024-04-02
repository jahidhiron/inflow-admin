import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userDetails: null,
  token: null,
};

export const userslice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthenticationToken: (state = initialState, { payload }) => {
      return {
        ...state,
        token: payload,
      };
    },
    loginAction: (state = initialState, { payload }) => {
      return {
        ...state,
        userDetails: payload,
      };
    },
    logOutAction: (state = initialState, { payload }) => {
      return {
        ...state,
        ...initialState
      };
    },
  },
  extraReducers: {},
});
