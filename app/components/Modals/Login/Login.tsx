"use client";

import styles from "./styles.module.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { RootState } from "@/app/store";
import {
  closeLogin,
  openRegister,
  openOTP,
} from "@/app/features/modal/modalSlice";
import Input from "../../Input/Input";
import PwdInput from "../../PwdInput/PwdInput";
import Heading from "../../Heading/Heading";
import ModalWrapper from "../../ModalWrapper/ModalWrapper";
import OAuth from "../../OAuth/OAuth";
import { Divider, Link } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import isEmpty from "validator/lib/isEmpty";
import toast from "react-hot-toast";

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isLoginOpen } = useSelector((state: RootState) => state.modal);

  const [inputFields, setInputFields] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);
    signIn("credentials", { ...inputFields, redirect: false })
      .then((cb) => {
        if (cb?.error) {
          toast.error(cb?.error, {
            style: {
              minWidth: "400px",
            },
          });
        } else {
          toast.success("Welcome! You have successfully logged in.", {
            style: {
              minWidth: "450px",
            },
          });
          dispatch(closeLogin());
          router.refresh();
        }
      })
      .finally(() => {
        setInputFields({ email: "", password: "" });
        setIsLoading(false);
      });
  };

  return (
    <ModalWrapper
      openModal={isLoginOpen}
      onClose={() => dispatch(closeLogin())}
    >
      <>
        <Heading title={" Welcome Back!"} subtitle={"Login to your account"} />

        <form className={styles.form} onSubmit={handleOnSubmit}>
          <Input
            lable={"Email"}
            placeholder={"username@email.com"}
            name={"email"}
            value={inputFields.email}
            onChange={handleOnChange}
          />

          <PwdInput
            lable={"Password"}
            placeholder={"enter your password"}
            name={"password"}
            value={inputFields.password}
            onChange={handleOnChange}
          />

          <LoadingButton
            loading={isLoading}
            disabled={
              isEmpty(inputFields.email) || isEmpty(inputFields.password)
            }
            type="submit"
            variant="contained"
            size="large"
            className={styles.btn}
            fullWidth
          >
            Login
          </LoadingButton>
        </form>

        <Link
          variant="caption"
          style={{ alignSelf: "end" }}
          onClick={() => {
            dispatch(closeLogin());
            dispatch(openOTP());
          }}
        >
          forgot password
        </Link>

        <Divider>or</Divider>

        <OAuth />

        <div className={styles.footer}>
          Don't have an account?{" "}
          <Link
            href="#"
            onClick={() => {
              dispatch(closeLogin());
              dispatch(openRegister());
            }}
          >
            Sign Up
          </Link>
        </div>
      </>
    </ModalWrapper>
  );
};

export default Login;
