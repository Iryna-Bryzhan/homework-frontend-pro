import swapiReducer from "../reducers/swapiReducer";
import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

export const store = configureStore({
  reducer: {
    swapi: swapiReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(thunk);
  },
});

