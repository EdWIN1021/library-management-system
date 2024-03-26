"use client";

import ModalWrapper from "./ModalWrapper";
import { closeVerifyOTP, openResetPassword } from "@/features/modal/modalSlice";
import { RootState } from "@/features/store";
import { useDispatch, useSelector } from "react-redux";
import { MuiOtpInput } from "mui-one-time-password-input";
import Heading from "./Heading";
import { useState } from "react";
import { Link } from "@mui/material";
import Image from "next/image";
import toast from "react-hot-toast";
import LoadingButton from "@mui/lab/LoadingButton";
import { sendEmail, verifyOtp } from "@/lib/request";
import { useMutation } from "react-query";

const VerifyOTP = () => {
  const { isVerifyOTPOpen } = useSelector((state: RootState) => state.modal);
  const { email } = useSelector((state: RootState) => state.auth);
  const [otp, setOtp] = useState<string>("");
  const dispatch = useDispatch();
  const { mutate, isLoading } = useMutation({ mutationFn: verifyOtp });
  const mutation = useMutation({ mutationFn: sendEmail });

  const onResend = async () => {
    await mutation.mutate(email);
  };

  const onVerify = async () => {
    await mutate(
      { email, otp },
      {
        onSuccess: (data) => {
          toast.success(data?.message);
          dispatch(closeVerifyOTP());
          dispatch(openResetPassword());
        },
        onError: (error: any) => {
          toast.error(error?.message);
        },
        onSettled: () => {
          setOtp("");
        },
      }
    );
  };

  return (
    <ModalWrapper
      openModal={isVerifyOTPOpen}
      onClose={() => {
        dispatch(closeVerifyOTP());
        setOtp("");
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

        <Heading title={"OTP Verification"} subtitle={"Enter the OTP"} />

        <MuiOtpInput
          className="mt-3"
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
          <Link
            variant="caption"
            style={{ alignSelf: "end", cursor: "pointer" }}
            onClick={onResend}
          >
            Resend OTP
          </Link>
        </div>
        <LoadingButton
          loading={isLoading}
          onClick={onVerify}
          style={{ marginTop: "4rem" }}
          variant="contained"
          size="large"
          fullWidth
        >
          verify
        </LoadingButton>
      </div>
    </ModalWrapper>
  );
};

export default VerifyOTP;
