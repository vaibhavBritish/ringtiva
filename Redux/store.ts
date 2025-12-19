import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import blogReducer from "./blogSlice";
import leadsReducer from "./leadSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    blogs: blogReducer, 
    leads: leadsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
