import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modal/modalSlice";
import authReducer from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
