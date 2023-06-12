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

const RestPassword = () => {
  const { isResetPasswordOpen } = useSelector(
    (state: RootState) => state.modal
  );

  const [inputFields, setInputFields] = useState({
    oldPwd: "",
    newPwd: "",
    newConfirmPwd: "",
  });

  const dispatch = useDispatch();

  const handleOnChange = () => {};

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
          lable={"Old Password"}
          placeholder={"enter your old password"}
          name={"oldPwd"}
          value={inputFields.oldPwd}
          onChange={handleOnChange}
        />

        <PwdInput
          lable={"New Password"}
          placeholder={"enter your new password"}
          name={"newPwd"}
          value={inputFields.newPwd}
          onChange={handleOnChange}
        />

        <PwdInput
          lable={"New Confirm Password"}
          placeholder={"enter your new confirm password"}
          name={"newConfirmPwd"}
          value={inputFields.newConfirmPwd}
          onChange={handleOnChange}
        />

        <LoadingButton
          className={styles.btn}
          loading={false}
          type="submit"
          variant="contained"
          size="large"
          style={{ marginTop: "20px" }}
          fullWidth
        >
          Reset
        </LoadingButton>
      </>
    </ModalWrapper>
  );
};

export default RestPassword;
