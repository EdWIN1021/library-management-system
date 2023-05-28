"use client";
import Button from "@mui/material/Button";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

const OAuth = () => {
  return (
    <>
      <Button
        variant="outlined"
        size="large"
        startIcon={<FcGoogle size={24} />}
        style={{ color: "black" }}
        onClick={() => signIn("google")}
        fullWidth
      >
        Continue with Google
      </Button>
      <Button
        variant="outlined"
        size="large"
        startIcon={<AiFillGithub size={24} />}
        style={{ color: "black" }}
        onClick={() => signIn("github")}
        fullWidth
      >
        Continue with Github
      </Button>
    </>
  );
};

export default OAuth;
