"use client";

import ModalWrapper from "./ModalWrapper";
import { closeResetPassword, openLogin } from "@/features/modal/modalSlice";

import { RootState } from "@/features/store";
import { useDispatch, useSelector } from "react-redux";
import PwdInput from "./PwdInput";
import { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import Heading from "./Heading";
import PwdConstrain from "./PwdConstrain";
import { toast } from "react-hot-toast";
import { useMutation } from "react-query";
import { resetPassword } from "@/lib/request";
import { setAuthEmail } from "@/features/auth/authSlice";

const RestPassword = () => {
  const { isResetPasswordOpen } = useSelector(
    (state: RootState) => state.modal
  );
  const { email } = useSelector((state: RootState) => state.auth);

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
    await mutate(
      { pwd, confirmPwd, email },
      {
        onSuccess: (data) => {
          toast.success(data?.message, { style: { minWidth: "450px" } });
          dispatch(closeResetPassword());
          dispatch(openLogin());
        },
        onError: (error: any) => {
          toast.error(error?.message), { style: { minWidth: "450px" } };
        },
        onSettled: () => {
          dispatch(setAuthEmail(""));
        },
      }
    );
  };

  return (
    <ModalWrapper
      openModal={isResetPasswordOpen}
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
          className="mt-4"
          loading={isLoading}
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
