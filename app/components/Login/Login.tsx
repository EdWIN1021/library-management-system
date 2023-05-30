"use client";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { closeLogin, openRegister } from "@/app/features/modal/modalSlice";
import { useRouter } from "next/navigation";
import Card from "@mui/material/Card";
import Input from "../Input/Input";
import styles from "./styles.module.scss";
import Button from "@mui/material/Button";
import Heading from "../Heading/Heading";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import OAuth from "../OAuth/OAuth";
import PwdInput from "../PwdInput/PwdInput";
import { useState } from "react";
import isEmpty from "validator/lib/isEmpty";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const isLoginOpen = useSelector(
    (state: RootState) => state.modal.isLoginOpen
  );

  const [inputFields, setInputFields] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const cb = await signIn("credentials", { ...inputFields, redirect: false });

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
    setInputFields({ email: "", password: "" });
  };

  return (
    <ModalWrapper
      openModal={isLoginOpen}
      onClose={() => dispatch(closeLogin())}
    >
      <Card className={styles.container}>
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

          <Button
            disabled={
              isEmpty(inputFields.email) || isEmpty(inputFields.password)
            }
            type="submit"
            variant="contained"
            size="large"
            style={{ marginTop: "20px" }}
            fullWidth
          >
            Login
          </Button>
        </form>

        <Link href="#" variant="caption" style={{ alignSelf: "end" }}>
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
      </Card>
    </ModalWrapper>
  );
};

export default Login;
