import { createSlice } from "@reduxjs/toolkit";

export interface ModalState {
  isLoginOpen: boolean;
  isRegisterOpen: boolean;
  isOTPOpen: boolean;
  isVerifyOTPOpen: boolean;
  isResetPasswordOpen: boolean;
}

const initialState: ModalState = {
  isLoginOpen: false,
  isRegisterOpen: false,
  isOTPOpen: false,
  isVerifyOTPOpen: false,
  isResetPasswordOpen: false,
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

    openOTP: (state) => {
      state.isOTPOpen = true;
    },
    closeOTP: (state) => {
      state.isOTPOpen = false;
    },
    openVerifyOTP: (state) => {
      state.isVerifyOTPOpen = true;
    },
    closeVerifyOTP: (state) => {
      state.isVerifyOTPOpen = false;
    },
    openResetPassword: (state) => {
      state.isResetPasswordOpen = true;
    },
    closeResetPassword: (state) => {
      state.isResetPasswordOpen = false;
    },
  },
});

export const {
  openLogin,
  closeLogin,
  openRegister,
  closeRegister,
  openOTP,
  closeOTP,
  openVerifyOTP,
  closeVerifyOTP,
  openResetPassword,
  closeResetPassword,
} = modalSlice.actions;

export default modalSlice.reducer;
