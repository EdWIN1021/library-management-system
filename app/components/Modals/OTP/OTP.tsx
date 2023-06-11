"use client";

import { useState } from "react";
import Image from "next/image";

import ModalWrapper from "../../ModalWrapper/ModalWrapper";
import LoadingButton from "@mui/lab/LoadingButton";
import Heading from "../../Heading/Heading";
import Input from "../../Input/Input";

import styles from "./styles.module.scss";

import isEmail from "validator/lib/isEmail";
import toast from "react-hot-toast";
import { RootState } from "@/app/store";
import { useDispatch, useSelector } from "react-redux";
import { closeOTP, openVerifyOTP } from "@/app/features/modal/modalSlice";
import { setAuthEmail } from "@/app/features/auth/authSlice";

const OTP = () => {
  const { isOTPOpen } = useSelector((state: RootState) => state.modal);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  // const { mutate, isLoading } = useMutation({
  //   mutationFn: createBorrow,
  // });

  const dispatch = useDispatch();

  const onClick = async () => {
    setLoading(true);
    dispatch(setAuthEmail(email));

    try {
      if (isEmail(email)) {
        const res = await fetch("/api/send_email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });
        if (res.status === 200) {
          dispatch(closeOTP());
          dispatch(openVerifyOTP());
        }
      } else {
        toast.error("Please enter a vaild email address");
      }
    } catch (error) {
      throw new Error("somthing wrong");
    } finally {
      setLoading(false);
      setEmail("");
    }
  };

  return (
    <ModalWrapper
      openModal={isOTPOpen}
      onClose={() => {
        dispatch(closeOTP());
        setEmail("");
      }}
    >
      <div className={styles.container}>
        <Image
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
          loading={loading}
          onClick={onClick}
          variant="contained"
          size="large"
          style={{ marginTop: "4rem" }}
          fullWidth
        >
          get otp
        </LoadingButton>
      </div>
    </ModalWrapper>
  );
};

export default OTP;
