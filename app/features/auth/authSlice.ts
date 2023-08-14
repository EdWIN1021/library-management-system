import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  email: string;
}

const initialState: AuthState = {
  email: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
});

export const { setAuthEmail } = authSlice.actions;

export default authSlice.reducer;
