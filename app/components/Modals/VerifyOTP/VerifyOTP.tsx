"use client";
import styles from "./styles.module.scss";
import ModalWrapper from "../../ModalWrapper/ModalWrapper";
import { closeVerifyOTP } from "@/app/features/modal/modalSlice";
import { RootState } from "@/app/store";
import { useDispatch, useSelector } from "react-redux";
import { MuiOtpInput } from "mui-one-time-password-input";
import Heading from "../../Heading/Heading";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";
import Image from "next/image";

const VerifyOTP = () => {
  const { isVerifyOTPOpen } = useSelector((state: RootState) => state.modal);
  const { email } = useSelector((state: RootState) => state.auth);
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();

  const onVerify = async () => {
    const res = await fetch("/api/verify_otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ otp, email }),
    });
    if (res.ok) {
      console.log("here");
    }
  };

  return (
    <ModalWrapper
      openModal={isVerifyOTPOpen}
      onClose={() => {
        dispatch(closeVerifyOTP());
        setOtp("");
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
        <Heading title={"OTP Verification"} subtitle={"Enter the OTP"} />
        <MuiOtpInput
          className={styles.otp}
          length={6}
          value={otp}
          onChange={(value) => setOtp(value)}
          style={{ maxWidth: "350px" }}
        />

        <div
          style={{
            alignSelf: "start",
            color: "#a7a7a7",
          }}
        >
          Didn’t you receive the OTP?
          <Link variant="caption" style={{ alignSelf: "end" }}>
            {" "}
            Resend OTP
          </Link>
        </div>
        <Button
          onClick={onVerify}
          style={{ marginTop: "4rem" }}
          variant="contained"
          size="large"
          fullWidth
        >
          verify
        </Button>
      </div>
    </ModalWrapper>
  );
};

export default VerifyOTP;
