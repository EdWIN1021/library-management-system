"use client";

import ModalWrapper from "../../ModalWrapper/ModalWrapper";
import { RootState } from "@/app/store";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.scss";
import Heading from "../../Heading/Heading";
import Input from "../../Input/Input";
import { closeOTP, openVerifyOTP } from "@/app/features/modal/modalSlice";
import { useState } from "react";
import isEmail from "validator/lib/isEmail";
import toast from "react-hot-toast";
import Image from "next/image";
import LoadingButton from "@mui/lab/LoadingButton";

const OTP = () => {
  const isOTPOpen = useSelector((state: RootState) => state.modal.isOTPOpen);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = async () => {
    setLoading(true);

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
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ModalWrapper openModal={isOTPOpen} onClose={() => dispatch(closeOTP())}>
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
          onClick={sendEmail}
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
