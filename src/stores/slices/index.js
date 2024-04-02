import { combineReducers } from "@reduxjs/toolkit";
import { userslice } from "./user";
import { companyslice } from "./company";
import { appslice } from "./app";
import createCompressor from "redux-persist-transform-compress";
import encryptor from "./encryptor";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const reducers = combineReducers({
  user: userslice.reducer,
  app: appslice.reducer,
  company: companyslice.reducer,
});

const compressor = createCompressor();

const config = {
  blacklist: ["app", "network", "toast"],
  key: "primary",
  storage,
  transforms: [encryptor, compressor],
};

export const persistedReducer = persistReducer(config, reducers);
