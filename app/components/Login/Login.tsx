"use client";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { closeLogin } from "@/app/features/modal/modalSlice";

import Card from "@mui/material/Card";
import Input from "../Input/Input";
import styles from "./styles.module.scss";
import Button from "@mui/material/Button";
import Heading from "../Heading/Heading";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import OAuth from "../OAuth/OAuth";

const Login = () => {
  const isLoginOpen = useSelector(
    (state: RootState) => state.modal.isLoginOpen
  );

  const dispatch = useDispatch();

  return (
    <ModalWrapper
      openModal={isLoginOpen}
      onClose={() => dispatch(closeLogin())}
    >
      <Card className={styles.container}>
        <Heading title={" Welcome Back!"} subtitle={"Login to your account"} />

        <Input
          lable={"Email"}
          type={"text"}
          placeholder={"username@email.com"}
        />
        <Input
          lable={"Password"}
          type={"password"}
          placeholder={"enter your password"}
        />

        <Button
          variant="contained"
          size="large"
          style={{ marginTop: "20px" }}
          fullWidth
        >
          Login
        </Button>

        <Link href="#" variant="caption" style={{ alignSelf: "end" }}>
          forgot password
        </Link>

        <Divider>or</Divider>

        <OAuth />

        <div className={styles.footer}>
          Don't have an account? <Link>Sign Up</Link>
        </div>
      </Card>
    </ModalWrapper>
  );
};

export default Login;
