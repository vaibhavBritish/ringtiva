import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import blogReducer from "./blogSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    blogs: blogReducer, // ✔ correct key name
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
