"use client";
import { useDispatch, useSelector } from "react-redux";
import ModalWrapper from "../../ModalWrapper/ModalWrapper";
import { RootState } from "@/app/store";
import { closeRegister, openLogin } from "@/app/features/modal/modalSlice";
import styles from "./styles.module.scss";
import Heading from "../../Heading/Heading";
import Input from "../../Input/Input";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import PwdInput from "../../PwdInput/PwdInput";
import OAuth from "../../OAuth/OAuth";
import { useState } from "react";
import toast from "react-hot-toast";
import dynamic from "next/dynamic";
import EmailConstrain from "../../EmailConstrain/EmailConstrain";
import LoadingButton from "@mui/lab/LoadingButton";

import isEmail from "validator/lib/isEmail";

const PwdConstrain = dynamic(() => import("../../PwdConstrain/PwdConstrain"), {
  ssr: false,
});

const Register = () => {
  const isRegisterOpen = useSelector(
    (state: RootState) => state.modal.isRegisterOpen
  );

  const [isLoding, setIsLoading] = useState(false);

  const [showPwdConstrain, setShowPwdConstrain] = useState(false);
  const [showConfirmPwdConstrain, setShowConfirmPwdConstrain] = useState(false);

  const [showEmailConstrain, setShowEmailConstrain] = useState(false);

  const [isPwdValid, setIsPwdValid] = useState(false);
  const [isConfirmPwdValid, setIsConfirmPwdValid] = useState(false);

  const [inputFields, setInputFields] = useState({
    email: "",
    username: "",
    password: "",
    confirmPwd: "",
  });

  const dispatch = useDispatch();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
    if (e.target.name === "password") {
      setShowPwdConstrain(!isPwdValid);
    }

    if (e.target.name === "confirmPwd") {
      setShowConfirmPwdConstrain(!isConfirmPwdValid);
    }

    if (e.target.name === "email") {
      setShowEmailConstrain(!isEmail(inputFields.email));
    }
  };

  const handleOnSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const res = await fetch("api/register", {
        method: "POST",
        body: JSON.stringify(inputFields),
      });

      const data = await res.json();

      if (res.status === 201) {
        setInputFields({
          email: "",
          username: "",
          password: "",
          confirmPwd: "",
        });
        toast.success(data.message, {
          style: {
            minWidth: "450px",
          },
        });

        dispatch(closeRegister());
      } else {
        toast.error(data.error, {
          style: {
            minWidth: "500px",
          },
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOnClose = () => {
    dispatch(closeRegister());
    setInputFields({
      email: "",
      username: "",
      password: "",
      confirmPwd: "",
    });
    setShowEmailConstrain(false);
  };

  return (
    <ModalWrapper openModal={isRegisterOpen} onClose={handleOnClose}>
      <>
        <Heading
          title={"Create an account"}
          subtitle={"Welcome to our library"}
        />
        <form className={styles.form} onSubmit={handleOnSubmit}>
          <Input
            lable={"Email"}
            placeholder={"username@email.com"}
            name={"email"}
            value={inputFields.email}
            onChange={handleOnChange}
          />

          {showEmailConstrain && <EmailConstrain />}

          <Input
            lable={"Username"}
            placeholder={"enter your username"}
            name={"username"}
            value={inputFields.username}
            onChange={handleOnChange}
          />

          <PwdInput
            lable={"Password"}
            placeholder={"enter your password"}
            name={"password"}
            value={inputFields.password}
            onChange={handleOnChange}
          />

          <PwdConstrain
            showConstrain={showPwdConstrain}
            password={inputFields.password}
            setIsValid={setIsPwdValid}
          />

          <PwdInput
            lable={"Confirm Password"}
            placeholder={"Confirm your password"}
            name={"confirmPwd"}
            value={inputFields.confirmPwd}
            onChange={handleOnChange}
          />

          <PwdConstrain
            showConstrain={showConfirmPwdConstrain}
            password={inputFields.confirmPwd}
            setIsValid={setIsConfirmPwdValid}
          />

          <LoadingButton
            loading={isLoding}
            type="submit"
            variant="contained"
            size="large"
            style={{ marginTop: "20px" }}
            disabled={
              !(
                isPwdValid &&
                isConfirmPwdValid &&
                isEmail(inputFields.email) &&
                inputFields.username
              )
            }
            fullWidth
          >
            Sign Up
          </LoadingButton>
        </form>

        <Divider>or</Divider>

        <OAuth />

        <div className={styles.footer}>
          Already have an account?{" "}
          <Link
            className={styles.link}
            href="#"
            onClick={() => {
              dispatch(closeRegister());
              dispatch(openLogin());
            }}
          >
            Login
          </Link>
        </div>
      </>
    </ModalWrapper>
  );
};

export default Register;
