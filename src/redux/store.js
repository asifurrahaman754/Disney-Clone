import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userSLice";

export const store = configureStore({
  reducer: {
    user: UserReducer,
  },
});
