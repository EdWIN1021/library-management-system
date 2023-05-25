import Button from "@mui/material/Button";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const OAuth = () => {
  return (
    <>
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
    </>
  );
};

export default OAuth;
