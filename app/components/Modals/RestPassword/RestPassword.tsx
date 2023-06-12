"use client";

import styles from "./styles.module.scss";
import ModalWrapper from "../../ModalWrapper/ModalWrapper";
import { closeResetPassword } from "@/app/features/modal/modalSlice";

import { RootState } from "@/app/store";
import { useDispatch, useSelector } from "react-redux";
import PwdInput from "../../PwdInput/PwdInput";
import { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import Heading from "../../Heading/Heading";
import PwdConstrain from "../../PwdConstrain/PwdConstrain";
import { toast } from "react-hot-toast";
import { useMutation } from "react-query";
import { resetPassword } from "@/app/lib/request";

const RestPassword = () => {
  const { isResetPasswordOpen } = useSelector(
    (state: RootState) => state.modal
  );

  const [inputFields, setInputFields] = useState({
    pwd: "",
    confirmPwd: "",
  });

  const [showPwdConstrain, setShowPwdConstrain] = useState(false);
  const [showConfirmPwdConstrain, setShowConfirmPwdConstrain] = useState(false);
  const [isPwdValid, setIsPwdValid] = useState(false);
  const [isConfirmPwdValid, setIsConfirmPwdValid] = useState(false);

  const dispatch = useDispatch();

  const { mutate, isLoading } = useMutation({ mutationFn: resetPassword });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
    switch (e.target.name) {
      case "pwd":
        setShowPwdConstrain(!isPwdValid);
        break;
      case "confirmPwd":
        setShowConfirmPwdConstrain(!isConfirmPwdValid);
        break;
    }
  };

  const onReset = async (e: React.SyntheticEvent) => {
    const { pwd, confirmPwd } = inputFields;
    if (pwd !== confirmPwd) {
      toast.error("The password and confirm password do not match.", {
        style: { minWidth: "450px" },
      });
    } else {
      await mutate({ pwd, confirmPwd });

      //send request reset_password
      //userId, pwd, confirmPwd
      //login
    }
  };

  return (
    <ModalWrapper
      // openModal={isResetPasswordOpen}
      openModal={true}
      onClose={() => {
        dispatch(closeResetPassword());
      }}
    >
      <>
        <Heading title={"Reset your password"} />

        <PwdInput
          lable={"Password"}
          placeholder={"enter your password"}
          name={"pwd"}
          value={inputFields.pwd}
          onChange={handleOnChange}
          onBlur={() => setShowPwdConstrain(false)}
        />

        <PwdConstrain
          showConstrain={showPwdConstrain}
          password={inputFields.pwd}
          setIsValid={setIsPwdValid}
        />

        <PwdInput
          lable={"Confirm Password"}
          placeholder={"enter your confirm password"}
          name={"confirmPwd"}
          value={inputFields.confirmPwd}
          onChange={handleOnChange}
          onBlur={() => setShowConfirmPwdConstrain(false)}
        />

        <PwdConstrain
          showConstrain={showConfirmPwdConstrain}
          password={inputFields.confirmPwd}
          setIsValid={setIsConfirmPwdValid}
        />

        <LoadingButton
          disabled={!(isPwdValid && isConfirmPwdValid)}
          onClick={onReset}
          className={styles.btn}
          loading={false}
          variant="contained"
          size="large"
          fullWidth
        >
          Reset
        </LoadingButton>
      </>
    </ModalWrapper>
  );
};

export default RestPassword;
