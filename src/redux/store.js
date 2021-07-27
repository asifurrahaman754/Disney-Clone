import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userSLice";
import movieReducer from "./movieSlice";

export const store = configureStore({
  reducer: {
    user: UserReducer,
    movie: movieReducer,
  },
});
