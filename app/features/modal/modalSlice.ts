import { createSlice } from "@reduxjs/toolkit";

export interface ModalState {
  isLoginOpen: boolean;
  isRegisterOpen: boolean;
}

const initialState: ModalState = {
  isLoginOpen: false,
  isRegisterOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openLogin: (state) => {
      state.isLoginOpen = true;
    },
    closeLogin: (state) => {
      state.isLoginOpen = false;
    },

    openRegister: (state) => {
      state.isRegisterOpen = true;
    },
    closeRegister: (state) => {
      state.isRegisterOpen = false;
    },
  },
});

export const { openLogin, closeLogin, openRegister, closeRegister } =
  modalSlice.actions;

export default modalSlice.reducer;
