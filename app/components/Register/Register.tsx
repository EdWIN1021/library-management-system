"use client";
import { useDispatch, useSelector } from "react-redux";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import { RootState } from "@/app/store";
import { closeRegister } from "@/app/features/modal/modalSlice";
import styles from "./styles.module.scss";
import Card from "@mui/material/Card";
import Heading from "../Heading/Heading";
import Input from "../Input/Input";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";

const Register = () => {
  const isRegisterOpen = useSelector(
    (state: RootState) => state.modal.isRegisterOpen
  );

  const dispatch = useDispatch();
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

        <Input
          lable={"Email"}
          type={"text"}
          placeholder={"username@email.com"}
        />

        <Input
          lable={"Username"}
          type={"text"}
          placeholder={"enter your username"}
        />

        <Input
          lable={"Password"}
          type={"password"}
          placeholder={"enter your password"}
        />

        <Input
          lable={"Confirm Password"}
          type={"password"}
          placeholder={"Confirm your password"}
        />

        <Button
          variant="contained"
          size="large"
          style={{ marginTop: "20px" }}
          fullWidth
        >
          Sign Up
        </Button>

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
          Already have an account? <Link>Login</Link>
        </div>
      </Card>
    </ModalWrapper>
  );
};

export default Register;
