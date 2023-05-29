"use client";
import { useDispatch, useSelector } from "react-redux";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import { RootState } from "@/app/store";
import { closeRegister, openLogin } from "@/app/features/modal/modalSlice";
import styles from "./styles.module.scss";
import Card from "@mui/material/Card";
import Heading from "../Heading/Heading";
import Input from "../Input/Input";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import PwdInput from "../PwdInput/PwdInput";
import OAuth from "../OAuth/OAuth";
import { useState } from "react";
import toast from "react-hot-toast";
import dynamic from "next/dynamic";
import isEmail from "validator/lib/isEmail";

const Constrains = dynamic(() => import("../Constrains/Constrains"), {
  ssr: false,
});

const Register = () => {
  const isRegisterOpen = useSelector(
    (state: RootState) => state.modal.isRegisterOpen
  );

  const [showPwdConstrains, setShowPwdConstrains] = useState(false);
  const [showConfirmPwdConstrains, setShowConfirmPwdConstrains] =
    useState(false);

  const [inputFields, setInputFields] = useState({
    email: "",
    username: "",
    password: "",
    confirmPwd: "",
  });

  const [isValidPwd, setIsValidPwd] = useState(false);
  const [isValidConfirmPwd, setIsValidConfirmPwd] = useState(false);

  const dispatch = useDispatch();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const res = await fetch("api/register", {
      method: "POST",
      body: JSON.stringify(inputFields),
    });

    const data = await res.json();

    if (res.status === 201) {
      setInputFields({ email: "", username: "", password: "", confirmPwd: "" });
      toast.success(data.message, {
        style: {
          minWidth: "450px",
        },
      });
    } else {
      toast.error(data.error, {
        style: {
          minWidth: "500px",
        },
      });
    }
  };

  return (
    <ModalWrapper
      openModal={isRegisterOpen}
      onClose={() => dispatch(closeRegister())}
    >
      <Card className={styles.container}>
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
            onFocus={() => setShowPwdConstrains(true)}
            onBlur={() => setShowPwdConstrains(false)}
          />
          <Constrains
            showConstrains={showPwdConstrains}
            password={inputFields.password}
            setIsValid={setIsValidPwd}
          />

          <PwdInput
            lable={"Confirm Password"}
            placeholder={"Confirm your password"}
            name={"confirmPwd"}
            value={inputFields.confirmPwd}
            onChange={handleOnChange}
            onFocus={() => setShowConfirmPwdConstrains(true)}
            onBlur={() => setShowConfirmPwdConstrains(false)}
          />

          <Constrains
            showConstrains={showConfirmPwdConstrains}
            password={inputFields.confirmPwd}
            setIsValid={setIsValidConfirmPwd}
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            style={{ marginTop: "20px" }}
            disabled={
              !(
                isValidPwd &&
                isValidConfirmPwd &&
                isEmail(inputFields.email) &&
                inputFields.username
              )
            }
            fullWidth
          >
            Sign Up
          </Button>
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
      </Card>
    </ModalWrapper>
  );
};

export default Register;
