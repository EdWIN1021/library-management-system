"use client";

import ModalWrapper from "../../ModalWrapper/ModalWrapper";
import Card from "@mui/material/Card";
import { RootState } from "@/app/store";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.scss";
import Heading from "../../Heading/Heading";
import Input from "../../Input/Input";
import { closeOTP, openVerifyOTP } from "@/app/features/modal/modalSlice";
import { useState } from "react";
import Button from "@mui/material/Button";
import isEmail from "validator/lib/isEmail";
import toast from "react-hot-toast";

const OTP = () => {
  const isOTPOpen = useSelector((state: RootState) => state.modal.isOTPOpen);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  const sendEmail = async () => {
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
  };

  return (
    <ModalWrapper openModal={isOTPOpen} onClose={() => dispatch(closeOTP())}>
      <Card className={styles.container}>
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

        <Button
          onClick={sendEmail}
          variant="contained"
          size="large"
          style={{ marginTop: "20px" }}
          fullWidth
        >
          get otp
        </Button>
      </Card>
    </ModalWrapper>
  );
};

export default OTP;
