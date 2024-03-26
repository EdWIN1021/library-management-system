"use client";

import { useState } from "react";
import Image from "next/image";

import ModalWrapper from "./ModalWrapper";
import LoadingButton from "@mui/lab/LoadingButton";
import Heading from "./Heading";
import Input from "./Input";

import styles from "./styles.module.scss";

import isEmail from "validator/lib/isEmail";
import toast from "react-hot-toast";
import { RootState } from "@/features/store";
import { useDispatch, useSelector } from "react-redux";
import { closeOTP, openVerifyOTP } from "@/features/modal/modalSlice";
import { setAuthEmail } from "@/features/auth/authSlice";
import { useMutation } from "react-query";
import { sendEmail } from "@/lib/request";

const OTP = () => {
  const { isOTPOpen } = useSelector((state: RootState) => state.modal);
  const [email, setEmail] = useState("");
  const { mutate, isLoading } = useMutation({
    mutationFn: sendEmail,
  });

  const dispatch = useDispatch();

  const handleClick = async () => {
    dispatch(setAuthEmail(email));
    if (isEmail(email)) {
      await mutate(email, {
        onSuccess: () => {
          dispatch(closeOTP());
          dispatch(openVerifyOTP());
        },
        onError: (error) => {
          console.log(error);
        },
      });
    } else {
      toast.error("Please enter a vaild email address");
    }
    setEmail("");
  };

  return (
    <ModalWrapper
      openModal={isOTPOpen}
      onClose={() => {
        dispatch(closeOTP());
        setEmail("");
      }}
    >
      <div className="flex flex-col gap-3">
        <Image
          className="self-center"
          src="/images/otp.svg"
          alt="..."
          width={150}
          height={200}
          priority
        />

        <Heading
          title={"OTP Verification"}
          subtitle={"We will send you one-time password to you email"}
        />

        <Input
          placeholder={"username@email.com"}
          name={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <LoadingButton
          loading={isLoading}
          onClick={handleClick}
          variant="contained"
          size="large"
          style={{ marginTop: "3rem" }}
          fullWidth
        >
          get otp
        </LoadingButton>
      </div>
    </ModalWrapper>
  );
};

export default OTP;
