import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import blogReducer from "./blogSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    blogs: blogReducer, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
