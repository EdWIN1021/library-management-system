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
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";

const Login = () => {
  const isLoginOpen = useSelector(
    (state: RootState) => state.modal.isLoginOpen
  );

  const dispatch = useDispatch();

  return (
    <ModalWrapper
      openModal={isLoginOpen}
      onClick={() => dispatch(closeLogin())}
    >
      <Card className={styles.container}>
        <Heading
          title={" Welcome Back!"}
          subtitle={"Sign in to continue to yourDigital Library"}
        />

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

        <Button
          variant="outlined"
          size="large"
          startIcon={<FcGoogle size={24} />}
          style={{ color: "black" }}
          fullWidth
        >
          Continue with Google
        </Button>

        <Button
          variant="outlined"
          size="large"
          startIcon={<AiFillGithub size={24} />}
          style={{ color: "black" }}
          fullWidth
        >
          Continue with Github
        </Button>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          Don't have an account? <Link>Sign Up</Link>
        </div>
      </Card>
    </ModalWrapper>
  );
};

export default Login;
