"use client";
import styles from "./styles.module.scss";
import ModalWrapper from "../../ModalWrapper/ModalWrapper";
import Card from "@mui/material/Card";
import { closeVerifyOTP } from "@/app/features/modal/modalSlice";
import { RootState } from "@/app/store";
import { useDispatch, useSelector } from "react-redux";
import { MuiOtpInput } from "mui-one-time-password-input";
import Heading from "../../Heading/Heading";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";

const VerifyOTP = () => {
  const isVerifyOTPOpen = useSelector(
    (state: RootState) => state.modal.isVerifyOTPOpen
  );
  const dispatch = useDispatch();
  const [otp, setOtp] = useState("");

  return (
    <ModalWrapper
      openModal={isVerifyOTPOpen}
      onClose={() => dispatch(closeVerifyOTP())}
    >
      <Card className={styles.container}>
        <Heading title={"OTP Verification"} subtitle={"Enter the OTP"} />

        <MuiOtpInput
          className={styles.otp}
          length={6}
          value={otp}
          onChange={(value) => setOtp(value)}
          style={{ maxWidth: "350px" }}
        />

        <div></div>

        <div
          style={{
            marginTop: "30px",
            marginBottom: "50px",
            alignSelf: "start",
            color: "#a7a7a7",
          }}
        >
          Didn’t you receive the OTP?{"  "}
          <Link variant="caption" style={{ alignSelf: "end" }}>
            Resend OTP
          </Link>
        </div>

        <Button variant="contained" size="large" fullWidth>
          verify
        </Button>
      </Card>
    </ModalWrapper>
  );
};

export default VerifyOTP;
